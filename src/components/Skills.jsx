import Skill_container from "./Skill_container";
import Learn from '../assets/learn.jpeg'

  // I C O N E S 
  import { FaJava, FaReact, FaPhp, FaHtml5, FaPython, FaCss3 } from "react-icons/fa";
  import { RiJavascriptFill } from "react-icons/ri";
  import { SiLua } from "react-icons/si";
  import { TbSql } from "react-icons/tb";
    // I C O N E S 


export default function Skills() {



  return (
    
    <div className="bg-white lg:m-20 max-w-full p-4 rounded-xl mt-8 mx-3 text-center ">
    
      <div >
        <Skill_container
          description= {"I study at a distinctive full stack development school where I stand out with my unique approach centered on continuous learning. This school emphasizes the ability to learn independently, making me versatile across any programming language. By adhering to this philosophy, I not only enhance my technical skills but also improve my capacity for quick adaptation to the ever-changing landscape of programming."}
          icones= {[<FaJava className="mx-3"/>,<FaReact className="mx-3"/>,
          <FaPhp className="mx-3"/>,<FaHtml5 className="mx-3"/>,
          <FaPython className="mx-3"/>,<FaCss3 className="mx-3"/>]}
        />
      </div>

    </div>
    

  )
}
