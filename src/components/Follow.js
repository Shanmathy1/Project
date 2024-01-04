import React from 'react';
import './Follow.css'; 
function SocialMediaButtons() {
  return (
    <div className="wrapper">
      <div className="btn">
        <a href="#"><i className="fa fa-github-square"></i></a>
        <a href="#"><i className="fa fa-codepen"></i></a>
        <a href="#"><i className="fa fa-youtube-play"></i></a>
        <a href="#"><i className="fa fa-facebook-square"></i></a>
        <a href="#"><i className="fa fa-twitter-square"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
      </div>
    </div>
  );
}

export default SocialMediaButtons;
