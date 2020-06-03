import React from "react";
import logo from "../logo.svg";
import { Layout, Menu } from "antd";
import "./App.css";

import Header from "./header/header";
import Main from "./main/main";

const { Content } = Layout;

function App() {
  return (
    <Layout className="layout" style={{backgroundColor: "#F4F5F7"}}>
      <Header />
      <Main />
    </Layout>
  );
}

export default App;
