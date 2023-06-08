import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../public/images/profile/Harsh.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duraion: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on(
      "change",
      (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      },
      [springValue, value]
    );
  });

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>HD | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="full h-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-15">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light ">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Harsh Dhaduk, a web developer with a passion for
                creating beautiful, functional, and user-centered digital
                experiences. With 6 Months of experience in the field. I am
                always looking for new and innovative ways to bring my clients'
                visions to life.
              </p>

              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className="font-medium">
                Whether I'm working on a website, or other digital product, I
                bring my commitment to design excellence and user-centered
                thinking to every project I work on. I look forward to the
                opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max border-solid rounded-2xl border-2 border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <Image
                src={profilePic}
                alt="HD"
                className="w-full h-auto rounded-[2rem] py-4 px-4"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row md:order-3">
              <div className="flex flex-col items-end justify-center xl:text-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-center sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-center sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={6} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-center sm:text-base xs:text-sm">
                  months of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
