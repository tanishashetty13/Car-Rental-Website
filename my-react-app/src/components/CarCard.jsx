import React from "react";
import { FaDoorClosed, FaSuitcaseRolling, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CarCard({ car }) {
  const navigate = useNavigate();

  return (
    <div
      className="car-card"
      style={{
        maxWidth: 320,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Car Image */}
      <div style={{ position: "relative" }}>
        <img
          src={car.image}
          alt={car.name}
          style={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            display: "block",
          }}
          loading="lazy"
        />
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "#fff",
            padding: "6px 12px",
            borderRadius: "50px",
            fontWeight: 600,
            fontSize: 13,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          ${car.price} <span style={{ fontWeight: 400 }}>/Day</span>
        </div>
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "4px",
          }}
        >
          <h3 style={{ margin: 0, fontSize: 18 }}>{car.name}</h3>
          <div
            style={{
              background: "#f9fafc",
              padding: "3px 8px",
              borderRadius: 999,
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span style={{ color: "#f59e0b" }}>★</span>
            {car.rating.toFixed(1)}
          </div>
        </div>

        <p style={{ fontSize: 13, color: "#555", margin: "4px 0 10px" }}>
          {car.description}
        </p>

        {/* Features */}
        <div
          style={{
            borderTop: "1px solid #eee",
            paddingTop: 10,
            marginTop: "auto",
            fontSize: 12,
            color: "#555",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <FaDoorClosed /> Doors: {car.features.includes("5 seats") ? 4 : 2}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <FaSuitcaseRolling /> Luggage
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <FaUser /> Passengers: {car.features.includes("5 seats") ? 5 : 4}
          </div>
        </div>

        {/* Rent Now Button */}
        <button
          onClick={() => navigate(`/rent/${car.id}`)}
          style={{
            background: "#1f2d3a",
            color: "#fff",
            border: "none",
            borderRadius: 999,
            padding: "12px 0",
            fontWeight: 600,
            cursor: "pointer",
            marginTop: 14,
            fontSize: 14,
            transition: "filter .2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}
