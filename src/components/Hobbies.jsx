import Enigma from '../assets/enigma.jpeg.png';
import Guitare from '../assets/guitare.jpeg';
import Sport from '../assets/sport.jpeg';
import HobbieContainer from './HobbieContainer';
import Cube from './HobbieContainer';

export default function Hobbies() {
  return (
    <div id='hobbies' className=' lg:m-20 max-w-full rounded-xl'>

        <div className='grid justify-items-center m-10'>
          <h1  className='text-3xl text-white mt-10'>Hobbies</h1>
        </div>

        <div className='mx-4'> 
            {/* container 1*/}
            <HobbieContainer 
              title="musique"
              description="Passionné de guitare électrique et folk, je m'inspire de groupes emblématiques tels que Radiohead, Metallica et Nirvana."
              image={Guitare}
            />
            
            {/* container 2*/}
            <HobbieContainer
              title="Sport"
              description="Pratiquant assidu de calisthénie et d'entraînement avec des anneaux de gymnaste, je m'adonne également à l'escalade et au badminton."
              image={Sport}
            />
          </div>
    </div>
  )
};
 