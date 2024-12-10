import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/solid'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const pricingPlans = [
    {
      name: 'Starter',
      monthlyPrice: 9,
      annualPrice: 99,
      features: [
        'Up to 5 Users',
        'Basic Analytics',
        'Standard Support',
        'Email Integration'
      ],
      recommended: false
    },
    {
      name: 'Pro',
      monthlyPrice: 29,
      annualPrice: 299,
      features: [
        'Up to 25 Users',
        'Advanced Analytics',
        'Priority Support',
        'Custom Integrations',
        'API Access'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 99,
      annualPrice: 999,
      features: [
        'Unlimited Users',
        'Full Analytics Suite',
        'Dedicated Support',
        'Advanced Security',
        'Custom Solutions',
        'Compliance Management'
      ],
      recommended: false
    }
  ]

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Flexible Pricing for Every Need
          </h2>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className={`${billingCycle === 'monthly' ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>
              Monthly
            </span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="bg-gray-200 relative rounded-full w-16 h-8 flex items-center"
            >
              <motion.div 
                layout 
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className={`w-6 h-6 bg-white rounded-full shadow-md absolute ${billingCycle === 'annual' ? 'right-1' : 'left-1'}`}
              />
            </button>
            <span className={`${billingCycle === 'annual' ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>
              Annual
            </span>
            {billingCycle === 'annual' && (
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                Save 15%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              className={`
                bg-white rounded-xl shadow-lg p-6 
                ${plan.recommended ? 'border-2 border-blue-500 transform scale-105' : ''}
                hover:shadow-xl transition-all
              `}
            >
              {plan.recommended && (
                <div className="text-center bg-blue-500 text-white py-1 rounded-t-xl -mx-6 -mt-6 mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {plan.name}
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-gray-600">
                  {` / ${billingCycle}`}
                </span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`
                w-full py-3 rounded-md transition
                ${plan.recommended 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                }
              `}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
