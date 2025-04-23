import React from 'react';

function TourCard({ id, name, info, image, price, removeTour }) {
    return (
        <div className="tour-card">
            <img src={image} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>${price}</p>
                <p>{info}</p>
                <button onClick={() => removeTour(id)}>Not Interested</button>
            </div>
        </div>
    );
}

export default TourCard;