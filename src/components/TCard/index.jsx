import temp from "/temps/temp.svg";
import easy from "/temps/easy.svg";
import wind from "/temps/wind.svg";
import pressure from "/temps/pressure.svg";

const TCard = () => {
  return (
    <div className="lg:w-[70%]  shadow-custom rounded-3xl p-5  relative overflow-hidden">
      <img
        src="/bgcloud.png"
        className="absolute top-0 right-0 w-[70%] z-[-1]"
      />
      <ul className="flex gap-5 flex-col justify-between h-full md:px-6 md:py-4 ">
        <li className="flex gap-5 items-center">
          <div className="max-w-10 w-full shadow-md shadow-blue-500/20 flex items-center justify-center rounded-[50%] aspect-square">
            <img src={temp} />
          </div>
          <p className="text-[#939CB0] min-w-28">Температура</p>
          <p className="dark:text-white">20° - ощущается как 17°</p>
        </li>
        <li className="flex gap-5 items-center">
          <div className="max-w-10 w-full shadow-md shadow-blue-500/20 flex items-center justify-center rounded-[50%] aspect-square">
            <img src={pressure} />
          </div>
          <p className="text-[#939CB0] min-w-28">Давление</p>
          <p className="dark:text-white">765 мм ртутного столба - нормальное</p>
        </li>
        <li className="flex gap-5 items-center">
          <div className="max-w-10 w-full shadow-md shadow-blue-500/20 flex items-center justify-center rounded-[50%] aspect-square">
            <img src={easy} />
          </div>
          <p className="text-[#939CB0] min-w-28">Осадки</p>
          <p className="dark:text-white">Без осадков</p>
        </li>
        <li className="flex gap-5 items-center">
          <div className="max-w-10 w-full shadow-md shadow-blue-500/20 flex items-center justify-center rounded-[50%] aspect-square">
            <img src={wind} />
          </div>
          <p className="text-[#939CB0] min-w-28">Ветер</p>
          <p className="dark:text-white">3 м/с юго-запад - легкий ветер</p>
        </li>
      </ul>
    </div>
  );
};

export default TCard;
