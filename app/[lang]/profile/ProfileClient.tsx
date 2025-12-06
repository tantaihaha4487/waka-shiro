
"use client";

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Package, Calendar, Clock } from 'lucide-react';

export default function ProfileClient({ lang, dict }: { lang: string, dict: any }) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push(`/${lang}/login`);
        }
    }, [user, router, lang]);

    if (!user) return null;

    return (
        <div className="container mx-auto py-12 px-4 min-h-screen bg-base-100 text-neutral">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-6 mb-12 bg-base-100/50 p-8 rounded-3xl backdrop-blur-sm border border-primary/10 shadow-lg"
            >
                <div className="avatar placeholder">
                    <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-full w-24 text-4xl shadow-lg ring-4 ring-primary/20">
                        <span>{user.name?.charAt(0) || 'U'}</span>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-2">{dict.profile.hello}, {user.name}</h1>
                    <p className="text-neutral/60 text-lg flex items-center gap-2">
                        {user.email || dict.common.guest}
                        <span className="badge badge-primary badge-outline ml-2">{user.role}</span>
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card bg-base-100/80 backdrop-blur-md shadow-xl border border-primary/10"
            >
                <div className="card-body">
                    <h2 className="card-title mb-6 text-2xl flex items-center gap-2">
                        <Package className="w-6 h-6 text-primary" />
                        {dict.profile.orderHistory}
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-base-200/50">
                                <tr>
                                    <th>{dict.profile.orderId}</th>
                                    <th>{dict.profile.date}</th>
                                    <th>{dict.profile.status}</th>
                                    <th>{dict.common.total}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Mock Data */}
                                {[
                                    { id: '#ORD-001', date: '2023-10-25', status: 'Delivered', total: '$12.50' },
                                    { id: '#ORD-002', date: '2023-11-02', status: 'Delivered', total: '$8.75' }
                                ].map((order, i) => (
                                    <motion.tr
                                        key={order.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        className="hover:bg-base-200/30 transition-colors"
                                    >
                                        <td className="font-mono font-bold">{order.id}</td>
                                        <td>
                                            <div className="flex items-center gap-2 text-neutral/70">
                                                <Calendar className="w-4 h-4" />
                                                {order.date}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success text-white gap-1 shadow-sm">
                                                <Clock className="w-3 h-3" />
                                                {order.status}
                                            </div>
                                        </td>
                                        <td className="font-bold text-lg">{order.total}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
