import Guitare from '../assets/guitare.jpeg';
import Sport from '../assets/sport.jpeg';
import HobbieContainer from './HobbieContainer';



export default function Hobbies() {
  return (
    <div className='bg-indigo-800 mx-auto col-auto justify-center w-fit rounded-xl m-4 pb-4 lg:my-20'>

        <div className=' items-center m-8 p-1'>
          <h1  className='text-3xl font-mono uppercase text-center rounded-lg text-white mt-10'>Hobbies</h1>
        </div>

        <div className='mx-4'> 
            {/* container 1*/}
            <HobbieContainer 
              title="music"
              description="An enthusiast of electric and folk guitar, I draw inspiration from iconic bands such as Radiohead, Metallica, and Nirvana."
              image={Guitare}
            />
            
            {/* container 2*/}
            <HobbieContainer
              title="Sport"
              description="I am an avid practitioner of calisthenics and ring training, and I also indulge in rock climbing and badminton."
              image={Sport}
            />
          </div>
    </div>
  )
};
 