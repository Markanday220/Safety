import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import BrandsSection from './components/BrandsSection'
import Problem from './components/Problem'
import Solutions from './components/Solutions'
import Industries from './components/Industries'
import HowItWorks from './components/HowItWorks'
import Products from './components/Products'
import StatsSection from './components/StatsSection'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'
import Offer from './components/Offer'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import Cart from './components/Cart'
import { CartContext } from './context/CartContext'

export default function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (id) => setCartItems(prev => prev.filter(i => i.id !== id))

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeFromCart(id)
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, cartOpen, setCartOpen }}>
      <div className="bg-white text-brand-dark font-sans antialiased">
        <Navbar />

        {/* FUNNEL: Awareness → Trust → Problem → Solution → Purchase */}
        <Hero />
        <Trust />
        <BrandsSection />
        <StatsSection />
        <Problem />
        <Solutions />
        <Industries />
        <HowItWorks />
        <Products />
        <Testimonials />
        <WhyUs />
        <Offer />
        <FAQ />
        <FinalCTA />
        <Footer />

        <Cart />
        <ChatWidget />
      </div>
    </CartContext.Provider>
  )
}
