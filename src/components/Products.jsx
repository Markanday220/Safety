import React, { useContext } from 'react'
import { ShoppingCart, Star, Zap, Shield } from 'lucide-react'
import { CartContext } from '../context/CartContext'

const products = [
  {
    id: 1,
    name: 'ProGuard Elite Helmet',
    category: 'Head Protection',
    benefit: 'Military-grade impact absorption with ventilation tech',
    price: 1299,
    originalPrice: 1899,
    rating: 4.9,
    reviews: 847,
    badge: 'Best Seller',
    badgeColor: 'bg-brand-gold text-white',
    borderColor: 'border-slate-200',
    accentColor: 'text-brand-dark',
    image: 'https://images.unsplash.com/photo-1618090584126-129cd1f3fbae?w=400&q=80&fit=crop',
  },
  {
    id: 2,
    name: 'NitriMax Pro Gloves',
    category: 'Hand Protection',
    benefit: 'Cut-level F protection with chemical resistance',
    price: 499,
    originalPrice: 749,
    rating: 4.8,
    reviews: 1203,
    badge: 'Top Rated',
    badgeColor: 'bg-brand-dark text-white',
    borderColor: 'border-slate-200',
    accentColor: 'text-brand-dark',
    image: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=400&q=80&fit=crop',
  },
  {
    id: 3,
    name: 'SafeBreath N95 PRO',
    category: 'Respiratory',
    benefit: 'Filters 99.7% of particles with 3D comfort fit',
    price: 299,
    originalPrice: 449,
    rating: 4.9,
    reviews: 2134,
    badge: 'New',
    badgeColor: 'bg-slate-200 text-brand-dark',
    borderColor: 'border-slate-200',
    accentColor: 'text-brand-dark',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=400&q=80&fit=crop',
  },
  {
    id: 4,
    name: 'VisionShield MAX',
    category: 'Eye Protection',
    benefit: 'Anti-fog, anti-scratch with UV400 protection',
    price: 849,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 631,
    badge: 'Sale',
    badgeColor: 'bg-brand-gold text-white',
    borderColor: 'border-slate-200',
    accentColor: 'text-brand-dark',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80&fit=crop',
  },
  {
    id: 5,
    name: 'HarnessX Full-Body',
    category: 'Fall Protection',
    benefit: 'Certified for 140kg with dual-point locking system',
    price: 3499,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 418,
    badge: 'Premium',
    badgeColor: 'bg-brand-dark text-white',
    borderColor: 'border-slate-200',
    accentColor: 'text-brand-dark',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80&fit=crop',
  },
  {
    id: 6,
    name: 'SafetyKit Complete',
    category: 'Compliance Bundle',
    benefit: 'Everything for a 10-person team — audit-ready in one box',
    price: 8999,
    originalPrice: 13999,
    rating: 5.0,
    reviews: 279,
    badge: 'Bundle Deal',
    badgeColor: 'bg-brand-gold text-white',
    borderColor: 'border-slate-200',
    accentColor: 'text-brand-dark',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&fit=crop',
  },
]

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className={`product-card border ${product.borderColor} group`}>
      {/* Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${product.badgeColor}`}>
          {product.badge}
        </span>
      </div>
      {discount > 0 && (
        <div className="absolute top-4 right-4 z-10">
          <span className="text-xs font-bold px-2 py-1 rounded-lg bg-slate-100 text-brand-dark border border-slate-200">
            -{discount}% OFF
          </span>
        </div>
      )}

      {/* Product image */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentNode.style.background = '#F1F5F9'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-semibold tracking-wider uppercase ${product.accentColor}`}>{product.category}</span>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
            <span className="font-semibold text-brand-dark">{product.rating}</span>
            <span>({product.reviews})</span>
          </div>
        </div>

        <h3 className="font-display font-bold text-lg text-brand-dark mb-1">{product.name}</h3>
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">{product.benefit}</p>

        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl font-display font-bold text-brand-gold">₹{product.price.toLocaleString()}</span>
          <span className="text-sm text-slate-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border ${product.borderColor} text-brand-dark font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 group`}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section className="relative py-24 overflow-hidden bg-white" id="products">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white" />
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
      </div>
      <div className="absolute -top-16 left-0 w-[420px] h-[420px] radial-glow-blue opacity-15 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow-gold opacity-20 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-tag mb-4 justify-center">
            <Zap className="w-3.5 h-3.5" />
            Featured Products
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-5">
            Equipment That{' '}
            <span className="gradient-text">Actually Performs</span>
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            Every product is tested to exceed regulatory standards. No corners cut. No compromises made.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 text-slate-600 text-sm mb-5">
            <Shield className="w-4 h-4 text-brand-gold" />
            All products include 30-day returns & manufacturer warranty
          </div>
          <button className="btn-gold px-10 py-4 text-base">
            Browse All 500+ Products →
          </button>
        </div>
      </div>
    </section>
  )
}
