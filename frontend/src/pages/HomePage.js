import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { fetchMovies } from '../services/api';
import '../assets/css/HomePage.css';

const HomePage = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchMovies();
        setMovies(data);
        setFilteredMovies(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  useEffect(() => {
    if (searchTerm && searchTerm.trim() !== '') {
      const filtered = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  }, [searchTerm, movies]);

  return (
    <div className="home-page">
      <h1>Popular Movies</h1>
      <MovieList movies={filteredMovies} loading={loading} error={error} />
    </div>
  );
};

export default HomePage;