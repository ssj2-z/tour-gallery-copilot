import React from 'react';
import TourCard from './TourCard';

function Gallery({ tours, setTours }) {
    const removeTour = (id) => {
        setTours(tours.filter((tour) => tour.id !== id));
    };

    return (
        <div className="gallery">
            {tours.map((tour) => (
                <TourCard
                    key={tour.id}
                    id={tour.id}
                    name={tour.name}
                    info={tour.info}
                    image={tour.image}
                    price={tour.price}
                    removeTour={removeTour}
                />
            ))}
        </div>
    );
}

export default Gallery;