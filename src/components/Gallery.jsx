import React from 'react';
import TourCard from './TourCard';

function Gallery({ tours, setTours }) {
    const removeTour = (id) => {
        setTours(tours.filter((tour) => tour.id !== id));
    };

    return (
        <div className="gallery">
            {tours.length === 0 ? (
                <div className="empty-message">
                    <h2>No tours left!</h2>
                    <button onClick={() => window.location.reload()}>Refresh</button>
                </div>
            ) : (
                tours.map(({ id, name, info, image, price }) => (
                    <TourCard
                        key={id}
                        id={id}
                        name={name}
                        info={info}
                        image={image}
                        price={price}
                        removeTour={removeTour}
                    />
                ))
            )}
        </div>
    );
}

export default Gallery;