
"use client";

import { motion } from "framer-motion";
import { Fish, ChefHat, Heart, Mail } from "lucide-react";

export default function AboutClient({ lang, dict }: { lang: string, dict: any }) {
    return (
        <div className="min-h-screen bg-base-100 text-neutral">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0 bg-neutral/60 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?q=80&w=2000&auto=format&fit=crop"
                    alt="Japanese Tea House"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-base-100 mb-4 drop-shadow-lg tracking-tight">
                            {dict.about.title}
                        </h1>
                        <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                {/* Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold text-primary mb-6">Tradition Meets Modernity</h2>
                        <p className="text-lg leading-relaxed text-neutral/80">
                            {dict.about.p1}
                        </p>
                        <p className="text-lg leading-relaxed text-neutral/80">
                            {dict.about.p2}
                        </p>
                        <p className="text-lg leading-relaxed text-neutral/80">
                            {dict.about.p3}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-xl" />
                        <img
                            src="https://images.unsplash.com/photo-1626202158864-1d3745672a42?q=80&w=800&auto=format&fit=crop"
                            alt="Taiyaki Making"
                            className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
                        />
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { icon: Fish, title: "Authentic Shape", desc: "Classic fish-shaped molds imported directly from Tokyo." },
                        { icon: ChefHat, title: "Master Craft", desc: "Hand-poured batter and precise temperature control." },
                        { icon: Heart, title: "Made with Love", desc: "Every Taiyaki is made fresh to order, just for you." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                            className="card bg-base-100/50 backdrop-blur-md border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="card-body items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="card-title text-xl mb-2 text-neutral">{item.title}</h3>
                                <p className="text-neutral/70">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="card bg-base-100 shadow-2xl overflow-hidden border border-primary/10"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="bg-primary p-12 text-primary-content flex flex-col justify-center">
                                <h3 className="text-3xl font-bold mb-6">{dict.about.contact}</h3>
                                <p className="mb-8 text-lg opacity-90">
                                    Have a question or want to collaborate? We'd love to hear from you.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <Mail className="w-6 h-6" />
                                        <span>hello@wakashiro.com</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-12 bg-base-100/50 backdrop-blur-sm">
                                <form className="space-y-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-neutral">{dict.about.name}</span>
                                        </label>
                                        <input type="text" className="input input-bordered w-full" placeholder="Your Name" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-neutral">{dict.common.email}</span>
                                        </label>
                                        <input type="email" className="input input-bordered w-full" placeholder="email@example.com" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-neutral">{dict.about.message}</span>
                                        </label>
                                        <textarea className="textarea textarea-bordered h-32 w-full" placeholder="Tell us what you think..."></textarea>
                                    </div>
                                    <button className="btn btn-primary w-full text-white shadow-lg hover:shadow-primary/50 transition-shadow">
                                        {dict.about.send}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
