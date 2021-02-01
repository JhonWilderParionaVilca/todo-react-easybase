import React from "react";
import { EasybaseProvider } from "easybase-react";
import ebconfig from "./ebconfig";

import { ToDo, Button } from "./components";

function App() {
  const config = JSON.parse(ebconfig);
  return (
    <main className="App" style={{ display: "flex", justifyContent: "center" }}>
      <EasybaseProvider ebconfig={config}>
        <ToDo />
        <Button />
      </EasybaseProvider>
    </main>
  );
}

export default App;
