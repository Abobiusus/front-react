import { useState, useEffect } from "react";
import './style.css'

export default function RundomCatFacts(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://cat-fact.herokuapp.com/facts')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="catFacts">
            <h1>Cat Facts</h1>
                <ul>
                    {data.map((fact) => (
                    <li key={fact._id}>{fact.text}</li>
                    ))}
            </ul>
        </div>
    );
}