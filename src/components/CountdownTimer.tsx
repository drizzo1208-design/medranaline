import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeBoxProps {
  value: number;
  label: string;
}

const CountdownTimer: React.FC = () => {
  // Medrenaline 2026
  // 8 October 2026, 9:00 AM IST
  const targetDate = new Date("2026-10-08T09:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),

        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),

        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),

        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeBox: React.FC<TimeBoxProps> = ({ value, label }) => (
    <div
      className="
        pixel-countdown-box
        rounded-lg
        text-center
        flex
        flex-col
        items-center
        justify-center
        px-1
        py-4
        sm:p-6
        min-w-0
      "
    >
      <div
        className="
          text-xl
          sm:text-3xl
          md:text-5xl
          lg:text-6xl
          font-bold
          text-cyan-300
          mb-2
        "
        style={{
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>

      <div
        className="
          text-yellow-200
          uppercase
          tracking-wide
          whitespace-nowrap
        "
        style={{
          fontFamily: "'Press Start 2P', cursive",
          fontSize: "clamp(6px, 1.6vw, 10px)",
        }}
      >
        {label}
      </div>
    </div>
  );

  return (
    <div className="retro-panel px-3 py-6 sm:p-8 md:p-12">
      <h2
        className="
          text-lg
          sm:text-2xl
          md:text-3xl
          font-bold
          text-center
          text-yellow-300
          mb-6
          md:mb-8
        "
        style={{
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        EVENT STARTS IN
      </h2>

      {/* Always 4 boxes in one horizontal line */}
      <div
        className="
          grid
          grid-cols-4
          gap-2
          sm:gap-4
          md:gap-6
          max-w-4xl
          mx-auto
          w-full
        "
      >
        <TimeBox value={timeLeft.days} label="DAYS" />
        <TimeBox value={timeLeft.hours} label="HOURS" />
        <TimeBox value={timeLeft.minutes} label="MINUTES" />
        <TimeBox value={timeLeft.seconds} label="SECONDS" />
      </div>
    </div>
  );
};

export default CountdownTimer;