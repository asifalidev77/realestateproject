import React from 'react';
interface PopupProps {
  show: boolean; // Controls the visibility of the popup
  onClose: () => void; // Function to close the popup
}
const Popup: React.FC<PopupProps> = ({ show, onClose }) => {
  if (!show) return null;
{
  export default function popup();
    return (
      <>
      <div className="w-full h-full absolute backdrop-filter backdrop-blur-md backdrop-brightness-75">
      <div className="bg-white relative">
        <h1 className="font-bold text-[35.17px] leading-[42.57] text-[#2d2d2d]">Search <span>properties</span> for <span>sale</span> in <span>Pakistan</span> </h1>
        <button className="border-1 rounded-[8.15px] text-[#ababab]">Projects</button>
        <button>Buy</button>
        <button>Rent</button> 
      </div>
      <div>
        <img src="/Vector.png" alt="closebutton"
        className="absolute"
         onClick={onClose} />
      </div>
      </div>
      </>
      );
      };