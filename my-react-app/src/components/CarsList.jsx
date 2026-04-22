import { useState } from "react";
import carList from "../data/cars";
import CarCard from "./CarCard";
import styles from "../style/CarsList.module.css";

export default function CarsList({ onBook }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredCars = carList
    .filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating-desc") return b.rating - a.rating;
      if (sortBy === "rating-asc") return a.rating - b.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#f0f4fa] pt-20 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Available Cars for Rent
      </h1><br></br>

      {/* Search & Sort with CSS Module */}
      <div className={styles.controlsContainer}>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.input}
        />

        {/* Sort Dropdown */}
        <div className={styles.selectWrapper}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={styles.select}
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-asc">Rating: Low to High</option>
            <option value="rating-desc">Rating: High to Low</option>
          </select>

          {/* Down Arrow */}
          <div className={styles.arrowIcon}>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="cars-grid">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <CarCard key={car.id} car={car} onBook={onBook} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No cars found.</p>
        )}
      </div>
    </div>
  );
}
