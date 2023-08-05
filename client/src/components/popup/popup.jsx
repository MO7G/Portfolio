import React, { useState, useEffect,useRef } from "react";
import "./popup.scss";
import { AiOutlineClose } from "react-icons/ai";

const PopOut = ({ onClose,title, link }) => {

  return (
    <div className="gray-overlay">
      <div className="pop-out" >
        <div className="content">
          <span className="close-btn" onClick={onClose}>
            <a target="_blank" rel="noreferrer">
              <AiOutlineClose className="AiOutlineCloseIcon" />
            </a>
          </span>
          <h1>{title}</h1>
          {link ? ( // Check if 'link' is not empty (i.e., truthy)
            <div className="video">
              <iframe
                src={link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            // If 'link' is empty (i.e., falsy), render the "Coming Soon" message
            <div className="coming-soon">
              <h1>Video Coming Soon</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopOut;
