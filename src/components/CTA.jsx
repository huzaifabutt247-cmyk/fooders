import Link from 'next/link'

export default function CTA() {
  return (
    <section className="bg-primary text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Dine With Us?</h2>
        <p className="text-xl mb-8 text-gray-100">
          Book your table now and experience culinary excellence
        </p>
        <Link href="/reservations" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
          Make a Reservation
        </Link>
      </div>
    </section>
  )
}
