import "./page.css";
import Navbar from "./navbar";
import React from "react";

export default function Home() {
  return (
    <main className="">
      <div className=" w-[80vw] h-[4vh] mx-auto my-10">
        <Navbar />
      </div>
      {/* <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-[#101019] to-[#19194e]"></div> */}
    </main>
  );
}
