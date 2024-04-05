


export default function LooseButton({isVisible, onRestart, msg}) {
  return (
    
    <div className={(isVisible ? "visible" : "invisible") + " absolute left-0 right-0 flex font-mono mx-auto content-center justify-center items-center z-10"}>
    <div className="flex bg-indigo-400 border-2 border-black  p-2 rounded-xl  flex-col">
    <h1 className="text-white text-xl text-center">{msg}</h1> 
    <div className="flex flex-row">
    <button onClick={onRestart} className='bg-white flex border-2 border-black m-2 text-indigo-600 px-5 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
      restart game
    </button>
    <button  className='bg-white border-2 border-black flex text-indigo-600 px-5 m-2 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
      Hide contents
    </button>
    </div>
    </div>
  </div>
  )
}
