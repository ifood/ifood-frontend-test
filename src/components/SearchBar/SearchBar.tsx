import React from 'react';
import './SearchBar.scss';

interface SearchBar {
  placeholder: string,
  onSearch: Function
}

export const SearchBar = ({ placeholder, onSearch }: SearchBar) => (
  <div className="searchBar">
    <input
      type="text"
      placeholder={placeholder.toUpperCase()}
      onChange={(evt) => onSearch(evt.target.value)}
      className="searchBar__input"
    />
  </div>
);
