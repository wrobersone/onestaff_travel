import React from 'react'
import Destination from './components/destination/Destination'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Offer from './components/Offer'
import Services from './components/services/Services'
import Tours from './components/Tours'
import Testimonials from './components/testimonials/Testimonials'
import DownloadApp from './components/DownloadApp'
import Footer from './components/footer/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Destination />
      <Offer />
      <Tours />
      <Testimonials />
      <DownloadApp />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
