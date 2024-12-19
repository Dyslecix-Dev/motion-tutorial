import { motion } from "motion/react";

import Navbar from "../components/Navbar";

export default function Keyframes() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full p-10 flex flex-col items-center justify-center bg-black">
        <motion.div
          // animate values can be turned into arrays to be seen as a series of keyframes.
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1], // times determines how many seconds each keyframe lasts.
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="w-[100px] h-[100px] bg-red-500 rounded-sm"
        />
      </main>
    </>
  );
}
