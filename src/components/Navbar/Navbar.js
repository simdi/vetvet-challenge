import React from 'react';

import style from './Navbar.module.css';
import logo from '../../assets/images/vetvet-logo.svg';
import searchImage from '../../assets/images/search.svg';

export default function Navbar() {
  const hasImage = false;

  return (
    <header className={style.navbar}>
      <a href="/" className="logo">
        <img src={logo} alt="Vetvet Logo" />
      </a>

      <div className={style.navbarLeft}>
        <input type="text" name="search" />
        <div>
          <img src={searchImage} alt="Search Icon" />
        </div>
      </div>

      <div className={style.navbarRight}>
        <div className={style.imgContainer}>
          { hasImage && <img src="../../assets/images/user.svg" alt="User profile" /> }
        </div>
        <div className={style.userNameText}>Username</div>
      </div>
    </header>
  )
}
