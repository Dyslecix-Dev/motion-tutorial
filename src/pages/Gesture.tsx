import { motion } from "motion/react";

import Navbar from "../components/Navbar";

export default function Gesture() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full p-10 flex flex-col items-center justify-center bg-black">
        <motion.div
          whileHover={{ scale: 1.5 }} // Adds animation(s) when this element is being hovered over.
          onHoverStart={() => console.log("Hovering started")} // Fires a callback function when this element is initially hovered over.
          onHoverEnd={() => console.log("Hovering ended")} // Fires a callback function when this element is no longer hovered over.
          whileTap={{ scale: 0.5 }} // Adds animation(s) when this element is clicked on.
          className={`w-[100px] h-[100px] bg-red-500 rounded-md cursor-pointer`}
        />
      </main>
    </>
  );
}
