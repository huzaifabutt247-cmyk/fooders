import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Fooders</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          Experience culinary excellence with our exquisite menu and warm hospitality
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/menu" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Explore Menu
          </Link>
          <Link href="/reservations" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
            Make Reservation
          </Link>
        </div>
      </div>
    </section>
  )
}
