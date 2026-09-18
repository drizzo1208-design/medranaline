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

      // Event has started
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
        days: Math.floor(
          distance / (1000 * 60 * 60 * 24)
        ),

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

    // Calculate immediately when page loads
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeBox: React.FC<TimeBoxProps> = ({
    value,
    label,
  }) => (
    <div className="pixel-countdown-box p-6 rounded-lg text-center min-w-[120px]">
      <div
        className="text-5xl md:text-6xl font-bold text-cyan-300 mb-2"
        style={{
          fontFamily: "'Press Start 2P', cursive",
          letterSpacing: "4px",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>

      <div
        className="text-lg md:text-xl text-yellow-200 uppercase tracking-wider"
        style={{
          fontFamily: "'Press Start 2P', cursive",
          fontSize: "10px",
        }}
      >
        {label}
      </div>
    </div>
  );

  return (
    <div className="retro-panel p-8 md:p-12">
      <h2
        className="text-2xl md:text-3xl font-bold text-center text-yellow-300 mb-8"
        style={{
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        EVENT STARTS IN
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <TimeBox
          value={timeLeft.days}
          label="DAYS"
        />

        <TimeBox
          value={timeLeft.hours}
          label="HOURS"
        />

        <TimeBox
          value={timeLeft.minutes}
          label="MINUTES"
        />

        <TimeBox
          value={timeLeft.seconds}
          label="SECONDS"
        />
      </div>
    </div>
  );
};

export default CountdownTimer;