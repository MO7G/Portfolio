import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <img src={images.robot} alt="hi" />
          <div style={{ marginLeft: 20 }}>
            <h1 className="head-text">I am mohammed</h1>
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div
        whileInView={{ x: [200, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7}}
      className="app__header-img"
    >         

        <div className="tag-cmp app__flex">
        <h1 className="head-text-1"> 
  
        <h1 className="head-text-1">
  <div className="justified-text">
    I am a final-year student Senior - 2 at 
    <span style={{ color: 'var(--secondary-color)' }}> Ain Shams University</span>, 
    specializing in 
    <span style={{ color: 'var(--secondary-color)' }}> Computer Engineering</span> and 
    <span style={{ color: 'var(--secondary-color)' }}> Software Systems</span>. 
    With a solid foundation in 
    <span style={{ color: 'var(--secondary-color)' }}> backend development</span>, 
    I am currently focusing on 
    <span style={{ color: 'var(--secondary-color)' }}> distributed systems</span>, 
    <span style={{ color: 'var(--secondary-color)' }}> microservices architecture</span>, 
    and 
    <span style={{ color: 'var(--secondary-color)' }}> cloud technologies</span>. 
    I am proficient in various programming languages and technologies, and actively participate in 
    <span style={{ color: 'var(--secondary-color)' }}> competitive programming</span> to further enhance my skills.
  </div>
</h1>

</h1>
        </div>
    { /*<img src={images.personal} alt="profile_bg" /> */}
    {/*    <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />*/}
    </motion.div>
     
  {/*  <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
      */}
  </div>
);


export default AppWrap(
  MotionWrap(Header, 'app__header'),
  'home',
  'app__primarybg',
);
