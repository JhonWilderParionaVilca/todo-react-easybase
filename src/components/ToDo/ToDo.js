import React from "react";
import Notes from "./Notes";

const ToDo = () => {
  const backendData = [
    {
      title: "Grocery List",
      description: "Milk, Soup, Bread",
      createdat: "01-18-2021",
    },
    {
      title: "Math Homework",
      description: "Remember to finish question 8-10 before monday",
      createdat: "12-01-2020",
    },
    {
      title: "Call James",
      description: "Ask him about the company party.",
      createdat: "12-30-2020",
    },
  ];

  return (
    <div style={{ width: 400 }}>
      {backendData.map((ele) => (
        <Notes
          key={ele.title}
          title={ele.title}
          description={ele.description}
          createat={ele.createdat}
        />
      ))}
    </div>
  );
};

export default ToDo;
