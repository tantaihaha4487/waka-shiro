
"use client";

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { DollarSign, ShoppingBag, Users, Plus, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardClient({ lang, dict }: { lang: string, dict: any }) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user || user.role !== 'ADMIN') {
            router.push(`/${lang}/login`);
        }
    }, [user, router, lang]);

    if (!user || user.role !== 'ADMIN') return null;

    return (
        <div className="container mx-auto py-12 px-4 min-h-screen bg-base-100 text-neutral">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-between items-center mb-12"
            >
                <h1 className="text-4xl font-bold text-primary">{dict.admin.dashboard}</h1>
                <Link href={`/${lang}/admin/add-product`} className="btn btn-primary text-white gap-2 shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all">
                    <Plus className="w-5 h-5" /> {dict.admin.addProduct}
                </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                    { icon: DollarSign, title: dict.admin.totalRevenue, value: '฿5,600', desc: '21% more than last month', color: 'text-primary', trend: 'up' },
                    { icon: ShoppingBag, title: dict.admin.totalOrders, value: '1,200', desc: '50 new orders today', color: 'text-secondary', trend: 'up' },
                    { icon: Users, title: dict.admin.activeUsers, value: '4,200', desc: '400 (22%)', color: 'text-accent', trend: 'up' }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="stats shadow-xl bg-base-100/80 backdrop-blur-md border border-primary/10 overflow-visible"
                    >
                        <div className="stat">
                            <div className={`stat-figure ${stat.color} bg-base-200 p-3 rounded-full shadow-inner`}>
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <div className="stat-title font-medium opacity-70">{stat.title}</div>
                            <div className={`stat-value ${stat.color} text-4xl`}>{stat.value}</div>
                            <div className="stat-desc flex items-center gap-1 mt-1">
                                <TrendingUp className="w-3 h-3 text-success" />
                                {stat.desc}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="card bg-base-100/80 backdrop-blur-md shadow-xl border border-primary/10"
            >
                <div className="card-body">
                    <h2 className="card-title mb-6 text-2xl">{dict.admin.recentOrders}</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-base-200/50">
                                <tr>
                                    <th>{dict.profile.orderId}</th>
                                    <th>Customer</th>
                                    <th>Items</th>
                                    <th>{dict.common.total}</th>
                                    <th>{dict.profile.status}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { id: '#ORD-123', customer: 'Mashiro', items: 'Classic Red Bean x 2', total: '฿.00', status: 'Pending', badge: 'badge-warning' },
                                    { id: '#ORD-124', customer: 'John Doe', items: 'Custard Waka x 5', total: '฿8.75', status: 'Completed', badge: 'badge-success text-white' },
                                    { id: '#ORD-125', customer: 'Jane Smith', items: 'Matcha Shiro x 1', total: '฿.00', status: 'Cancelled', badge: 'badge-error text-white' }
                                ].map((order, i) => (
                                    <motion.tr
                                        key={order.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + (i * 0.1) }}
                                        className="hover:bg-base-200/30 transition-colors"
                                    >
                                        <td className="font-mono font-bold">{order.id}</td>
                                        <td className="font-medium">{order.customer}</td>
                                        <td className="text-neutral/70">{order.items}</td>
                                        <td className="font-bold">{order.total}</td>
                                        <td><div className={`badge ${order.badge} shadow-sm`}>{order.status}</div></td>
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
