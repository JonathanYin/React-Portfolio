import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import CityCanvas from "./canvas/City";

import profile from "../assets/profile.webp";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a 3rd year undergraduate majoring in Mathematics and Computer Science
          at the University of California, San Diego, with a minor in Computer Engineering. 
          I have experience with web frameworks/libraries such as React, Vue, Node.js, Express, 
          as well as rendering and game design with tools such as Unity, Unreal Engine 5, Blender, 
          WebGL, and more. Working independently and as part of a team, I have gained experience 
          with software development processes such as agile, and CI/CD pipelines such as GitHub Actions. 
          <br /><br />
          I have an innate curiosity in discovering new things: one that carries forward into both my studies and work. 
          My zeal for learning new software tools and frameworks drives me to continuously refine my skills as an 
          engineer, with the goal of creating software solutions to address modern industry problems. 
          I aspire to develop solid software and long for a challenge that keeps me up at night, and by 
          studying computer science and applying professional software practices in my work, I hope to build 
          products with global influence through the development of reliant, efficient and maintainable code.
          <br /><br />
          Feel free to reach out to me, and let's build something great together!
        </motion.p>

        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto mt-5 max-[1000px]:my-14">
          <motion.div
            variants={fadeIn("", "", 0.5, 1)}
            className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                src={profile}
                alt="Young man standing in mall"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </Tilt>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      {/* <CityCanvas /> */}
    </>
  );
};

export default SectionWrapper(About, "about");