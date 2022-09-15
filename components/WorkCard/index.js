import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="p-2 overflow-hidden rounded-lg laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative h-48 overflow-hidden transition-all duration-300 ease-out rounded-lg shadow-lg mob:h-auto"
        style={{ height: "370px" }}
      >
        <img
          alt={name}
          className="object-cover w-full h-full transition-all duration-300 ease-out cursor-pointer hover:scale-110"
          src={img}
        ></img>
      </div>
      <h1 className="font-sans text-2xl font-bold text-center mt-7">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="mt-4 text-xl opacity-70">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
