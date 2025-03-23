import React, { useState } from "react";
import { FaSearch, FaMinus, FaPlus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ButtonComponents from "./ButtonComponents";

const HostelSearchForm = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [roomType, setRoomType] = useState("Dorm Bed");
  const [guests, setGuests] = useState(1);

  return (
    <div className="flex justify-center flex-col items-center bg-gray-100 p-16">
         <h2 className="text-3xl font-bold text-center mb-4">
          Find Your Perfect Hostel
        </h2>
      <div className="bg-white p-8 rounded-2xl w-11/12  mx-auto">
        {/* Destination Input */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Where are you traveling?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-3 pl-10 border rounded-lg focus:ring focus:ring-violet-400"
          />
        </div>

        {/* Date Pickers */}
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium">Check-in</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium">Check-out</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Room Type Selection */}
        <div className="flex gap-4 mb-4">
          <button
            className={`flex-1 py-2 px-4 rounded-lg border ${
              roomType === "Dorm Bed" ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
            onClick={() => setRoomType("Dorm Bed")}
          >
            Dorm Bed
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-lg border ${
              roomType === "Private Room" ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
            onClick={() => setRoomType("Private Room")}
          >
            Private Room
          </button>
        </div>

        {/* Guest Counter */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium">Guests</span>
          <div className="flex items-center border rounded-lg p-1">
            <button
              onClick={() => setGuests((prev) => Math.max(1, prev - 1))}
              className="p-2"
            >
              <FaMinus />
            </button>
            <span className="px-4 text-lg">{guests}</span>
            <button onClick={() => setGuests((prev) => prev + 1)} className="p-2">
              <FaPlus />
            </button>
          </div>
        </div>

        {/* Search Button */}
        <ButtonComponents
          text="Search"
        />
      </div>
    </div>
  );
};

export default HostelSearchForm;
