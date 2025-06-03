import useScrollGrow from "@/hooks/scrollGrow";
import { motion } from "motion/react";

const BoyFashion = () => {
  const { componentRef, style } = useScrollGrow();
  return (
    <motion.div
      className="bg-slate h-[415px] rounded-md col-span-6 lg:col-span-5"
      ref={componentRef}
      style={style}
    ></motion.div>
  );
};

export default BoyFashion;
