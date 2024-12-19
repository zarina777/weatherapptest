import rain from "/weathers/rain.svg";

const WeekCard = () => {
  return (
    <div className="rounded-xl bg-[#4793FF33] p-3">
      <h3 className="text-lg font-semibold dark:text-white">Пн</h3>
      <span className="text-[#939CB0] text-sm mb-3">28 авг</span>
      <img className="max-w-12 w-full mb-3" src={rain} alt="" />
      <p className="text-lg font-semibold dark:text-white">+18°</p>
      <span className="text-[#939CB0] text-sm">+15°</span>
      <p className="text-[#939CB0] text-sm">Облачно</p>
    </div>
  );
};

export default WeekCard;
