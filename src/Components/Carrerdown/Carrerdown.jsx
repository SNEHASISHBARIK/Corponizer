import './Carrerdown.css'
import cr10 from '../../assets/Carrer/cr10.png'
import cr11 from '../../assets/Carrer/cr11.png'
import team1 from '../../assets/Carrer/team1.png'
import team2 from '../../assets/Carrer/team2.png'
import team3 from '../../assets/Carrer/team3.png'
import team4 from '../../assets/Carrer/team4.png'
import team5 from '../../assets/Carrer/team5.png'
import team6 from '../../assets/Carrer/team6.png'
import team7 from '../../assets/Carrer/team7.png'
import team8 from '../../assets/Carrer/team8.png'
import team9 from '../../assets/Carrer/team9.png'
import team10 from '../../assets/Carrer/team10.png'
import team11 from '../../assets/Carrer/team11.png'
import team12 from '../../assets/Carrer/team12.png'
import team13 from '../../assets/Carrer/team13.png'
import team14 from '../../assets/Carrer/team14.png'
import team15 from '../../assets/Carrer/team15.jpeg'
import team16 from '../../assets/Carrer/team16.png'
import team17 from '../../assets/Carrer/team17.png' 
import team18 from '../../assets/Carrer/team18.webp'
import team19 from '../../assets/Carrer/team19.png'
import team20 from '../../assets/Carrer/team20.png'
import team21 from '../../assets/Carrer/team21.png'
import team22 from '../../assets/Carrer/team22.png'

const Carrerdown = () => {
  return (
   <section className="carrerdown-container">

    <div className="carrerdown-top-banner">
      <div className="carrerdown-top-content">
        <h1><span className="text-black">We're Hiring - </span><span className="text-red">Grow With Us!</span></h1>
        <p>Your dream job is closer than you think! Explore handpicked roles, apply in minutes, and take the first step toward a brighter future.</p>
      </div>
    </div>

    <div className="carrerdown-tech-banner">
      <img src={cr10} alt="Background" className="tech-banner-bg" />
      <div className="tech-banner-overlay">
        <h1><span className="text-black">WE WORK ON</span> <span className="text-white">TECHNOLOGIES</span></h1>
      </div>
    </div>

    <div className="carrerdown-tech-grid">

      <div className="tech-row">
        <div className="tech-title left-title">
          <h2>Project Methodology</h2>
        </div>
        <div className="tech-images right-images">
          <img src={team1} alt="Project Methodology 1" />
          <img src={team2} alt="Project Methodology 2" />
          <img src={team3} alt="Project Methodology 3" />
          <img src={team4} alt="Project Methodology 4" />
          <img src={team5} alt="Project Methodology 5" />
          <img src={team6} alt="Project Methodology 6" />
        </div>
      </div>

      <div className="tech-row">
        <div className="tech-images left-images">
          <img src={team7} alt="ERP Application 1" />
          <img src={team8} alt="ERP Application 2" />
          <img src={team9} alt="ERP Application 3" />
          <img src={team10} alt="ERP Application 4" />
          <img src={team11} alt="ERP Application 5" />
          <img src={team12} alt="ERP Application 6" />
        </div>
        <div className="tech-title right-title">
          <h2>ERP Application</h2>
        </div>
      </div>

      <div className="tech-row">
        <div className="tech-title left-title">
          <h2>Application Developement</h2>
        </div>
        <div className="tech-images right-images">
          <img src={team13} alt="Application Development 1" />
          <img src={team14} alt="Application Development 2" />
          <img src={team15} alt="Application Development 3" />
          <img src={team16} alt="Application Development 4" />
          <img src={team17} alt="Application Development 5" />
          <img src={team18} alt="Application Development 6" />
        </div>
      </div>

      <div className="tech-row">
        <div className="tech-images left-images">
          <img src={team19} alt="Cloud Hosting 1" />
          <img src={team20} alt="Cloud Hosting 2" />
          <img src={team21} alt="Cloud Hosting 3" />
          <img src={team22} alt="Cloud Hosting 4" />
          <img src={team5} alt="Cloud Hosting 5" />
          <img src={team6} alt="Cloud Hosting 6" />
        </div>
        <div className="tech-title right-title">
          <h2>Cloud Hosting Services</h2>
        </div>
      </div>

    </div>

    <div className="carrerdown-footer-banner">
      <img src={cr11} alt="Success Background" className="footer-banner-bg" />
      <div className="footer-banner-overlay">
        <h1>Unlock Success with Corponizers - Learn How We Drive Growth</h1>
      </div>
    </div>

   </section>
  )
}

export default Carrerdown
