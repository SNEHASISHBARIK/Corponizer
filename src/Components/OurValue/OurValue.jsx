import Ourvalue from '../../assets/hero/ourvalue.png'
import hero5 from '../../assets/hero/home5.png'
import './OurValue.css'



const OurValue = () => {
  return (
    <section className="our-value-section">
        <div className="our">

        <div className="left">
          <img src={Ourvalue} alt="" />
        </div>
        
        <div className="right">
          <div className="top">
            <h2><b>Our Value</b></h2>
            <p>To be the premier recruitment partner for businesses worldwide, delivering exceptional talent solutions and service excellence.</p>
          </div>
          <div className="leftdown">
            <h4><b>INTEGRITY</b></h4>
            <p>To be the premier recruitment partner for businesses worldwide, delivering exceptional talent solutions and service excellence.

            </p>


            <h4><b>EXCELLENCE</b></h4>
            <p>We will seek out ways to continuously improve every aspect of our functioning and constantly raise the standards of our services.

            </p>
             <h4><b>PROFESSIONALISM</b></h4>
                <p>Our work will reflect the best practices in the industry.</p>
          </div>

          <div className="down">
            <h4><b>TRANSPARENCY</b></h4>
            <p>We will always maintain an open and straightforward approach regarding our functioning and relations with stakeholders.</p>

            <h4><b>DIGNITY</b></h4>
            <p>We will always uphold the highest respect and compassion for individuals.</p>

            <img src={hero5} alt="" />
          </div>


        </div>
      </div>


    </section>
  )
}

export default OurValue