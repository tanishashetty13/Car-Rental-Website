import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import carList from "../data/cars";
import Modal from "react-modal"; // npm install react-modal

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = carList.find((c) => c.id === parseInt(id));
  const [activeTab, setActiveTab] = useState("specs");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  if (!car) return <div className="p-8 text-center">Car not found.</div>;

  const handleProceedBooking = () => {
    navigate("/booking", {
      state: {
        carName: car.name,
        pricePerDay: car.pricing.day,
        image: car.image,
      },
    });
  };

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen p-10">
      {/* Modal for zoom image */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            maxWidth: "700px",
            margin: "auto",
            borderRadius: "10px",
            overflow: "hidden",
          },
        }}
      >
        <img src={modalImage} alt="Zoomed Car" className="w-full h-auto" />
      </Modal>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow-xl">
        {/* LEFT SIDE */}
        <div>
          <img
            src={car.image}
            alt={car.name}
            className="rounded-lg shadow-md cursor-zoom-in"
            onClick={() => openModal(car.image)}
          />

          <div className="flex gap-3 mt-4 flex-wrap">
            {car.thumbnails.map((thumb, idx) => (
              <img
                key={idx}
                src={thumb}
                alt={`Thumb ${idx}`}
                className="w-20 h-14 object-cover rounded-md cursor-pointer border hover:border-blue-400"
                onClick={() => openModal(thumb)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{car.name}</h2>
          <p className="text-gray-500">{car.type}</p>
          <p className="text-gray-600 my-3">{car.description}</p>

          {/* Tabs */}
          <div className="flex gap-4 mt-6 border-b pb-2">
            {["specs", "reviews", "terms"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-semibold capitalize ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "specs" && (
              <ul className="text-gray-700 text-sm space-y-1">
                <li><strong>Mileage:</strong> {car.mileage}</li>
                <li><strong>Year:</strong> {car.year}</li>
                <li><strong>Seats:</strong> {car.seats}</li>
                <li><strong>Luggage:</strong> {car.luggage}</li>
                <li><strong>Fuel Type:</strong> {car.fuel}</li>
                <li><strong>Transmission:</strong> {car.transmission}</li>
              </ul>
            )}

            {activeTab === "reviews" && (
              <div className="text-sm text-gray-600 space-y-3">
                {car.reviewsList?.length > 0 ? (
                  car.reviewsList.map((review, i) => (
                    <div
                      key={i}
                      className="border p-3 rounded-md shadow-sm bg-gray-50"
                    >
                      <strong>{review.name}</strong>
                      <p>{review.comment}</p>
                      <p className="text-yellow-500">Rating: ★ {review.rating}</p>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
            )}

            {activeTab === "terms" && (
              <ul className="text-sm text-gray-600 list-disc pl-5">
                <li>Valid driving license required</li>
                <li>Security deposit at time of pickup</li>
                <li>No smoking in vehicle</li>
                <li>Late returns may incur fees</li>
              </ul>
            )}
          </div>

          {/* Pricing */}
          <h3 className="text-lg font-semibold mt-6">Pricing</h3>
          <ul className="text-sm text-gray-700 mb-4">
            <li>Per Hour: ₹{car.pricing.hour}</li>
            <li>Per Day: ₹{car.pricing.day}</li>
            <li>Per Week: ₹{car.pricing.week}</li>
          </ul>

          <button
            onClick={handleProceedBooking}
            className="bg-gradient-to-r from-sky-500 to-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Proceed to Booking
          </button>
        </div>
      </div>

      {/* Similar Cars Carousel */}
      <div className="max-w-6xl mx-auto mt-14">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Similar Cars</h3>
        <div className="flex gap-5 overflow-x-auto py-2 scrollbar-hide">
          {carList
            .filter((c) => c.type === car.type && c.id !== car.id)
            .map((similarCar) => (
              <div
                key={similarCar.id}
                className="min-w-[240px] bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => navigate(`/rentnow/${similarCar.id}`)}  // ✅ Fixed route
              >
                <img
                  src={similarCar.image}
                  alt={similarCar.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <h4 className="font-semibold text-gray-800">
                    {similarCar.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    ₹{similarCar.pricing.day} / day
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
