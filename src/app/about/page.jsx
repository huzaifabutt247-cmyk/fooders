export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">About Fooders</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Fooders was founded in 2015 with a simple vision: to create a restaurant where culinary excellence meets warm hospitality. What started as a small neighborhood eatery has grown into a beloved destination for food enthusiasts from across the city.
            </p>
            <p className="text-gray-600">
              Our commitment to quality has never wavered. We source the finest ingredients from local suppliers and our talented chefs prepare each dish with passion and precision.
            </p>
          </div>
          <div className="bg-primary h-64 rounded-lg"></div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Quality</h3>
              <p className="text-gray-600">
                We believe in using only the finest ingredients and maintaining the highest standards in everything we do.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Hospitality</h3>
              <p className="text-gray-600">
                Every guest is treated like family. We're dedicated to providing warm, attentive service that makes your visit special.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Community</h3>
              <p className="text-gray-600">
                We're proud to be part of our local community and work with local suppliers whenever possible.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">Meet Our Chef</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-48 h-48 bg-primary rounded-lg"></div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Chef Antonio Milano</h3>
                <p className="text-gray-600 mb-4">
                  With over 20 years of culinary experience and training in Italy, France, and the United States, Chef Antonio brings a unique blend of traditional techniques and modern innovation to every dish.
                </p>
                <p className="text-gray-600">
                  His philosophy centers on letting quality ingredients shine through simple, elegant preparations that delight the senses and warm the heart.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
