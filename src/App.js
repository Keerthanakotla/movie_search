import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import SearchIcon from "./search.svg";
import Loader from './Loader';

const API_URL = "https://www.omdbapi.com?apikey=b3ee82b4";
const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";

const App = () => {
    const [searchTitle, setSearchTitle] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dogImages, setDogImages] = useState({}); // Store dog images for each movie

    const searchMovies = (e) => {
        let searchValue = e.target.value;
        setSearchTitle(searchValue);
    };

    const getMovies = async (title) => {
        let response = await fetch(`${API_URL}&s=${title}`);
        let data = await response.json();
        setMovies(data.Search || []);
        setLoading(true);

        // Fetch dog images for each movie
        if (data.Search) {
            const dogImagePromises = data.Search.map(() => fetch(DOG_API_URL).then(res => res.json()));
            const dogImageResponses = await Promise.all(dogImagePromises);
            const dogImages = data.Search.reduce((acc, movie, index) => {
                acc[movie.imdbID] = dogImageResponses[index].message;
                return acc;
            }, {});
            setDogImages(dogImages);
        }
    };

    const movieSearch = () => {
        setLoading(false);
        getMovies(searchTitle);
    };

    useEffect(() => {
        getMovies('spy');
    }, []);

    return (
        <div className="app">
            <h1>Movie Land</h1>
            <div className="search">
                <input
                    placeholder="What are you searching for?"
                    value={searchTitle}
                    onChange={searchMovies}
                />
                <img src={SearchIcon} alt="search" onClick={movieSearch} />
            </div>
            <div className="container">
                {
                    loading ?
                        movies?.length > 0 ?
                            movies.map((movie) => (
                                <Card 
                                    movie={movie} 
                                    key={movie.imdbID} 
                                    dogImage={dogImages[movie.imdbID] || 'https://via.placeholder.com/150'} 
                                />
                            ))
                            :
                            <div className="empty">
                                <h2>The movie does not exist</h2>
                            </div>
                        :
                        <Loader />
                }
            </div>
        </div>
    );
};

export default App;



