import React from "react";
import Lottie from "react-lottie";
import webDev from "../../../assets/lotties/computers_and_phone.json";

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
        className="relative w-full grid grid-cols-[repeat(2,1fr)] items-center h-[calc(100vh-130px)] bg-white text-black px-5"
      >
        <div className="flex flex-col gap-10 items-center">
          <div className="flex font-bold text-5xl">
            <h1>Hi, I'm Andy</h1>
            <span>👋</span>
          </div>
          <div className="text-[#333] text-[18px]">
            <p className="">
              Just another{" "}
              <span className="font-bold text-blue-500">
                computer science student.
              </span>
              <br />
              Currently in School🎓
            </p>
            <p>Welcome to my portfolio.</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className="w-full absolute bottom-[-150px]">
          <img src="/svgs/waves.svg" className="w-full" alt="My Icon" />
        </div>
      </section>
    </>
  );
};

export default Hero1;
