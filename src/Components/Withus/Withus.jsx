
import { MapPin, Phone, Mail } from 'lucide-react';
import './Withus.css';

const Withus = () => {
  return (
    <section className="withus-section">
      <div className="withus-container">
        {/* Left Side: Form */}
        <div className="withus-left">
          <div className="withus-header">
            <h2>Get In Touch <span>With Us!</span></h2>
            <p>We'd love to hear from you. Please fill out this form and we will get in touch with you shortly.</p>
          </div>

          <form className="withus-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="First Name" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Last Name" />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact Number</label>
                <input type="text" id="contact" placeholder="number" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="withus-right">
          <div className="info-card">
            <h3>Contact Information</h3>
            <p>Reach out to us through any of these channels.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="icon-circle">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (800) 123-4567</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-circle">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>contact@corponizer.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-circle">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>123 Business Avenue, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
            
            <div className="info-bg-shape"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Withus;
