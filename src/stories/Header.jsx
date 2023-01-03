import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import { Riley } from './Riley';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header className='header__concept'>
    <div className='breadcrumbs'>HOME</div>
    <div className='spine'>PUSHING PIXELS</div>
    {/* <svg className='cherry' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='50' /></svg>
    <svg className='darkcherry' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='50' /></svg>
    <svg className='white' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='50' /></svg> */}
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
