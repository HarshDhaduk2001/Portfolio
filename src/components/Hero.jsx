import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.png";
import resume from "../assets/HarshDhaduk_CV.pdf";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 lg:pl-24">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Harsh Dhaduk
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-12"
            >
              <a href={resume} target="_blank" rel="noreferrer">
                <button className="bg-AAprimary text-AAsecondary hover:bg-ResumeButtonHover border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
                  Check out my resume!
                </button>
              </a>
            </motion.p>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.img
              src={profilePic}
              alt="HD"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
