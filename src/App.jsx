import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import UserReview from './components/UserReview'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Clients from './components/Clients'
import DocuTech from './components/DocuTech'
import './App.css'

function App() {
  return (
    <div >
      <Header />
      <Navbar />
      <Home />
      <Clients />
      <UserReview />
      <DocuTech />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App


// className="min-h-screen bg-gradient-to-b from-[#d9e9f9] to-white"