// import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="max-w-6xl">
      <div className="flex items-center">
        <button className="btn btn-secondary">Latest</button>
        <span>
          <Marquee pauseOnHover={true} speed={110}>
            <Link className="mr-16" to="">
              I can be a React component, multiple React components...
            </Link>
            <Link className="mr-16" to="">
              I can be a React component, multiple React components...
            </Link>
            <Link className="mr-16" to="">
              I can be a React component, multiple React components...
            </Link>
          </Marquee>
        </span>
      </div>
    </div>
  );
};

export default BreakingNews;
