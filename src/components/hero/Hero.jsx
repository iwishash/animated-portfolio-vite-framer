import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollBtn: {
    opacity: 0,
    y: 10,
    transition: { repeat: Infinity, duration: 1.6 },
  },
};

const textSlideVariants = {
  initial: { x: 0 },
  animate: {
    x: '-860%',
    transition: { duration: 16, repeat: Infinity, repeatType: 'mirror' },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>ASH AHN</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer / <br /> UI Desiner
          </motion.h1>
          <motion.div className='buttons' variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Lastes Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate='scrollBtn'
            src='/scroll.png'
            alt=''
          />
        </motion.div>
        <motion.div
          variants={textSlideVariants}
          initial='initial'
          animate='animate'
          className='siblingTextContainer'
        >
          Design Create Develop
        </motion.div>
        <div className='imageContainer'>
          <img src='/hero.png' alt='' />
        </div>
      </div>
    </div>
  );
};
export default Hero;
