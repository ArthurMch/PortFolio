// "💣" // 
import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import CreateBoard from '../utils/CreateBoard';
import Cell from "./Cell";
import { revealed } from "../utils/Reveal";
import LooseButton from "./LooseButton";




function Board({isVisible}) {
  const [grid,setGrid]=useState([]);
  const [nonMinecount,setNonMinecount]=useState(0);
  const [mineLocation,setmineLocation]=useState([]);
  const [messageLorW, setmessageLorW]=useState("");
  const [nowVisible, setNowVisible] = useState(false);
  
  const [visible, setVisible] = useState(isVisible);




  const freshBoard = () => {
          const newBoard=CreateBoard(10,10,10);
          setNonMinecount(10*10-10);
          setmineLocation(newBoard.mineLocation);
          setGrid(newBoard.board);
          setNowVisible(false)
      }

    
  
  useEffect(()=>{
      freshBoard();
  },[]);
  
  const updateFlag=(e,x,y)=>{
      e.preventDefault();
      // deep copy of the object
      let newGrid=JSON.parse(JSON.stringify(grid));
      newGrid[x][y].flagged=true;
      setGrid(newGrid);
  }


  //revealing all cells and the minelocation with all mines when clicked on mines
  const revealcell=(x,y)=>{
    let newGrid=JSON.parse(JSON.stringify(grid));
    if(newGrid[x][y].value==="X"){
        
        // Afficher toutes les mines en même temps
        for(let i = 0 ; i < mineLocation.length ; i++){
            newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed=true;
        }
        setmessageLorW("You lost !");
        setGrid(newGrid);
        setNowVisible(true);
        
    }
    else{
        let revealedboard=revealed(newGrid, x, y, nonMinecount);
        setGrid(revealedboard.arr);
        setNonMinecount(revealedboard.newNonMines);
        if(revealedboard.newNonMines == 0){
          setmessageLorW("You won !");
          setNowVisible(true);
        }

    }
  }

  const clickX = () => {
    freshBoard();
    setVisible(false);
  };
  
  return (
    <div id="full_demineur" className={(visible ? "visible" : "invisible") + " fixed w-screen h-screen top-0 left-0 flex flex-col items-center justify-center z-10 "}>
      
      <div className="fixed w-screen h-screen  opacity-85 bg-indigo-400"></div>
    <Fragment>
    <button onClick={clickX} className="fixed right-4 top-10 bg-white m-10 p-5 rounded-lg ">X</button>
        <div className="bg-white p-5 rounded-lg border-2 border-black z-20">
        <div className="text-white rounded-lg mb-4 p-2 bg-indigo-400 text-center  ">{nonMinecount} remaining cells are free of mines.</div>

        <div  className="flex flex-col justify-center">
          <LooseButton isVisible ={nowVisible} onRestart={freshBoard} msg={messageLorW}/>
          {grid.map((singlerow, index1) => {
            return (

              <div className="flex flex-row rounded-xl justify-center" key={index1}>
                
                {singlerow.map((singlecol, index2) => {
                  return <Cell key={index2} details={singlecol} updateFlag={updateFlag} revealcell={() => revealcell(index1, index2)} />
                })}
                
              </div >
            )
          })}
        </div>
      </div>
    </Fragment>
    
  
</div> 
 )
  
}
export default Board;


