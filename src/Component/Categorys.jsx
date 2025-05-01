import React, { use } from 'react';



const categoryPromise = fetch("/categories.json")
    .then(res => res.json());

const Categorys = () => {
    
    
    const categorys = use(categoryPromise);

    return (
        <div>
            <h1 className='font-bold'>All Categorys ({categorys.length})</h1>
        </div>
    );
};

export default Categorys;