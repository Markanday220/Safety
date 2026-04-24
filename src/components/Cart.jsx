import React, { useContext } from 'react'
import { X, Minus, Plus, ShoppingCart, Trash2, ArrowRight } from 'lucide-react'
import { CartContext } from '../context/CartContext'

export default function Cart() {
  const { cartItems, cartOpen, setCartOpen, removeFromCart, updateQty } = useContext(CartContext)

  const subtotal = cartItems.reduce((acc, i) => acc + i.price * i.qty, 0)
  const itemCount = cartItems.reduce((acc, i) => acc + i.qty, 0)

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          cartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[70] transition-transform duration-400 ease-out ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full bg-white border-l border-slate-200 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-brand-gold" />
              <h2 className="font-display font-bold text-lg text-brand-dark">Your Cart</h2>
              {itemCount > 0 && (
                <span className="ml-1 text-xs font-bold px-2 py-0.5 rounded-full bg-brand-gold text-white">
                  {itemCount}
                </span>
              )}
            </div>
            <button
              onClick={() => setCartOpen(false)}
              className="p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-600 hover:text-brand-dark"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-500">
                <ShoppingCart className="w-16 h-16 opacity-20" />
                <p className="text-lg font-medium">Your cart is empty</p>
                <p className="text-sm text-center text-slate-600">Add some safety equipment to get started.</p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="btn-gold mt-2"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="glass-card p-4 flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl flex-shrink-0">
                    {item.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-brand-dark truncate mb-0.5">{item.name}</h4>
                    <p className="text-xs text-slate-500 mb-3">{item.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-slate-200 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-bold w-6 text-center">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-slate-200 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-brand-gold">
                          ₹{(item.price * item.qty).toLocaleString()}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-brand-gold transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-slate-200 space-y-4">
              <div className="flex items-center justify-between text-sm text-slate-700">
                <span>Subtotal ({itemCount} items)</span>
                <span className="font-bold text-brand-dark text-base">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Shipping</span>
                <span className="text-brand-dark font-medium">{subtotal >= 2999 ? 'FREE' : '₹99'}</span>
              </div>
              {subtotal < 2999 && (
                <div className="text-xs text-slate-500 text-center">
                  Add ₹{(2999 - subtotal).toLocaleString()} more for free shipping
                </div>
              )}
              <button className="btn-gold w-full justify-center py-4 text-base group">
                Proceed to Checkout
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setCartOpen(false)}
                className="w-full text-center text-sm text-slate-600 hover:text-brand-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
