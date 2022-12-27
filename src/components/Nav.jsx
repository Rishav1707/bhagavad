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
    </nav>
  );
}

export default Nav