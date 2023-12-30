import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import personalbrand from "../../Assets/personalbrand.png";
import videohub from "../../Assets/videohub.png";
import wikisearch from "../../Assets/wikisearch.png";

const items = [
  {
    id: 1,
    title: "Personal Brand",
    img: personalbrand,
    desc: "Embarking on my maiden React website, I've acquired the skill of smooth section-to-section navigation sans page reloading. This project served as a valuable learning experience, enhancing my understanding of creating dynamic, single-page applications and harnessing React's capabilities for an enhanced user experience.",
    demo: "https://personal-brand-sigma.vercel.app/",
  },
  {
    id: 2,
    title: "Video Hub",
    img: videohub,
    desc: "I designed a website featuring a video playlist functionality using ChakraUI within a React project. Leveraging ChakraUI's built-in components, I seamlessly integrated custom text to effortlessly craft an aesthetically pleasing website with minimal code, streamlining the development process.",
    demo: "https://react-video-hub-sigma.vercel.app/",
  },
  {
    id: 3,
    title: "Wiki-Search",
    img: wikisearch,
    desc: "The website, crafted with Next.js and TypeScript, seamlessly integrates with the Wikipedia API to retrieve and showcase a comprehensive list of pages. Upon clicking on any result, users are seamlessly redirected to the corresponding Wikipedia page for a richer exploration experience.",
    demo: "https://wiki-search-sigma.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.demo} target="_blank">
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
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

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
