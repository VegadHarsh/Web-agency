import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationPath = () => {
  const location = useLocation();
  const [breadcrumb, setBreadcrumb] = useState([]);
  const validRoutes = ["AboutUs", "services", "portfolio", "Contact"];

  useEffect(() => {
    // Extract the current path name
    const currentPath = location.pathname.split('/')[1];

    // Check if the current path is one of the valid routes
    if (validRoutes.includes(currentPath)) {
      setBreadcrumb((prevBreadcrumb) => {
        // Include the current path to the breadcrumb
        if (!prevBreadcrumb.includes(currentPath)) {
          return [...prevBreadcrumb, currentPath];
        }
        return prevBreadcrumb;
      });
    } else {
      // Reset the breadcrumb if the current path is not valid
      setBreadcrumb([]);
    }
  }, [location]);

  return (
    <div className="naviget_path bg-white py-4 px-20">
      <div className="row">
        <div className="nav-path d-flex">
          <Link to="/">
            <button className="relative group m-0">
              <span className="relative z-10">Home</span>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
            </button>
            <span> / </span>
          </Link>

          {/* Display the breadcrumb paths */}
          {breadcrumb.map((path, index) => (
            <React.Fragment key={index}>
              <Link to={`/${path.toLowerCase()}`}>
                <button className="relative group m-0">
                  <span className="relative z-10">{path}</span>
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
                </button>
              </Link>
              {index < breadcrumb.length - 1  && <span> / </span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationPath;
