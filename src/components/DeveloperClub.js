import React from "react";

const DeveloperClub = () => {
  return (
    <section className="py-8">
      <h1 className="underline text-xl text-orange-500 pl-4">Developer Club</h1>
      <ul className="mt-4">
        <li className="px-4 py-2">
          <h1 className="mb-2">1.Full-Stack Developer</h1>
          <img src="./images/full_stack_banner.avif" alt="full-stack" />
        </li>
        <li className=" p-4">
          <h1 className="mb-2">2.Android Developer</h1>
          <img src="./images/android_banner.svg" alt="android-stack" />
        </li>
        <li className="p-4">
          <h1 className="mb-2">3.Blockchain Developer</h1>
          <img src="./images/blockchain-banner.png" alt="full-stack" />
        </li>
        <li className="p-4">
          <h1 className="mb-2">4.DevOps Developer</h1>
          <img src="./images/devops_banner.png" alt="devops-stack" />
        </li>
      </ul>
    </section>
  );
};

export default DeveloperClub;
