import './WelcomeHero.css'
import Welcome from '../../assets/hero/top5.jpeg' // Using an existing image as a placeholder

const WelcomeHero = () => {
  return (
    <section className="welcome-section">

      <div className="welcome-container">

        <div className="welcome-left">
          <h2>Welcome To</h2>

          <h1>Corponizers</h1>

          <p>
            Corponizers is a corporate facilitator organization to provide
            job seekers with the perfect occupation/post. Our name justifies
            our intent and purpose: Corpo(rate)-(orga)nizers.

            Our organization was formed with the idea of creating a new kind
            of recruitment company that focuses on building strong
            relationships with both clients and candidates.

            By understanding the unique needs of each party, we aim to create
            mutually beneficial and long-term success.
          </p>

          

        </div>

        <div className="welcome-right">
          <img src={Welcome} alt="Welcome Image" />
        </div>

      </div>

    </section>
  )
}

export default WelcomeHero