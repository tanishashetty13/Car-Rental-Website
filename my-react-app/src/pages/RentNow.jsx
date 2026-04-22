// src/pages/RentNow.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import carList from "../data/cars.js";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function RentNow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [activeTab, setActiveTab] = useState("specs");
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const foundCar = carList.find((c) => c.id === parseInt(id));
    setCar(foundCar);
    setActiveTab("specs");
    setModalImage(null);
    window.scrollTo(0, 0);
  }, [id]);

  if (!car) return <div className="p-8 text-center">Car not found.</div>;

  return (
    <div style={{ padding: "100px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Zoom Image Modal */}
      <Modal
        isOpen={!!modalImage}
        onRequestClose={() => setModalImage(null)}
        style={{
          content: {
            maxWidth: "700px",
            margin: "auto",
            borderRadius: "10px",
            overflow: "hidden",
            padding: 0,
          },
        }}
      >
        <img src={modalImage} alt="Zoomed Car" style={{ width: "100%", height: "auto" }} />
      </Modal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          maxWidth: "1100px",
          width: "100%",
        }}
      >
        {/* Left Image + Thumbnails */}
        <div>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              cursor: "zoom-in",
            }}
            onClick={() => setModalImage(car.image)}
          >
            <img
              src={car.image}
              alt={car.name}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
            {car.thumbnails.map((thumb, idx) => (
              <img
                key={idx}
                src={thumb}
                alt={`Thumbnail ${idx}`}
                style={{
                  width: "80px",
                  height: "60px",
                  borderRadius: "6px",
                  objectFit: "cover",
                  cursor: "pointer",
                  border: "2px solid transparent",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                }}
                onClick={() => setModalImage(thumb)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0284c7";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "14px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
            border: "1px solid #f1f5f9",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "700", color: "#1e293b" }}>
            {car.name}
          </h1>
          <div style={{ color: "#64748b", fontSize: "14px", marginBottom: "8px" }}>
            {car.type} &nbsp; | &nbsp;
            <span style={{ color: "#f59e0b" }}>★</span> {car.rating} ({car.reviews} reviews)
          </div>
          <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569" }}>{car.description}</p>

          {/* Features */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "18px",
              marginBottom: "20px",
            }}
          >
            {car.features.map((f, idx) => (
              <span
                key={idx}
                style={{
                  padding: "6px 14px",
                  background: "#f1f5f9",
                  borderRadius: "999px",
                  fontSize: "13px",
                  color: "#334155",
                  fontWeight: "500",
                  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                {f}
              </span>
            ))}
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: "20px", marginBottom: "12px" }}>
            {["specs", "reviews", "terms"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  background: "transparent",
                  border: "none",
                  borderBottom: activeTab === tab ? "2px solid #0284c7" : "none",
                  color: activeTab === tab ? "#0284c7" : "#64748b",
                  cursor: "pointer",
                  paddingBottom: "4px",
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ marginBottom: "20px" }}>
            {activeTab === "specs" && (
              <ul style={{ fontSize: "14px", color: "#334155", paddingLeft: "15px" }}>
                <li><strong>Mileage:</strong> {car.mileage}</li>
                <li><strong>Year:</strong> {car.year}</li>
                <li><strong>Seats:</strong> {car.seats}</li>
                <li><strong>Luggage:</strong> {car.luggage}</li>
                <li><strong>Fuel Type:</strong> {car.fuel}</li>
                <li><strong>Transmission:</strong> {car.transmission}</li>
              </ul>
            )}
            {activeTab === "reviews" && (
              <div style={{ fontSize: "14px", color: "#334155" }}>
                {car.reviewsList && car.reviewsList.length > 0 ? (
                  car.reviewsList.map((review, index) => (
                    <div
                      key={index}
                      style={{
                        background: "#f8fafc",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        marginBottom: "10px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                      }}
                    >
                      <strong>{review.name}</strong>
                      <p style={{ margin: "4px 0" }}>{review.comment}</p>
                      <span style={{ color: "#f59e0b" }}>Rating: ★ {review.rating}</span>
                    </div>
                  ))
                ) : (
                  <p>No reviews available.</p>
                )}
              </div>
            )}
            {activeTab === "terms" && (
              <ul style={{ fontSize: "14px", color: "#334155", paddingLeft: "20px", listStyle: "disc" }}>
                <li>Valid driving license required</li>
                <li>No smoking inside the vehicle</li>
                <li>Security deposit required</li>
                <li>Late returns will incur extra charges</li>
              </ul>
            )}
          </div>

          {/* Pricing Table */}
          <h3 style={{ marginBottom: "10px", color: "#1e293b" }}>Pricing</h3>
          <table
            style={{
              width: "100%",
              fontSize: "14px",
              color: "#334155",
              borderCollapse: "collapse",
              marginBottom: "20px",
            }}
          >
            <tbody>
              <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                <td>Per Hour</td>
                <td style={{ textAlign: "right", fontWeight: "600" }}>
                  ₹{car.pricing.hour}
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                <td>Per Day</td>
                <td style={{ textAlign: "right", fontWeight: "600" }}>
                  ₹{car.pricing.day}
                </td>
              </tr>
              <tr>
                <td>Per Week</td>
                <td style={{ textAlign: "right", fontWeight: "600" }}>
                  ₹{car.pricing.week}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Proceed Button */}
          <button
            onClick={() =>
              navigate("/booking", {
                state: {
                  carName: car.name,
                  pricePerDay: car.pricing.day,
                  image: car.image,
                },
              })
            }
            style={{
              background: "linear-gradient(90deg, #0ea5e9, #0284c7)",
              color: "#fff",
              border: "none",
              padding: "14px 0",
              width: "100%",
              borderRadius: "8px",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "15px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 4px 14px rgba(2,132,199,0.4)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            Proceed to Booking
          </button>
        </div>
      </div>

      {/* Similar Cars Section */}
      <div style={{ marginTop: "60px", maxWidth: "1100px", width: "100%" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#1e293b", marginBottom: "20px" }}>
          Similar Cars You Might Like
        </h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {[...carList]
            .filter((c) => c.id !== car.id)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map((similar) => (
              <div
                key={similar.id}
            
                onClick={() => navigate(`/rent/${similar.id}`)}

                style={{
                  flex: "1 1 30%",
                  background: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  overflow: "hidden",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <img
                  src={similar.image}
                  alt={similar.name}
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "14px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#1e293b" }}>
                    {similar.name}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#64748b", margin: "4px 0" }}>
                    ₹{similar.pricing.day} / day
                  </p>
                  <p style={{ fontSize: "13px", color: "#94a3b8" }}>{similar.type}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
