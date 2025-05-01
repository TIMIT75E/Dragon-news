import React from 'react';
import { useParams } from 'react-router';

const CategortNews = () => {

    const {id} = useParams();
    console.log(id);

    return (
        <div>
            <h1>CategortNews  - {id}</h1>
        </div>
    );
};

export default CategortNews;