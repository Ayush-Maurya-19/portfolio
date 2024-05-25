'use client'
import Link from "next/link";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";


const Portfolio = () => {

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".project-section:nth-child(odd)", {
      delay: 200,
      origin: "left",
      distance: "100px",
      duration: 2000,
      interval: 100,
    });

    sr.reveal(".project-section:nth-child(even)", {
      delay: 200,
      origin: "right",
      distance: "100px",
      duration: 2000,
      interval: 100,
    });
  }, []);

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <section className="text-white project-section mt-20 ">
            <div className="container mx-auto px-4">
              <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2">
                <div className="col-span-1 md:pl-36">
                  <img
                    src="/images/HomePage1.png"
                    alt="project"
                    width="500"
                    height="500"
                    className="rounded-md"
                  />
                </div>
                <div className="col-span-1 mt-4 md:mt-0">
                  <div className="card">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Homify
                    </h3>
                    <p>ddddddddddddddd</p>
                    <ul className="list-disc ml-5">
                      <li>ffff</li>
                      <li>ffff</li>
                      <li>ffff</li>
                      
                    </ul>
                    <Link
                      href="#"
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
                      ThinkInk
                    </h3>
                    <p>ddddddd</p>
                    <ul className="list-disc ml-5">
                    <li>ffff</li>
                      <li>ffff</li>
                      <li>ffff</li>
                    </ul>
                    <Link
                      href="#"
                      className="px-6 mt-5 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-black-500 hover:bg-slate-500 text-white"
                    >
                      View GitHub Repo
                    </Link>
                  </div>
                </div>
                <div className="col-span-1 order-1 md:order-2 mt-4 md:mt-0">
                  <img
                    src="/images/HomePage2.png"
                    alt="project"
                    width="500"
                    height="500"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </section>
    </>
  );
};

export default Portfolio;
