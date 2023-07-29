import React, { useState, useEffect } from "react";
import "./popup.scss";
import { AiOutlineClose } from "react-icons/ai";

const PopOut = ({ onClose, title, link }) => {
  const handlePopupClick = (event) => {
    event.stopPropagation(); // Prevent click event from bubbling up to the overlay
  };

  useEffect(() => {
    console.log(link);
    // Add the "no-scroll" class to the body element when the popup is shown
    document.body.classList.add("no-scroll");

    // Remove the "no-scroll" class from the body element when the popup is hidden
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="gray-overlay" onClick={handlePopupClick}>
      <div className="pop-out">
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
