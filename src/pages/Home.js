import React from "react";

const Home = () => {
  return (
    <>
      <section className="py-4 px-4">
        <h1 className="text-2xl font-bold mb-4">
          Hello, <br />
          <span className="text-xl text-orange-500">
            Welcome to MITAOE Developer.
          </span>
        </h1>
        <img src="./images/fl.png" alt="fl" />
      </section>
      <div className="bg-gray-200 py-8">
        <h1 className="text-black  text-xl px-2 mb-4">🚀 We learn about -</h1>
        <ul className="px-6 text-orange-500">
          <li className="flex mb-2">
            <img
              src="./images/check-mark.png"
              alt="check-mark"
              className="h-6 mr-2"
            />
            Programming and Data Structures
          </li>
          <li className="flex mb-2">
            <img
              src="./images/check-mark.png"
              alt="check-mark"
              className="h-6 mr-2"
            />
            Algorithms
          </li>
          <li className="flex mb-2">
            <img
              src="./images/check-mark.png"
              alt="check-mark"
              className="h-6 mr-2"
            />
            Operating System
          </li>
          <li className="flex mb-2">
            <img
              src="./images/check-mark.png"
              alt="check-mark"
              className="h-6 mr-2"
            />
            Databases
          </li>
          <li className="flex mb-2">
            <img
              src="./images/check-mark.png"
              alt="check-mark"
              className="h-6 mr-2"
            />
            Computer Networks
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
