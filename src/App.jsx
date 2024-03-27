import React from "react";
// import CounterApp from "./components/counter/ounterApp"
import Youtube from "./Youtube";
import CounterApp from "./components/counter/CounterApp";
import {
  Card,
  BgColorChanger,
  PasswordGenerator,
} from "./components/projects/Projects";

// import from "./components/props/Props";
import "./index.css";
import PasswordCreator from "./components/random-password-generator/PasswordCreator";
// import CurrencyConverter from "./components/currency-converter-app/CurrencyConverter";
import CurrencyConverter from "./components/currency-converter-app/CurrencyConverter";

function App() {
  // const username = "Tunde"s
  /*
  const areactElement = React.createElement(
    "a", 
    {href: "https://google.com", target: "_blank"},
    "click to visit google",
    "Lukman",  
  )
  */

  return (
    <>
      {/* counter app */}
      {/* <CounterApp /> */}
      {/* <br /> <hr /> <br /> */}
      {/* <Card username="taye" country="Nigeria"/> */}
      {/* <Card username="Lukman" profileImg="https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg"/> */}

      {/* <br /><hr /> <br /> */}
      {/* <BgColorChanger /> */}

      {/* <PasswordGenerator /> */}
      {/* <br /><hr /> <br /> */}

      <PasswordCreator />

      {/* <CurrencyConverter /> */}
    </>
  );
}

export default App;
