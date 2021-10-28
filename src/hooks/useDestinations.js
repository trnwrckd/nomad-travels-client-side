import { useEffect, useState } from "react";

export const useDestinations = () => {
    const [destinations, setDestinations] = useState([]);

    const url = `http://localhost:5000/destinations`;
    
    useEffect(() => {
        fetch(url)
            .then(result => result.json())
            .then(data => setDestinations(data))
    }, [url]);

    return [destinations, setDestinations];

}