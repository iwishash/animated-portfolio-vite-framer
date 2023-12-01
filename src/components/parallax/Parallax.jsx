import './parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Parallax = ({ type }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '400%']);
  const xStars = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
    <div
      ref={ref}
      className='parallax'
      style={{
        background:
          type === 'services'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === 'services' ? 'What We Do?' : 'What We Did?'}
      </motion.h1>
      <motion.div className='mountains' />
      <motion.div style={{ y: yBg }} className='planets' />
      <motion.div style={{ x: xStars }} className='stars' />
    </div>
  );
};

export default Parallax;
