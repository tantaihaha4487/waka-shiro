
"use client";

import { useState } from 'react';
import { products } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { notFound } from 'next/navigation';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProductDetailClient({ lang, dict, id }: { lang: string, dict: any, id: string }) {
    const product = products.find(p => p.id === id);
    const { addItem } = useCart();
    const [added, setAdded] = useState(false);

    if (!product) {
        notFound();
    }

    const handleAddToCart = () => {
        addItem(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="container mx-auto py-12 px-4 min-h-screen flex flex-col justify-center bg-base-100 text-neutral">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <Link href={`/${lang}/shop`} className="btn btn-ghost mb-8 gap-2 hover:bg-base-200">
                    <ArrowLeft className="w-4 h-4" /> {dict.shop.backToMenu}
                </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div>
                        <div className="badge badge-secondary text-white uppercase font-bold tracking-wider mb-4 p-3">{product.category}</div>
                        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-2">{lang === 'th' ? product.name_th : product.name}</h1>
                        <p className="text-3xl font-semibold text-neutral/80">฿{product.price.toFixed(2)}</p>
                    </div>

                    <p className="text-xl text-neutral/70 leading-relaxed font-light">
                        {lang === 'th' ? product.description_th : product.description}
                    </p>

                    <div className="pt-6">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`btn btn-lg w-full md:w-auto px-12 shadow-xl ฿{added ? 'btn-success text-white' : 'btn-primary text-white'}`}
                            onClick={handleAddToCart}
                        >
                            <ShoppingBag className="w-5 h-5 mr-2" />
                            {added ? dict.common.added : dict.common.addToCart}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
