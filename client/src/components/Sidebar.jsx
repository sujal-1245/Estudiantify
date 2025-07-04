import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: HomeIcon },
  { to: "/students", label: "Students", icon: UserGroupIcon },
  ];

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white/40 dark:bg-[#1a120a]/30 backdrop-blur border-r border-white/20 px-4 py-6 space-y-6 hidden lg:block">
      <div className="text-2xl font-bold text-orange_peel-600 text-center">📘 Menu</div>
      <nav className="space-y-2">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all font-medium ${
                isActive
                  ? "bg-orange_peel-100 text-orange_peel-700 dark:bg-orange_peel-500/20"
                  : "text-gray-700 dark:text-white hover:bg-orange_peel-50/30"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
