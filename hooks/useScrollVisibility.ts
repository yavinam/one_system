import { useState, useEffect } from "react";

const useScrollVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPassedHero, setIsPassedHero] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = () => {
      if (isPassedHero) {
        setIsVisible(true);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }
    };

    const handleScroll = () => {
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect();
        const heroHeight = heroElement.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Calculate how much of the hero is visible in the viewport
        const visibleHeight = Math.min(
          Math.max(0, heroRect.bottom),
          Math.max(0, viewportHeight - heroRect.top)
        );

        // Calculate the percentage of hero visibility
        const visibilityPercentage = (visibleHeight / heroHeight) * 100;

        // Show navbar when less than 90% of hero is visible
        // Hide navbar when more than 90% of hero is visible
        setIsPassedHero(visibilityPercentage < 90);
      }
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isPassedHero]);

  return isVisible && isPassedHero;
};

export default useScrollVisibility;
