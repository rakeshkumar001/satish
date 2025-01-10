import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

function Skills() {
  const speed = 1 / 1.5;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (value) => value * speed);
  return (
    <div className="App">
      <motion.div className="box" style={{ y: y }}></motion.div>
      <div className="box"></div>
    </div>
  );
}

export default Skills