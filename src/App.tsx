import { motion } from "motion/react";

export default function App() {
  return (
    <>
      <h1>Hello World</h1>

      <motion.div className="h-[100px] w-[100px] bg-red-500" animate={{ x: 100 }}></motion.div>
    </>
  );
}

