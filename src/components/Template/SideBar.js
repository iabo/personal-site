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
      <p>Hi, My name is Yabdul. I'm a software engineer with professional knowledge in backend technologies such as Python, PHP, Nginx, Odoo ERP, Flask, and Laravel.
        I am a <a href="https://www.unadmexico.mx/">UNADM</a> graduate with years of experience as a sysadmin for large companies in the construction sector.
        I am also the founder and CEO of <a href="https://indevs.site">Indevs</a>. Before Indevs 
        at <a href="https://www.blharbert.com/">BL Harbert</a>
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
