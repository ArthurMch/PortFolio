import {BsGithub, BsLinkedin, BsDiscord} from 'react-icons/bs';
import HeroPic from '../assets/photoCv.jpeg';
import { IoIosMail } from "react-icons/io";
import { useState } from 'react';

const Hero = () => { 
  const [showContent, setShowContent] = useState(false);

  const moreInfo = (
    <div className="mt-4 text-slate-300 leading-relaxed">
      Before launching my company, I attended a specialized mathematics and mechanics school with a focus on engineering and design. However, as time passed, I found myself growing increasingly disenchanted with the fields of mechanical engineering and design. Despite this, I discovered that I had a strong aptitude for problem-solving, which led me to explore other avenues where I could apply my skills. It is now clear to me that coding is an ideal fit for my abilities and interests.

As I reflect on my career path, I realize that my strengths lie in analyzing complex situations, finding creative solutions, and developing efficient algorithms. 
    </div>
  );

  const handleToggleClick = () => {
    setShowContent((prevState) => !prevState);
  };

  
  return (
    
    <section  id="portfolio" className='flex justify-arround lg:h-screen items-center p-10  lg:flex-row flex-col space-y-10 text-white'>
        <div className='lg:w-1/3 '>

          <h1 className='text-6xl  pt-16'>Arthur Michaïlesco</h1><hr className='border-2 border-black'/>
          <p className='mt-10 text-slate-300 font-sans'>
          Currently enrolled in a FullStack program at Ada tech School (Bac +3 application developer). 
          Actively seeking an apprenticeship opportunity for one year starting June 2024. 
          
          </p>
        </div>
        <div className='p-4 w-full md:w-1/3 lg:w-1/3 lg:p-10'>
           <img src={HeroPic} alt=''
           className='rounded-full border-8 border-white w-full'/>
        </div>
        <div className='w-fit '>
          <p className='text-4xl mb-4'>About Me</p>
          <p className='text-slate-300'>
          Formerly an entrepreneur in the cleaning industry,
           I embarked on a year-long journey to Ireland to enhance my English proficiency. During this period, 
           I gained experience in the hospitality sector while self-teaching coding, igniting a newfound passion for software development.
            
          </p>

          <div className="container md:mx-0 lg:mx-0 mx-auto">
          {!showContent && (
            <button onClick={handleToggleClick} className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
              Show more...
            </button>
          )}
          {showContent && moreInfo}
          {showContent && (
            <button onClick={() => setShowContent(false)} className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
              Hide contents
            </button>
          )}
        </div>


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