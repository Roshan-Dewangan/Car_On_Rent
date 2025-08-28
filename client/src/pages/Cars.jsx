import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CarCards from "../components/CarCards";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Cars = () => {
  const [searchParams] = useSearchParams();
  const pickupLocation = searchParams.get("pickupLocation");
  const pickupDate = searchParams.get("pickupDate");
  const returnDate = searchParams.get("returnDate");

  const { cars, axios } = useAppContext();
  const isSearchData = pickupLocation && pickupDate && returnDate;

  const [filteredCars, setFilteredCars] = useState([]);
  const [input, setInput] = useState("");

  // 🔍 Filter by search input
  const applyFilter = async () => {
    if (input === "") {
      setFilteredCars(cars);
      return;
    }

    const filtered = cars.filter((car) =>
      [car.brand, car.model, car.category, car.transmission]
        .join(" ")
        .toLowerCase()
        .includes(input.toLowerCase())
    );

    setFilteredCars(filtered);
  };

  // 🔍 Search based on pickup/drop info
  const searchCarAvailability = async () => {
    try {
      const { data } = await axios.post("/api/bookings/check-availability", {
        location: pickupLocation,
        pickupDate,
        returnDate,
      });

      if (data.success) {
        setFilteredCars(data.availableCars);
        if (data.availableCars.length === 0) {
          toast("No cars available");
        }
      } else {
        toast.error("Failed to check availability.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  useEffect(() => {
    if (isSearchData && cars?.length > 0) {
      const matchedCars = cars.filter((car) => car.location === pickupLocation);
      setFilteredCars(matchedCars);

      if (matchedCars.length === 0) {
        toast("No cars available at this location");
      }
    }
  }, [pickupLocation, pickupDate, returnDate, cars]);

  useEffect(() => {
    if (cars.length > 0 && !isSearchData) {
      applyFilter();
    }
  }, [input, cars]);

  return (
    <div>
      {/* 🟦 Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center py-20 bg-light max-md:px-4"
      >
        <Title
          title="Available Cars"
          subTitle="Browse our selection of premium vehicles available for your next adventure"
        />

        {/* 🔍 Search Bar */}
        <div className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow">
          <img src={assets.search_icon} alt="Search" className="w-5 h-5 mr-2" />

          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search by make, model or features"
            className="w-full h-full outline-none text-gray-500 text-sm"
          />

          <img src={assets.filter_icon} alt="Filter" className="w-5 h-5 ml-2" />
        </div>
      </motion.div>

      {/* 🟩 Car Results Section */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 xl:px-20 max-w-7xl mx-auto"
        >
          Showing {filteredCars.length} Car{filteredCars.length !== 1 ? "s" : ""}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 xl:px-20 max-w-7xl mx-auto"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredCars.map((car, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <CarCards car={car} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Cars;
