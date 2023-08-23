import React, { useState } from "react";

function ShowFullText({ description, length = 150, className = "" }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <>
      <p
        className={`mb-4 text-lg leading-relaxed text-gray-700 overflow-hidden ${
          showFullDescription
            ? "max-h-full transition-all duration-[600ms] ease-in-out"
            : "max-h-20 transition-all duration-[600ms] ease-in-out"
        } ${className}}`}
      >
        {description}
      </p>
      {description.length > length && (
        <span
          onClick={toggleDescription}
          className={`cursor-pointer font-normal text-blue-700 ${
            showFullDescription ? "block" : "hidden"
          }`}
        >
          Show less
        </span>
      )}
      {description.length > length && (
        <span
          onClick={toggleDescription}
          className={`cursor-pointer font-normal text-blue-700 ${
            showFullDescription ? "hidden" : "block"
          }`}
        >
          Show more
        </span>
      )}
    </>
  );
}
export default ShowFullText;
