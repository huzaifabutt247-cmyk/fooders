import Hero from '@/components/Hero'
import FeaturedDishes from '@/components/FeaturedDishes'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <About />
      <Testimonials />
      <CTA />
    </>
  )
}
