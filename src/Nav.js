import React from 'react';
import './style.css';

export default function Nav(props) {
  return (
    <div className="nav">
      <div className="div">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9xTiwwhvuaPEnFRH8_2lA7wdlE0nURusKw&s"
          className="nav-image"
        />
        <h1 style={{ color: 'green' }}>ISP HackerEarth</h1>
      </div>

      <p style={{ color: 'green' }}>--Search ISP made easy--!</p>
      <strong>Total ISP: {props.count} | API Hits: 748</strong>
    </div>
  );
}
