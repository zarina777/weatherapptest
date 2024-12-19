import React from "react";
import sun from "/weathers/sun.svg";
const WCard = ({ obj }) => {
  return (
    <div className=" shadow-custom rounded-3xl p-6 overflow-hidden">
      <div className="flex justify-between gap-6 mb-6">
        <div className="">
          <h1 className="leading-none md:text-[96px] text-[70px] text-[#4793FF] mb-2">
            {Number.parseInt(obj.current.temp_c)}°
          </h1>
          <p className="dark:text-white text-5xl">Сегодня</p>
        </div>
        <img className="w-[110px] min-w-[90px]" src={sun} alt="sun" />
      </div>
      <p className="text-[#939CB0] text-xl mb-3">
        Время: {obj.current.last_updated.slice(-5)}
      </p>
      <p className="text-[#939CB0] text-xl capitalize">
        Город: {obj.location.name}
      </p>
    </div>
  );
};

export default WCard;
