import React from 'react'

const brands = [
  {
    name: 'Goodyear',
    logo: '/brands/goodyear.svg',
  },
  {
    name: 'Titan Safety Footwear',
    logo: '/brands/titan.svg',
  },
  {
    name: 'Workforce Safety Footwear',
    logo: '/brands/workforce-yellow.svg',
  },
  {
    name: 'Workforce',
    logo: '/brands/workforce-orange.svg',
  },
  {
    name: 'Wood World',
    logo: '/brands/wood-world.svg',
  },
  {
    name: 'Lee Cooper Workwear',
    logo: '/brands/lee-cooper.svg',
  },
  {
    name: 'CAT',
    logo: '/brands/cat.svg',
  },
]

function BrandCard({ brand }) {
  return (
    <div className="inline-flex items-center justify-center mx-3 sm:mx-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_4px_18px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)] cursor-default flex-shrink-0 w-[160px] h-[96px] sm:w-[180px] sm:h-[108px]">
      <img
        src={brand.logo}
        alt={brand.name}
        className="max-w-full max-h-full object-contain"
        draggable="false"
      />
    </div>
  )
}

export default function BrandsSection() {
  const doubled = [...brands, ...brands, ...brands]

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Top/bottom border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />

      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-10 px-4">
        {/* Left decorative line */}
        <div className="flex items-center gap-1">
          <div className="w-6 h-0.5 bg-red-400" />
          <div className="w-12 h-0.5 bg-red-400" />
        </div>

        <h2
          className="text-lg md:text-xl font-semibold whitespace-nowrap"
          style={{
            color: '#1a1a1a',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            letterSpacing: '0.02em',
          }}
        >
          Brands We Distribute
        </h2>

        {/* Right decorative line */}
        <div className="flex items-center gap-1">
          <div className="w-12 h-0.5 bg-red-400" />
          <div className="w-6 h-0.5 bg-red-400" />
        </div>
      </div>

      {/* Scrolling brand logos */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
        />

        {/* Track */}
        <div
          className="flex items-center py-2"
          style={{ animation: 'ticker 30s linear infinite' }}
        >
          {doubled.map((brand, i) => (
            <BrandCard key={i} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  )
}
