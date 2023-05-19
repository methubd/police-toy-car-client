import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const MyToy = () => {
    const {user} = useContext(AuthContext);
    const email = user?.email;
    const [myToy, setMytoy] = useState([]);

    const url = `http://localhost:5000/myToys?email=${email}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMytoy(data);
        })
    }, [url])


    return (
        <div>
            <h1>Total Added Products: {myToy.length}</h1>
        </div>
    );
};

export default MyToy;