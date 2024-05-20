"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

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
  return <section>{item.title}</section>;
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
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
