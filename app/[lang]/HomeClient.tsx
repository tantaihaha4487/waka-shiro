
"use client";

import Link from 'next/link';
import { products } from '@/lib/data';
import { motion } from 'framer-motion';

export default function HomeClient({ lang, dict }: { lang: string, dict: any }) {
  const featured = products.slice(0, 3);

  return (
    <div className="flex flex-col w-full bg-base-100 text-neutral">
      {/* Hero Section */}
      <section className="hero min-h-[85vh] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618413134375-5727555fcd48?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-90"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral/60 to-primary/30" />
        </div>

        <div className="hero-content text-center relative z-10 text-white">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg"
            >
              {dict.home.heroTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-10 text-xl md:text-2xl font-light drop-shadow-md"
            >
              {dict.home.heroSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href={`/${lang}/shop`} className="btn btn-secondary btn-lg text-white px-10 shadow-lg hover:scale-105 transition-transform">
                {dict.home.orderNow}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 px-4 bg-base-100">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-primary"
        >
          {dict.home.featuredTitle}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card bg-base-100/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/10 group hover:-translate-y-2"
            >
              <figure className="h-72 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-neutral/0 group-hover:bg-neutral/10 transition-colors duration-300" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-neutral">{product.name}</h2>
                <p className="text-neutral/70 line-clamp-2">{product.description}</p>
                <div className="card-actions mt-6">
                  <Link href={`/${lang}/shop/${product.id}`} className="btn btn-primary text-white px-8">
                    {dict.common.viewDetails}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-neutral text-neutral-content text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{dict.home.visitUs}</h2>
          <p className="mb-10 text-xl opacity-90">{dict.home.visitSubtitle}</p>
          <Link href={`/${lang}/about`} className="btn btn-outline btn-warning btn-lg hover:scale-105 transition-transform">
            {dict.home.ourStory}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
