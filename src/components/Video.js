import React, {useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Video.scss';
import axios from 'axios';
import TMDBKey from "../config/env";


function Video() {
    let { id } = useParams.apply();
    const [youtubeKey, setYoutubeKey ] = useState("");
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://api.themoviedb.org/3/movie/${id}?api_key=${TMDBKey.clef}&append_to_response=videos`)
            setYoutubeKey(response.data.videos.results[0].key);
            console.log("resultmovie", response.data.videos.results[0].key);
        }
        fetchData();
    })
    return (
        <div className="video">
            <iframe
                src={`https://www.youtube.com/embed/${youtubeKey}`}
                title="video"
                frameBorder="0"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default Video
