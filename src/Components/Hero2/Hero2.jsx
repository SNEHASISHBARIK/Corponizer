import home3 from '../../assets/hero/home3.png' // Using an existing image as a placeholder
import home4 from '../../assets/hero/home4.png' // Using an existing image as a placeholder
import './Hero2.css'

const Hero2 = () => {
  return (
    <section className="hero2-section">

        <div className="container">
            <div className="top">
                <p>To be the leading recruitment partner for businesses worldwide, known for our exceptional service, innovative solutions, and unwavering commitment to helping our clients achieve their goals through the acquisition of top talent. We aim to foster a culture of excellence, collaboration, and integrity, where our team members thrive, and our clients trust us as their go-to recruitment experts. Our ultimate goal is to make a positive impact on the global workforce, creating a more equitable and diverse society, one hire at a time.</p>
            </div>

            <div className="left">
                <img src={home3} alt="" />
                <h2><b>EXCELLENCE</b></h2>
                <p>To be the premier recruitment partner for businesses worldwide,</p>
                <p>delivering exceptional talent solutions and service excellence.</p>
            </div>
            <div className="right">
                <img src={home4} alt="" />
                <h2><b>INNOVATION</b></h2>
                <p>To make a meaningful impact on the workforce by connecting</p>
                <p>businesses with the best talent, driving growth and success for both.</p>

            </div>
        </div>


    </section>
  )
}

export default Hero2