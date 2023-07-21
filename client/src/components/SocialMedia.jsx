import React from 'react';

import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/MO7G" target="_blank" rel="noreferrer">
      <div>
      <AiFillGithub />
      </div>
    </a>

    <a href="https://www.linkedin.com/in/muhamed-elhag/" target="_blank" rel="noreferrer">
    <div>
      <AiFillLinkedin />
    </div>
    </a>

    <a href="mailto:muhamedelhagg@gmail.com">
    <div>
      <HiOutlineMail />
    </div>
    </a>
  </div>
);

export default SocialMedia;
