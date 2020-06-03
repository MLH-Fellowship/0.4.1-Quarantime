import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const navBarMenus = [
  {
    label: "Login",
    link: "/login"
  },
  {
    label: "Add Posts",
    link: "/add"
  },

];

function WrapperHeader() {
  return (
    <nav className="p-2 px-12" style={{ backgroundColor: "#0052CC" }}>
      <div className=" flex items-center justify-between flex-wrap  px-12 container mx-auto">
        <div className="flex items-center flex-shrink-0  mr-6">
          <Link
            to="/"
            className="font-semibold text-xl text-white tracking-tight"
          >
            Quarantime
          </Link>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            {navBarMenus.map(menu => {
              return (
                <a
                  href={menu.link}
                  className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
                >
                  {menu.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default WrapperHeader;
