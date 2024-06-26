import { useEffect, useState } from "react"



export default function LooseButton({isVisible, onRestart, msg}) {
  
  const [isVisibleInternal, setIsVisibleInternal] = useState(isVisible);

  // Effet de surveillance de la variable isVisible provenant de la Prop
  useEffect(() => {
    setIsVisibleInternal(isVisible);
  }, [isVisible]);

  // Fonction pour gérer le clic sur le bouton
  const handleToggleClick = () => {
    setIsVisibleInternal((prevState) => !prevState);
  };
  
  
  return (
    
    <div className={(isVisibleInternal ? "visible" : "invisible") + " absolute left-0 right-0 flex font-mono p-2 content-center justify-center items-center z-10"}>
    <div className="flex bg-indigo-400 border-4 border-black rounded-xl  flex-col">
    <h1 className="text-white text-xl text-center">{msg}</h1> 
    <div className="flex flex-row">
    <button onClick={onRestart} className='bg-white flex border border-black m-2 text-indigo-600 px-4 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
      restart game
    </button>
    <button onClick={handleToggleClick} className='bg-white border border-black flex text-indigo-600 px-4 m-2 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
      Hide contents
    </button>
    </div>
    </div>
  </div>
  )
}
