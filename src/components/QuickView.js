import React from 'react';
import "./QuickView.scss";
import Proptypes from 'prop-types';
import CancelIcon from '@mui/icons-material/Cancel';

function QuickView({ bannerStyle, movie, handleClickPopup, popupStatut }) {
    return (
        <div className={`quickView ${popupStatut && "open"}`}>
            <div className="quickView__banner"  >
                <img className="quickView__banner__image" src={bannerStyle} alt="presentation quick vue" />
                <div className="quickView__content">
                    <h3 className="quickView__title">
                        {movie?.title || movie?.name || movie?.original_title}
                    </h3>
                    <p>{movie?.overview}</p>
                </div>
                <button className="quickView__close" type="button" onClick={() => handleClickPopup()}>
                    <CancelIcon className="quickView__close__SVG" onClick={() => handleClickPopup()} />
                </button>
            </div>
        </div>
    )
}
QuickView.propTypes = {
    bannerStyle: Proptypes.string.isRequired,
    movie: Proptypes.object.isRequired,
    handleClickPopup: Proptypes.func.isRequired,
    popupStatut: Proptypes.bool.isRequired,
}



export default QuickView
