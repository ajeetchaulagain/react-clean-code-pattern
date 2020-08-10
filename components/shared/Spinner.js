import React from "react";

const Spinner = ({ primaryColor, secondaryColor, className }) => {
  console.log("Color", primaryColor, secondaryColor);
  const loadingStyles = {
    borderColor: `${secondaryColor}`,
    borderBottomColor: `${primaryColor}`,
  };
  className = `loader ${className}`;
  return (
    <div className={className} style={loadingStyles}>
      Loading...
    </div>
  );
};

export default Spinner;
