import React from 'react';

import './header.css';

export default function Header () {
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.fontSize = "30px";
    } else {
      document.getElementById("header").style.fontSize = "90px";
    }
  }
  return (
    <div id="header">Header</div>
  );
}
