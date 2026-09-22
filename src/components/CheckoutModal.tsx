import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Gift, Truck, CreditCard, Smartphone, Banknote } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const {
    items,
    subtotal,
    discount,
    giftSettings,
    shippingCost,
    finalTotal,
    clearCart,
    triggerCelebration,
  } = useCart();

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [orderId, setOrderId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');

  const [formData, setFormData] = useState({
    name: 'Aarohi Sen',
    phone: '9876543210',
    email: 'aarohi@example.com',
    address: 'Flat 402, Sunshine Residency, 14th Main, Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560038',
  });

  if (!isOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `KGS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setStep('success');
    triggerCelebration();
  };

  const handleFinish = () => {
    clearCart();
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl border border-cream-200 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-cream-200 flex items-center justify-between bg-[#faf9f5]">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛍️</span>
            <div>
              <h3 className="font-display font-bold text-lg text-gray-900 leading-tight">
                {step === 'form' ? 'Checkout & Gift Delivery' : 'Order Confirmed!'}
              </h3>
              <p className="text-xs text-gray-500">
                {step === 'form' ? 'Fast, secured checkout with signature gift packaging' : 'Thank you for choosing Khetheshwara Gift Shop'}
              </p>
            </div>
          </div>
          <button
            onClick={step === 'success' ? handleFinish : onClose}
            className="w-8 h-8 rounded-full bg-cream-100 hover:bg-cream-200 text-gray-600 flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 'form' ? (
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              
              {/* Shipping Details */}
              <div>
                <h4 className="font-display font-bold text-sm text-gray-900 mb-3 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-coral-500" />
                  1. Delivery Address (India)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-gray-600 font-semibold mb-1">Recipient Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-cream-300 bg-cream-50 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 font-semibold mb-1">Phone Number (+91)</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-cream-300 bg-cream-50 font-medium"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-gray-600 font-semibold mb-1">Complete Delivery Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-cream-300 bg-cream-50 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 font-semibold mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-cream-300 bg-cream-50 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 font-semibold mb-1">Pincode</label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-cream-300 bg-cream-50 font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <h4 className="font-display font-bold text-sm text-gray-900 mb-3 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-sunny-500" />
                  2. Select Payment Method
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-2xl border-2 text-left flex flex-col items-center justify-center gap-1.5 transition ${
                      paymentMethod === 'upi'
                        ? 'border-coral-500 bg-coral-50 text-coral-600 shadow-sm'
                        : 'border-cream-300 bg-cream-50 text-gray-700'
                    }`}
                  >
                    <Smartphone className="w-5 h-5" />
                    <span className="font-display font-bold text-xs">Instant UPI</span>
                    <span className="text-[10px] text-gray-500">GPay, PhonePe, Paytm</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-2xl border-2 text-left flex flex-col items-center justify-center gap-1.5 transition ${
                      paymentMethod === 'card'
                        ? 'border-coral-500 bg-coral-50 text-coral-600 shadow-sm'
                        : 'border-cream-300 bg-cream-50 text-gray-700'
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span className="font-display font-bold text-xs">Card / NetBanking</span>
                    <span className="text-[10px] text-gray-500">Visa, Mastercard, RuPay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-2xl border-2 text-left flex flex-col items-center justify-center gap-1.5 transition ${
                      paymentMethod === 'cod'
                        ? 'border-coral-500 bg-coral-50 text-coral-600 shadow-sm'
                        : 'border-cream-300 bg-cream-50 text-gray-700'
                    }`}
                  >
                    <Banknote className="w-5 h-5" />
                    <span className="font-display font-bold text-xs">Pay on Delivery</span>
                    <span className="text-[10px] text-gray-500">Cash or QR scan at door</span>
                  </button>
                </div>
              </div>

              {/* Order Breakdown */}
              <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200 text-xs space-y-1.5">
                <div className="flex justify-between text-gray-600">
                  <span>Items Total ({items.length} types)</span>
                  <span className="font-semibold text-gray-900">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-coral-600 font-semibold">
                    <span>Discount</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {giftSettings.includeGiftBox && (
                  <div className="flex justify-between text-gray-600">
                    <span className="flex items-center gap-1">
                      <Gift className="w-3.5 h-3.5 text-coral-500" />
                      Gift Wrapping ({giftSettings.ribbonColor} Ribbon)
                    </span>
                    <span className="font-semibold text-gray-900">₹{giftSettings.giftBoxPrice}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span className="font-semibold text-gray-900">{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
                </div>
                <div className="pt-2 border-t border-cream-300 flex justify-between items-baseline font-display font-bold text-gray-900 text-base">
                  <span>Grand Total to Pay</span>
                  <span className="text-xl font-black text-coral-500">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-coral-500 hover:bg-coral-600 text-white font-display font-semibold text-base py-3.5 rounded-full shadow-lg shadow-coral-500/25 active:scale-95 transition flex items-center justify-center gap-2"
              >
                <span>Place Gift Order • ₹{finalTotal.toLocaleString('en-IN')}</span>
              </button>
            </form>
          ) : (
            /* Order Success State */
            <div className="text-center py-6 px-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="bg-coral-100 text-coral-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Order #{orderId}
              </span>

              <h3 className="font-display font-bold text-2xl text-gray-900 mt-3 mb-2">
                Your Gift is Being Handcrafted!
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6">
                We have received your gift order. Our boutique packing team is carefully boxing your items with the <strong>{giftSettings.ribbonColor}</strong> ribbon and personal greeting card.
              </p>

              {/* Gift Note Preview Card */}
              {giftSettings.includeGiftBox && (
                <div className="bg-[#fffdf7] border-2 border-dashed border-sunny-300 rounded-2xl p-4 max-w-md mx-auto text-left mb-6 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-sunny-700 mb-1">
                    <Gift className="w-3.5 h-3.5" />
                    <span>Enclosed Handwritten Card Note</span>
                  </div>
                  <p className="font-hand text-lg text-gray-800 leading-snug">
                    "{giftSettings.cardMessage}"
                  </p>
                  <p className="text-[11px] text-gray-500 text-right mt-1">
                    To: <strong>{giftSettings.recipientName || formData.name}</strong>
                  </p>
                </div>
              )}

              <div className="flex items-center justify-center gap-6 text-xs text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Truck className="w-4 h-4 text-emerald-600" /> Delivery in 2-3 days
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> SMS Updates Sent
                </span>
              </div>

              <button
                onClick={handleFinish}
                className="bg-coral-500 hover:bg-coral-600 text-white font-display font-semibold text-sm px-8 py-3 rounded-full shadow-md shadow-coral-500/20 active:scale-95 transition"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
