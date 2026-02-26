import "./hero.scss"
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react'

const textVariants ={
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants ={
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition:{
            duration: 7,
            repeat: Infinity,
            repeatType: "mirror",
        }
    },
}

const imageVariants = {
    initial: {
        opacity: 0,
        scale: 0.85,
        x: 80,
    },
    animate: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

const floatingVariants = {
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
}

const Hero = () => {
  const stickyRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  })

  // Image stays fully visible through the hero, then animates out in the extra scroll space
  const imageOpacity = useTransform(scrollYProgress, [0, 0.45, 0.75, 1], [1, 1, 0.4, 0])
  const imageY = useTransform(scrollYProgress, [0, 0.45, 1], [0, 0, -200])
  const imageScale = useTransform(scrollYProgress, [0, 0.45, 0.7, 1], [1, 1, 0.85, 0.6])
  const imageRotate = useTransform(scrollYProgress, [0, 0.45, 1], [0, 0, -8])

  return (
    <div className="heroStickyWrapper" ref={stickyRef}>
      <div className="heroSticky">
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>HARSHA VARDHAN</motion.h2>
                    <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>See the latest Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Frontend Developer
            </motion.div>
        </div>
        <motion.div 
            className="imageContainer" 
            variants={imageVariants} 
            initial="initial" 
            animate="animate"
            style={{
                y: imageY,
                scale: imageScale,
                rotate: imageRotate,
                opacity: imageOpacity,
            }}
        >
            <motion.img 
                src="/hero.png" 
                alt="Harsha Vardhan portrait" 
                variants={floatingVariants}
                animate="animate"
            />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
