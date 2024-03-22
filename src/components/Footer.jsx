import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";


export default function Footer() {
  return (
    <div className="flex justify-center bg-black text-white items-center text-xl py-5">
     Build with React&nbsp;<FaReact/>&nbsp;and Tailwind&nbsp;<SiTailwindcss />
    </div>
  )
}
 