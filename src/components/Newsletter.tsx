import React, { useState } from 'react';
import { Send, CheckCircle2, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ff5757', '#f9be28', '#72b947']
    });
  };

  return (
    <section className="py-12 sm:py-16 bg-[#faf9f5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-coral-500 via-coral-400 to-sunny-500 p-8 sm:p-12 text-white shadow-2xl">
          {/* Decorative SVG shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-black/10 blur-xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Gift className="w-3.5 h-3.5" />
              <span>Join Khetheshwara Gift Club</span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
              Get 15% Off Your First Gift Order
            </h3>

            <p className="text-white/90 text-sm sm:text-base mb-8 max-w-lg mx-auto">
              Subscribe for exclusive secret sales, baby birthday reminders, and curated seasonal gift collections.
            </p>

            {subscribed ? (
              <div className="bg-white text-gray-900 rounded-2xl p-4 max-w-md mx-auto shadow-lg flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div className="text-left">
                  <p className="font-display font-bold text-sm">Welcome to the family! 🎉</p>
                  <p className="text-xs text-gray-600">Use code <strong className="text-coral-500 font-bold">GIFTJOY20</strong> at checkout for your discount!</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3.5 rounded-full text-gray-900 placeholder:text-gray-400 font-medium text-sm outline-none shadow-md bg-white focus:ring-4 focus:ring-white/40"
                />
                <button
                  type="submit"
                  className="bg-[#141414] hover:bg-black text-white font-display font-semibold text-sm px-7 py-3.5 rounded-full shadow-md flex items-center justify-center gap-2 active:scale-95 transition whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
