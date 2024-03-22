import {BsGithub, BsLinkedin, BsDiscord} from 'react-icons/bs';
import HeroPic from '../assets/photoCv.jpeg';
import { IoIosMail } from "react-icons/io";

const Hero = () => { 
  return (
    <section  id="portfolio" className='flex justify-arround lg:h-screen items-center p-10  lg:flex-row flex-col ssm:space-y-10 text-white'>
        <div className='lg:w-1/3 ssm:w-fit'>

          <h1 className='text-6xl pt-16'>Arthur Michaïlesco</h1><hr/>
          <p className='mt-10 text-slate-300 font-sans'>
          Curently in a full-stack developer training (Ada tech school).<br/>I'm actively seeking for an internship for July 2024.
          </p>
        </div>
        <div className='lg:w-1/3 lg:p-10'>
           <img src={HeroPic} alt=''
           className='rounded-full border-8 border-white w-full'/>
        </div>
        <div className='w-1/3 ssm:w-fit '>
          <p className='text-4xl mb-4'>About Me</p>
          <p className='text-slate-300'>
          j’aime travailler en équipe et résoudre des problèmes, affinité
          particulière pour le backend.
          </p>
          <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
            Show more...
          </button>


          {/* liens utils */}
          <div className='flex mt-5 space-x-4 cursor-pointer '>

            <a href='https://github.com/ArthurMch' target='blank'>
              <BsGithub size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
            </a>

            <a href='https://www.linkedin.com/in/arthur-michailesco-38b36318b' target='_blank'>
              <BsLinkedin  size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
            </a>

            <a href="mailto:arthur.michailesco@gmail.com">
              <IoIosMail size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
            </a>

          </div>
        </div>

    </section>
  )
}

export default Hero