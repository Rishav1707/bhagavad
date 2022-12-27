import React, { useEffect, useState } from 'react';
import '../styles/nav.css'

import TypingEffect from './TypingEffect';

const Nav = () => {
  const [show, setShow] = useState(() => null);

  useEffect(() => {
    let lastScrollPosition = 0;
    setShow(true);
    document.addEventListener(
      "scroll",
      function (e) {
        if (window.scrollY > lastScrollPosition) {
          setShow(false);
        } else {
          setShow(true);
        }
        lastScrollPosition = window.scrollY;
      },
      {
        passive: true,
      }
    );
  }, []);

  return (
    <nav
      style={{
        opacity: show ? 1 : 0,
        top: show ? 0 : "-100px",
      }}
    >
      <div className="nav-text">
        <h1>{<TypingEffect />}</h1>
      </div>

      <ul className="nav-links">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          &#9776;
        </label>

        <div className="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Search</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav