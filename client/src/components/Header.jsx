import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ui/ThemeToggle";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: HomeIcon },
  { to: "/students", label: "Students", icon: UserGroupIcon },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 w-full bg-white/70 dark:bg-[#0f0a07]/70 backdrop-blur border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-orange_peel-600"
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
            </div>
          <Link to="/dashboard">
            <h1 className="text-xl font-bold text-orange_peel-500 tracking-wide">
              🎓 Estudiantify
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="w-64 bg-white dark:bg-[#1a120a] border-r border-white/20 p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-orange_peel-600">📘 Menu</h2>
              <button onClick={() => setIsOpen(false)}>
                <XMarkIcon className="w-5 h-5 text-orange_peel-600" />
              </button>
            </div>
            <nav className="space-y-3">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-all ${
                      isActive
                        ? "bg-orange_peel-100 text-orange_peel-700 dark:bg-orange_peel-500/20"
                        : "text-gray-700 dark:text-white hover:bg-orange_peel-50/30"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
          <div
            className="flex-1 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default Header;
