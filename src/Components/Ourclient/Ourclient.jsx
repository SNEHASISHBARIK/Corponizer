import image1 from '../../assets/hero/image1.jpg.jpeg'
import image2 from '../../assets/hero/image2.png'
import image3 from '../../assets/hero/image3.png'
import image4 from '../../assets/hero/image4.png'
import image5 from '../../assets/hero/image5.png'
import image6 from '../../assets/hero/image6.png'
import image7 from '../../assets/hero/image7.png'
import image8 from '../../assets/hero/image8.png'
import image9 from '../../assets/hero/image9.png'
import image10 from '../../assets/hero/image10.png'
import image11 from '../../assets/hero/image11.png'
import image12 from '../../assets/hero/image12.png'
import image13 from '../../assets/hero/image13.png'
import image14 from '../../assets/hero/image14.png'
import image15 from '../../assets/hero/image15.png'
import './Ourclient.css'



const Ourclient = () => {
  const clientLogos = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15
  ];

  return (
    <section className="our-client-section">
      <div className="client-header">
        <h2>Our Clients</h2>
        <p>Visionary leaders and forward-thinking innovators who prioritize excellence, foster trust, and achieve transformative results through collaboration.</p>
      </div>
      <div className="client-logos-grid">
        {clientLogos.map((logo, index) => (
          <div className="logo-container" key={index}>
            <img src={logo} alt={`Client logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Ourclient