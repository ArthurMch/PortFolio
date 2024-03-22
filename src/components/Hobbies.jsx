import Enigma from '../assets/enigma.jpeg.png';
import Guitare from '../assets/guitare.jpeg';
import Sport from '../assets/sport.jpeg';
import Cube from './Cube';

export default function Hobbies() {
  return (
    <div id='hobbies' className='bg-indigo-800 lg:m-20 max-w-full rounded-xl'>

        <div className='grid justify-items-center m-10'>
          <h1  className='text-3xl text-white mt-10'>Hobbies</h1>
        </div>

        <div>

          {/* rangé 1 */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>

            {/* cube 1 gauche */}
            <Cube 
              title="guitare"
              description="Chrome browser extension focused on accessibility according to RGAA standards."
              image={Guitare}
            />
            
            {/* cube 2 droite */}
            <Cube 
              title="Sport"
              description="Asynchronous connections to APIs for retrieving, processing, and presenting live information."
              image={Sport}
            />
            
          </div>
          </div>
    </div>
  )
};
 