import React, { useState } from 'react';
import './card.css';

export default function Card() {
    const [rating, setRating] = useState(0);
    const handleStarClick = (selectedRating) => {
        setRating(selectedRating === rating ? 0 : selectedRating);
      };

    return( 
        <>
        <div className='card'>
        <div className='card-image'>
            <img src='https://e0.365dm.com/21/12/2048x1152/skysports-ricky-ponting-cricket_5628162.jpg' />

        </div>
        <div className='card-data'>

            <div className='headings'>
                <h3>Score</h3>
                <h3>Average</h3>
                <h3>Centuries</h3>
                <h3>Fiftties</h3>
                <h3>Best Score</h3>
            </div>
            <div className='values'>
                <h3>13378</h3>
                <h3>51.9</h3>
                <h3>41</h3>
                <h3>62</h3>
                <h3>257</h3>
                
            </div>       
        </div>
        <div className="rating">
          
          {[1, 2, 3, 4, 5].map((star, index) => (
            <span
              key={index}
              className={`star ${rating >= star ? 'colored' : ''}`}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        </div>
        </>

        
    )
}