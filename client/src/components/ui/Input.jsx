import React from "react";

const Input = ({ label, name, value, onChange, type = "text", ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="px-3 py-2 rounded-md bg-white/80 dark:bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-princeton_orange-500 dark:focus:ring-orange_peel-400 text-gray-900 dark:text-white"
        required
        {...props}
      />
    </div>
  );
};

export default Input;
