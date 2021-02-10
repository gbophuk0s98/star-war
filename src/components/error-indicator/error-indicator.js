import React from 'react'

import './error-indicator.css'
import icon from './error-star.jpg'

const ErrorIndicator = () => {
    return(
        <div className="error-indicator text-center w-100 d-flex flex-column">
            <span><img src={icon} alt="error-icon" height="60px"/></span>
            <span className="boom">BOOM!</span>
            <span>Something has gone terribly wrong</span>
            <span>(but we alredy sen droids to fix it)</span>
        </div>
    )
}

export default ErrorIndicator