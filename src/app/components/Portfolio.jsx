"use client";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Portfolio = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    //This is for card but using it.
    // sr.reveal(".card", {
    //   delay: 200,
    //   origin: "bottom",
    //   distance: "100px",
    //   duration: 1000,
    //   interval: 100,
    //   scale: 0.7,
    // });

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
    {/* TODO: I want to make this section dynamic. I will create a new component for each project and then I will map through the projects array to display the projects. */}
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <section className="text-white project-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 md:pl-36">
              {/* Image on the left */}
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
                  Homify (Living Rental Spaces Near You)
                </h3>
                <p>
                  This is my first project created using HTML, CSS, and
                  Javascript.
                </p>
                <ul className="list-disc ml-5">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
                <button className="btn btn-primary rounded-pill mt-5">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="text-white mt-10 project-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-flow-row-dense gap-4 grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 order-2 md:order-1 md:ml-36">
              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-2">
                  ThinkInk (A Doodle Game)
                </h3>
                <p>
                  This is my first project created using HTML, CSS, and
                  Javascript.
                </p>
                <ul className="list-disc ml-5">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
                <button className="btn btn-primary rounded-pill mt-5">
                  View Project
                </button>
              </div>
            </div>
            <div className="col-span-1 order-1 md:order-2 mt-4 md:mt-0">
              {/* Image on the right */}
              <img
                src="/images/HomePage1.png"
                alt="project"
                width="500"
                height="500"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="text-white mt-10 project-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 md:pl-36">
              {/* Image on the left */}
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
                  Homify (Living Rental Spaces Near You)
                </h3>
                <p>
                  This is my first project created using HTML, CSS, and
                  Javascript.
                </p>
                <ul className="list-disc ml-5">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
                <button className="btn btn-primary rounded-pill mt-5">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white mt-10 project-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-flow-row-dense gap-4 grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 order-2 md:order-1 md:ml-36">
              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-2">
                  ThinkInk (A Doodle Game)
                </h3>
                <p>
                  This is my first project created using HTML, CSS, and
                  Javascript.
                </p>
                <ul className="list-disc ml-5">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
                <button className="btn btn-primary rounded-pill mt-5">
                  View Project
                </button>
              </div>
            </div>
            <div className="col-span-1 order-1 md:order-2 mt-4 md:mt-0">
              {/* Image on the right */}
              <img
                src="/images/HomePage1.png"
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
