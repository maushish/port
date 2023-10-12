"use client"
import { Menu } from "@material-tailwind/react"
import { FaBars } from "react-icons/fa";

import { useState } from "react"
export default function navbar(){
  const [menu,setMenu]=useState(false)
  const handleMenu=()=>{
      setMenu(!menu);
  }
  return (
    <header className=" bg-black z-20  backdrop-filter backdrop-blur-lg bg-opacity-30 fixed top-0 left-0 right-0 w-full h-[14vh] flex justify-between items-center">

      <h1 className=" text-5xl md:text-3xl font-user-bold text-white relative ml-[5vh] mb-4 z-20 ">Maushish.co</h1>
      <div className="flex w-full justify-end z-20 gap-10">
        <a className="px-6  md:hidden py-2 bg-blog rounded-xl text-4xl font-user-bold mb-4 ">Blogs</a>
        <a className="px-6 md:px-12 py-2 border-2 border-white rounded-xl text-4xl font-user-bold text-white mb-4 ml-7 mr-10 md:ml-3">Hire me</a>
      </div>
      <div >
        <FaBars size={20} color="white" onClick={handleMenu} className="md:hidden " />
      </div>

      <hr className="w-full mx-auto my-8   absolute top-[10vh]  z-10" />
    </header>
  );
}
