import { useState, useEffect } from 'react';
import { Shield, Lock, Eye, FileText, Database, UserCheck } from 'lucide-react';
import './Privacy.css';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('collection');

  const sections = [
    { id: 'collection', icon: <Database size={18} />, title: 'Information Collection' },
    { id: 'usage', icon: <UserCheck size={18} />, title: 'How We Use Your Info' },
    { id: 'protection', icon: <Lock size={18} />, title: 'Data Protection' },
    { id: 'sharing', icon: <Eye size={18} />, title: 'Information Sharing' },
    { id: 'rights', icon: <Shield size={18} />, title: 'Your Privacy Rights' },
    { id: 'updates', icon: <FileText size={18} />, title: 'Policy Updates' },
  ];

  // Optional: Add scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <section className="privacy-section">
      <div className="privacy-header">
        <div className="privacy-header-content">
          <h1>Privacy <span>Policy</span></h1>
          <p>Your privacy is important to us. Learn how we collect, use, and protect your data.</p>
          <span className="last-updated">Last Updated: May 28, 2026</span>
        </div>
      </div>

      <div className="privacy-container">
        {/* Sidebar Navigation */}
        <div className="privacy-sidebar">
          <div className="sidebar-sticky">
            <h3>Table of Contents</h3>
            <nav className="privacy-nav">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  <span className="nav-icon">{section.icon}</span>
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="privacy-content">
          <div className="privacy-card">
            
            <section id="collection" className="content-section">
              <h2>1. Information Collection</h2>
              <p>We collect information to provide better services to all our users. The types of personal information we obtain include:</p>
              <ul>
                <li><strong>Contact details:</strong> Name, email address, phone number, and physical address.</li>
                <li><strong>Account information:</strong> Usernames, passwords, and other credentials used to access our services.</li>
                <li><strong>Usage data:</strong> Information about how you use our website, products, and services.</li>
                <li><strong>Device information:</strong> IP address, browser type, operating system, and device identifiers.</li>
              </ul>
            </section>

            <section id="usage" className="content-section">
              <h2>2. How We Use Your Info</h2>
              <p>We use the information we collect for various business purposes, including:</p>
              <ul>
                <li>Providing, maintaining, and improving our services.</li>
                <li>Processing transactions and sending related information.</li>
                <li>Sending administrative messages, technical notices, updates, and security alerts.</li>
                <li>Responding to your comments, questions, and customer service requests.</li>
                <li>Analyzing trends, usage, and activities in connection with our services.</li>
              </ul>
            </section>

            <section id="protection" className="content-section">
              <h2>3. Data Protection</h2>
              <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.</p>
              <p>In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.</p>
            </section>

            <section id="sharing" className="content-section">
              <h2>4. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>
            </section>

            <section id="rights" className="content-section">
              <h2>5. Your Privacy Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
              <ul>
                <li>The right to access, update, or delete the information we have on you.</li>
                <li>The right of rectification.</li>
                <li>The right to object to processing.</li>
                <li>The right of restriction.</li>
                <li>The right to data portability.</li>
                <li>The right to withdraw consent.</li>
              </ul>
              <p>If you wish to exercise any of these rights, please contact us using the information provided below.</p>
            </section>

            <section id="updates" className="content-section">
              <h2>6. Policy Updates</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            </section>

            <div className="privacy-contact">
              <h3>Questions or Concerns?</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <a href="mailto:privacy@corponizer.com" className="contact-email">privacy@corponizer.com</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
