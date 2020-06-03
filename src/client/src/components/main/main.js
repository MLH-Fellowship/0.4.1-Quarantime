import React from "react";
import { Layout, Menu } from "antd";
import LeftPanel from "../leftPanel";
import RightPanel from "../rightPanel";

const { Content } = Layout;

function Main() {
  return (
    <Content className="container mx-auto">
      <div class="flex flex-wrap pt-3">
        <LeftPanel />
        <RightPanel />
      </div>
    </Content>
  );
}

export default Main;
