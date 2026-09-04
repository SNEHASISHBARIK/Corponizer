import './Insidesrv.css'
import team from '../../assets/services/team.jpeg'
import card1 from '../../assets/hero/card1.png'
import card2 from '../../assets/hero/card2.png'
import card3 from '../../assets/hero/card3.png'
import card4 from '../../assets/hero/card4.png'



const Insidesrv = () => {
  const cardsData = [
    {
      img: card1,
      title: 'CONNECT',
      text: 'Connect job seekers with their dream careers.'
    },
    {
      img: card2,
      title: 'EXCEPTIONAL',
      text: 'Provide exceptional recruitment services to businesses.'
    },
    {
      img: card3,
      title: 'DIVERSITY',
      text: 'Promote diversity and inclusivity in the workplace.'
    },
    {
      img: card4,
      title: 'IMPACT',
      text: 'Make a positive impact on society through recruitment.'
    }
  ];

  return (
    <section className="insidesrv-section">
      <div className="insidesrv-container">
        <div className="insidesrv-top">
          <div className="top-image-container">
            <img src={team} alt="Our team collaborating in a modern office" />
          </div>
          <div className="top-text-container">
            <p>
              The team at Corponizers is passionate about finding the perfect match for each client and candidate. They use a combination of cutting-edge technology and old-fashioned networking to connect top-tier talent with innovative companies around the world. Today, the seed of idea has already become a seedling while opening its new branches towards the sectors we are looking forward to. Our clients have watered the seedling to become a radiant and ever-blooming tree in the near future. Corponizers continues to innovate and push the boundaries of what's possible in the recruitment industry. The team is committed to providing exceptional service to every client and candidate, helping to shape the future of work for years to come.
            </p>
          </div>
        </div>

        <div className="insidesrv-cards-grid">
          {cardsData.map((card, index) => (
            <div className="service-card" key={index}>
              <div className="card-icon-wrapper">
                <img src={card.img} alt={`${card.title} icon`} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Insidesrv