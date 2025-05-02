import React from "react";
import { FaStar, FaRegEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    rating,
    total_view,
    details,
  } = news;

  const formattedDate = new Date(news.author.published_date).toLocaleDateString();

  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-4">
      {/* Header */}
      <div className="flex bg-base-200 p-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-sm">{author.name}</h4>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-blue-500" />
          <FaShareAlt className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold">{title}</h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full rounded-lg object-cover"
      />

      {/* Details */}
      <p className="text-gray-700 text-sm">
        {details.length > 200 ? details.slice(0, 200) + "..." : details}
        <Link to={`/news-details/${id}`} className="text-blue-500 cursor-pointer font-semibold ml-1">
          Read More
        </Link>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between border-t pt-3 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(Math.round(rating.number))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-black">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
