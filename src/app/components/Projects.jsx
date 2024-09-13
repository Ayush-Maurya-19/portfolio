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
                    showcases the companys products and services. It provides an
                    intuitive interface for visitors to explore the range of
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
                    dedicated to home furnishings. Built on a robust
                    platform, Emma Home offers an extensive collection of
                    products including rugs, carpets, cushions, table linen,
                    throws, bed linen, bath mats, and bath towels. With an
                    elegant and user-friendly interface, the website provides a
                    seamless shopping experience, making it easy for customers
                    to find and purchase high-quality home decor items.
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
                  src="/images/honeylicious.png"
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
                    Honeylicious
                  </h3>
                  <p>
                    Honeylicious is a WordPress-powered e-commerce platform
                    dedicated to offering 100% natural honey products. Based in
                    Delhi, India, our small team collaborates with local farmers
                    across diverse regions to produce honey using sustainable
                    methods. At Honeylicious, we prioritize customer
                    satisfaction by delivering premium products that blend
                    quality with affordability, promoting a healthy lifestyle
                    while preserving traditional farming practices and
                    biodiversity.
                  </p>
                  <p className="mt-2">Features:</p>

                  <ul className="list-disc ml-5">
                    <li>Responsive design</li>
                    <li>Build On Wordpress</li>
                    <li>Reliable Technologies</li>
                  </ul>
                  <Link
                    href="https://honeylicious.co.in/"
                    className="px-6 mt-5 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-black-500 hover:bg-slate-500 text-white"
                  >
                    Live Link
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
                    Luxabord
                  </h3>
                  <p>
                    Luxabord is a beautifully designed website for
                    a high-end clothing brand. With a focus on elegance and user
                    experience, Luxabord features a modern, professional layout
                    that highlights the brands exclusive apparel collections.
                    The website offers an intuitive browsing experience,
                    allowing visitors to effortlessly explore the latest fashion
                    trends and shop for premium clothing items, enhancing both
                    customer engagement and brand visibility.
                  </p>
                  <p className="mt-2">Features:</p>

                  <ul className="list-disc ml-5">
                    <li>Real-time data fetches</li>
                    <li>Search Functionality</li>
                    <li>User-friendly Interface</li>
                  </ul>
                  <Link
                    href="https://luxabord.com/"
                    className="px-6 mt-5 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-black-500 hover:bg-slate-500 text-white"
                  >
                    Live Link
                  </Link>
                </div>
              </div>
              <div className="col-span-1 order-1 md:order-2 mt-4 md:mt-0 flex py-6">
                <img
                  src="/images/luxabord.png"
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
