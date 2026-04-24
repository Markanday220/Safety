import React, { useContext } from 'react'
import { ShoppingCart, Star, Zap, Shield } from 'lucide-react'
import { CartContext } from '../context/CartContext'

const products = [
  {
    id: 1,
    name: '4333 Black Electro ESD',
    category: 'Safety Footwear',
    benefit: 'ESD-ready safety shoe built for daily industrial use.',
    price: 44.19,
    originalPrice: 49.0,
    rating: 4.4,
    reviews: 5,
    badge: 'Best Seller',
    badgeColor: 'bg-brand-gold text-white',
    borderColor: 'border-slate-200',
    accentColor: 'text-brand-dark',
    discountLabel: '-9%',
    buttonLabel: 'Add to cart',
    image: 'https://www.safetyplus.co.uk/cdn/shop/products/FBR4333.jpg?v=1675424109',
  },
  {
    id: 2,
    name: "Rath's PR88 Skin Protection",
    category: 'Hand Protection',
    benefit: 'Wash-off skin protection cream for messy industrial jobs.',
    price: 15.75,
    originalPrice: 19.99,
    rating: 4.6,
    reviews: 9,
    badge: 'Top Rated',
    badgeColor: 'bg-brand-dark text-white',
    borderColor: 'border-slate-200',
    accentColor: 'text-brand-dark',
    discountLabel: '-21%',
    buttonLabel: 'Add to cart',
    image: '/products/pr88-tub.svg',
  },
  {
    id: 3,
    name: 'Unbreakable U109 Tornado',
    category: 'Safety Footwear',
    benefit: 'Heavy-duty lace-up boot made for rough site conditions.',
    price: 52.99,
    originalPrice: 70.32,
    rating: 4.7,
    reviews: 9,
    badge: 'Popular',
    badgeColor: 'bg-slate-200 text-brand-dark',
    borderColor: 'border-slate-200',
    accentColor: 'text-brand-dark',
    discountLabel: '-24%',
    buttonLabel: 'Add to cart',
    image: 'https://www.unbreakableworkwear.com/wp-content/uploads/2021/04/U109-scaled-e1617793648365.jpg',
  },
  {
    id: 4,
    name: 'Sievi Roller High XL+ Wide',
    category: 'Safety Footwear',
    benefit: 'Wide-fit roller fastener boot with premium ankle support.',
    price: 174.99,
    originalPrice: 234.0,
    rating: 4.6,
    reviews: 8,
    badge: 'Sale',
    badgeColor: 'bg-brand-gold text-white',
    borderColor: 'border-slate-200',
    accentColor: 'text-brand-dark',
    discountLabel: '-25%',
    buttonLabel: 'Add to cart',
    image: 'https://www.sievishop.fi/cdn/shop/files/Sievi_Roller_High_XL_S3_turvakengat_Sievi_Shopista_nopeasti_toimitettuna.jpg?v=1776848597&width=1920',
  },
  {
    id: 5,
    name: 'Gaston Mille Millenium Premium',
    category: 'Safety Overshoe',
    benefit: 'Slip-resistant protective overshoe for visitor and floor safety.',
    price: 75.0,
    originalPrice: 75.0,
    rating: 4.4,
    reviews: 7,
    badge: 'Premium',
    badgeColor: 'bg-brand-dark text-white',
    borderColor: 'border-slate-200',
    accentColor: 'text-brand-dark',
    buttonLabel: 'Add to cart',
    image: 'https://www.gastonmille.com/media/wysiwyg/Surchaussures-de-securite-GastonMILLE.jpg',
  },
]

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <a href="https://www.safetyplus.co.uk/" target="_blank" rel="noreferrer" className="no-underline">
      <div className={`product-card border ${product.borderColor} group`}>
        <div className="absolute top-4 left-4 z-10">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${product.badgeColor}`}>
            {product.badge}
          </span>
        </div>
      {product.discountLabel && (
        <div className="absolute top-4 right-4 z-10">
          <span className="text-xs font-bold px-2 py-1 rounded-lg bg-slate-100 text-brand-dark border border-slate-200">
            {product.discountLabel}
          </span>
        </div>
      )}

      <div className="relative h-44 md:h-48 overflow-hidden rounded-t-2xl bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentNode.style.background = '#F1F5F9'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
      </div>

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
          <span className="text-2xl font-display font-bold text-brand-gold">£{product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-slate-400 line-through">£{product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
    </a>
  )
}

export default function Products() {
  return (
    <section className="relative py-24 overflow-hidden bg-white" id="products">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white" />
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
      </div>
      <div className="absolute -top-16 left-0 w-[420px] h-[420px] radial-glow-blue opacity-15 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow-gold opacity-20 pointer-events-none z-0" />

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
            Browse All 500+ Products
          </button>
        </div>
      </div>
    </section>
  )
}
