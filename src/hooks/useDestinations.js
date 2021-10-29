import { useEffect, useState } from "react";

export const useDestinations = () => {
    const [destinations, setDestinations] = useState([]);

    const url = `https://enigmatic-caverns-80998.herokuapp.com/destinations`;
    
    useEffect(() => {
        fetch(url)
            .then(result => result.json())
            .then(data => setDestinations(data))
    }, [url]);

    return [destinations, setDestinations];

}