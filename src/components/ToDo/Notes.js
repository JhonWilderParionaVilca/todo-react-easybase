import React from "react";

const Notes = ({ title, description, createat }) => {
  const noteRootStyle = {
    border: "2px #0af solid",
    borderRadius: 9,
    margin: 20,
    backgroundColor: "#efefef",
    padding: 6,
  };

  return (
    <div style={noteRootStyle}>
      <h3>{title}</h3>
      <p>{description}</p>
      <small>{String(createat).slice(0, 10)}</small>
    </div>
  );
};

export default Notes;
