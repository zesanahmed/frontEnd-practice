import Container from "@/components/Container";
import kidCollections from "@/assets/images (1).jpeg";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const intro = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delayChildren: 0.5, staggerChildren: 0.2 },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 },
  },
};

const kidsImg = {
  hidden: { y: 0, rotate: 0, opacity: 0, scale: 0.4 },
  show: {
    y: 20,
    rotate: -30,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center px-2">
        <motion.div
          variants={intro}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.h1
            variants={introChildren}
            className="text-4xl lg:text-6xl font-bold"
          >
            <span className="text-light-slate">Trendy Summer</span>
            <br />
            <span className="text-dark-slate">Kid Collections</span>
          </motion.h1>
          <motion.p
            variants={introChildren}
            className="text-dark-slate max-w-[25ch] mt-10 mb-5 text-lg"
          >
            Free international shipping on orders over{" "}
            <span className="font-semibold">$199</span>
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center mt-12 lg:mt-0"
          variants={kidsImg}
          initial="hidden"
          animate="show"
        >
          <img className="lg:w-[350px] " src={kidCollections} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
