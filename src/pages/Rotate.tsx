import { motion } from "motion/react";

import Navbar from "../components/Navbar";

export default function Rotate() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full p-10 flex flex-col items-center justify-center bg-black">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} className="w-24 h-24 bg-yellow-600 rounded-sm" />
      </main>
    </>
  );
}
