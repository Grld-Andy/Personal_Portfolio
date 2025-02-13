import React from "react";
import Lottie from "react-lottie";
import webDev from "../../../assets/lotties/computers_and_phone.json";
import BlurText from "../../ui/BlurText/BlurText";
import { motion } from "framer-motion";

const Hero1: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: webDev,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <section
        id="intro"
        className="relative grid grid-cols-[repeat(2,1fr)] items-center h-[calc(100vh-130px)] bg-white text-black px-5"
      >
        <div className="flex flex-col gap-10 items-center">
          <div className="flex font-bold text-5xl">
            <BlurText
              text="Hi, I'm Andy "
              delay={150}
              animateBy="words"
              direction="top"
            />
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: [0, 1, 1, 1],
                rotate: [0, 0, 45, 0],
                x: [0, 0, -10, 0],
              }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              👋
            </motion.span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-[#333] text-[18px]"
          >
            <p className="">
              Just another{" "}
              <span className="font-bold text-blue-500">
                computer science student.
              </span>
              <br />
              Currently in School🎓
            </p>
            <p>Welcome to my portfolio.</p>
          </motion.div>
        </div>
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <Lottie options={defaultOptions} height={400} width={400} />
          </motion.div>
        </div>
        <div className="w-full absolute bottom-[-150px]">
          <img src="/svgs/waves.svg" className="w-full" alt="My Icon" />
        </div>
      </section>
    </>
  );
};

export default Hero1;
