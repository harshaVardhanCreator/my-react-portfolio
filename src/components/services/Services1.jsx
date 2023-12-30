import { useRef } from "react";
import "./services1.scss";
import { motion, useInView } from "framer-motion";
import Techstack from "./TechStack";
import Toolstack from "./ToolStack";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services1 = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services1"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      {/* <motion.div className="textContainer" variants={variants}>
        <p>
        Crafting digital wonders and coding dreams into reality. Explore my tech haven
          <br /> where innovation meets creativity
        </p>
        <hr />
      </motion.div> */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Professional</motion.b>{" "}
            Skillset
          </h1>
        </div>
        <Techstack />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Tools</motion.b> I Use
          </h1>
        </div>
        <Toolstack />
      </motion.div>
    </motion.div>
  );
};

export default Services1;
