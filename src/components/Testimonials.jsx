import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechInnovate',
      quote: 'This product has transformed our workflow and increased our productivity by 200%.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataDrive Solutions',
      quote: 'Incredibly intuitive design and powerful features. It\'s like they read our minds!',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, GreenStart',
      quote: 'The most comprehensive and user-friendly solution I\'ve ever used.',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from industry leaders who have transformed their businesses with our solution
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 transform transition hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex mt-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
