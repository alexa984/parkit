
import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import styles from './styles.module.css'

class Header extends React.Component {
render() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={styles.navigationHeader}>
        <Nav className="mr-auto" className={styles.fixBootstrapFlex}>
          <img src={logo} alt="logo" className={styles.logo} />
          <Navbar.Brand href="/" className={styles.navTitle}>ParkIt</Navbar.Brand>
      </Nav>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className={styles.navLinkGroup}>
      <Nav className="ml-auto">
        <Nav.Link href="/" className={styles.navLink}>Home</Nav.Link>
        <Nav.Link href="/Map" className={styles.navLink}>Map</Nav.Link>
        <Nav.Link href="/profile/index.js" className={styles.navLink}>Profile</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}
}

export default Header;
