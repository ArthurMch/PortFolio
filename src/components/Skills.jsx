import Skill_container from "./Skill_container";


export default function Skills() {
  return (
    <div className="bg-indigo-800 lg:m-20 lg:pb-10 max-w-full p-4 rounded-xl mt-8 mx-4 text-center ">
      
      <div className='grid justify-items-center rounded-xl p-4 bg-white'>
          <h1  className='text-3xl text-black  text-center'>Skills</h1>
      </div>


      <div>
    <Skill_container
    description={"Élève dans une école de développement Full Stack, je me distingue par une approche unique axée sur l'apprentissage continu. Cette école met l'accent sur la capacité à apprendre de manière autonome, ce qui me rend adaptable à n'importe quel langage de programmation. Grâce à cette philosophie, je développe non seulement mes compétences techniques, mais aussi ma capacité à m'adapter rapidement à l'évolution constante du domaine de la programmation."}
    list={<ul><li>react</li><li>js</li><li>python</li></ul>} />
    
      </div>
    </div>
    

  )
}
