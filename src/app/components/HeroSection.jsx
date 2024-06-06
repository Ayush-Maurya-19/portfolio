"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello I am{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Ayush Maurya", 1000, "Web Developer", 100]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a full-stack developer specializing in MERN stack and Next.js.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1v2bUSW3tdUkobVQNmSSz-G_DivjMKkvR/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>
        <div className="relative col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="p-1 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full">
            <div className=" p-1 rounded-full">
              <img
                src="/images/Ayush.png"
                className="rounded-full "
                width={300}
                height={300}
                alt="hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
