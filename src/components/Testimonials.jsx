const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    text: 'Fooders is simply outstanding! The food is delicious and the service is impeccable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    text: 'We celebrated our anniversary here and had an unforgettable experience. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Davis',
    text: 'The atmosphere, the food, the service - everything is perfect. Worth every penny!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">What Our Guests Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
            <p className="font-semibold text-gray-800">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
