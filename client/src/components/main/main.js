import React from "react";
import { Layout, Menu } from "antd";
import RightPanel from "../rightPanel";
import LeftPanel from "../leftPanel";

const { Content } = Layout;

function Main() {
  return (
    <Content className="container mx-auto px-12">
      <div class="flex flex-wrap pt-3">
        <LeftPanel />
        <RightPanel />
      </div>
    </Content>
  );
}

export default Main;
