import DishCard from './DishCard'

const dishes = [
  {
    id: 1,
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with lemon butter sauce',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'Beef Tenderloin',
    description: 'Prime cut with seasonal vegetables',
    price: '$32.99',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'Pasta Carbonara',
    description: 'Classic Italian pasta with creamy sauce',
    price: '$18.99',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
  },
]

export default function FeaturedDishes() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Featured Dishes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  )
}
