import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li><p>Help</p></li>
          <li><p>Services</p></li>
          <li><p>Careers</p></li>
          <li><p>Policies</p></li>
          <li><p>Contact</p></li>
        </ul>
      </div>
      <div>
        <h3>Services</h3>
        <ul>
          <li><p>Bulk Order</p></li>
          <li><p>Sell your Goods</p></li>
          <li><p>Technical Support</p></li>
          <li><p>Delivery Status</p></li>
          <li><p>Returns/Refunds</p></li>
        </ul>
      </div>
      <div>
        <h3>Delivery</h3>
        <ul>
          <li><p>Delivery Methods</p></li>
          <li><p>Enterprise</p></li>
        </ul>
      </div>
      <div className="about-company">
        <h2>Shrinath Sales Corporation</h2>
        <hr />
        <p>
            Contact <br />
            Phone Number: +91 78980 11400 <br />
            Email: shrinathsalesindore@gmail.com
        </p>
        <address>Plot No-33, Ware House Road, near bus stand, Indore, Madhya Pradesh, 452001, India</address>
        <br />
        <hr />
        <br />
        Chirayu Trivedi 22BCE0706
      </div>
    </footer>
  );
}

export default Footer;
