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

      <div className='nav-a'>
        <ul className="nav-links">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            &#9776;
          </label>

          <div className="menu">
            <li>
              <a className="nav_btn" href="#home">
                || <span>Home</span> ||
              </a>
            </li>
            <li>
              <a className="nav_btn" href="#search">
                || <span>Search</span> ||
              </a>
            </li>
            <li>
              <a className="nav_btn" href="#Books">
                || <span>Books</span> ||
              </a>
            </li>
            <li>
              <a className="nav_btn" href="#chapter">
                || <span>Chapter</span> ||
              </a>
            </li>
            <li>
              <a className="nav_btn" href="#contact">
                || <span>Contact</span> ||
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Nav