import React from "react";
import "../styles/App.css";
import AppHeader from "./AppHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Footer from "./AppFooter";
function App() {
  return (
    <div id="main-contents">
      <Router>
        <AppHeader />
        <div id="body-contents">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/" component={About} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
