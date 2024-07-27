"use client";
import React from "react";
import { HERO_CONTENT1, HERO_CONTENT2, HERO_CONTENT3, HERO_CONTENT4 } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap gap-10 lg:gap-0">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.img
              src="/harsh.jpg"
              alt="HD"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 lg:pl-24">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="lg:my-2 max-w-xl lg:py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT1}
            </motion.p>
          </motion.div>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:items-start my-3"
          >
            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="lg:my-2 max-w-xl lg:py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT2}
            </motion.p>
          </motion.div>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.p
              variants={container(2)}
              initial="hidden"
              animate="visible"
              className="lg:my-2 max-w-xl lg:py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT3}
            </motion.p>
          </motion.div>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.p
              variants={container(2.5)}
              initial="hidden"
              animate="visible"
              className="lg:my-2 max-w-xl lg:py-6 font-light tracking-tighter my-3"
            >
              {HERO_CONTENT4}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
