import Image from 'next/image'

export default function DishCard({ dish }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="relative h-48">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
        <p className="text-gray-600 mb-4">{dish.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">{dish.price}</span>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
            Order
          </button>
        </div>
      </div>
    </div>
  )
}
