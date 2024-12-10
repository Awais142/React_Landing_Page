import React from 'react'
import { motion } from 'framer-motion'
import { RocketLaunchIcon } from '@heroicons/react/24/solid'

const CTA = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <RocketLaunchIcon className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Revolutionize Your Workflow?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses transforming their operations with our powerful SaaS platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Book a Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
