import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import { Riley } from './Riley';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header className='header__concept'>
    <div className='breadcrumbs'>HOME</div>
    <div className='spine'>PUSHING PIXELS</div>
    <h1 className='riley'>RILEY</h1>
    <h2 className='bathurst'>BATHURST</h2>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
