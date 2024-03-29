import Skill_container from "./Skill_container";


  // I C O N E S 
  import { FaJava, FaReact, FaPhp, FaHtml5, FaPython, FaCss3 } from "react-icons/fa";

    // I C O N E S 


export default function Skills() {
  const skillsData = {
      icons: {
        Java: <FaJava className="mx-3" />,
        React: <FaReact className="mx-3" />,
        PHP: <FaPhp className="mx-3" />,
        HTML: <FaHtml5 className="mx-3" />,
        Python: <FaPython className="mx-3" />,
        CSS: <FaCss3 className="mx-3" />,
      },
      description:
        "Your long description goes here..." /* Or load it from another source */
    };

  return (
    <div className="bg-indigo-800 lg:m-20 max-w-full p-5 pb-8 lg:p-6 rounded-xl   text-center ">

      <div className='grid justify-items-center '>
          <h1 className='text-3xl font-mono uppercase text-white m-6 mb-10'>Skills</h1>
      </div>
      
    
      <div >
        <Skill_container
          description= {"I study at a distinctive full stack development school where I stand out with my unique approach centered on continuous learning. This school emphasizes the ability to learn independently, making me versatile across any programming language. By adhering to this philosophy, I not only enhance my technical skills but also improve my capacity for quick adaptation to the ever-changing landscape of programming."}
          icones= {skillsData.icons}
        />
      </div>
    <span id="hobbies"></span>
    </div>
    

  )
}
