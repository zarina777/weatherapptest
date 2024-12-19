import React, { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStore from "../../store/store";
import logo from "/logo.svg";
const SelectCity = () => {
  const [city, setCity] = useState("Tashkent");
  const inputRef = useRef(null);
  const { setWeather } = useStore();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (!city.trim()) return;

    const fetchWeatherConditions = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=ac54d64e1ffb4bc386e200324241812&q=${city}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        console.log(data);
        if (data.error) {
          toast.error("City not found! Please try again.");
          return;
        }

        setWeather(data);
        setTimeout(() => setLoader(false), 500);
      } catch (error) {
        toast.error("City not found! Please try again.");
        setLoader(false);
      }
    };

    fetchWeatherConditions();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCity = inputRef.current.value.trim();
    if (enteredCity) {
      setCity(enteredCity);
    } else {
      toast.error("Please enter a city name!");
    }
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#c6deff] dark:bg-[#151515] z-20 flex justify-center items-center ${
          loader ? "flex" : "hidden"
        }`}
      >
        <img src={logo} alt="logo" />
      </div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Выбрать город"
          className="w-full px-4 py-2 border-none rounded-lg outline-none bg-[#4793FF33] text-[#242424] dark:text-[#fff] placeholder:text-black dark:placeholder:text-white"
        />
      </form>
    </div>
  );
};

export default SelectCity;
