"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/AboutSectionIMG.jpg "
          width={500}
          height={500}
          alt="aboutSection"
          className=""
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 mt-5">About Me</h2>
          <p className="text-base lg:text-lg text-justify		">
            I am a full-stack developer specializing in MERN stack and Next.js.
            I have been working in the field of web development for the past 2
            years. I have a passion for learning and sharing my knowledge with
            others as publicly as possible. I write articles and tutorials about
            web development on my blog. I am a self-taught developer and believe
            in the power of community and open-source.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
