interface PropertyDetailsProps {
  type?: string;
  price: string;
  bed: string;
  bath: string;
  marala: string;
  location: string;
  addtime: string;
}
const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  type,
  price,
  bed,
  bath,
  marala,
  location,
  addtime,
}) => (
    <div className="mx-[17px]">
        <div className="flex justify-between mt-[20px]">
        <div><h3 className="text-[27px] text-[#2D2D2D] font-semibold">{price}</h3></div>
        <div><h4 className="text-[#2D2D2D] font-semibold">{type}</h4></div>
        </div>
        <div className="flex gap-x-[17px] mt-[13px]">
            <div className="flex"><h6 className="font-normal text-[13.5px] text-[#4E4E4E]"><img src="/bed-icon.svg" alt="bed-icon" className="w-[18px] h-[12px] inline-block mr-[10px]" /> {bed}</h6></div>
            <div className="flex"><h6 className="font-normal text-[13.5px] text-[#4E4E4E]"><img src="/bath-tub-icon.svg" alt="bed-icon" className="w-[18px] h-[12px] inline-block mr-[10px]" />{bath}</h6></div>
            <div className="flex"><h6 className="font-normal text-[13.5px] text-[#4E4E4E]"><img src="/arrowDiagnol.svg" alt="bed-icon" className="w-[18px] h-[12px] inline-block mr-[10px]" />{marala}</h6></div>
        </div>
        <div><p className="font-normal mt-[7px] text-[13px] text-[#4E4E4E]">{location}</p></div>
        <div><p className="font-normal my-[7px] text-[13px] text-[#4E4E4E]">{addtime}</p></div>
    </div> 
);
export default PropertyDetails;


