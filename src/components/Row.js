import React, { useState, useEffect, useRef } from 'react';
import Proptypes from 'prop-types';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Row.scss';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Row({ title, fetchUrl, isPoster }) {
    const baseUrl = "https://image.tmdb.org/t/p/original";
    const [movies, setMovies] = useState([]);
    const carrousel = useRef();
    const arrowRight = useRef();
    const arrowLeft = useRef();
    const [handleArrowRight, setHandleArrowRight] = useState("block");
    const [handleArrowLeft, setHandleArrowLeft] = useState("none");



    function moveLeftCarrousel() {
        // taillle du carrousel avec offsetwith, ici je rajoute un pourcentage à cette taille pour que la taille soit bonne lors du scroll
        let sizeLeft = +carrousel.current.offsetWidth + ((+carrousel.current.offsetWidth / 100) * 3);
        // je défini la taille de la scroll bar
        carrousel.current.scrollLeft -= sizeLeft;
        // carrousel.current.scrollWidth - carrousel.current.clientWidth)=== taille totale de la barre de scroll bar
        if (carrousel.current.scrollLeft <= +(carrousel.current.scrollWidth - carrousel.current.clientWidth)) {
            setHandleArrowRight("block");
            console.log("carrousel", carrousel.current.scrollLeft);
        }
        // carrousel.current.scrollLEft ===  mouvement de la scroll bar
        if (carrousel.current.scrollLeft <= 0) {
            setHandleArrowLeft("none");
        }
    }

    function moveRightCarrousel() {
        console.log(carrousel.current.clientWidth)
        let sizeRight = +carrousel.current.offsetWidth + ((+carrousel.current.offsetWidth / 100) * 3);
        carrousel.current.scrollLeft += sizeRight;
        if (carrousel.current.scrollLeft === +(carrousel.current.scrollWidth - carrousel.current.clientWidth)) {
            setHandleArrowRight("none");
        }
        if (carrousel.current.scrollLeft > 0) {
            setHandleArrowLeft("block");
        };


    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log("resultMovies", request.data.results);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl])

    return (
        <>

            <div className="row">
                <h2 className="row__tile">{title}</h2>
                <div className="row__container">
                    <button style={{ display: handleArrowLeft }} className="row__arrow" id="g" ref={arrowLeft} onClick={moveLeftCarrousel}><ArrowCircleLeftIcon /></button>
                    <button style={{ display: handleArrowRight }} className="row__arrow" id="d" ref={arrowRight} onClick={moveRightCarrousel}><ArrowCircleRightIcon /></button>
                    <div className="row__images" ref={carrousel}>
                        {movies.map((movie) => (
                            <div key={movie.id}>
                                <Link to={`/ video / ${movie.id} `}>
                                    {isPoster ? (
                                        <img src={`${baseUrl}${movie.poster_path} `} className="row__image" alt={movie?.name || movie?.title || movie?.original_title} />)
                                        : (
                                            <img src={`${baseUrl}${movie.backdrop_path} `} className="row__image" alt={movie?.name || movie?.title || movie?.original_title} />)}
                                </Link>
                            </div>
                        ))}
                    </div>
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
