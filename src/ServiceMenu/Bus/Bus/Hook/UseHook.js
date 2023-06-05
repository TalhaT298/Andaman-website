import { useEffect, useState } from 'react';

const UseHook = () => {

    const [buses, setBuses] = useState([]);
    // console.log(bus)
    useEffect(() => {
        fetch('bus.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBuses(data)
            })
    }, [])
    return [buses];
};

export default UseHook;