import React from 'react'
import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  CloudIcon, 
  BoltIcon, 
  ServerIcon 
} from '@heroicons/react/24/outline'

const Features = () => {
  const featuresList = [
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Gain deep insights with our powerful data visualization tools.',
      color: 'text-blue-500'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Integration',
      description: 'Seamless connectivity across all your favorite cloud platforms.',
      color: 'text-green-500'
    },
    {
      icon: BoltIcon,
      title: 'High Performance',
      description: 'Lightning-fast processing with our optimized infrastructure.',
      color: 'text-yellow-500'
    },
    {
      icon: ServerIcon,
      title: 'Secure Storage',
      description: 'Enterprise-grade security and data protection.',
      color: 'text-purple-500'
    }
  ]

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features That Drive Success
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform is designed to empower your business with cutting-edge tools and seamless functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
            >
              <div className={`mb-4 ${feature.color}`}>
                <feature.icon className="w-12 h-12 mx-auto group-hover:scale-110 transition" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
