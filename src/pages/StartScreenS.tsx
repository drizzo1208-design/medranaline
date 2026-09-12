import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import medrenalineBg from "../assets/medrenaline-bg.png";
import medPulseIcon from "../assets/medlogo-yellow.png";
import "./StartScreenS.css";

const StartScreenS: React.FC = () => {
  const navigate = useNavigate();

  const [transitioning, setTransitioning] = useState(false);

  const handleStart = (): void => {
    if (transitioning) return;

    setTransitioning(true);

    // Allow the peeling transition to complete
    setTimeout(() => {
      navigate("/home");
    }, 1200);
  };

  return (
    <div className="start-screen">

      {/* ============================================== */}
      {/* BACKGROUND IMAGE                               */}
      {/* ============================================== */}

      <div className="intro-screen">

        <img
          src={medrenalineBg}
          alt="Medrenaline 2026"
          className="intro-background"
        />

        {/* Dark overlay */}
        <div className="intro-overlay" />

        {/* ============================================ */}
        {/* MAIN CONTENT                                 */}
        {/* ============================================ */}

        <div className="intro-content">

          {/* Title */}
          <div className="intro-title-row">
            <img
              src={medPulseIcon}
              alt=""
              className="intro-title-icon"
            />
            <h1
              className="intro-title"
              style={{
                fontFamily: "'Press Start 2P', cursive",
              }}
            >
              MEDRENALINE
            </h1>
          </div>

          <div
            className="intro-year"
            style={{
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            2026
          </div>

          {/* ========================================== */}
          {/* MESSAGE BOX                                */}
          {/* ========================================== */}

          <div className="intro-message-box">

            <p
              style={{
                fontFamily: "'VT323', monospace",
              }}
            >
              HOPE YOU GOT ENOUGH ADRENALINE
              FOR <span>FOUR DAYS</span> OF
              <br />
              INNOVATION, EXCELLENCE, AND
              <br />
              CELEBRATION AT{" "}
              <span>GOVT. KILPAUK</span>
              <br />
              <span>MEDICAL COLLEGE.</span>
            </p>

          </div>

          {/* ========================================== */}
          {/* START BUTTON                               */}
          {/* ========================================== */}

          <Button
            onClick={handleStart}
            className="intro-start-button"
            disabled={transitioning}
          >
            START
          </Button>

          {/* ========================================== */}
          {/* RUSH MESSAGE                               */}
          {/* ========================================== */}

          <p
            className="intro-rush"
            style={{
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            FEEL THE RUSH
          </p>

        </div>

        {/* ============================================== */}
        {/* PEELING / PIXEL TRANSITION                     */}
        {/* ============================================== */}

        {transitioning && (
          <div className="pixel-transition">

            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />

          </div>
        )}

      </div>

    </div>
  );
};

export default StartScreenS;
