import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
