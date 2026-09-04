import './Servicehero.css'
import servicdehome from '../../assets/services/service_home-DQqbB2WH.jpg.jpeg'

const Servicehero = () => {
  return (
    <section className="services-hero">
      {/* Background Image Container to enable high-performance Ken Burns zoom-and-pan */}
      <div className="hero-bg-wrapper">
        <img 
          src={servicdehome} 
          alt="Corponizer Services Background" 
          className="hero-bg-image" 
        />
      </div>
      
      {/* Sophisticated Dark Gradient & Brand Overlay */}
      <div className="hero-overlay"></div>

      {/* Premium subtle glowing accent orb */}
      <div className="hero-glow-orb"></div>

      {/* Main Content Area */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          WHAT WE OFFER
        </div>
        
        <h1 className="hero-title">
          Our Services
        </h1>
        
        <p className="hero-subtitle">
          Empowering your growth through world-class strategic recruitment, premium staffing solutions, and future-ready talent acquisition.
        </p>
      </div>

      {/* Interactive Scroll Down Indicator */}
      <div className="hero-scroll-indicator">
        <span className="scroll-text">Explore Our Expertise</span>
        <div className="scroll-icon-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Servicehero