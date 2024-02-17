import AwardCupIcon from "../../../assets/icons/AwardCupIcon";

function Advert() {
  return (
    <div className="justify-between flex items-center gap-5 px-7 h-[120px] bg-[#CDE53D] border-2 border-lightGreen drop-shadow-md">
      <AwardCupIcon />
      <p className="text-mainBlue font-bold">Go Pro Upgrade Now</p>

      {/* price box */}
      <div className="bg-primaryBlue w-16 flex items-center justify-center self-start h-16 -mt-1">
        <p className="font-bold text-yellow-400 text-lg">$1</p>
      </div>
    </div>
  );
}

export default Advert;
