import React, { useState } from 'react'
import { MessageSquare, X, Send } from 'lucide-react'

const initialMessages = [
  {
    id: 1,
    from: 'agent',
    text: 'Hi there! How can we help you with safety equipment today?',
  },
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [draft, setDraft] = useState('')

  const sendMessage = (event) => {
    event.preventDefault()
    const trimmed = draft.trim()
    if (!trimmed) return

    const userMsg = { id: Date.now(), from: 'user', text: trimmed }
    const botMsg = {
      id: Date.now() + 1,
      from: 'agent',
      text: 'Thanks for your message! A support specialist will respond shortly.',
    }

    setMessages((prev) => [...prev, userMsg, botMsg])
    setDraft('')
    setOpen(true)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 text-sm">
      <div className="flex flex-col items-end gap-3">
        {open && (
          <div className="w-[340px] max-w-full rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.14)]">
            <div className="flex items-center justify-between bg-brand-dark px-4 py-3 text-white">
              <div>
                <div className="text-sm font-semibold">Chat with us</div>
                <div className="text-[11px] text-slate-200">Support available 24/7</div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-slate-200 transition hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="h-72 overflow-y-auto bg-slate-50 px-4 py-3 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[85%] rounded-3xl px-4 py-3 leading-relaxed ${
                    message.from === 'user'
                      ? 'ml-auto rounded-br-[0.75rem] bg-brand-dark text-white'
                      : 'rounded-bl-[0.75rem] bg-white text-slate-700 shadow-sm'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-slate-200 bg-white px-3 py-3">
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Type a message..."
                className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none focus:border-brand-gold"
              />
              <button
                type="submit"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gold text-white transition hover:bg-brand-dark"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 py-3 font-semibold text-white shadow-[0_20px_50px_rgba(220,38,38,0.24)] transition hover:bg-brand-dark"
        >
          <MessageSquare className="h-5 w-5" />
          Chat support
        </button>
      </div>
    </div>
  )
}
