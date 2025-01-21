"use client";
import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface PropertyProps {
  btnimg: StaticImageData | string;
  btntext: string;
  btnli1: string;
  btnli2: string;
  btnli3: string;
  btnli4: string;
  isSpecial?: string;
}

export default function BuyProperty({
  btntext,
  btnimg,
  btnli1,
  btnli2,
  btnli3,
  btnli4,
  isSpecial = "#ff9d00",
}: PropertyProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Update the ref type to match HTMLButtonElement
  const dropdownRef = useRef<HTMLButtonElement>(null);

  const dropDown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <button
          className="Rounded 
            rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100  relative"
          style={{ backgroundColor: isSpecial }}
          onClick={dropDown}
          ref={dropdownRef} // Correctly assign the ref to button
        >
          {btntext}{" "}
          <Image
            src={btnimg}
            width={10}
            height={5}
            alt="arrow-down"
            className="inline-block ms-[20px]"
          />
        </button>
        {isDropdownOpen && (
          <div className=" mt-2 w-[150px] md:w-[200px] absolute left-0 rounded-md shadow-lg bg-[white] ring-1 ring-black ring-opacity-5 z-50 overflow-hidden ">
            <ul>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {btnli1}
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {btnli2}
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {btnli3}
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {btnli4}
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
