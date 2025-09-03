"use client";

import { useEffect, useState } from "react";
import Contents from "./_components/Contents";
import MotionBoxes from "./_components/MotionBoxes";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showText, setShowText] = useState(true);

  const text = "Welcome To Taskino";
  const letters = text.split("");

  const stagger = 0.2;
  const holdTime = 0.7;
  const exitStagger = 0.2;

  const totalTime =
    letters.length * stagger + holdTime + letters.length * exitStagger;

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntro");

    if (hasSeenIntro) {
      setIsLoading(false);
      setShowText(false);
    } else {
      const timer = setTimeout(() => {
        setShowText(false);
      }, (letters.length * stagger + holdTime) * 1000);

      const finalTimer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("hasSeenIntro", "true");
      }, totalTime * 1000);

      return () => {
        clearTimeout(timer);
        clearTimeout(finalTimer);
      };
    }
  }, [letters.length, stagger, holdTime, totalTime]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  const letterVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <>
      {isLoading ? (
        <AnimatePresence>
          {showText && (
            <motion.div
              dir="ltr"
              className="fixed inset-0 bg-gradient-to-l from-[#073362] to-[#012fa3] flex items-center justify-center z-50"
              variants={container}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 2, delay: 3 } }}
            >
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-[#E5E5E5] PoppinsExtra md:text-7xl text-2xl font-black"
                  variants={letterVariant}
                  exit={{
                    opacity: 0,
                    x: -20,
                    transition: { delay: i * exitStagger },
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <div className="w-full flex flex-col items-center relative overflow-hidden">
          <Contents />
          <MotionBoxes />
        </div>
      )}
    </>
  );
}