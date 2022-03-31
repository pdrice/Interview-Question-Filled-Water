import React, {useState} from "react";
import Bricks1 from "./Bricks1";
import Bricks2 from "./Bricks2";
import Bricks3 from "./Bricks3";
import Header from "./Header";
import "./index.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <Bricks1/>
      <Bricks2/>
      <Bricks3/>
    </div>
  );
}

export default App;
