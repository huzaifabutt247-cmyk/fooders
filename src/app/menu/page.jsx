'use client'

import { useState } from 'react'

const menuItems = {
  appetizers: [
    { name: 'Bruschetta', description: 'Toasted bread with tomato and basil', price: '$8.99' },
    { name: 'Calamari', description: 'Crispy fried squid with marinara sauce', price: '$10.99' },
    { name: 'Spring Rolls', description: 'Fresh vegetables with sweet chili sauce', price: '$7.99' },
  ],
  mains: [
    { name: 'Grilled Salmon', description: 'Fresh salmon with lemon butter sauce', price: '$24.99' },
    { name: 'Beef Tenderloin', description: 'Prime cut with seasonal vegetables', price: '$32.99' },
    { name: 'Pasta Carbonara', description: 'Classic Italian pasta with creamy sauce', price: '$18.99' },
  ],
  desserts: [
    { name: 'Tiramisu', description: 'Classic Italian dessert with mascarpone', price: '$8.99' },
    { name: 'Chocolate Cake', description: 'Rich chocolate cake with ganache', price: '$9.99' },
    { name: 'Cheesecake', description: 'New York style cheesecake', price: '$8.99' },
  ],
}

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('mains')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(menuItems).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems[selectedCategory].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">{item.price}</span>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
