import React from "react";

const Notes = ({ title, description, createdat }) => {
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
      <small>{createdat}</small>
    </div>
  );
};

export default Notes;
