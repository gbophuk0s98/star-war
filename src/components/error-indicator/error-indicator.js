import React from 'react'

import './error-indicator.css'
import icon from './error-star.jpg'

const ErrorIndicator = () => {
    return(
        <div className="container">
            <div className="error-indicator text-center w-100 d-flex flex-column">
                <span><img src={icon} alt="error-icon" height="60px"/></span>
                <span className="boom">BOOM!</span>
                <span>Something has gone terribly wrong</span>
                <span>(but we alredy sent droids to fix it)</span>
            </div>
        </div>
    )
}

export default ErrorIndicator