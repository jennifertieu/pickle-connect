import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-1 bg-indigo-500 p-4 text-white">
      <div className="text-bold text-lg">PickleConnect</div>
      <ul className="flex gap-4">
        <li>Map</li>
        <li>Profile</li>
        <li>Connections</li>
      </ul>
    </nav>
  );
};

export default Navbar;
