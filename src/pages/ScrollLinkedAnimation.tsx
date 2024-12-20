import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";

export default function ScrollLinkedAnimation() {
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -1200]);

  return (
    <>
      <Navbar />

      <main className="h-[200vh] w-full p-10 bg-black">
        <motion.div className="h-[20px] fixed top-0 left-0 right-0 bg-blue-500 origin-left z-10" style={{ scaleX: scrollYProgress }} />

        <section className="relative h-full">
          <motion.div className="absolute top-0 left-0 w-full h-full bg-green-500" style={{ y: backgroundY }}>
            <h1 className="text-5xl text-white text-center mt-[40vh]">Parallax Background</h1>
          </motion.div>

          <div className="relative z-10 text-center pt-[60vh]">
            <p className="text-lg text-black">The background moves much slower than the foreground.</p>
          </div>
        </section>
      </main>
    </>
  );
}
