import React, { useEffect } from "react";
import { useEasybase } from "easybase-react";

import Notes from "./Notes";

const ToDo = () => {
  const { Frame, configureFrame, sync } = useEasybase();

  useEffect(() => {
    configureFrame({ tableName: "TODO-REACT-EASYBASE", limit: 10 });
    sync();
  }, []);

  return (
    <div style={{ width: 400 }}>
      {Frame().map((ele) => {
        return (
          <Notes
            key={ele.titulo}
            title={ele.titulo}
            description={ele.description}
            createat={ele.createat}
          />
        );
      })}
    </div>
  );
};

export default ToDo;
