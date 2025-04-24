import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/MovieCard.css'

const MovieCard = ({movie}) => {
    return(
        <div className='moviecard'>
            <img src={movie.poster || 'https://placehold.co/300x450/EEE/31343C?text=No+Image'}
            alt ={movie.title}
            className='movie-poster'
            />
            <h3>
                {movie.title}
            </h3>
            <p>
                {movie.year}
            </p>
            <Link to={`/movie/${movie.id}`} className='details-button'>
                View Details
            </Link>
        </div>
    );
};

export default MovieCard;