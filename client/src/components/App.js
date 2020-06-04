import React from "react";
import logo from "../logo.svg";
import { Layout, Menu } from "antd";
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

import "./App.css";

import Header from "./header/header";
import Main from "./main/main";

const { Content } = Layout;

function App() {
  return (<Router>
    <Layout className="layout" style={{ backgroundColor: "#F4F5F7" }}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/login">
          <h1>AUTH</h1>
        </Route>
        <Route path="/add">
          <h1>Add Posts</h1>
        </Route>
      </Switch>
    </Layout>
    </Router>
  );
}

export default App;
