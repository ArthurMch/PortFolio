import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FiFlag } from "react-icons/fi";
import { BiErrorCircle } from 'react-icons/bi';
import { GiSmartphone } from 'react-icons/gi';

export default function Cell({ details, updateFlag, revealcell }) {


  // Handling clicks and updating the cell accordingly
  const handleClick = () => {
    if (details.value === "X") {
      revealcell(details.x, details.y);
      
    } else {
      revealcell(details.x, details.y);
    }
  };

  // Updating flags and providing visual feedback
  const handleRightClick = (event) => {
    event.preventDefault();
    updateFlag(event, details.x, details.y);
  };

  // Generating class names based on properties of details object
  const cellClasses = `w-10 h-10 border border-indigo-800  rounded-md font-bold text-black flex items-center 
  justify-center text-xs uppercase select-none pointer-events-auto cursor-pointer relative overflow-hidden 
  transition duration-300 transform ${
    details.revealed && details.value !== 0
      ? details.value === "X"
        ? "bg-red-600"  // cell avec mine 
        : "bg-blue-500" //  cell decouverte avec un numero
      : details.revealed && details.value === 0
      ? "bg-white" // cell decouverte et vide avec 0 mine autour
      : "bg-slate-400" // cell pas decouverte
  }`;

  // Displaying contents of the cell with proper styling
  return (
    <div className={cellClasses} onClick={handleClick} onContextMenu={(e) => handleRightClick(e)}>
  {!details.revealed && details.flagged ? (
    "🚩"
  ) : details.revealed && details.value !== 0 ? (
    details.value === "X" ? (
      "💣"
    ) : (
      String(details.value)
    )
  ) : (
    ""
  )}
</div>
  );
}