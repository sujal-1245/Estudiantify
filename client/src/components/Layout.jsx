import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-[#0e0a07] dark:via-[#1a120a] dark:to-[#0e0a07] text-gray-900 dark:text-white font-inter">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 lg:p-10 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
