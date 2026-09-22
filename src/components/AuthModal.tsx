import React, { useState } from 'react';
import { X, Heart, Gift, Sparkles } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneOrEmail.trim()) return;
    setSignedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-[32px] overflow-hidden shadow-2xl border border-cream-200 p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream-100 hover:bg-cream-200 text-gray-600 flex items-center justify-center transition"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-coral-100 text-coral-600 mx-auto flex items-center justify-center text-2xl mb-3 shadow-inner">
            👶
          </div>
          <h3 className="font-display font-bold text-2xl text-gray-900">
            {signedIn ? 'Welcome Back!' : 'Gift Club Rewards'}
          </h3>
          <p className="text-gray-500 text-xs mt-1">
            {signedIn
              ? 'You have 250 Khetheshwara Joy Points available for discount.'
              : 'Sign in to save milestone birthdays, track deliveries, and earn loyalty perks.'}
          </p>
        </div>

        {signedIn ? (
          <div className="bg-sunny-50 border border-sunny-300 rounded-2xl p-4 text-center space-y-3">
            <div className="flex items-center justify-center gap-1.5 text-sunny-800 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-sunny-500" />
              <span>Active Member: {phoneOrEmail}</span>
            </div>
            <div className="flex justify-around text-xs text-gray-700 pt-2 border-t border-sunny-200">
              <div>
                <strong className="block text-base font-black text-coral-500">250</strong>
                <span>Joy Points</span>
              </div>
              <div>
                <strong className="block text-base font-black text-sunny-600">₹250</strong>
                <span>Reward Value</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-coral-500 text-white font-semibold py-2.5 rounded-full text-xs hover:bg-coral-600 transition"
            >
              Start Gifting
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Mobile Number or Email
              </label>
              <input
                type="text"
                required
                placeholder="+91 98765 43210 or name@gmail.com"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-sm font-medium outline-none focus:ring-2 focus:ring-coral-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-coral-500 hover:bg-coral-600 text-white font-display font-semibold text-sm py-3 rounded-full shadow-md shadow-coral-500/25 transition active:scale-95"
            >
              Continue with OTP / Magic Link
            </button>
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-cream-200 flex items-center justify-around text-[11px] text-gray-400">
          <span className="flex items-center gap-1"><Gift className="w-3 h-3 text-coral-500" /> Birthday Surprises</span>
          <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-coral-500" /> Saved Wishlists</span>
        </div>
      </div>
    </div>
  );
};
