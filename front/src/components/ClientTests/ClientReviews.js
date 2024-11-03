import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ClientReviews.css';

const API_URL = process.env.REACT_APP_API_URL ;

const ClientReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/reviews`);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/reviews`, { name, comment, rating });
      setName('');
      setComment('');
      setRating(5);
      fetchReviews();
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <section className="section client-reviews">
      <div className="container">
        <h2 className="section-title">Avis des clients</h2>
        <form onSubmit={handleSubmit} className="review-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
            required
          />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Votre avis"
            required
          ></textarea>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={star <= rating ? 'star active' : 'star'}
              >
                ★
              </span>
            ))}
          </div>
          <button type="submit">Envoyer l'avis</button>
        </form>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review._id} className="review-card">
              <h3 className="client-name">{review.name}</h3>
              <p className="client-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? 'star active' : 'star'}>
                    ★
                  </span>
                ))}
              </p>
              <p className="client-review">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;