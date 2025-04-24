import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieById } from '../services/api';
import '../assets/css/MovieDetailPage.css';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieById(id);
        setMovie(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getMovie();
  }, [id]);

  if (loading) return <div className="loading">Loading movie details...</div>;
  if (error) return <div className="error">Error loading movie: {error.message}</div>;
  if (!movie) return <div className="not-found">Movie not found</div>;

  return (
    <div className="movie-detail">
      <div className="back-button">
        <Link to="/">← Back to Movies</Link>
      </div>
      <div className="movie-detail-content">
        <div className="movie-poster">
          <img 
            src={movie.poster || 'https://via.placeholder.com/300x450?text=No+Image'} 
            alt={movie.title} 
          />
        </div>
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p className="year">({movie.year})</p>
          <div className="movie-meta">
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Rating:</strong> {movie.rating}/10</p>
          </div>
          <div className="movie-plot">
            <h3>Plot</h3>
            <p>{movie.plot}</p>
          </div>
          {movie.cast && (
            <div className="movie-cast">
              <h3>Cast</h3>
              <p>{movie.cast.join(', ')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;