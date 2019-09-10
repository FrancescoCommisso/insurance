import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// import components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  let [title, changetitle] = useState("NO TITLE YET");

  useEffect(() => {
    console.log("component did mount() ");
    fetch("/test", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(async res => {
      let goodRes = await res.json();
      console.log(goodRes);
      changetitle((title = goodRes.message));
    });
  });

  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
