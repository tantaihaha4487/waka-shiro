
"use client";

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LoginClient({ lang, dict }: { lang: string, dict: any }) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const { login, guestLogin } = useAuth();
    const router = useRouter();
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (login(email, pass)) {
            if (email === 'owner@wakashiro.com') {
                router.push(`/${lang}/admin/dashboard`);
            } else {
                router.push(`/${lang}/profile`);
            }
        } else {
            setError('Invalid credentials');
        }
    };

    const handleGuest = () => {
        guestLogin();
        router.push(`/${lang}/profile`);
    };

    return (
        <div className="flex items-center justify-center min-h-[80vh] bg-base-200 relative overflow-hidden text-neutral">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="card w-96 bg-base-100/70 backdrop-blur-md shadow-2xl border border-primary/10 z-10"
            >
                <div className="card-body">
                    <h2 className="card-title justify-center text-3xl font-bold text-primary mb-6">{dict.login.welcome}</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-neutral">{dict.common.email}</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="input input-bordered"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-neutral">{dict.common.password}</span>
                            </label>
                            <input
                                type="password"
                                placeholder="********"
                                className="input input-bordered"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                required
                            />
                        </div>

                        {error && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="text-error text-sm text-center font-medium"
                            >
                                {error}
                            </motion.p>
                        )}

                        <div className="form-control mt-6">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="btn btn-primary text-white shadow-lg"
                            >
                                {dict.common.login}
                            </motion.button>
                        </div>
                    </form>

                    <div className="divider opacity-50">OR</div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleGuest}
                        className="btn btn-outline btn-secondary"
                    >
                        {dict.common.continueGuest}
                    </motion.button>

                    <div className="mt-6 text-xs text-center text-neutral/60 bg-base-200/50 p-3 rounded-lg">
                        <p className="font-bold mb-1">{dict.login.demo}:</p>
                        <p>Admin: owner@wakashiro.com / admin</p>
                        <p>User: user@wakashiro.com / 123</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
