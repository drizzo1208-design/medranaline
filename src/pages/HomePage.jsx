import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CountdownTimer from "../components/CountdownTimer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Stethoscope,
  Brain,
  Users,
  ScrollText,
  Sparkles,
  Hotel,
} from "lucide-react";
import medPulseIcon from "../assets/medlogo-yellow.png";

// Sponsor Images
import SponsorApollo from "@/assets/sponsors/Apollo-Children-Sponsor.jpg";
import SponsorADR from "@/assets/sponsors/Sponsor-ADR.png";
import SponsorBB from "@/assets/sponsors/Sponsor-3B.jpg";
import SponsorBOHR from "@/assets/sponsors/Sponsor-BOHR.png";
import SponsorCerebellum from "@/assets/sponsors/Sponsor-Cerebellum.png";
import SponsorDBMC from "@/assets/sponsors/Sponsor-DBMCI.jpg";
import SponsorGhosh from "@/assets/sponsors/Sponsor-GHOSH.png";
import SponsorJaypee from "@/assets/sponsors/Sponsor-Jaypee.png";
import SponsorKH from "@/assets/sponsors/Sponsor-KH.jpg";
import SponsorKN from "@/assets/sponsors/Sponsor-KN.png";
import SponsorLanguage from "@/assets/sponsors/Sponsor-Language.png";
import SponsorMarrow from "@/assets/sponsors/Sponsor-Marrow.png";

const HomePage = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: Stethoscope,
      title: "Workshops",
      subtitle: "Hands-on quests and skill power-ups.",
      path: "/workshops",
      color: "text-cyan-300",
    },
    {
      icon: Brain,
      title: "Quiz",
      subtitle: "Compete for the top leaderboard score.",
      path: "/quiz",
      color: "text-fuchsia-300",
    },
    {
      icon: Users,
      title: "Presentation",
      subtitle: "Case and research showcase arena.",
      path: "/other-events",
      color: "text-emerald-300",
    },
    {
      icon: Sparkles,
      title: "Symposium",
      subtitle: "Story-driven talks and themed sessions.",
      path: "/other-events",
      color: "text-yellow-300",
    },
    {
      icon: ScrollText,
      title: "Literary Events",
      subtitle: "Debate rounds and verbal battles.",
      path: "/other-events",
      color: "text-orange-300",
    },
    {
      icon: Hotel,
      title: "Food + Accommodation",
      subtitle: "Fuel, stay and continue the run.",
      path: "/accommodation",
      color: "text-violet-300",
    },
  ];

  const sponsors = [
    SponsorApollo,
    SponsorADR,
    SponsorBB,
    SponsorBOHR,
    SponsorCerebellum,
    SponsorDBMC,
    SponsorGhosh,
    SponsorJaypee,
    SponsorKH,
    SponsorKN,
    SponsorLanguage,
    SponsorMarrow,
  ];

  return (
    <div className="sonic-bg min-h-screen text-slate-100">

      {/* Navigation */}
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-8">
        <div className="relative z-10 text-center container mx-auto px-4 max-w-6xl">

          {/* Gold Bezel */}
          <div className="gold-bezel inline-block px-5 py-4 sm:px-8 sm:py-6 mb-6 rounded-lg">
            <div className="flex items-center justify-center gap-3">

              {/* Left wing */}
              {/*
              <div
                className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 transform -skew-x-12 rounded-md"
                style={{
                  clipPath:
                    "polygon(0 50%, 50% 0, 100% 50%, 50% 100%)",
                }}
              />
              */}

              {/* Center logo */}
              {/*
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center border-4 border-yellow-300 shadow-xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center border-2 border-white">
                  <span
                    className="text-2xl font-bold text-white"
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                    }}
                  >
                    A
                  </span>
                </div>
              </div>
              */}

              {/* Right wing */}
              {/*
              <div
                className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 transform skew-x-12 rounded-md"
                style={{
                  clipPath:
                    "polygon(0 50%, 50% 0, 100% 50%, 50% 100%)",
                }}
              />
              */}

            </div>
          </div>

          {/* ========================================= */}
          {/* MEDRENALINE LOGO + TITLE */}
          {/* ========================================= */}

          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-4">

            {/* Medrenaline Logo */}
            <img
              src={medPulseIcon}
              alt="Medrenaline Logo"
              className="
                w-12 h-12
                sm:w-14 sm:h-14
                md:w-16 md:h-16
                object-contain
                flex-shrink-0
              "
            />

            {/* MEDRENALINE Title */}
            <h1
              className="
                text-[8vw]
                sm:text-4xl
                md:text-6xl
                font-bold
                pixel-glow-text
                text-yellow-300
                whitespace-nowrap
              "
              style={{
                fontFamily: "'Press Start 2P', cursive",
              }}
            >
              MEDRENALINE
            </h1>

          </div>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-2xl md:text-4xl mb-6 max-w-2xl mx-auto text-cyan-100"
            style={{
              fontFamily: "'VT323', monospace",
            }}
          >
            Dive into a pixel universe of workshops, quizzes, presentations,
            symposiums, and literary arenas.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              className="retro-cta"
              onClick={() => navigate("/events")}
            >
              Register Now
            </Button>
          </div>

        </div>
      </section>

      {/* Countdown */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <CountdownTimer />
        </div>
      </section>

      {/* About Medrenaline */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">

            <div className="retro-panel p-5 sm:p-8 md:p-10">

              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300"
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                }}
              >
                About Medrenaline 2026
              </h2>

              <p
                className="text-lg sm:text-xl md:text-3xl mb-4 sm:mb-6 leading-relaxed text-slate-100"
                style={{
                  fontFamily: "'VT323', monospace",
                }}
              >
                Medrenaline is one of the premier national academic festivals
                that brings together future medical leaders from across the
                country to immerse themselves in clinical excellence and
                discovery.
              </p>

              <p
                className="text-lg sm:text-xl md:text-3xl mb-4 sm:mb-6 leading-relaxed text-slate-100"
                style={{
                  fontFamily: "'VT323', monospace",
                }}
              >
                Established in 2009, Medrenaline serves as a launchpad for
                aspiring researchers and an arena for sharp quizzing minds,
                growing into one of India’s most respected medical fests.
              </p>

              <p
                className="text-lg sm:text-xl md:text-3xl leading-relaxed text-slate-100"
                style={{
                  fontFamily: "'VT323', monospace",
                }}
              >
                Now in its landmark 13th edition, the festival features an
                incredible line-up including dazzling medical workshops, high
                staking quizzes, debates and case and research paper
                presentations over years.
              </p>

              <p
                className="text-lg sm:text-xl md:text-3xl leading-relaxed text-slate-100"
                style={{
                  fontFamily: "'VT323', monospace",
                }}
              >
                Ignite your intellects into Medrenaline ’26 and elevate your
                medical knowledge to the next level.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* About KMC */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">

          <div className="max-w-6xl mx-auto retro-panel overflow-hidden">

            <div className="p-5 sm:p-8 md:p-10 text-slate-100">

              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300"
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                }}
              >
                About KMC
              </h2>

              <p
                className="text-lg sm:text-xl md:text-3xl mb-4 sm:mb-6 leading-relaxed text-slate-100"
                style={{
                  fontFamily: "'VT323', monospace",
                }}
              >
                Founded in 1925 as the School of Indian Medicine, the
                institution transitioned to modern medicine in 1960, swiftly
                establishing itself as a distinguished centre for medical
                education in the heart of the city.
              </p>

              <p
                className="text-lg sm:text-xl md:text-3xl leading-relaxed text-slate-100"
                style={{
                  fontFamily: "'VT323', monospace",
                }}
              >
                Today, Government Kilpauk Medical College stands among the
                nation’s top medical institutions. With a legacy exceeding six
                decades, GKMC has cultivated generations of skilled
                professionals driving major medical advancements worldwide,
                while maintaining an unwavering commitment to holistic,
                student-centred education. Its legacy extends far beyond the
                realms of medicine. Across generations, KMCIans have excelled
                themselves in academics, arts, sports, and literature—embodying
                a culture of excellence that continues to define the
                institution.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-300"
            style={{
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            Our Sponsors
          </h2>

          <div className="overflow-hidden">

            <div className="flex animate-scroll-x">

              {sponsors.concat(sponsors).map((sponsorUrl, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6"
                >
                  <Card
                    className="
                      w-40
                      h-40
                      flex
                      items-center
                      justify-center
                      bg-slate-950/95
                      shadow-md
                      overflow-hidden
                      hover:scale-105
                      transition-transform
                      duration-300
                      border-4
                      border-yellow-400
                    "
                  >
                    <img
                      src={sponsorUrl}
                      alt={`Sponsor Logo ${index + 1}`}
                      className="
                        max-w-full
                        max-h-full
                        object-contain
                        p-2
                        retro-pixel-image
                      "
                    />
                  </Card>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">

          <h2
            className="text-3xl font-bold text-center mb-8 text-yellow-300"
            style={{
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            Find Us
          </h2>

          <div
            className="
              overflow-hidden
              shadow-lg
              max-w-5xl
              mx-auto
              transform
              transition
              duration-500
              hover:scale-[1.02]
              border-8
              border-yellow-400
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.471927933441!2d80.2350!3d13.0722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ff5c6ff8cf%3A0x1fbb6bc6fb1df5!2sKilpauk%20Medical%20College!5e0!3m2!1sen!2sin!4v1699999999999"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
