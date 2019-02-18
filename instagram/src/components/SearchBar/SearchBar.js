import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <div className="logo-area">
        <img className="logo" src="https://www.bing.com/th?id=OIP.Mo8oLFEmrKizFV72ds11cQHaE8&w=272&h=182&c=7&o=5&pid=1.7" alt="Instagram"/>
        <h1>Instagram</h1>
      </div>
      <input type="text" placeholder="search" />
      <div className="symbols-bar">
        <p><span>comp</span> <span>hrt</span> <span>prof</span></p>
      </div>
    </div>
  );
}

export default SearchBar;