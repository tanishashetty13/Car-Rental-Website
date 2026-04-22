// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CarsList from "./components/CarsList";
import CarDetail from "./components/CarDetail";
import BookingPage from "./pages/BookingPage";
import AboutContact from "./pages/AboutContact";
import Footer from "./components/Footer";
import RentNow from "./pages/RentNow"; // ✅ Import the RentNow page

function AppContent() {
  const navigate = useNavigate();
  const [bookingInfo, setBookingInfo] = useState({});

  const handleBook = (data) => {
    if (data?.id) {
      // booking a specific car
      setBookingInfo((b) => ({ ...b, car: data }));
      navigate("/booking");
    } else {
      // generic search form data
      setBookingInfo((b) => ({ ...b, ...data }));
      navigate("/booking");
    }
  };

  return (
    <>
      <Navbar />

      <div className="pt-0 min-h-screen">
        <Routes>
          <Route path="/" element={<Home onBook={handleBook} />} />
          <Route path="/cars" element={<CarsList onBook={handleBook} />} />
          <Route path="/cars/:id" element={<CarDetail onBook={handleBook} />} />
          <Route path="/rent/:id" element={<RentNow />} /> {/* ✅ New RentNow route */}
          <Route
            path="/booking"
            element={
              <BookingPage
                bookingInfo={bookingInfo || {}}
                onConfirm={(info) =>
                  alert("Confirmed: " + (info.car?.name || "N/A"))
                }
              />
            }
          />
          <Route path="/about" element={<AboutContact />} />
          <Route
            path="*"
            element={<div className="p-8 text-center">404 — Page not found.</div>}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
