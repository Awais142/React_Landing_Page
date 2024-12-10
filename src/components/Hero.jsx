import React from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/solid'

const Hero = () => {
  const features = [
    'Unlimited Bandwidth',
    'AI-Powered Insights',
    '24/7 Customer Support'
  ]

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business with <span className="text-blue-600">Smart SaaS Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Streamline your workflow, boost productivity, and unlock new possibilities with our cutting-edge platform.
          </p>
          
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Start Free Trial
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Hero Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:block"
        >
          <div className="bg-blue-100 rounded-xl p-8 shadow-xl">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg animate-pulse"></div>
              <div className="mt-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
