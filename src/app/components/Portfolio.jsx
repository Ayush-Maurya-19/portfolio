"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import VanillaTilt from "vanilla-tilt";

const Portfolio = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const loadScrollReveal = async () => {
      if (typeof window !== "undefined") {
        const ScrollReveal = (await import("scrollreveal")).default;

        const sr = ScrollReveal();

        sr.reveal(".project-section:nth-child(odd)", {
          delay: 200,
          origin: "left",
          distance: "100px",
          duration: 1500,
          interval: 100,
        });

        sr.reveal(".project-section:nth-child(even)", {
          delay: 200,
          origin: "right",
          distance: "100px",
          duration: 1500,
          interval: 100,
        });
      }
    };

    loadScrollReveal();

    imageRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 10,
          speed: 400,
          glare: true,
          "max-glare": 0.5,
        });
      }
    });
  }, []);

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <section className="text-white project-section mt-10 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 md:pl-36 flex py-4">
              <img
                src="/images/HomePage1.png"
                alt="project"
                width="500"
                height="500"
                className="rounded-md  "
                ref={(el) => (imageRefs.current[0] = el)}
              />
            </div>
            <div className="col-span-1 mt-4 md:mt-0">
              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Homify (Find Rental Living Spaces Near You)
                </h3>
                <p>
                  Homify is a dynamic web app that connects property owners and
                  renters. Whether you need a hostel, PG, flat, or shared
                  apartment, Homify makes it easy to find and list rental
                  spaces. Built with the{" "}
                  <span className="text-blue-500 font-bold ">
                    MERN Stack (MongoDB, Express.js, React, Node.js)
                  </span>
                  , it ensures a seamless experience.
                </p>
                <p className="mt-2">Features:</p>
                <ul className="list-disc ml-5">
                  <li>User Friendly Interface</li>
                  <li>Responsive Design</li>
                  <li>Reliable Technologies Used</li>
                </ul>
                <Link
                  href="https://github.com/Ayush-Maurya-19/Homify"
                  className="px-6 mt-5 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-black-500 hover:bg-slate-500 text-white"
                >
                  View GitHub Repo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white mt-20 project-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-flow-row-dense gap-4 grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 order-2 md:order-1 md:ml-36">
              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-2">
                  ThinkInk (A Doodle Game)
                </h3>
                <p>
                  ThinkInk delivers an immersive doodle gaming experience
                  through meticulous development with the{" "}
                  <span className="text-blue-500 font-bold ">MERN Stack</span>.
                  Real-time communication via{" "}
                  <span className="text-blue-500 font-bold "> Socket.IO </span>
                  enhances interactivity, ensuring players are engaged and
                  delighted throughout their journey.
                </p>

                <p className="mt-2">Features:</p>
                <ul className="list-disc ml-5">
                  <li>Fun Gaming Experience</li>
                  <li>Responsive UI</li>
                  <li>Multiplayer Connictivity using Socket.IO</li>
                </ul>
                <Link
                  href="https://github.com/Ayush-Maurya-19/ThinkInk"
                  className="px-6 mt-5 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-black-500 hover:bg-slate-500 text-white"
                >
                  View GitHub Repo
                </Link>
              </div>
            </div>
            <div className="col-span-1 order-1 md:order-2 mt-4 md:mt-0 flex py-5">
              <img
                src="/images/HomePage2.png"
                alt="project"
                width="500"
                height="500"
                className="rounded-md   "
                ref={(el) => (imageRefs.current[1] = el)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-white project-section mt-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 md:pl-36 flex py-4">
              <img
                src="/images/HomePage3.png"
                alt="project"
                width="500"
                height="500"
                className="rounded-md  "
                ref={(el) => (imageRefs.current[2] = el)}
              />
            </div>
            <div className="col-span-1 mt-4 md:mt-0">
              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Blogging Website
                </h3>
                <p>
                  This is a Blogging Website, built with{" "}
                  <span className="text-blue-500 font-bold ">Next.js</span> and
                  styled with
                  <span className="text-blue-500 font-bold "> CSS</span>.
                  Providing lightning-fast performance, responsive design, and
                  seamless navigation. Showcase your content beautifully on any
                  device with customizable layouts and interactive features.
                </p>
                <p className="mt-2">Features:</p>

                <ul className="list-disc ml-5">
                  <li>Responsive design</li>
                  <li>Build On Next.js</li>
                  <li>Designed with Pure CSS</li>
                </ul>
                <Link
                  href="https://github.com/Ayush-Maurya-19/BlogBay"
                  className="px-6 mt-5 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-black-500 hover:bg-slate-500 text-white"
                >
                  View GitHub Repo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white mt-20 project-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-flow-row-dense gap-4 grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 order-2 md:order-1 md:ml-36">
              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Weather App
                </h3>
                <p>
                  A responsive web application built with{" "}
                  <span className="text-blue-500 font-bold ">React</span> that
                  fetches real-time weather data using a{" "}
                  <span className="text-blue-500 font-bold ">
                    OpenWeatherMap
                  </span>
                  . Users can search for weather information by location, and
                  the app provides clear and intuitive displays of current
                  conditions and forecasts.
                </p>
                <p className="mt-2">Features:</p>

                <ul className="list-disc ml-5">
                  <li>Real-time Weather Data</li>
                  <li>Search Functionality</li>
                  <li>User-friendly Interface</li>
                </ul>
                <Link
                  href="https://github.com/Ayush-Maurya-19/weatherapp"
                  className="px-6 mt-5 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-black-500 hover:bg-slate-500 text-white"
                >
                  View GitHub Repo
                </Link>
              </div>
            </div>
            <div className="col-span-1 order-1 md:order-2 mt-4 md:mt-0 flex py-6">
              <img
                src="/images/HomePage4.png"
                alt="project"
                width="500"
                height="500"
                className="rounded-md   "
                ref={(el) => (imageRefs.current[3] = el)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
