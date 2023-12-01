import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'Social Media App',
    img: 'https://images.pexels.com/photos/18096280/pexels-photo-18096280.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
  },
  {
    id: 2,
    title: 'Dashboard App',
    img: 'https://i.ibb.co/bPmVXyP/social-media-app.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
  },
  {
    id: 3,
    title: 'Hompage App',
    img: 'https://i.ibb.co/bPmVXyP/social-media-app.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
  },

  {
    id: 4,
    title: 'Analytics App',
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdlYiUyMGFwcGxpY2F0aW9ufGVufDB8fDB8fHwy',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
  },
];

const Single = ({ id, title, img, desc }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section key={id} className='item'>
      <div className='container'>
        <div className='wrapper'>
          <img src={img} alt={title} ref={ref} />
          <motion.div className='text' style={{ y }}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <button>See Demo</button>
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
    offset: ['end end', 'start start'],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className='portfolio' ref={ref}>
      <div className='title'>
        <h1>Featured Works</h1>
        <motion.div className='progressbar' style={{ scaleX }} />
      </div>
      <div className='items'>
        {items.map((item) => {
          const { id, title, img, desc } = item;
          return (
            <Single key={id} id={id} title={title} img={img} desc={desc} />
          );
        })}
      </div>
    </div>
  );
};
export default Portfolio;
