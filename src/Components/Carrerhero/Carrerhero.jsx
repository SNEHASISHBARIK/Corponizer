
import './Carrerhero.css'
import weserve from '../../assets/Carrer/Weserve.png'
import search from '../../assets/Carrer/Search.png'


const Carrerhero = () => {
  const popularJobs = [
    'HR Recruiter',
    'Frontend Developer',
    'Backend Developer',
    'Graphics Designer',
    'UI/UX Designer'
  ];

  return (
    <>
      <section className="career-hero-section" style={{'--bg-image': `url(${weserve})`}}>
        <div className="hero-content">
            <h1>Find Your Dream Job With Exciting Opportunities</h1>
            <p>You can make it happen by finding your dream job here. Whether you want work or just the right fit, your perfect job is out there. Stop taking just any job and</p>
            <p>start doing work that makes you happy. Your new career starts today.</p>
            <div className="search-bar">
              <img src={search} alt="Search icon" />
              <input type="text" placeholder="Job title, keyword, or company" />
              <button>Search</button>
            </div>
        </div>
      </section>

      <section className="popular-jobs-section">
        <div className="popular-jobs-container">
          <h2>Popular Job Categories</h2>
          <div className="job-cards-container">
            <div className="job-cards-track">
              {popularJobs.map((job, index) => (
                <div className="job-card" key={`orig-${index}`}>
                  {job}
                </div>
              ))}
              {popularJobs.map((job, index) => (
                <div className="job-card" key={`dup-${index}`}>
                  {job}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Carrerhero