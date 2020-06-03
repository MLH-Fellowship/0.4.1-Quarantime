import React from "react";

import { Layout, Menu } from "antd";

const { Header } = Layout;

const navBarMenus = [
  {
    label: "Docs",
    link: "./"
  },
  {
    label: "Examples",
    link: "./"
  },
  {
    label: "Blog",
    link: "./"
  }
];

function WrapperHeader() {
  return (
    <nav
      class="flex items-center justify-between flex-wrap p-2 px-12"
      style={{ backgroundColor: "#0052CC" }}
    >
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Quarantime</span>
      </div>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          {navBarMenus.map(menu => {
            return (
              <a
                href={menu.link}
                class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
              >
                {menu.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default WrapperHeader;
