
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
// import { products } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShopClient({ lang, dict }: { lang: string, dict: any }) {
    const [filter, setFilter] = useState<'all' | 'sweet' | 'savory'>('all');
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        fetch('/api/products')
            .then(r => r.json())
            .then((data) => {
                if (!cancelled) setProducts(data || []);
            })
            .catch(() => setProducts([]))
            .finally(() => !cancelled && setLoading(false));
        return () => { cancelled = true };
    }, []);

    const filteredProducts = products.filter(p =>
        filter === 'all' ? true : p.category === filter
    );

    return (
        <div className="container mx-auto py-16 px-4 min-h-screen bg-base-100 text-neutral">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold text-center mb-12 text-primary drop-shadow-sm"
            >
                {dict.shop.title}
            </motion.h1>

            {/* Filters */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center gap-4 mb-16"
            >
                {['all', 'sweet', 'savory'].map((f) => (
                    <button
                        key={f}
                        className={`btn btn-lg px-8 transition-all duration-300 ${filter === f ? 'btn-primary text-white scale-105 shadow-lg' : 'btn-outline btn-primary hover:bg-primary/10'}`}
                        onClick={() => setFilter(f as any)}
                    >
                        {f === 'all' ? dict.shop.filterAll : f === 'sweet' ? dict.shop.filterSweet : dict.shop.filterSavory}
                    </button>
                ))}
            </motion.div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
                <AnimatePresence mode='popLayout'>
                    {loading ? (
                        <div className="col-span-full text-center text-lg text-neutral/70">{dict.common.loading}</div>
                    ) : filteredProducts.length === 0 ? (
                        <div className="col-span-full text-center text-lg text-neutral/70">{dict.shop.noProducts || 'No products found'}</div>
                    ) : (
                        filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href={`/${lang}/shop/${product.id}`} className="group block h-full">
                                    <div className="card bg-base-100/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/10 h-full hover:-translate-y-2">
                                        <figure className="h-64 overflow-hidden relative">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 right-4">
                                                <span className="badge badge-secondary text-white font-bold shadow-md">฿{product.price.toFixed(2)}</span>
                                            </div>
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-2xl font-bold text-neutral">{lang === 'th' ? product.name_th : product.name}</h2>
                                            <p className="text-neutral/70 text-sm line-clamp-2">{lang === 'th' ? product.description_th : product.description}</p>
                                            <div className="card-actions justify-end mt-6">
                                                <button className="btn btn-primary btn-sm text-white px-6 shadow-md group-hover:shadow-lg transition-all">
                                                    {dict.common.viewDetails}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
