import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)} classes={`ring-1 ring-slate-300`}> 
          <img
            className="w-6 h-6 mr-2 fill-white"
            src={`/images/${social.title}.svg`}
          ></img>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
