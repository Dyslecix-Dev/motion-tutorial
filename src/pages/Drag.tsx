import { useState, useRef } from "react";

import { motion } from "motion/react";

import Navbar from "../components/Navbar";

export default function Drag() {
  const [isMouseUp, setIsMouseUp] = useState(true);

  const dragConstraintsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full p-10 flex flex-col items-center justify-center bg-black">
        <motion.div ref={dragConstraintsRef} className="drag-area w-[300px] h-[300px] bg-red-300">
          <motion.div
            drag // Enables dragging for this element.
            whileDrag={{ scale: 1.5 }} // Adds animation(s) when this element is being dragged.
            dragConstraints={dragConstraintsRef} // Sets constraints where this element can be dragged.
            onDrag={() => console.log("Dragging...")} // Fires a callback function while this element is being dragged.
            onDragStart={() => console.log("Dragging started")} // Fires a callback function when this element starts being dragged.
            onDragEnd={() => console.log("Dragging ended")} // Fires a callback function when this element stops being dragged.
            onMouseDown={() => setIsMouseUp(false)}
            onMouseUp={() => setIsMouseUp(true)}
            onMouseLeave={() => setIsMouseUp(true)}
            className={`w-[100px] h-[100px] bg-red-500 rounded-md ${isMouseUp ? "cursor-grab" : "cursor-grabbing"}`}
          />
        </motion.div>
      </main>
    </>
  );
}
