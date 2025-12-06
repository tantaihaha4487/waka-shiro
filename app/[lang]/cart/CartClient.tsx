
"use client";

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartClient({ lang, dict }: { lang: string, dict: any }) {
    const { items, removeItem, total, clearCart } = useCart();

    if (items.length === 0) {
        return (
            <div className="container mx-auto py-20 px-4 text-center min-h-[60vh] flex flex-col items-center justify-center bg-base-100 text-neutral">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-8 p-8 bg-base-200 rounded-full"
                >
                    <ShoppingBag className="w-16 h-16 text-neutral/40" />
                </motion.div>
                <h1 className="text-3xl font-bold mb-4">{dict.cart.empty}</h1>
                <p className="mb-8 text-neutral/60">{dict.cart.emptySubtitle}</p>
                <Link href={`/${lang}/shop`} className="btn btn-primary text-white btn-lg shadow-lg">
                    {dict.cart.startShopping}
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-12 px-4 min-h-screen bg-base-100 text-neutral">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-8 text-primary"
            >
                {dict.cart.title}
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="overflow-x-auto bg-base-100/80 backdrop-blur-md rounded-2xl shadow-xl border border-primary/10"
            >
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-base-200/50">
                        <tr>
                            <th>{dict.common.product}</th>
                            <th>{dict.common.price}</th>
                            <th>{dict.common.quantity}</th>
                            <th>{dict.common.total}</th>
                            <th>{dict.common.actions}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AnimatePresence mode='popLayout'>
                            {items.map((item) => (
                                <motion.tr
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="hover:bg-base-200/30 transition-colors"
                                >
                                    <td>
                                        <div className="flex items-center gap-4">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-16 h-16 shadow-md">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg">{item.name}</div>
                                                <div className="text-sm opacity-60 capitalize badge badge-ghost badge-sm">{item.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-medium">${item.price.toFixed(2)}</td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono bg-base-200 px-3 py-1 rounded-lg">{item.quantity}</span>
                                        </div>
                                    </td>
                                    <td className="font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="btn btn-ghost btn-sm text-error hover:bg-error/10"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col md:flex-row justify-between items-center mt-8 gap-6 bg-base-100/50 p-6 rounded-2xl border border-primary/10 backdrop-blur-sm"
            >
                <button onClick={clearCart} className="btn btn-ghost text-error hover:bg-error/10">
                    {dict.common.clearCart}
                </button>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="text-3xl font-bold text-primary">
                        <span className="text-base font-normal text-neutral/50 mr-2">{dict.common.total}:</span>
                        ${total.toFixed(2)}
                    </div>
                    <Link href={`/${lang}/checkout`} className="btn btn-primary btn-lg text-white shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all">
                        {dict.cart.proceedCheckout} <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
