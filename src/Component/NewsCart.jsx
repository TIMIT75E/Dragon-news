import React from 'react';
import {
    FaStar,
    FaRegStar,
    FaEye,
    FaShareAlt,
    FaRegBookmark
} from 'react-icons/fa';

const NewsCart = ({ news }) => {
    const {
        title,
        image_url,
        author,
        details,
        rating,
        total_view
    } = news;

    // Safely extract and format published date
    const publishedDate = author?.published_date
        ? new Date(author.published_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        : 'Unknown date';

    return (
        <div className="shadow-2xl rounded-lg p-4 shadow-sm space-y-4">
            {/* Header */}
            <div className="bg-base-200 p-4 rounded-md flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="text-sm font-semibold">{author?.name}</h4>
                        <p className="text-xs text-gray-500">{publishedDate}</p>
                    </div>
                </div>
                <div className="flex gap-2 text-gray-500 text-xl">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>
            {/* Title */}
            <h2 className="text-lg font-bold">{title}</h2>

            {/* Image */}
            <img
                src={image_url}
                alt={title}
                className="w-full h-52 object-cover rounded-md"
            />

            {/* Details */}
            <p className="text-sm text-gray-600">
                {details.slice(0, 200)}...
                <span className="text-orange-500 font-semibold cursor-pointer">
                    {' '}
                    Read More
                </span>
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center pt-2 border-t pt-4">
                {/* Rating */}
                <div className="flex items-center gap-1 text-orange-400">
                    {[...Array(5)].map((_, index) =>
                        index < rating.number ? (
                            <FaStar key={index} />
                        ) : (
                            <FaRegStar key={index} />
                        )
                    )}
                    <span className="ml-2 text-gray-700 font-medium">{rating.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-1 text-gray-600">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCart;
