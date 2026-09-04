import Hero from '../Components/Hero/Hero'
import Hero2 from '../Components/Hero2/Hero2'
import Insidesrv from '../Components/Insidesrv/Insidesrv'
import Ourclient from '../Components/Ourclient/Ourclient'
import OurValue from '../Components/OurValue/OurValue'
import WelcomeHero from '../Components/WelcomeHero.jsx/WelcomeHero'
import './Home.css'

const Home = () => {

  return (
    <main className="home-container">
        <Hero/>
        <WelcomeHero/>
        <Hero2/>
        <OurValue/>
        <Ourclient/>
        <Insidesrv/>
    </main>
  )
}

export default Home