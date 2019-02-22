import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
    <div className="navbar">
      <div className="logo-area">
        <i className="fab fa-instagram logo"></i>
        <img className="insta-name" src="https://fontmeme.com/images/instagram-new-logo.png" alt=""/>
      </div>
      <input type="text" className="search" placeholder="search" />
      <div className="symbols-bar">
        <i className="far fa-compass searchbar-symbols"></i>
        <i className="far fa-heart searchbar-symbols"></i>
        <i className="far fa-user searchbar-symbols"></i>
      </div>
    </div>
  );
}

export default SearchBar;