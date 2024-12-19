import { useState } from "react";

import { AnimatePresence, motion, useScroll } from "motion/react";

import Navbar from "./components/Navbar";

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [show, setShow] = useState(true);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full p-10 flex flex-col items-center justify-center bg-black">
        {/* Basic Usage */}
        <motion.div
          className="h-[100px] w-[100px] mb-40 bg-red-500 rounded-md"
          animate={{
            x: 100,
            scale: 1.5,
            transition: { duration: 2 },
          }}
        />

        {/* Enter Animation */}
        <motion.div
          className="h-[100px] w-[100px] mb-40 bg-orange-500 rounded-md"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 100,
            scale: 1,
            transition: { duration: 1 },
          }}
        />

        {/* Gesture */}
        <motion.div
          className="h-[100px] w-[100px] mb-40 bg-yellow-500 rounded-md cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
        />

        {/* Scroll-triggered Animation */}
        <motion.div className="h-[100px] w-[100px] mb-40 rounded-md" initial={{ backgroundColor: "rgb(255, 0, 0)" }} whileInView={{ backgroundColor: "rgb(0, 255, 0)", transition: { duration: 3 } }} />

        {/* Scroll-linked Animation */}
        <motion.div className="h-[15px] fixed top-0 left-0 right-0 bg-blue-500 origin-left" style={{ scaleX: scrollYProgress }} />

        {/* Layout Animation */}
        <motion.div layout className={`${isExpanded ? "h-[200px] w-[200px]" : "h-[100px] w-[100px]"} mb-40 bg-purple-500 rounded-md cursor-pointer`} onClick={() => setIsExpanded(!isExpanded)} />

        {/* Exit Animation */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <button className={`w-20 ${show ? "bg-white text-black" : "bg-black text-white"} rounded-full border  border-white transition transition-500`} onClick={() => setShow(!show)}>
            {show ? "Show" : "Hide"}
          </button>

          <AnimatePresence>
            {show ? (
              <motion.div className="h-[100px] w-[100px] mb-40 bg-white rounded-md" exit={{ opacity: 0, scale: 1.1 }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} />
            ) : null}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}

