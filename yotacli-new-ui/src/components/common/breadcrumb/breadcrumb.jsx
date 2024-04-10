import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {paths.map((path, index) => (
          <li className="breadcrumb-item" key={index}>
            {path.link ? (
              <Link to={path.link}>{path.label}</Link>
            ) : (
              <span>{path.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
