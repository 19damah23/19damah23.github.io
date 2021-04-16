import React from "react";
import image1 from "../image1.svg";

const Home = () => {
  return (
    <div className="h-screen">
      {/* <div className="h-full items-center"> */}
      <div className="sm:container md:container lg:container mx-auto flex justify-between items-center px-10 pt-44">
        <div className="w-2/4">
          <h1 className="font-bold text-7xl">Fullstack Web Developer</h1>
          <p className="my-6 text-lg">
            Hi, I'am Muchamad Agus Hermawan. A passionate Fullstack Web
            Developer based in Indonesia
          </p>
            <a className="border px-4 py-2 border-white bg-white text-black rounded-sm hover:text-white hover:bg-transparent hover:border-white" href="https://api.whatsapp.com/send?phone=6282131571915">Contact Me</a>
        </div>
        <div className="w-2/4">
          <img src={image1} className="h-4/5 w-4/5 mx-auto" alt="logo" />
        </div>
      </div>
      <div className="sm:container md:container lg:container mx-auto flex justify-between items-center px-10 pt-28">
        <div className="flex">
          <p className="mr-2">
            <a href="https://github.com/19damah23">Github</a>
          </p>
          <p className="mr-2">|</p>
          <p>
            <a href="https://www.linkedin.com/in/muchamad-agus-hermawan-15a82a174/">
              LinkedIn
            </a>
          </p>
        </div>
        <div>
          <p>muchamadagush@gmail.com</p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
