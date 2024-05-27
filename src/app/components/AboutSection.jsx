"use client";
import React from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/HTML.png",
    alt: "HTML 5",
  },
  {
    src: "/images/CSS.webp",
    alt: "CSS 3",
  },
  {
    src: "/images/JavaScript.png",
    alt: "JavaScript",
  },
  {
    src: "/images/React.png",
    alt: "React",
  },
  {
    src: "/images/Node.png",
    alt: "Node",
  },
  {
    src: "/images/MongoDB.svg",
    alt: "MongoDB",
  },
  {
    src: "/images/Next1.svg",
    alt: "Next",
  },
  {
    src: "/images/Express.png",
    alt: "Express",
  },
  {
    src: "/images/Bootstrap.png",
    alt: "Next",
  },
  {
    src: "/images/Tailwind.png",
    alt: "Next",
  },
  {
    src: "/images/Java.png",
    alt: "Java",
  },
  {
    src: "/images/MYSQL.webp",
    alt: "MYSQL",
  },
];

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/AboutSectionIMG.jpg"
          width={500}
          height={500}
          alt="aboutSection"
          className=""
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 mt-5">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            I am a full-stack developer specializing in MERN stack and Next.js.
            I have been working in the field of web development for the past 2
            years. I have a passion for learning and sharing my knowledge with
            others as publicly as possible. I write articles and tutorials about
            web development on my blog. I am a self-taught developer and believe
            in the power of community and open-source.
          </p>
          <div>
            <h2 className="text-xl font-bold text-white mt-2">Skills</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
              {images.map((image, index) => (
                <div key={index} className="flex justify-center items-center p-2 bg-gray-900 rounded-md">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
