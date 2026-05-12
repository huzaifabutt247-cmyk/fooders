export default function About() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Fooders</h2>
            <p className="text-gray-600 text-lg mb-4">
              Fooders is a premier dining destination dedicated to serving authentic, high-quality cuisine with exceptional service. Our passionate team of chefs and staff work tirelessly to create memorable dining experiences.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Founded in 2015, we've been committed to sourcing the finest ingredients and maintaining the highest standards of culinary excellence.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Fresh, locally-sourced ingredients</li>
              <li>✓ Expert culinary team</li>
              <li>✓ Warm, welcoming atmosphere</li>
              <li>✓ Private dining options available</li>
            </ul>
          </div>
          <div className="bg-primary h-96 rounded-lg"></div>
        </div>
      </div>
    </section>
  )
}
