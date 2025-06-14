import useScrollGrow from "@/hooks/scrollGrow";
import { motion } from "motion/react";

const BabyFashion = () => {
  const { componentRef, style } = useScrollGrow();
  return (
    <motion.div
      className="bg-slate h-[415px] rounded-md col-span-12"
      ref={componentRef}
      style={style}
    ></motion.div>
  );
};

export default BabyFashion;
