import React from "react";
import "./App.css";
import NotFound from "pages/NotFound";
import AppBar from "components/AppBar";
import MasterPage from "pages/MasterPage";
import HelloWorld from "pages/HelloWorld";

const App = () => {
  return (
    <div className="App full-height">
      <AppBar />
      <HelloWorld/>
      {/* <MasterPage /> */}
    </div>
  );
};

export default App;
