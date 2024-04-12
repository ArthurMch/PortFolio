import Project_Container from './Project_Container.jsx';

  // I M A G E S //

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
import { TbSql } from "react-icons/tb";
  // I C O N E S 


export default function Project() {
  return (
    <><div id='projects' className=''></div>
      <div  className='bg-indigo-800 lg:m-20 lg:pb-10 max-w-full rounded-xl'>

        <div className='grid justify-items-center'>
          <h1  className='text-3xl font-mono uppercase text-white m-8 mt-10'>Projects</h1>
        </div>

        <div>

          {/* rangé 1 */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>
      
            {/* rectangle 1 gauche */}
            <Project_Container 
              title="Minesweeper"
              icones={[<FaPython/>]}
              description="Originally coded in Python with an object-oriented approach, and later adapted to React to make it playable from my portfolio."
              image={Demineur}
              playable={false}
              lien="https://github.com/ArthurMch/minesweeper"
              fenetre={true}
            />
            
            {/* rectangle 2 droite */}
            <Project_Container 
              title="Browser extension"
              icones={[<FaHtml5/>,<FaCss3/>,<RiJavascriptFill/>]}
              description="Chrome browser extension focused on accessibility according to RGAA standards."
              image={Extension}
              lien="https://github.com/ArthurMch/projet-collectif-extension-de-navigateur-neis-arthur-clara"
            />
            
          </div>

          <hr className=''/>
          
          {/* rangé 2 */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>

            {/* cube 3 gauche */}
            <Project_Container 
              title="furniture sales platform"
              icones={[<FaJava/>,<FaReact/>,<RiJavascriptFill/>,<FaHtml5/>,<FaCss3/>]}
              description="Creating the backEnd with Java and Spring boot framework. Concerning FrontEnd we choose React."
              image={Platform}
              lien="https://github.com/ArthurMch/projet-collectif-plateforme-de-vente-de-meubles-ventes-de-meubles"
            />
            
            {/* cube 4 droite */}
            
           
            <Project_Container 
              title="Enigma PICO 8"
              icones={[<SiLua/>]}
              description="Complete conception of the game with Pico-8 engine and LUA programming language."
              image={Pico}
              lien="https://www.lexaloffle.com/bbs/?tid=54873"
              playable={true}
            />
            
          </div>

           <hr/>

          {/* rangé 3 */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5' >

            {/* cube 5 gauche */}
            <Project_Container
              title="Social Media"
              icones={[<TbSql/>,<FaPhp/>,<FaHtml5/>,<FaCss3/>]}
              description="Designing a complete social network in PHP with secure authentication system and SQL database."
              image={Reseau}
              lien="https://github.com/ArthurMch/projet-collectif-reseau-social-php-arthur-khalil-neis-leo"
            />
            
            {/* cube 6 droite */}
            <Project_Container 
              title="Meteo data visualization"
              icones={[<FaHtml5/>,<FaCss3/>,<RiJavascriptFill/>]}
              description="Asynchronous connections to APIs for retrieving, processing, and presenting live information."
              image={Dataviz}
              lien="https://github.com/ArthurMch/projet-collectif-dataviz-dataviz-leo-sabri-arthur"
            />
             <div id="skills"></div>

          </div>
         

        </div>
      </div>
    </>
  )
}
