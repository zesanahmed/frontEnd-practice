import { motion, useScroll } from "motion/react";
import { useRef } from "react";

const BabyFashion = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.2 1"],
  });
  return (
    <motion.div
      style={{ scale: scrollYProgress }}
      className="bg-slate h-[415px] rounded-md col-span-12"
      ref={componentRef}
    ></motion.div>
  );
};

export default BabyFashion;
