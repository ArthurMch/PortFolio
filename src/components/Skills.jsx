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
    
      <div>
        <Skill_container
          description= {"Élève dans une école de développement Full Stack particulière, je me distingue par une approche unique axée sur l'apprentissage continu. Cette école met l'accent sur la capacité à apprendre de manière autonome, ce qui me rend adaptable à n'importe quel langage de programmation. Grâce à cette philosophie, je développe non seulement mes compétences techniques, mais aussi ma capacité à m'adapter rapidement à l'évolution constante du domaine de la programmation."}
          icones= {[<FaJava className="mx-3"/>,<FaReact className="mx-3"/>,
          <FaPhp className="mx-3"/>,<FaHtml5 className="mx-3"/>,
          <FaPython className="mx-3"/>,<FaCss3 className="mx-3"/>]}
        />
      </div>

    </div>
    

  )
}
