import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./pages/detail";
import Home from "./pages/home";
import Write from "./pages/write";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={Detail} />
          <Route path="/write" component={Write} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
