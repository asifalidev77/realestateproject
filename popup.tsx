import React from 'react';

interface PopupProps {
  show: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="w-full h-full absolute backdrop-filter backdrop-blur-md backdrop-brightness-75">
      <div className="bg-white relative p-4">
        <h1 className="font-bold text-[35.17px] leading-[42.57px] text-[#2d2d2d]">
          Search <span>properties</span> for <span>sale</span> in <span>Pakistan</span>
        </h1>
        <button className="border-1 rounded-[8.15px] text-[#ababab]">Projects</button>
        <button>Buy</button>
        <button>Rent</button>
        <img
          src="/Vector.png"
          alt="close button"
          className="absolute top-0 right-0 cursor-pointer"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Popup;