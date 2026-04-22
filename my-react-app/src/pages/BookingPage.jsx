import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../style/Booking.module.css";

const BookingPage = () => {
  const location = useLocation();
  const { carName, pricePerDay, image } = location.state || {};
  const [submitted, setSubmitted] = useState(false);

  // Review state
  const [reviews, setReviews] = useState([]);
  const [reviewName, setReviewName] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name: reviewName,
      rating: reviewRating,
      comment: reviewComment,
    };
    setReviews([newReview, ...reviews]);
    setReviewName("");
    setReviewRating(5);
    setReviewComment("");
  };

  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>

        {/* Selected Car Card */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Selected Car</h2>
          {image ? (
            <img src={image} alt={carName} className={styles.image} />
          ) : (
            <div className={styles.noImage}>No Image</div>
          )}
          {carName && <p className={styles.carName}>{carName}</p>}
          {pricePerDay && (
            <p className={styles.price}>
              ₹{pricePerDay.toLocaleString()}/day
            </p>
          )}
        </div>

        {/* Booking Form Card */}
        <div className={styles.card}>
          {submitted ? (
            <div className={styles.successMessage}>
              <h2 className={styles.successTitle}>Booking Confirmed 🎉</h2>
              <p>
                Thank you! Your booking for <strong>{carName}</strong> is confirmed.
                <br />
                You will receive the details via email shortly.
              </p>

              {/* Review Section */}
              <div style={{ marginTop: "2rem" }}>
                <h3 className={styles.sectionTitle}>Leave a Review</h3>
                <form onSubmit={handleReviewSubmit} style={{ marginTop: "1rem" }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    required
                    className={styles.input}
                  />
                  <select
                    value={reviewRating}
                    onChange={(e) => setReviewRating(Number(e.target.value))}
                    className={styles.select}
                    style={{ marginTop: "0.5rem" }}
                  >
                    {[5, 4, 3, 2, 1].map((num) => (
                      <option key={num} value={num}>
                        {num} Star{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Write your review..."
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    required
                    className={styles.input}
                    style={{ marginTop: "0.5rem", height: "80px" }}
                  />
                  <button type="submit" className={styles.button} style={{ marginTop: "0.8rem" }}>
                    Submit Review
                  </button>
                </form>

                {/* Display Reviews */}
                {reviews.length > 0 && (
                  <div style={{ marginTop: "1.5rem" }}>
                    <h4>Customer Reviews</h4>
                    {reviews.map((rev, index) => (
                      <div
                        key={index}
                        style={{
                          background: "#f8fafc",
                          padding: "10px",
                          borderRadius: "8px",
                          marginTop: "10px",
                        }}
                      >
                        <strong>{rev.name}</strong> —{" "}
                        <span style={{ color: "#f59e0b" }}>★ {rev.rating}</span>
                        <p style={{ margin: "5px 0" }}>{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Your Details */}
              <section>
                <h2 className={styles.sectionTitle}>Your Details</h2>
                <div className={styles.grid2}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className={styles.input}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className={styles.input}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className={styles.input}
                    style={{ gridColumn: "span 2" }}
                  />
                </div>
              </section>

              {/* Booking Info */}
              <section><br />
                <h2 className={styles.sectionTitle}>Booking Info</h2>
                <div className={styles.grid2} style={{ marginBottom: "1.25rem" }}>
                  <input type="datetime-local" required className={styles.input} />
                  <input type="datetime-local" required className={styles.input} />
                </div>
                <div className={styles.grid2}>
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    required
                    className={styles.input}
                  />
                  <input
                    type="text"
                    placeholder="Drop-off Location"
                    required
                    className={styles.input}
                  />
                </div>
              </section>

              {/* Payment */}
              <section><br />
                <h2 className={styles.sectionTitle}>Payment</h2>
                <select required defaultValue="card" className={styles.select}>
                  <option value="card">Credit / Debit Card</option>
                  <option value="upi">UPI</option>
                  <option value="cod">Pay on Pickup</option>
                </select>
              </section><br />

              {/* Submit Button */}
              <button type="submit" className={styles.button}>
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
