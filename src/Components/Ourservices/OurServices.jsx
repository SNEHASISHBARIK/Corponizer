
import './OurServices.css'

const OurServices = () => {
  return (
    <section className="our-services-section">
        <div className="main-container">

            <div className="section-title">
                <h1>Our</h1>
                <h1>Services</h1>
            </div>

            <div className="cards-container">

                <div className="service-card">
                    <h2>FINANCE</h2>
                    <ul>
                        <li>Recruiting top finance and accounting professionals for businesses of all sizes.</li>
                        <li>Placing executives, managers, and staff accountants in finance departments.</li>
                        <li>Offering customized recruitment solutions that align with our clients’ financial objectives.</li>
                    </ul>
                </div>

                 <div className="service-card">
                    <h2>HEALTHCARE</h2>
                    <ul>
                        <li>Partnering with healthcare providers and organizations to identify and hire top talent.</li>
                        <li>Connecting qualified healthcare professionals with job opportunities in a variety of healthcare settings.</li>
                        <li>Offering staffing solutions that support healthcare facilities staffing needs and help ensure the highest level of patient care.</li>
                    </ul>
                </div>

                 <div className="service-card">
                    <h2>TRANSPORT & LOGISTICS</h2>
                    <ul>
                        <li>Connecting transport and logistics businesses with skilled professionals in operations, logistics, supply chain management, and transportation.</li>
                        <li>Offering customized staffing solutions that help businesses meet their unique staffing needs, whether for full-time, part-time, or temporary positions.</li>
                        <li>Supporting transport and logistics businesses in achieving their goals by providing top talent that can drive growth and operational efficiency.</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>
  )
}

export default OurServices