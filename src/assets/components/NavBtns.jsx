import React from 'react';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { MenuLinks } from './Navbar';
import { Link } from 'react-router-dom';

const NavBtns = ({ location }) => {
  // Debugging: Check location prop
  console.log('Current location prop:', location);

  // Find the current page in MenuLinks
  const currentIndex = MenuLinks.findIndex((link) => link.name === location);

  // Debugging: Check current index
  console.log('Current index:', currentIndex);

  // Determine the previous and next links
  const prevLink = currentIndex > 0 ? MenuLinks[currentIndex - 1] : null;
  const nextLink = currentIndex < MenuLinks.length - 1 ? MenuLinks[currentIndex + 1] : null;

  // Debugging: Check prevLink and nextLink
  console.log('Previous link:', prevLink);
  console.log('Next link:', nextLink);

  return (
    <div className="flex justify-between items-center mt-4">
      {/* Previous Button */}
      <button
        disabled={!prevLink}
        className={`flex items-center gap-2 px-4 py-2 m-1 bg-green-500 shadow-2xl text-white rounded-md placeholder:${
          !prevLink ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {prevLink && (
          <Link to={prevLink.link} className="flex items-center">
            <GrLinkPrevious />
            
          </Link>
        )}
      </button>

      {/* Next Button */}
      <button
        disabled={!nextLink}
        className={`flex items-center gap-2 px-4 py-2 m-1 bg-green-500 shadow-2xl text-white rounded-md ${
          !nextLink ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {nextLink && (
          <Link to={nextLink.link} className="flex items-center">
            
            <GrLinkNext />
          </Link>
        )}
      </button>
    </div>
  );
};

export default NavBtns;
