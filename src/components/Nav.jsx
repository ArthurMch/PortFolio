import { RxRocket } from "react-icons/rx";
import {AiOutlineClose} from"react-icons/ai";
import {HiMenuAlt1} from 'react-icons/hi';
import { useState } from "react";

const Nav = () => {

  const [toggle, setToggle] = useState(false);

  function openMenu(){
    setToggle(true);
  };

  function closeMenu(){
    setToggle(false);
  };

  return (
    <>
    <div className="fixed w-screen bg-black z-10">
    <div className="flex items-center justify-between p-5 lg:flex-row ">
        <div>
          <a href="#portfolio" className="text-white scroll-smooth font-mono text-3xl tracking-wider flex items-center"><RxRocket className="text-white"/>&nbsp;PORTFOLIO</a>
        </div>
        <div className="space-x-4">
          <div className="hidden lg:block space-x-2">
            <a href="#skills" className="text-white scroll-smooth hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
            <a href="#projects" className="text-white scroll-smooth hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</a>
            <a href="#hobbies" className="text-white scroll-smooth hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Hobbies</a>
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose onClick={closeMenu} size={30} className="text-white "/>
            ):(<HiMenuAlt1 onClick={openMenu} size={30} className="text-white cursor-pointer"/>)}
            
          </div>
        </div>
    </div>

      <div className="ssm:block lg:hidden">
        {toggle ? (
           <div className="flex  justify-center  mb-3">
          <ul>
            <li  className="text-white w-40 hover:bg-indigo-800 rounded-full text-center text-xl mb-2 cursor-pointer"><a href="#skills"> Skills </a></li>
            <li className="text-white hover:bg-indigo-800 rounded-full text-center text-xl mb-2 cursor-pointer"><a href="#projects" > Projects</a></li>
            <li  className="text-white hover:bg-indigo-800 rounded-full text-center text-xl mb-2 cursor-pointer"><a href="#hobbies"> Hobbies </a></li>
          </ul>
        </div>
        ):(
          <div></div>
        )}
        
      </div>
      </div>
    </>
  )
}

export default Nav


// https://www.youtube.com/watch?v=3LB6MiNq4nc&list=PL1HMn5V7V6NGNIblxjbNFXIz9O6pBOGid&index=4
// 2 min