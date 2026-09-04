import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Recruitment from './Pages/Recruitment'
import Career from './Pages/Career'
import Contact from './Pages/Contact'
import Faq from './Pages/Faq'
import PrivacyPage from './Pages/Privacy'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
