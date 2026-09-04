
import contacthero from '../../assets/hero/contact-home-wpW8NWqM.jpg.jpeg'
import './Contacthero.css'

const Contacthero = () => {
  return (
    <section className="contacthero-container">
        <img src={contacthero} alt="Contact Hero Background" className="contacthero-bg" />
        <div className="contacthero-overlay">
            <h1 className="contacthero-heading">
                <span className="heading-highlight">CONNECT</span> WITH US
            </h1>
            <p className="contacthero-subtext">
                Have questions or need assistance? Our team is here to help you every step of the way. Reach out to us and let's start a conversation.
            </p>
        </div>
    </section>
  )
}

export default Contacthero
