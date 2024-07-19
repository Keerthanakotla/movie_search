import React from 'react';
import './Card.css'; // Ensure this path is correct

const Card = ({ movie, dogImage }) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={dogImage} alt="dog" className="dog-image" />
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/800'} alt="movie" />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
};

export default Card;






