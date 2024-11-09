import React from 'react';

import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import { PiReadCvLogoBold } from "react-icons/pi";


const SocialMedia = () => (
  <div className="app__social">
    <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1Nwx2N3sssqoIQrYpYX0VDksXdjmIfYzvCg1Mn5yhPl4/edit?tab=t.0">
    <div>
      <PiReadCvLogoBold />
    </div>
    </a>
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
