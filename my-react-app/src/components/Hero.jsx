// src/components/Hero.jsx
import { useState } from "react";
import rollsroyce from "../assets/bg.jpg"; // Replace with your image

export default function Hero({ onSearch }) {
  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch && onSearch(form);
  };

  return (
    <section className="bg-gradient-to-b from-[#eef6fb] to-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT TEXT */}
        <div className="md:w-1/2 space-y-6 z-10">
          <span className="bg-red-100 text-red-600 text-sm font-bold px-4 py-1 rounded-full inline-block w-fit">
            CAR RENTAL
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Find Affordable <br /> Dream Cars for Rental
          </h1>
          <p className="text-gray-600 text-lg max-w-md">
            Fulfill your automotive fantasies without breaking the bank. Check our affordable car rentals for an opulent yet economical ride.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-4 flex flex-wrap gap-3 items-center"
          >
            <input
              type="text"
              name="pickup"
              placeholder="Pickup location"
              value={form.pickup}
              onChange={handleChange}
              className="flex-1 min-w-[160px] border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="dropoff"
              placeholder="Dropoff location"
              value={form.dropoff}
              onChange={handleChange}
              className="flex-1 min-w-[160px] border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Find Car
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          {/* Circle background */}
          <div className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] bg-white rounded-full blur-2xl opacity-30 z-0"></div>
          <img
            src={rollsroyce}
            alt="Luxury Car"
            className="relative z-10 max-w-[480px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
