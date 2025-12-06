
"use client";

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowLeft, Upload, Save } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AddProductClient({ lang, dict }: { lang: string, dict: any }) {
    const { user } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!user || user.role !== 'ADMIN') {
            router.push(`/${lang}/login`);
        }
    }, [user, router, lang]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Mock API call
        setTimeout(() => {
            setLoading(false);
            alert('Product added successfully!');
            router.push(`/${lang}/admin/dashboard`);
        }, 1500);
    };

    if (!user || user.role !== 'ADMIN') return null;

    return (
        <div className="container mx-auto py-12 px-4 min-h-screen">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <Link href={`/${lang}/admin/dashboard`} className="btn btn-ghost mb-8 gap-2 hover:bg-base-200">
                    <ArrowLeft className="w-4 h-4" /> {dict.common.back}
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl mx-auto card bg-base-100/80 backdrop-blur-md shadow-2xl border border-white/20"
            >
                <div className="card-body">
                    <h1 className="card-title text-3xl font-bold mb-8 text-primary">{dict.admin.addProduct}</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">{dict.admin.productName}</span>
                            </label>
                            <input type="text" placeholder="e.g. Strawberry Delight" className="input input-bordered w-full" required />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">{dict.common.price} ($)</span>
                                </label>
                                <input type="number" step="0.01" placeholder="0.00" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">{dict.admin.category}</span>
                                </label>
                                <select className="select select-bordered w-full" required>
                                    <option value="sweet">{dict.shop.filterSweet}</option>
                                    <option value="savory">{dict.shop.filterSavory}</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">{dict.admin.description}</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-32 w-full" placeholder="Describe the filling and texture..." required></textarea>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">{dict.admin.imageUrl}</span>
                            </label>
                            <div className="flex gap-2">
                                <input type="url" placeholder="https://..." className="input input-bordered w-full" required />
                                <button type="button" className="btn btn-square btn-outline">
                                    <Upload className="w-5 h-5" />
                                </button>
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
                                {loading ? dict.common.loading : (
                                    <span className="flex items-center gap-2">
                                        <Save className="w-5 h-5" /> {dict.admin.addProduct}
                                    </span>
                                )}
                            </motion.button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
