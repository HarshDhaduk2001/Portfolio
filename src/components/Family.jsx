"use client";
import React from "react";
import { motion } from "framer-motion";
import { CONTACT, FAMILY } from "@/constants";
import { FaHome } from "react-icons/fa";

const Family = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="mt-14 mb-4 text-start text-4xl">
          Familly<span className="text-neutral-500"> Details</span>
        </h1>
        <div className="flex">
          <div className="flex flex-col items-center lg:items-start">
            <motion.p
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {FAMILY}
            </motion.p>
          </div>
        </div>
      </div>
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="mt-14 mb-4 text-start text-4xl">
          Contact<span className="text-neutral-500"> Info</span>
        </h1>
        <div className="flex">
          <div className="flex flex-col items-center lg:items-start">
            <motion.p
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-2"
            >
              <span className="text-2xl">
                <FaHome />
              </span>
              {CONTACT}
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Family;
