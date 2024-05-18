"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [tap, setTap] = useState("skills");
  const [startTransition, isPending] = useTransition({ timeoutMs: 3000 });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTap(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2  gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/Ayush.png "
          width={300}
          height={200}
          alt="aboutSection"
          className="ml-16  rounded-xl"
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text- lg:text-lg">
            I'm a dedicated MERN stack developer with a Master's degree in
            Computer Applications (MCA) and a strong foundation in computer
            science. My programming journey began during my academic years,
            where I developed a deep understanding of software development
            principles and methodologies. Throughout my MCA program, I honed my
            skills in data structures, algorithms, and software engineering
            practices, laying the groundwork for my technical proficiency.
            <br /> <br />I am passionate about full-stack web development,
            specializing in the MERN stack and Next.js. Leveraging MongoDB,
            Express.js, React.js, Node.js, and Next.js, I contribute to dynamic,
            responsive web applications. My commitment to continuous learning
            keeps me updated with the latest trends and best practices, enabling
            me to tackle new challenges with enthusiasm and dedication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
