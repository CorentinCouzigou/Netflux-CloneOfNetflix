import React, { useState, useEffect, useRef } from 'react';
import Proptypes from 'prop-types';
import Loading from '../components/Loader.js';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Row.scss';

function Row({ title, fetchUrl, isPoster }) {
    const baseUrl = "https://image.tmdb.org/t/p/original";
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log("resultMovies", request.data.results);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl])

    // const [loading, setLoading] = useState(true);
    // const counter = useRef(0);
    // const imageLoaded = () => {
    //     counter.current += 1;
    //     if (counter.current > 0) {
    //         setLoading(false);
    //     }
    // }
    return (
        <>

            <div className="row">
                <h2 className="row__tile">{title}</h2>
                <div className="row__images">
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <Link to={`/video/${movie.id}`}>
                                {isPoster ? (
                                    <img src={`${baseUrl}${movie.poster_path}`} className="row__image" alt={movie?.name || movie?.title || movie?.original_title} />)
                                    : (
                                        <img  src={`${baseUrl}${movie.backdrop_path}`} className="row__image" alt={movie?.name || movie?.title || movie?.original_title} />)}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
Row.propTypes = {
    title: Proptypes.string.isRequired,
    fetchUrl: Proptypes.string.isRequired,
    isPoster: Proptypes.bool,
};
Row.defaultProps = {
    isPoster: false,
}

export default Row;
