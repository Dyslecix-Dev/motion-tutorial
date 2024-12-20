import { useState } from "react";

import { motion } from "motion/react";

import Navbar from "../components/Navbar";

export default function Layout() {
  const [isOn, setIsOn] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full p-10 flex flex-col items-center justify-evenly bg-black">
        <div onClick={() => setIsOn(!isOn)} className={`w-40 h-20 px-4 flex ${isOn ? "justify-end" : "justify-start"} items-center bg-purple-500 rounded-full cursor-pointer`}>
          <motion.div
            layout // Allows previous non-animatable CSS values to be animatable (e.g. parent div's justify-end to justify-start).
            transition={{
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
            }}
            className="w-16 h-16 bg-purple-200 rounded-full"
          />
        </div>

        <div className="flex gap-8">
          <motion.div
            onClick={() => setSelectedId(selectedId === "card1" ? null : "card1")}
            className={`w-24 h-24 rounded-lg cursor-pointer flex items-center justify-center ${selectedId === "card1" ? "bg-purple-500" : "bg-purple-200"}`}
          >
            {(selectedId === "card1" || selectedId === null) && (
              <motion.div
                layoutId="shared-element" // Animates this div between other components with a layoutId of "shared-element".
                className="w-12 h-12 bg-white rounded-full"
              />
            )}
          </motion.div>

          <motion.div
            onClick={() => setSelectedId(selectedId === "card2" ? null : "card2")}
            className={`w-24 h-24 rounded-lg cursor-pointer flex items-center justify-center ${selectedId === "card2" ? "bg-purple-500" : "bg-purple-200"}`}
          >
            {selectedId === "card2" && <motion.div layoutId="shared-element" className="w-12 h-12 bg-white rounded-full" />}
          </motion.div>

          <motion.div
            onClick={() => setSelectedId(selectedId === "card3" ? null : "card3")}
            className={`w-24 h-24 rounded-lg cursor-pointer flex items-center justify-center ${selectedId === "card3" ? "bg-purple-500" : "bg-purple-200"}`}
          >
            {selectedId === "card3" && <motion.div layoutId="shared-element" className="w-12 h-12 bg-white rounded-full" />}
          </motion.div>
        </div>
      </main>
    </>
  );
}
