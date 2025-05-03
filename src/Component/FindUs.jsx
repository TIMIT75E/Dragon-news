import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router';

const FindUs = () => {
  return (
    <div className="mx-3 space-y-6">
      <h1 className="font-bold text-lg">Find Us On</h1>
      <div className="join join-vertical w-full">
        <a
          href="https://www.facebook.com/profile.php?id=100089950557236"
          target="_blank"
          rel="noopener noreferrer"
          className="btn join-item text-blue-600 bg-white border border-gray-300 hover:bg-blue-50"
        >
          <FaFacebookF className="mr-2" />
          Facebook
        </a>

        <button className="btn join-item text-gray-800 bg-white border border-gray-300 hover:bg-gray-100">
          <FaGithub className="mr-2" />
          GitHub
        </button>
        <button className="btn join-item text-pink-500 bg-white border border-gray-300 hover:bg-pink-50">
          <FaInstagram className="mr-2" />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
