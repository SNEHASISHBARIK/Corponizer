import recuitment from '../../assets/services/recruitment-hero2-D3s2Hlax.jpg.jpeg';
import './RecurementHero.css';
 
const RecurementHero = () => {
  return (
    <section className="recruitment-hero">
      <div
        className="recruitment-hero-bg"
        style={{ '--bg-image': `url(${recuitment})` }}
      ></div>
      <div className="recruitment-hero-overlay"></div>
      <div className="recruitment-hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Your Career Starts Here</span>
        </div>
        <h1>Recruitment</h1>
        <p>Find your next career opportunity with us.</p>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-icon-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default RecurementHero;