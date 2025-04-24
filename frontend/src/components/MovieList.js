import React from 'react';
import MovieCard from './MovieCard';
import '../assets/css/MovieList.css';

const MovieList = ({ movies, loading, error }) => {
    if (loading) return <div className="loading">Loading movies...</div>;
    if (error) return <div className="error">Error loading movies: {error.message}</div>;
    
    return (
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <div className="no-movies">No movies found</div>
        )}
      </div>
    );
  };
  
  export default MovieList;
