import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then((res)=>res.json())

const Categories = () => {

    const categories = use(categoryPromise)

    

    return (
        <div>
            <h1 className='font-bold'>All Categories</h1>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(category=><NavLink
                        to={`/category/${category.id}`}
                        className={"btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"} 
                        key={category.id}>
                            {category.name}
                            </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;