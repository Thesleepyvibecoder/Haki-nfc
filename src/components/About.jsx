import React from "react";
import "./About.css";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} font-["Playfair_Display"] italic tracking-wider text-secondary text-[18px]`}
        >
          About Haki NFC
        </p>

        <h2
          className={`${styles.sectionHeadText} font-["Oswald"] font-bold uppercase tracking-wider`}
        >
          Smart Connections.
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-10">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="max-w-4xl"
        >
          <p className='text-secondary text-[18px] leading-[32px] font-["Inter"] font-normal'>
            Haki NFC creates smart, tap-to-connect solutions designed for
            modern businesses. We bring NFC technology into everyday
            interactions, making it easier for businesses to connect with
            their customers in a simple, seamless, and memorable way.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6">
          <motion.div
            variants={fadeIn("right", "spring", 0.2, 0.75)}
            className="about-feature-card"
          >
            <span className="about-feature-number">01</span>

            <h3 className='font-["Oswald"]'>
              Effortless Interaction
            </h3>

            <p className='font-["Inter"]'>
              One tap is all it takes to connect customers with your
              digital experience.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("right", "spring", 0.4, 0.75)}
            className="about-feature-card"
          >
            <span className="about-feature-number">02</span>

            <h3 className='font-["Oswald"]'>
              Built for Business
            </h3>

            <p className='font-["Inter"]'>
              Practical NFC solutions designed to make everyday business
              interactions smarter and more convenient.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("right", "spring", 0.6, 0.75)}
            className="about-feature-card"
          >
            <span className="about-feature-number">03</span>

            <h3 className='font-["Oswald"]'>
              Modern by Design
            </h3>

            <p className='font-["Inter"]'>
              Technology that blends naturally into your brand, your
              business, and the way your customers interact with it.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
