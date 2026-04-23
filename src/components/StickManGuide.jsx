import { motion, useMotionValueEvent, useScroll, useVelocity } from "framer-motion";
import { useRef, useState } from "react";
import "../styles/StickManGuide.css";

const StickManGuide = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useMotionValueEvent(scrollVelocity, "change", (latest) => {
    if (Math.abs(latest) > 50) {
      if (!isScrolling) setIsScrolling(true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    }
  });

  return (
    <div className="stickman-guide-wrapper">
      <motion.svg 
        width="120" 
        height="150" 
        viewBox="0 0 100 150" 
        fill="none" 
        stroke="var(--primary-color)" 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* Head */}
        <circle cx="50" cy="25" r="12" />
        {/* Body */}
        <line x1="50" y1="37" x2="50" y2="85" />
        
        {/* Arms */}
        {isScrolling ? (
          <>
            {/* Running Arms */}
            <motion.path 
              d="M 50 45 Q 20 55 10 30" 
              animate={{ d: ["M 50 45 Q 20 55 10 30", "M 50 45 Q 20 40 30 70", "M 50 45 Q 20 55 10 30"] }}
              transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
            />
            <motion.path 
              d="M 50 45 Q 80 40 70 70" 
              animate={{ d: ["M 50 45 Q 80 40 70 70", "M 50 45 Q 80 55 90 30", "M 50 45 Q 80 40 70 70"] }}
              transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
            />
          </>
        ) : (
          <>
            {/* Idle / Waving & Pointing Arms */}
            <motion.path 
              d="M 50 45 Q 30 40 20 15" 
              animate={{ d: ["M 50 45 Q 30 40 20 15", "M 50 45 Q 20 55 10 35", "M 50 45 Q 30 40 20 15"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path 
              d="M 50 45 Q 70 60 90 45" 
              animate={{ d: ["M 50 45 Q 70 60 90 45", "M 50 45 Q 70 70 95 55", "M 50 45 Q 70 60 90 45"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </>
        )}

        {/* Legs */}
        {isScrolling ? (
          <>
            {/* Running Legs */}
            <motion.path 
              d="M 50 85 Q 20 100 30 140" 
              animate={{ d: ["M 50 85 Q 20 100 30 140", "M 50 85 Q 20 95 10 110", "M 50 85 Q 20 100 30 140"] }}
              transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
            />
            <motion.path 
              d="M 50 85 Q 80 95 90 110" 
              animate={{ d: ["M 50 85 Q 80 95 90 110", "M 50 85 Q 80 100 70 140", "M 50 85 Q 80 95 90 110"] }}
              transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
            />
          </>
        ) : (
          <>
            {/* Idle Legs */}
            <line x1="50" y1="85" x2="30" y2="135" />
            <line x1="50" y1="85" x2="70" y2="135" />
          </>
        )}
      </motion.svg>
    </div>
  );
};

export default StickManGuide;
