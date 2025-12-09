
"use client";

import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle } from 'lucide-react';

export default function CheckoutClient({ lang, dict }: { lang: string, dict: any }) {
    const { items, total, clearCart } = useCart();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    if (items.length === 0) {
        return (
            <div className="container mx-auto py-20 px-4 text-center">
                <h1 className="text-2xl">{dict.cart.empty} Redirecting...</h1>
            </div>
        );
    }

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Mock payment delay
        setTimeout(() => {
            clearCart();
            setLoading(false);
            alert(dict.checkout.success);
            router.push(`/${lang}`);
        }, 2000);
    };

    return (
        <div className="container mx-auto py-12 px-4 min-h-screen bg-base-100 text-neutral">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-12 text-center text-primary"
            >
                {dict.checkout.title}
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Order Summary */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="card bg-base-100/80 backdrop-blur-md shadow-xl border border-primary/10 h-fit"
                >
                    <div className="card-body">
                        <h2 className="card-title mb-6 text-2xl">{dict.checkout.summary}</h2>
                        <ul className="space-y-4">
                            {items.map((item) => (
                                <li key={item.id} className="flex justify-between items-center p-3 bg-base-200/50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                        </div>
                                        <span className="font-medium">{lang === 'th' ? item.name_th : item.name} <span className="text-xs opacity-50">x{item.quantity}</span></span>
                                    </div>
                                    <span className="font-bold">฿{(item.price * item.quantity).toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="divider"></div>
                        <div className="flex justify-between text-2xl font-bold text-primary">
                            <span>{dict.common.total}</span>
                            <span>฿{total.toFixed(2)}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Payment Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="card bg-base-100/80 backdrop-blur-md shadow-xl border border-primary/10"
                >
                    <div className="card-body">
                        <h2 className="card-title mb-6 text-2xl flex items-center gap-2">
                            <CreditCard className="w-6 h-6" />
                            {dict.checkout.paymentDetails}
                        </h2>
                        <form onSubmit={handlePayment} className="space-y-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-neutral">{dict.checkout.fullName}</span>
                                </label>
                                <input type="text" placeholder="John Doe" className="input input-bordered w-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-neutral">{dict.checkout.cardNumber}</span>
                                </label>
                                <input type="text" placeholder="0000 0000 0000 0000" className="input input-bordered w-full font-mono" required />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium text-neutral">{dict.checkout.expiry}</span>
                                    </label>
                                    <input type="text" placeholder="MM/YY" className="input input-bordered w-full font-mono" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium text-neutral">{dict.checkout.cvc}</span>
                                    </label>
                                    <input type="text" placeholder="123" className="input input-bordered w-full font-mono" required />
                                </div>
                            </div>

                            <div className="form-control mt-8">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className={`btn btn-primary text-white btn-lg shadow-lg ${loading ? 'loading' : ''}`}
                                    disabled={loading}
                                >
                                    {loading ? dict.checkout.processing : (
                                        <span className="flex items-center gap-2">
                                            {dict.checkout.pay} ฿{total.toFixed(2)} <CheckCircle className="w-5 h-5" />
                                        </span>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
