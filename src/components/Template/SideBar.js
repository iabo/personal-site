import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yabdul Abdala</h2>
        <p><a href="mailto:admin@indevs.site">admin@indevs.site</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I&#39;m a software engineer from <a href="https://www.unadmexico.mx/">UNADM</a> with proficiency in backend technologies such as Python, PHP, Nginx, Odoo ERP, Flask, and Laravel.
      I am the founder of <a href="https://indevs.site">Indevs</a> a software consulting company and I have professional experience as sysadmin for multiple companies.<br/>
        Before Indevs I was at <a href="https://www.blharbert.com/">BL Harbert</a>
        , <a href="https://coinsamatik.com/">CoinsaMatik</a>
        , and <a href="https://www.trabis.com.mx/">Trabis</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Yabdul Abdala <Link to="/">yabdul.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
