import './Recurementmethod.css'
import round1 from '../../assets/services/round1.png'
import round2 from '../../assets/services/round2.png'
import round3 from '../../assets/services/round3.png'
import friend from '../../assets/services/frnds-BNW3n_eh.avif'



const Recurementmethod = () => {
  return (
    <section className="recruitment-method-section">
      <div className="recruitment-method-container">
        <div className="recruitment-method-left">
          <div className="recruitment-method-header">
            <h1>
              RECRUITMENT <strong>METHOD</strong>
            </h1>
            <p>
              Our recruitment methodology focuses on identifying and attracting
              top talent through a combination of sourcing, screening,
              interviewing, and assessing candidates to ensure the best fit for
              our clients.
            </p>
          </div>
          <div className="recruitment-steps">
            <div className="step">
              <div className="step-icon-container">
                <img src={round3} alt="Pipeline Search Icon" />
              </div>
              <div className="step-content">
                <h2>Pipeline Search</h2>
                <p>
                  Our multi-level source engine will speed up the quality
                  sourcing.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-icon-container">
                <img src={round2} alt="AI Screening Icon" />
              </div>
              <div className="step-content">
                <h2>AI Screening</h2>
                <p>
                  Screening of candidates on Technical and Behavioral parameters.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-icon-container">
                <img src={round1} alt="Top Profile Delivery Icon" />
              </div>
              <div className="step-content">
                <h2>Top Profile Delivery</h2>
                <p>We only provide shortlisted profiles to your recruitment.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="recruitment-method-right">
          <div className="image-container">
            <img src={friend} alt="Team of professionals collaborating" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recurementmethod