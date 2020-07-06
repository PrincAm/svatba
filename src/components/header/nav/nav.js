import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/place">Místo</Link>
      </li>
      <li>
        <Link to="/program">Program</Link>
      </li>
      <li>
        <Link to="/gifts">Dary</Link>
      </li>
      <li>
        <Link to="/contact">Kontakt</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
