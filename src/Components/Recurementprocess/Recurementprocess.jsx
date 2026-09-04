import './Recurementprocess.css'
import rein from '../../assets/services/rein.png'
import re2 from '../../assets/services/re2.png'
import re3 from '../../assets/services/re3.png'
import re4 from '../../assets/services/re4.png'
import re5 from '../../assets/services/re5.png'
import re6 from '../../assets/services/re6.png'
import re7 from '../../assets/services/re7.png'
import icon from '../../assets/services/icon12-Q-MaF2CZ.png'
import round1 from '../../assets/services/round1.png'
import team from '../../assets/services/team.jpeg'

const Recurementprocess = () => {
  const steps = [
    { id: 1, img: rein, label: 'Interview', angle: '0deg' },
    { id: 2, img: re2, label: 'Invitation to Interview', angle: '40deg' },
    { id: 3, img: re3, label: 'Screened by Technical panel', angle: '80deg' },
    { id: 4, img: re4, label: 'Invitation to analytical test', angle: '120deg' },
    { id: 5, img: re5, label: 'Application', angle: '160deg' },
    { id: 6, img: re6, label: 'Welcome', angle: '200deg' },
    { id: 7, img: re7, label: 'Offer Letter', angle: '240deg' },
    { id: 8, img: icon, label: 'Feedback', angle: '280deg' },
    { id: 9, img: round1, label: 'Reference Check', angle: '320deg' }
  ];

  return (
    <section className="recruitment-process-section">
      <div className="process-header">
        <h1>RECRUITMENT <span className="highlight-red">PROCESS</span></h1>
      </div>
      
      <div className="process-flow-container">
        {/* Central Team/Meeting Image */}
        <div className="center-team-image">
          <div className="image-bubble">
            <img src={team} alt="Recruitment Team Meeting" />
          </div>
        </div>

        {/* Outer Circular Orbit Ring */}
        <div className="orbit-ring-wrapper">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="process-step-node"
              style={{ '--angle': step.angle }}
            >
              {/* node-inner counter-rotates to stay perfectly upright and legible */}
              <div className="node-inner">
                <div className="icon-circle">
                  <img src={step.img} alt={step.label} />
                </div>
                <span className="step-label">{step.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recurementprocess