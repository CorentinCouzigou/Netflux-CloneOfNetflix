import React from 'react';
import "./QuickView.scss";
import Proptypes from 'prop-types';
import CancelIcon from '@mui/icons-material/Cancel';

function QuickView({ bannerStyle, movie, handleClickPopup, popupStatut }) {
    console.log("qv", popupStatut)
    return (
        <div className={`quickView ${popupStatut && "open"}`}>
            <div className="quickView__banner" style={bannerStyle}>
                <div className="quickView__content">
                    <h3 className="quickView__title">
                        {movie?.title || movie?.name || movie?.original_title}
                    </h3>
                    <p>{movie?.overview}</p>
                </div>
                <button className="quickView__close" onClick={handleClickPopup}><CancelIcon /></button>
            </div>
        </div>
    )
}
QuickView.propTypes = {
    bannerStyle: Proptypes.object.isRequired,
    movie: Proptypes.object,
    handleClickPopup: Proptypes.func.isRequired,
    popupStatut: Proptypes.bool.isRequired,
}


export default QuickView