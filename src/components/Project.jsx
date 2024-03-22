import Cube from './Cube.jsx';

  // I M A G E S //
import Enigma from '../assets/enigma.jpeg.png';
import Platform from '../assets/platform.jpeg';
import Pico from '../assets/pico.png';
import Extension from '../assets/extension.jpeg';
import Dataviz from '../assets/dataviz.jpeg';
import Reseau from '../assets/reseau.jpeg';
import Demineur from '../assets/demineur.jpeg';
  // I M A G E S //

  // I C O N E S 
import { FaJava, FaReact, FaPhp, FaHtml5, FaPython, FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiLua } from "react-icons/si";
  // I C O N E S 


export default function Project() {
  return (
    <><div id='projects' className=''><hr/></div>
      <div  className='bg-indigo-800 lg:m-20 max-w-full rounded-xl'>

        <div className='grid justify-items-center m-10'>
          <h1  className='text-3xl text-white mt-10'>Projects</h1>
        </div>

        <div>

          {/* rangé 1 */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>

            {/* cube 1 gauche */}
            <Cube 
              title="Browser extension"
              icones={[<FaHtml5/>,<FaCss3/>,<RiJavascriptFill/>]}
              description="Chrome browser extension focused on accessibility according to RGAA standards."
              image={Extension}
            />
            
            {/* cube 2 droite */}
            <Cube 
              title="Meteo data visualization"
              icones={[<FaHtml5/>,<FaCss3/>,<RiJavascriptFill/>]}
              description="Asynchronous connections to APIs for retrieving, processing, and presenting live information."
              image={Dataviz}
            />
            
          </div>

          <hr className=''/>
          
          {/* rangé 2 */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>

            {/* cube 3 gauche */}
            <Cube 
              title="Online furniture sales platform"
              icones={[<FaJava/>,<FaReact/>,<RiJavascriptFill/>,<FaHtml5/>,<FaCss3/>]}
              description="Creating the backEnd with Java and Spring boot framework. Concerning FrontEnd we choose React."
              image={Platform}
            />
            
            {/* cube 4 droite */}
            
           
            <Cube 
              title="Enigma PICO 8"
              icones={[<SiLua/>]}
              description="Complete conception of the game with Pico-8 engine and LUA programming language."
              image={Pico}
              lien="https://www.lexaloffle.com/bbs/?tid=54873"
            />
            
          </div>

           <hr/>

          {/* rangé 3 */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>

            {/* cube 5 gauche */}
            <Cube 
              title="Browser extension"
              icones={[<FaHtml5/>,<FaCss3/>,<RiJavascriptFill/>]}
              description="Chrome browser extension focused on accessibility according to RGAA standards."
              image={Reseau}
            />
            
            {/* cube 6 droite */}
            <Cube 
              title="Minesweeper"
              icones={[<FaPython/>]}
              description="Designing the logic using Python with an object-oriented approach and the Tkinter library for the graphical interface."
              image={Demineur}
            />
            

          </div>

        </div>
      </div>
    </>
  )
}
