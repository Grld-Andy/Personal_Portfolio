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
        className="relative h-[calc(100vh)] flex flex-col justify-center sm:grid sm:grid-cols-[repeat(2,1fr)] items-center sm:h-[calc(100vh-130px)] bg-white text-black px-5"
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
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: [0, 20, -10, 15, 0],
              }}
              transition={{
                opacity: { duration: 0.4, delay: 0.9, ease: "easeOut" },
                scale: { duration: 0.4, delay: 0.9, ease: [0.34, 1.56, 0.64, 1] },
                rotate: { duration: 1.2, delay: 1.1, ease: "easeInOut" },
              }}
            >
              👋
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#333] text-[18px]"
          >
            <p>
              Passionate about building scalable software solutions.{" "}
              <span className="font-bold text-blue-500">Web developer</span>{" "}
              skilled in NodeJS, Django, and modern web technologies.
              <br />
            </p>
            <p>Welcome to my portfolio.</p>
          </motion.div>
        </div>

        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
