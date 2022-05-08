import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-black h-20 container flex mx-auto items-center justify-between px-8 py-2">
      <img src="/images/logo.png" alt="logo" className="h-20 w-20" />
      <button className="text-white bg-orange-500 px-4 py-1 rounded-full hover:bg-orange-600 transition-all duration-300 ">
        REGISTER
      </button>
    </nav>
  );
};

export default Navigation;
