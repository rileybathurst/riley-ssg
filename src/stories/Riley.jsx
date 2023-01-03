// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

export const Riley = ({ primary }) => {
  const mode = primary ? 'storybookriley---primary' : 'storybookriley---secondary';
  return (
    <div className='riley-container'>
      <h2 className="riley">RILEY</h2>
    </div>
  );
};

Riley.propTypes = {
  primary: PropTypes.bool,
};

Riley.defaultProps = {
  primary: false,
};