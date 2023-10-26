// import React from 'react';

import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div className="card bg-base-100 shadow-xl mb-16">
      <figure>
        <img src={image_url} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}
              <Link className="text-blue-400 font-semibold" to={`/news/${_id}`}>
                Read more...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
