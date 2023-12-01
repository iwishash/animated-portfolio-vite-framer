import './services.scss';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeInOut', staggerChildren: 0.2 },
  },
};

const Services = () => {
  const ref = useRef();
  const isInview = useInView(ref, { margin: '-200px' });
  return (
    <div className='services'>
      <motion.div
        ref={ref}
        variants={variants}
        initial='initial'
        animate={isInview ? 'animate' : ''}
        className='wrapper'
      >
        <motion.div className='textContainer' variants={variants}>
          <p>
            I focus on helping your brand grow
            <br /> and move forward
          </p>
          <hr />
        </motion.div>
        <motion.div className='titleContainer' variants={variants}>
          <div className='title'>
            <img src='/people.webp' alt='' />
            <h1>
              <b>Unique</b> Ideas
            </h1>
          </div>
          <div className='title'>
            <h1>
              <b>For Your</b> Business.
            </h1>
            <button>What We Do?</button>
          </div>
        </motion.div>
        <motion.div className='listContainer' variants={variants}>
          <motion.div
            whileHover={{ background: 'lightgray', color: '#000' }}
            className='box'
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              perferendis saepe ipsum ad laborum minus molestias ullam pariatur
              quaerat sed possimus, perspiciatis, totam maxime tempora!
              Quibusdam voluptatum ad illo aut.
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            whileHover={{ background: 'lightgray', color: '#000' }}
            className='box'
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              perferendis saepe ipsum ad laborum minus molestias ullam pariatur
              quaerat sed possimus, perspiciatis, totam maxime tempora!
              Quibusdam voluptatum ad illo aut.
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            whileHover={{ background: 'lightgray', color: '#000' }}
            className='box'
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              perferendis saepe ipsum ad laborum minus molestias ullam pariatur
              quaerat sed possimus, perspiciatis, totam maxime tempora!
              Quibusdam voluptatum ad illo aut.
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            whileHover={{ background: 'lightgray', color: '#000' }}
            className='box'
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              perferendis saepe ipsum ad laborum minus molestias ullam pariatur
              quaerat sed possimus, perspiciatis, totam maxime tempora!
              Quibusdam voluptatum ad illo aut.
            </p>
            <button>Go</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Services;
