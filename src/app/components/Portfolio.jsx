"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const items = [
  {
    id: 1,
    title: "Homify",
    imgUrl: "/images/HomePage1.png",
    description: "This is a portfolio project",
  },
  {
    id: 2,
    title: "ThinkInk",
    imgUrl: "/images/HomePage2.png",
    description: "This is a portfolio project",
  },
  {
    id: 3,
    title: "Portfolio Website",
    imgUrl: "/images/HomePage.png",
    description: "This is a portfolio project",
  },
  {
    id: 4,
    title: "Next.js Blog",
    imgUrl: "/images/HomePage.png",
    description: "This is a portfolio project",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y  = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section ref={ref}>
      <div className="container">
        <img src="{item.img}" alt="images" />
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button>Check Out Now</button>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
