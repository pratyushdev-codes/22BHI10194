import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export const APIOptions = () => {
  return (

    <div className='flex flex-row items-center justify-center space-x-4'>

      <Link to="/topUsers">
        <button className="btn btn-outline-primary">View Top Users</button>
      </Link>
      <Link to="/trendingPost">
        <button className="btn btn-outline-primary">View Trending Post</button>
      </Link>
      <Link to="/feed">
        <button className="btn btn-outline-primary">Feed</button>
      </Link>
    </div>
  );
};
