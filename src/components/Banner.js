import React, { useState, useEffect } from 'react';
import "./banner.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import axios from "axios";
import requests from "../config/Requests";
import QuickView from "./QuickView";
import { Link } from "react-router-dom";


function Banner({ imageLoaded }) {
    const [movie, setMovie] = useState({});
    const [popup, setPopup] = useState(false);

    function handleClickPopup() {
        popup ? setPopup(false) : setPopup(true);
      

    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }
        fetchData();
    }, [])

    function truncateText(string, n) {
        return string ? string.substr(0, n - 1) + "..." : "No description";

    }
    const bannerStyle = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;


    return (
        <>
            <div className="banner">
                <img onLoad={imageLoaded} className="banner__image" src={bannerStyle} alt="banner présentation" />
                <div className="banner__content">
                    <h1 className="banner__title">{movie?.name || movie?.title || movie?.original_title}
                    </h1>
                    <p className="banner__description">
                        {truncateText(movie?.overview, 100)}
                    </p>
                    <div className="banner__buttons">
                        <Link to={`/video/${movie?.id}`}>
                            <button className="banner__button banner__button--play" > <PlayArrowIcon />Lecture</button></Link>
                        <button className="banner__button" onClick={handleClickPopup}><HelpOutlineIcon />Plus d'infos</button>
                    </div>
                </div>
                <QuickView bannerStyle={bannerStyle} movie={movie} handleClickPopup={handleClickPopup} popupStatut={popup} />
            </div>
        </>
    )
}

export default Banner;
