import React from 'react';
import './Loader.scss';


function Loader() {
    return (
        <div className="loading">
            <div className="round">
                <div className="line__up">
                </div>
                <div className="line__middle">
                </div>
                <div className="line__down">
                </div>
            </div>
        </div>
    )
}


export default Loader