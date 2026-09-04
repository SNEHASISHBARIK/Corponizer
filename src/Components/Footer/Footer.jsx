import { Link } from 'react-router-dom'
import call from '../../assets/Carrer/call.png'
import mail from '../../assets/Carrer/msg.png'
import location from '../../assets/Carrer/location.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Corponizers</h3>
          <p>Empowering careers and transforming futures by connecting exceptional talent with innovative companies worldwide.</p>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/partners">Partners</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Support</h3>
          <ul>
            <li><a href="/help-center">Help Center</a></li>
            <li><Link to="/privacy-policy">Terms of Service</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/recruitment">Recruitment</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <img src={location} alt="Location icon" />
              <span>123 Business Rd, Suite 100, Corporate City, 54321</span>
            </li>
            <li>
              <img src={mail} alt="Email icon" />
              <a href="mailto:info@corponizers.com">info@corponizers.com</a>
            </li>
            <li>
              <img src={call} alt="Phone icon" />
              <a href="tel:+1234567890">+91 7008681808</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Corponizers. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer