import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { BiSolidVideo } from "react-icons/bi";
import { MdDescription } from "react-icons/md";
import { colorsArray } from "../../assets/general/colors";
import { motion } from "framer-motion";
import PopOut from "../../components/popup/popup";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { images } from "../../constants";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [popupStates, setPopupStates] = useState({});
  const [popupWork,setPopupWork] = useState(false);
  const [popupWorkCounter,setPopupWorkCounter] = useState(0);
  const [windowScrollY,setWindowScrollY] = useState();
  const scrollThreshold = 400; // Set the scroll threshold here (in pixels)

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });


   
  }, []);

  useEffect(()=>{
    const handleVisibilityChange = () => {
      if (document.visibilityState != "hidden") {
        handleClosePopup(false);
      }
    };
    const handleScroll = () => {

      if( (window.scrollY - scrollThreshold> windowScrollY) || (window.scrollY + scrollThreshold < windowScrollY)){
        handleClosePopup();
      }    
      }


    window.addEventListener("scroll", handleScroll);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("scroll", handleScroll);
    };
  },[windowScrollY])

  useEffect(() => {
    // Initialize the popupStates state with default values for each item

    const initialPopupStates = filterWork.reduce((acc, work) => {
      acc[work.title] = false;
      return acc;
    }, {});

    /* the above technique is equivalent to the following one
    
    const initialPopupStates = {};
    for (const work of filterWork) {
      initialPopupStates[work.title] = false;
    }
    */
    setPopupStates(initialPopupStates);
  }, [filterWork]);




  const handleOpenPopup = () => {
    // Open the popup for the specified item title
  //  let temp = document.visibilityState;
  setWindowScrollY(window.scrollY);
  let title = popupWork
    const newPopupStates = {
      ...popupStates,
      [title]: true,
    };

    setPopupStates(newPopupStates);
  };
  

  const handleClosePopup = () => {
    // Create a new object with all titles set to false
    const allTitlesFalse = Object.keys(popupStates).reduce((acc, title) => {
      acc[title] = false;
      return acc;
    }, {});  
    setPopupStates(allTitlesFalse); // Update the state with the new object
  };
  

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 300);
  };



  const handleWhichWorkPopupIsTargeted = (title) =>{
     setPopupWorkCounter(popupWorkCounter+1)
      setPopupWork(title);
  }

  
  useEffect(() => {
    // This effect runs whenever the 'title' state is updated
    handleOpenPopup(); // This will use the updated 'title'
  }, [popupWorkCounter]); // Listen to changes in the 'title' state

    
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {[
          "College",
          "Back End",
          "Web App",
          "Mobile App",
          "Ai",
          "Algorithms",
          "Self Learning",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div
            className={`app__work-item app__flex ${
              work.recent ? "recent" : ""
            }`}
            key={index}
          >
             <img className={`${work.recent ? "showNewImage":"RemoveNewImage"}`} src={images.newImage} ></img>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
             
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-stack app__flex">
                <h5>Stacks</h5>
                <div className="app__work-stack-tags app__flex">
                  <div className="app__work-stack-item app__flex">
                    {work.stacks?.map((stack, index) => (
                      <span
                        className="bold-text"
                        key={index}
                        style={{
                          backgroundColor: `${
                            colorsArray[index % colorsArray.length]
                          }`,
                        }}
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>

              <div className="app__work-hyerlink app__flex">
                {work?.projectLink?.length > 0 && (
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <AiFillEye />
                  </a>
                )}

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </a>
                <a
                  onClick={() =>{handleWhichWorkPopupIsTargeted(work.title)}}
                  target="_blank"
                  rel="noreferrer"
                  key={work.title}
                >
                  <BiSolidVideo />
                </a>
                {popupStates[work.title] && (
                    <PopOut
                     onClose={()=>handleClosePopup()}
                      title={work.title}
                      link={work.videoLink}
                    />
                  )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
