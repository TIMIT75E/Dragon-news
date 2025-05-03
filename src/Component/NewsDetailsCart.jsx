import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useLoaderData, Link } from 'react-router-dom';

const NewsDetailsCard = () => {
    const news = useLoaderData();

    const {
        title,
        details,
        image_url,
    } = news || {};


    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
            <img src={image_url} alt={title} className="w-full rounded-lg mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                {title}
            </h1>
            
            <p className="text-base text-gray-700 leading-relaxed">
                {details}
            </p>
            <div className="mt-8">
                <Link to={`/category/${news.category_id}`} className="btn btn-secondary font-semibold flex-">
                    <FaArrowLeft className="mr-2" /> All news in this category
                </Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;
