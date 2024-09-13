"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import VanillaTilt from "vanilla-tilt";

const Projects = () => {
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
          distance: "40px",
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
    <div>
      <div id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-6 mb-4 md:mb-12 ">
          My Projects
        </h2>
        <section className="text-white project-section mt-5 ">
          <div className="container mx-auto px-4">
            <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2">
              <div className="col-span-1 md:pl-36 flex py-4">
                <img
                  src="/images/wellicia.png"
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
                    Wellicia (Pharma company)
                  </h3>
                  <p>
                    Wellicia is a sophisticated WordPress-powered website
                    tailored for a medicine manufacturing company. Designed with
                    a focus on user experience and functionality, Wellicia
                    features a clean, professional layout that effectively
                    showcases the companys products and services. It provides
                    an intuitive interface for visitors to explore the range of
                    medical solutions offered, enhancing both user engagement
                    and brand presence.{" "}
                  </p>
                  <p className="mt-2">Features:</p>
                  <ul className="list-disc ml-5">
                    <li>User Friendly Interface</li>
                    <li>Responsive Design</li>
                    <li>Reliable Technologies Used</li>
                  </ul>
                  <Link
                    href="https://wellicia.in/"
                    className="px-6 mt-5 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-black-500 hover:bg-slate-500 text-white"
                  >
                    Live Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-white mt-8 md:mt-20  project-section">
          <div className="container mx-auto px-4">
            <div className="grid grid-flow-row-dense gap-4 grid-cols-1 md:grid-cols-2">
              <div className="col-span-1 order-2 md:order-1 md:ml-36">
                <div className="card">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Emmahome (Home Furnishings Band)
                  </h3>
                  <p>
                    Emma Home is a beautifully designed e-commerce website
                    dedicated to home furnishings. Built on a robust wordpress platform,
                    Emma Home offers an extensive collection of products
                    including rugs, carpets, cushions, table linen, throws, bed
                    linen, bath mats, and bath towels. With an elegant and
                    user-friendly interface, the website provides a seamless
                    shopping experience, making it easy for customers to find
                    and purchase high-quality home decor items.
                  </p>

                  <p className="mt-2">Features:</p>
                  <ul className="list-disc ml-5">
                    <li>User Friendly Interface</li>
                    <li>Enquiry Feature</li>
                    <li>Responsive UI</li>
                  </ul>
                  <Link
                    href="https://rumichikan.in/"
                    className="px-6 mt-5 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-black-500 hover:bg-slate-500 text-white"
                  >
                    Live Link
                  </Link>
                </div>
              </div>
              <div className="col-span-1 order-1 md:order-2 mt-4 md:mt-0 flex py-5">
                <img
                  src="/images/Emmahome.png"
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

        <section className="text-white mt-8 md:mt-20  project-section">
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
                    <span className="text-blue-500 font-bold ">Next.js</span>{" "}
                    and styled with
                    <span className="text-blue-500 font-bold "> CSS</span>.
                    Providing lightning-fast performance, responsive design, and
                    seamless navigation. Showcase your content beautifully on
                    any device with customizable layouts and interactive
                    features.
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

        <section className="text-white mt-8 md:mt-20 project-section">
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
      </div>
    </div>
  );
};

export default Projects;
