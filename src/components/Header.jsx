'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Fooders
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary transition">
              Home
            </Link>
            <Link href="/menu" className="hover:text-primary transition">
              Menu
            </Link>
            <Link href="/about" className="hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition">
              Contact
            </Link>
            <Link href="/reservations" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
              Reserve
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-primary">Home</Link>
            <Link href="/menu" className="block py-2 hover:text-primary">Menu</Link>
            <Link href="/about" className="block py-2 hover:text-primary">About</Link>
            <Link href="/contact" className="block py-2 hover:text-primary">Contact</Link>
            <Link href="/reservations" className="block py-2 bg-primary text-white px-4 rounded-lg hover:bg-secondary">
              Reserve
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
