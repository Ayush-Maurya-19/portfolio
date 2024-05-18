import React from "react";

const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Potography Portfolio Website",
      description: "Project 2 description",
      image: "",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

const ProjectSection = () => {
  return (
    <section className="text-white">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div class="py-5 project-section">
        <h1 class="text-center">My Project 1</h1>

        <div class="container">
          <div class="row mt-5">
            <div class="col-md-6">
              <div class="project-1 vanilla-tilt"></div>
            </div>
            <div class="col-md-6">
              <div>
                <h1>Demo Project</h1>
                <p>
                  {" "}
                  This is my first project created using MERN Stack.
                </p>
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
                <button class="btn btn-primary rounded-pill mt-5">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
