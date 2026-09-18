import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./quiz.css";

// Import event images
import casePresentationImg from "@/assets/other_events/CasePresentation-OtherEvents.png";
import medicalDebateImg from "@/assets/other_events/MedicalDebate-OtherEvents.png";
import researchPaperImg from "@/assets/other_events/ResearchPaper-OtherEvents.png";
import researchProtocolImg from "@/assets/other_events/ResearchProtocol-OtherEvents.png";
import symposiumImg from "@/assets/other_events/Symposium-OtherEvents.png";

// =========================================
// TypeScript Interfaces
// =========================================

interface Incharge {
  name: string;
  phone: string;
}

interface RegistrationFees {
  [key: string]: string | number;
}

interface EventData {
  title: string;
  date?: string;
  time?: string;
  venue?: string;
  rules?: string[];
  abstract_rules?: string[];
  presentation_rules?: string[];
  registration_fees?: RegistrationFees;
  incharges?: Incharge[];
  registrationLink?: string;
}

interface EventCardProps {
  event: EventData;
}

// =========================================
// Main Component
// =========================================

const OtherEventsPage: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selectedEvent, setSelectedEvent] =
    useState<EventData | null>(null);

  // =========================================
  // Fetch Events
  // =========================================

  useEffect(() => {
    const fetchEvents = async (): Promise<void> => {
      try {
        const res = await fetch("/otherEvents.json");

        if (!res.ok) {
          throw new Error(
            `HTTP error! status: ${res.status}`
          );
        }

        const data = await res.json();

        setEvents(data.events || []);
      } catch (error) {
        console.error(
          "Failed to load events:",
          error
        );
      }
    };

    fetchEvents();
  }, []);

  // =========================================
  // Event Card
  // =========================================

  const EventCard: React.FC<EventCardProps> = ({
    event,
  }) => {
    const titleParts = event.title.split(" - ");

    const mainTitle =
      titleParts[0] || event.title;

    const subTitle =
      titleParts.length > 1
        ? titleParts.slice(1).join(" - ")
        : "";

    // =========================================
    // Select Event Image
    // =========================================

    const getEventImage = (): string => {
  const upperCaseTitle = event.title.toUpperCase();

  // CASE PRESENTATIONS
  if (upperCaseTitle.includes("CASE PRESENTATION")) {
    return casePresentationImg;
  }

  // MEDICAL DEBATE
  if (upperCaseTitle.includes("MEDICAL DEBATE")) {
    return medicalDebateImg;
  }

  // RESEARCH PAPER PRESENTATION
  if (upperCaseTitle.includes("RESEARCH PAPER")) {
    return researchPaperImg;
  }

  // RESEARCH PROTOCOL PRESENTATION
  if (upperCaseTitle.includes("RESEARCH PROTOCOL")) {
    return researchProtocolImg;
  }

  // SYMPOSIUM
  if (upperCaseTitle.includes("SYMPOSIA CHRONICLES")) {
    return symposiumImg;
  }

  return "/placeholder.svg";
};



    return (
      <div
        onClick={() =>
          setSelectedEvent(event)
        }
        className="
          retro-event-card
          relative
          overflow-hidden
          w-full
          max-w-[320px]
          h-[380px]
          transform
          transition
          duration-300
          hover:scale-105
          cursor-pointer
          rounded-md
          border-4
          border-slate-700
          shadow-2xl
          bg-[#1e1e3a]
        "
      >
        {/* =====================================
            Event Image
            ===================================== */}

        <img
          src={getEventImage()}
          alt={event.title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            retro-pixel-image
            opacity-50
          "
        />

        {/* =====================================
            Image Overlay + Title
            ===================================== */}

        <div
          className="
            absolute
            inset-0
            bg-black/40
            flex
            flex-col
            justify-center
            items-center
            p-6
            text-center
          "
        >
          <div className="w-full">
            <h2
              className="
                text-white
                uppercase
                drop-shadow-lg
                leading-relaxed
              "
              style={{
                fontFamily:
                  "'Press Start 2P', cursive",
                fontSize: "14px",
              }}
            >
              {mainTitle}
            </h2>

            {subTitle && (
              <p
                className="
                  text-xl
                  text-gray-200
                  drop-shadow-lg
                  mt-3
                "
                style={{
                  fontFamily:
                    "'VT323', monospace",
                }}
              >
                {subTitle}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  // =========================================
  // Render Page
  // =========================================

  return (
    <div className="sonic-bg min-h-screen text-slate-100 relative">

      {/* =====================================
          Navigation
          ===================================== */}

      <div className="relative z-[2000]">
        <Navigation />
      </div>

      {/* =====================================
          Particle Background
          ===================================== */}

      <div
        className="
          fixed
          inset-0
          z-[-10]
          pointer-events-none
        "
      >
        <ParticlesBackground />
      </div>

      {/* =====================================
          Main Content
          ===================================== */}

      <main className="relative z-[100]">

        {/* ===================================
            Page Header
            =================================== */}

        <section
          className="
            pt-28
            pb-10
            text-center
            px-4
          "
        >
          <h1
            className="
              text-3xl
              md:text-5xl
              font-bold
              mb-4
              tracking-wide
              pixel-glow-text
              text-yellow-300
            "
            style={{
              fontFamily:
                "'Press Start 2P', cursive",
            }}
          >
            Presentation and Debate Hub
          </h1>

          <p
            className="
              text-2xl
              max-w-2xl
              mx-auto
              text-cyan-100
            "
            style={{
              fontFamily:
                "'VT323', monospace",
            }}
          >
            Choose a card to reveal details
            and jump into registration.
          </p>
        </section>

        {/* ===================================
            Event Cards
            =================================== */}

        <section
          className="
            container
            mx-auto
            pt-4
            pb-24
            px-6
          "
        >
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-8
              justify-items-center
            "
          >
            {events.map((event, idx) => (
              <EventCard
                key={`${event.title}-${idx}`}
                event={event}
              />
            ))}
          </div>
        </section>
      </main>

      {/* =====================================
          Event Details Modal
          ===================================== */}

      {selectedEvent && (
        <div
          className="
            quiz-overlay
            fixed
            inset-0
            z-[9999]
          "
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="other-events-modal"
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
          >
            {/* Modal Title */}
            <h2
              className="quiz-title"
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: "16px",
              }}
            >
              {selectedEvent.title}
            </h2>

            {/* Event Information */}
            <div
              className="
                my-4
                text-xl
                space-y-1
              "
              style={{
                fontFamily: "'VT323', monospace",
              }}
            >
              {selectedEvent.date && (
                <p className="quiz-meta text-cyan-300">
                  📅 {selectedEvent.date}
                </p>
              )}

              {selectedEvent.time && (
                <p className="quiz-meta text-fuchsia-300">
                  🕒 {selectedEvent.time}
                </p>
              )}

              {selectedEvent.venue && (
                <p className="quiz-meta text-emerald-300">
                  📍 {selectedEvent.venue}
                </p>
              )}
            </div>

            {/* Event Details
                No separate scrollbar here.
                The entire popup scrolls. */}
            <div
              className="
                space-y-4
                text-lg
              "
              style={{
                fontFamily: "'VT323', monospace",
              }}
            >
              {/* Rules */}
              {selectedEvent.rules &&
                selectedEvent.rules.length > 0 && (
                  <div>
                    <h3 className="text-yellow-300 font-bold">
                      Rules
                    </h3>

                    <ul className="list-disc pl-5">
                      {selectedEvent.rules.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Abstract Submission Rules */}
              {selectedEvent.abstract_rules &&
                selectedEvent.abstract_rules.length > 0 && (
                  <div>
                    <h3 className="text-yellow-300 font-bold">
                      Abstract Submission Rules
                    </h3>

                    <ul className="list-disc pl-5">
                      {selectedEvent.abstract_rules.map(
                        (item, i) => (
                          <li key={i}>{item}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

              {/* Presentation Rules */}
              {selectedEvent.presentation_rules &&
                selectedEvent.presentation_rules.length > 0 && (
                  <div>
                    <h3 className="text-yellow-300 font-bold">
                      Presentation Rules
                    </h3>

                    <ul className="list-disc pl-5">
                      {selectedEvent.presentation_rules.map(
                        (item, i) => (
                          <li key={i}>{item}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

              {/* Registration Fees */}
              {selectedEvent.registration_fees &&
                Object.keys(
                  selectedEvent.registration_fees
                ).length > 0 && (
                  <div>
                    <h3 className="text-yellow-300 font-bold">
                      Registration Fees
                    </h3>

                    <ul className="list-disc pl-5">
                      {Object.entries(
                        selectedEvent.registration_fees
                      ).map(([key, value]) => (
                        <li key={key}>
                          <strong className="capitalize">
                            {key.replace(/_/g, " ")}:
                          </strong>{" "}
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Incharges */}
              {selectedEvent.incharges &&
                selectedEvent.incharges.length > 0 && (
                  <div>
                    <h3 className="text-yellow-300 font-bold">
                      Incharges
                    </h3>

                    <ul className="list-disc pl-5">
                      {selectedEvent.incharges.map(
                        (c, i) => (
                          <li key={i}>
                            {c.name} - {c.phone}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
            </div>

            {/* Buttons */}
            <div
              className="
                quiz-buttons
                mt-6
                flex
                justify-end
                gap-3
                text-xl
              "
              style={{
                fontFamily: "'VT323', monospace",
              }}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="
                  px-4
                  py-2
                  border
                  border-slate-600
                  rounded-md
                  text-slate-300
                  hover:bg-slate-800
                  transition-colors
                "
              >
                Close
              </button>

              {selectedEvent.registrationLink && (
                <a
                  href={selectedEvent.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-4
                    py-2
                    bg-blue-600
                    text-white
                    rounded-md
                    inline-block
                    text-center
                    hover:bg-blue-700
                    transition-colors
                  "
                >
                  Register Now
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =====================================
          Footer
          ===================================== */}

      <Footer />
    </div>
  );
};

export default OtherEventsPage;
