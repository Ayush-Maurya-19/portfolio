"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const projectsData = [
  {
    id: 1,
    title: "Homify (Living Rental Spaces Near You)",
    description: "This is Full Stack Project created using MERN Stack.",
    image: "/images/HomePage1.png",
    feature1: "In this project I have used React, Node.js, Express.js, MongoDB, and Bootstrap.",
    feature2: "Feature 2",
    feature3: "Feature 3",
    gitUrl: "https://github.com/Ayush-Maurya-19/Homify",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "ThinkInk (A Doodle Game)",
    description:"This is Full Stack Project created using MERN Stack and Socket.IO",
    feature1: "Feature 1",
    feature2: "Feature 2",
    feature3: "Feature 3",
    image: "/images/HomePage2.png",
    gitUrl: "https://github.com/Ayush-Maurya-19/ThinkInk",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Blogging Website",
    description: "Project 3 description",
    feature1: "Feature 1",
    feature2: "Feature 2",
    feature3: "Feature 3",
    image: "/images/HomePage3.png",
    gitUrl: "https://github.com/Ayush-Maurya-19/BlogBay",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Weather Application",
    description: "Project 4 description",
    feature1: "Feature 1",
    feature2: "Feature 2",
    feature3: "Feature 3",
    image: "/images/HomePage4.png",
    gitUrl: "/",
    previewUrl: "/",
  },
];

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

      {projectsData.map((project, index) =>
        index % 2 === 0 ? (
          <section key={index} className="text-white project-section mt-20 ">
            <div className="container mx-auto px-4">
              <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2">
                <div className="col-span-1 md:pl-36">
                  <img
                    src={project.image}
                    alt="project"
                    width="500"
                    height="500"
                    className="rounded-md"
                  />
                </div>
                <div className="col-span-1 mt-4 md:mt-0">
                  <div className="card">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p>{project.description}</p>
                    <ul className="list-disc ml-5">
                      <li>{project.feature1}</li>
                      <li>{project.feature2}</li>
                      <li>{project.feature3}</li>
                    </ul>
                    <Link
                      href={project.gitUrl}
                      className="px-6 mt-5 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-black-500 hover:bg-slate-500 text-white"
                    >
                      View GitHub Repo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="text-white mt-20 project-section">
            <div className="container mx-auto px-4">
              <div className="grid grid-flow-row-dense gap-4 grid-cols-1 md:grid-cols-2">
                <div className="col-span-1 order-2 md:order-1 md:ml-36">
                  <div className="card">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p>{project.description}</p>
                    <ul className="list-disc ml-5">
                    <li>{project.feature1}</li>
                      <li>{project.feature2}</li>
                      <li>{project.feature3}</li>
                    </ul>
                    <Link
                      href={project.gitUrl}
                      className="px-6 mt-5 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-black-500 hover:bg-slate-500 text-white"
                    >
                      View GitHub Repo
                    </Link>
                  </div>
                </div>
                <div className="col-span-1 order-1 md:order-2 mt-4 md:mt-0">
                  <img
                    src={project.image}
                    alt="project"
                    width="500"
                    height="500"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </section>
        )
      )}

      {/* <section className="text-white project-section">
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

      <section className="text-white mt-10 project-section">
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
      </section> */}
    </>
  );
};

export default Portfolio;
