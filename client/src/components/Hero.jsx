import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { motion } from "motion/react";
const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  const {
    pickupDate,
    setPickupDate,
    returnDate,
    setReturnDate,
    navigate,
  } = useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(
      `/cars?pickupLocation=${pickupLocation}&pickupDate=${pickupDate}&returnDate=${returnDate}`
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-light text-center"
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-5xl font-semibold mb-8"
      >
        Luxury Cars on Rent
      </motion.h1>

      <motion.form
        initial={{ scale: 0.95, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 bg-white shadow-lg p-6 rounded-xl md:rounded-full max-w-[90vw] md:max-w-4xl w-full"
      >
        {/* Location Select */}
        <div className="flex flex-col text-left">
          <select
            required
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-48 md:w-56 text-gray-600"
          >
            <option value="">Pick up Location</option>
            {cityList.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Pickup Date */}
        <div className="flex flex-col text-left">
          <label htmlFor="pickup-date" className="text-sm text-gray-600 mb-1">
            Pick-up date
          </label>
          <input
            type="date"
            id="pickup-date"
            min={new Date().toISOString().split("T")[0]}
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-48 md:w-56 text-gray-600"
            required
          />
        </div>

        {/* Return Date */}
        <div className="flex flex-col text-left">
          <label htmlFor="return-date" className="text-sm text-gray-600 mb-1">
            Return date
          </label>
          <input
            type="date"
            id="return-date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-48 md:w-56 text-gray-600"
            required
          />
        </div>

        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="flex items-center gap-2 bg-primary hover:bg-primary-dull text-white font-semibold py-2 px-6 rounded-full transition"
        >
          <img src={assets.search_icon} alt="search" className="w-4 h-4" />
          Search
        </motion.button>
      </motion.form>

      <motion.img
        initial={{ scale: 0.95, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        src={assets.main_car}
        alt="main car"
        className="max-h-72 mt-12 object-contain"
      />
    </motion.div>
  );
};

export default Hero;
