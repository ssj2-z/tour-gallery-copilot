import React from 'react';
import TourCard from './TourCard'; // Import the TourCard component

function Gallery({ tours, setTours }) {
    // Function to remove a tour by its ID
    const removeTour = (id) => {
        setTours(tours.filter((tour) => tour.id !== id));
    };

    // Map over tours and render a TourCard for each tour
    return (
        <div className="gallery">
            {tours.map(({ id, name, info, image, price }) => (
                <TourCard
                    key={id}
                    id={id}
                    name={name}
                    info={info}
                    image={image}
                    price={price}
                    removeTour={removeTour}
                />
            ))}
        </div>
    );
}

export default Gallery;