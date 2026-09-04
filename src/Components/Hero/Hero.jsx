import top1 from '../../assets/hero/top1.png'
import top2 from '../../assets/hero/top2.jpeg'
import top3 from '../../assets/hero/top3.jpeg'
import top4 from '../../assets/hero/top4.jpeg'
import top5 from '../../assets/hero/top5.jpeg'
import './Hero.css'

const Hero = () => {
  const images = [top1, top2, top3, top4, top5];
  return (
    <section className="hero-container">
        <div className="hero-slider">
          {/* Duplicate images for a seamless loop */}
          {[...images, ...images].map((image, index) => (
              <img key={index} src={image} alt={`background slide ${index + 1}`} />
          ))}
        </div>
        <div className="hero-content">
          <h1>Empowering Careers, Transforming Futures</h1>
          <p>job seekers, Find opportunities, Employees, Find Talent - All in one Platform</p>
          <button>Enquiry Now</button>
        </div>
    </section>
  )
}

export default Hero
