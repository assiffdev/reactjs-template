import React from "react";
import "../styles/App.css";
import AppHeader from "./AppHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Footer from "./AppFooter";
import Contact from "./Contact";
import Services from "./Services";
import WhyUs from "./WhyUs";
function App() {
  return (
    <div id="main-contents">
      <Router>
        <AppHeader />
        <div id="body-contents">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/services/" component={Services} />
            <Route path="/WhyUs/" component={WhyUs} />
            <Route path="/contact/" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
