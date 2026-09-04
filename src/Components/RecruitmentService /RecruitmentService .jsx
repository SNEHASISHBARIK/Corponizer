import './RecruitmentService .css'
import girl from '../../assets/services/girl.png'

const RecruitmentService = () => {
  return (
    <section className="recruitment-service-section">
      <div className="recruitment-service-container">
        
        {/* Left Side: Image */}
        <div className="image-side">
          <div className="image-wrapper">
            <img src={girl} alt="Recruitment professional" />
            <div className="image-overlay-decoration"></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="content-side">
          <div className="header-block">
            <h2 className="section-subtitle">What We Offer</h2>
            <h1 className="section-title">
              <b>Recruitment</b> Service Offering
            </h1>
            <p className="section-description">
              Corponizers provides end-to-end recruitment services, including client consultation, sourcing strategies, candidate screening and assessment, presentation of candidates, offer negotiation, and onboarding.
            </p>
          </div>

          <div className="cards-grid">
            <div className="service-card">
              <div className="card-icon-indicator"></div>
              <div className="card-content">
                <h3>LATERAL HIRING SOLUTIONS</h3>
                <p>Pre vetted resumes with Video, SLA based, Quality Assured</p>
              </div>
            </div>

            <div className="service-card">
              <div className="card-icon-indicator"></div>
              <div className="card-content">
                <h3>EXECUTIVE SEARCH</h3>
                <p>Industry & Competency Mapping, JD/Scope Built.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="card-icon-indicator"></div>
              <div className="card-content">
                <h3>CONTRACT STAFFING</h3>
                <p>Pre vetted pipeline with shortlisted profile, Contract Management</p>
              </div>
            </div>

            <div className="service-card">
              <div className="card-icon-indicator"></div>
              <div className="card-content">
                <h3>360° RPO</h3>
                <p>Complete recruitment process outsourcing</p>
              </div>
            </div>

            <div className="service-card">
              <div className="card-icon-indicator"></div>
              <div className="card-content">
                <h3>VALUE SCREENING</h3>
                <p>Interview solutions leveraging Artificial Intelligence & Machine Learning</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default RecruitmentService