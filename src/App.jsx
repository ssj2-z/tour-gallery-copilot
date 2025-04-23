import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery'; // Import Gallery component

function App() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('https://course-api.com/react-tours-project');
                if (!response.ok) throw new Error('Failed to fetch tours');
                const data = await response.json();
                setTours(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchTours();
    }, []);

    const refreshTours = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://course-api.com/react-tours-project');
            if (!response.ok) throw new Error('Failed to fetch tours');
            const data = await response.json();
            setTours(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;

    return (
        <div>
            <h1>Tour Gallery App</h1>
            {tours.length === 0 ? (
                <div>
                    <h2>No tours left!</h2>
                    <button onClick={refreshTours}>Refresh</button>
                </div>
            ) : (
                <Gallery tours={tours} setTours={setTours} />
            )}
        </div>
    );
}

export default App;