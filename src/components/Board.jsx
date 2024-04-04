// "💣" // 
import React, { Fragment, useEffect } from "react";
import { useState, useRef } from "react";
import CreateBoard from '../utils/CreateBoard';
import Cell from "./Cell";
import { revealed } from "../utils/Reveal";
import LooseButton from "./LooseButton";




function Board() {
  const [grid,setGrid]=useState([]);
  const [nonMinecount,setNonMinecount]=useState(0);
  const [mineLocation,setmineLocation]=useState([]);

  const [nowVisible, setNowVisible]=useState(false)

  const handleToggleClick = () => {
    setLooseButton((prevState) => !prevState);
  };

  


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
        setGrid(newGrid);
        setNowVisible(true);
        
    }
    else{
        let revealedboard=revealed(newGrid, x, y, nonMinecount);
        setGrid(revealedboard.arr);
        setNonMinecount(revealedboard.newNonMines);
        if(revealedboard.newNonMines == 0){
          alert("you won !");
          freshBoard();
        }

    }
  }
  
  return (
    <Fragment>
      <div className="parent  my-2  h-auto">
        <div className="text-white rounded-lg p-2 bg-indigo-400  text-center  ">Number of Non-mines left: {nonMinecount}</div>

        <div  className="flex flex-col justify-center">
          <LooseButton isVisible ={nowVisible} onRestart={freshBoard}/>
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
  )
  
}
export default Board;


