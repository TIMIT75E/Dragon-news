import React, { use } from 'react';
import { NavLink } from 'react-router';



const categoryPromise = fetch("/categories.json")
    .then(res => res.json());

const Categorys = () => {


    const categorys = use(categoryPromise);

    return (
        <div>
            <h1 className='font-bold'>All Categorys ({categorys.length})</h1>
            <div className='grid grid-cols-1 gap-3 mt-5'>
                {
                    categorys.map(categorys =>
                        <NavLink
                            key={categorys.id} 
                            className={"btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"}
                            to={`/category/${categorys.id}`}
                            > {categorys.name} </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categorys;