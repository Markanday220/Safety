import React from 'react'

const brands = [
  {
    name: 'TITAN',
    sub: 'Safety Footwear',
    bg: '#000',
    text: '#fff',
    accent: '#f59e0b',
    border: '#333',
    style: 'bold',
  },
  {
    name: 'WORKFORCE',
    sub: 'Safety Footwear',
    bg: '#fff',
    text: '#f97316',
    accent: '#f97316',
    border: '#e5e7eb',
    style: 'bold',
  },
  {
    name: 'WOOD\nWORLD',
    sub: '',
    bg: '#fff',
    text: '#f59e0b',
    accent: '#ef4444',
    border: '#e5e7eb',
    style: 'bold',
  },
  {
    name: 'Le Cooper',
    sub: 'Workwear',
    bg: '#dc2626',
    text: '#fff',
    accent: '#fff',
    border: '#dc2626',
    style: 'normal',
  },
  {
    name: 'CAT',
    sub: '',
    bg: '#f59e0b',
    text: '#000',
    accent: '#000',
    border: '#f59e0b',
    style: 'black',
  },
  {
    name: 'ARMA',
    sub: 'Safety Footwear',
    bg: '#fff',
    text: '#dc2626',
    accent: '#dc2626',
    border: '#e5e7eb',
    style: 'bold',
  },
  {
    name: 'KARAM',
    sub: 'Safety',
    bg: '#1d4ed8',
    text: '#fff',
    accent: '#fbbf24',
    border: '#1d4ed8',
    style: 'bold',
  },
  {
    name: 'UVEX',
    sub: 'Protection',
    bg: '#fff',
    text: '#1d4ed8',
    accent: '#1d4ed8',
    border: '#e5e7eb',
    style: 'bold',
  },
  {
    name: '3M',
    sub: 'PPE Solutions',
    bg: '#dc2626',
    text: '#fff',
    accent: '#fff',
    border: '#dc2626',
    style: 'black',
  },
  {
    name: 'HONEYWELL',
    sub: 'Safety',
    bg: '#fff',
    text: '#dc2626',
    accent: '#dc2626',
    border: '#e5e7eb',
    style: 'bold',
  },
]

function BrandCard({ brand }) {
  return (
    <div
      className="inline-flex flex-col items-center justify-center mx-4 rounded-xl border-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default flex-shrink-0"
      style={{
        backgroundColor: brand.bg,
        borderColor: brand.border,
        width: '140px',
        height: '90px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      }}
    >
      <div
        className="text-center leading-tight"
        style={{
          color: brand.text,
          fontWeight: brand.style === 'black' ? 900 : 700,
          fontSize: brand.name.length > 6 ? '14px' : brand.name === 'CAT' ? '28px' : '18px',
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          letterSpacing: '0.05em',
          whiteSpace: 'pre-line',
        }}
      >
        {brand.name}
      </div>
      {brand.sub && (
        <div
          className="text-center mt-0.5"
          style={{
            color: brand.text,
            fontSize: '9px',
            opacity: 0.7,
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {brand.sub}
        </div>
      )}
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
