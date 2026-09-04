
import './Weserve.css'
import Servicehe from '../../assets/services/servicehe.jpg'

const Weserve = () => {
  return (
    <section className="weserve-section">
        <div className="main">

            <div className="weserve-title-container">
                <h1>BUSINESSES</h1>
                <h1>WE SERVE</h1>
            </div>

            <div className="left">
                <div>
                    <h2>Enterprises</h2>
                    <p>If you are looking for an enterprise hiring partner, we will help you assess your business needs—your market, your customers, your competition, and your key challenges—to address them with an enterprise solution.</p>
                </div>


                 <div>
                    <h2>Small/Mid Size</h2>
                    <p>Maintaining an in-house technical team is expensive. It’s better to outsource to a dedicated offshore team like us to handle recruitment needs while you focus on your core business.</p>
                </div>


                 <div>
                    <h2>Startups/Individual Entrepreneur</h2>
                    <p>We provide a slew of startup services that work on a shoestring budget, but are highly feasible with the demands of your target market.</p>
                </div>
                
            </div>

            <div className="right">
                <div>
                    <img src={Servicehe} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Weserve