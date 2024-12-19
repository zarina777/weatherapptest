import logo from "/logo.svg";
import { RiContrastDropFill } from "react-icons/ri";
import SelectCity from "./components/Select";
import useStore from "./store/store";
import { useEffect } from "React";
import WCard from "./components/WCard";
import TCard from "./components/TCard";
import WeekCard from "./components/WeekCard";

export default function App() {
  const { toggleDarkMode, isDarkMode, weather } = useStore();
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      document.body.classList.add("darkMode");
    } else {
      root.classList.remove("dark");
      document.body.classList.remove("darkMode");
    }
  }, [isDarkMode]);
  useEffect(() => {
    (async () => {
      const url =
        "https://ai-weather-by-meteosource.p.rapidapi.com/time_machine?lat=37.81021&lon=-122.42282&date=2021-08-24&units=auto";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "f4c32abd18msh5af528f77f93bd7p1cb793jsne349e7327d44",
          "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    })();
  });
  return (
    <>
      {/* Container */}
      <div className="mx-auto max-w-[1240px] w-full px-5">
        {/* Navbar */}
        <div className="flex items-center justify-between mb-5 sm:flex-row flex-col">
          {/* logo */}
          <div className="flex items-center gap-5  my-5">
            <img className="max-w-16" src={logo} alt="logo" />
            <span className="uppercase text-[#4793FF] text-lg font-bold">
              vue weather
            </span>
          </div>
          {/* end logo */}

          {/* controls */}
          <div className="flex  items-center gap-5">
            <RiContrastDropFill
              onClick={toggleDarkMode}
              className="text-[#4793FF] text-3xl cursor-pointer hover:opacity-[.9]"
            />
            <SelectCity />
          </div>
        </div>
        {/* End Navbar */}
        {/* Main Weather Cards */}
        <div className="flex justify-between gap-10 lg:flex-row flex-col mb-11 ">
          <WCard obj={weather} />
          <TCard />
        </div>
        {/* End Main Weather Cards */}
        {/* WEEKS CNTRLS */}
        <div className="flex justify-between mb-7">
          <button className="bg-[#4793FF] dark:bg-[#4793FF33] leading-none text-white rounded-md py-2 px-5 text-lg">
            На неделю
          </button>
          <button className=" rounded-md leading-none py-2 px-5 text-lg shadow-custom dark:text-white">
            Отменить
          </button>
        </div>
        {/* END WEEKS CNTRLS */}
        {/* WEEKS */}
        <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-5 shadow-custom rounded-3xl mb-9 p-5 overflow-hidden">
          <WeekCard />
          <WeekCard />
          <WeekCard />
          <WeekCard />
          <WeekCard />
          <WeekCard />
          <WeekCard />
        </div>
        {/* End Container */}
      </div>
    </>
  );
}
