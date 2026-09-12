import { useEffect } from "react";
import buttonClickSound from "../assets/button-click.wav";

const GlobalButtonSound = () => {
  useEffect(() => {
    const audio = new Audio(buttonClickSound);
    audio.preload = "auto";

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Only play for actual buttons or clickable elements
      const clickable = target.closest(
        "button, a, [role='button'], input[type='button'], input[type='submit']"
      );

      if (!clickable) return;

      // Create a fresh audio instance so rapid clicks can still play
      const sound = audio.cloneNode(true) as HTMLAudioElement;

      sound.currentTime = 0;
      sound.volume = 0.5;

      sound.play().catch(() => {
        // Browser may block audio until user interaction.
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default GlobalButtonSound;

