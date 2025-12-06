
"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ShoppingCart, User as UserIcon, LogOut, Menu, Globe } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';

export default function Navbar({ lang, dict }: { lang: string, dict: any }) {
    const { user, logout } = useAuth();
    const { count } = useCart();
    const pathname = usePathname();
    const router = useRouter();

    const switchLang = (newLang: string) => {
        const segments = pathname.split('/');
        // segments[0] is empty, segments[1] is the locale
        segments[1] = newLang;
        const newPath = segments.join('/');
        router.push(newPath);
    };

    return (
        <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-primary/10 text-neutral">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <Menu className="h-5 w-5" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href={`/${lang}/shop`}>{dict.nav.shop}</Link></li>
                        <li><Link href={`/${lang}/about`}>{dict.nav.about}</Link></li>
                        {user?.role === 'ADMIN' && <li><Link href={`/${lang}/admin/dashboard`}>{dict.common.dashboard}</Link></li>}
                    </ul>
                </div>
                <Link href={`/${lang}`} className="btn btn-ghost text-xl font-bold text-primary font-kanit">Waka-Shiro</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={`/${lang}/shop`} className="font-medium hover:text-primary transition-colors">{dict.nav.shop}</Link></li>
                    <li><Link href={`/${lang}/about`} className="font-medium hover:text-primary transition-colors">{dict.nav.about}</Link></li>
                    {user?.role === 'ADMIN' && <li><Link href={`/${lang}/admin/dashboard`} className="font-medium hover:text-primary transition-colors">{dict.common.dashboard}</Link></li>}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {/* Language Switcher */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <Globe className="h-5 w-5" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28">
                        <li><button onClick={() => switchLang('en')} className={lang === 'en' ? 'active' : ''}>🇬🇧 EN</button></li>
                        <li><button onClick={() => switchLang('th')} className={lang === 'th' ? 'active' : ''}>🇹🇭 TH</button></li>
                    </ul>
                </div>

                <Link href={`/${lang}/cart`} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <ShoppingCart className="h-5 w-5" />
                        {count > 0 && <span className="badge badge-sm badge-primary indicator-item text-white">{count}</span>}
                    </div>
                </Link>

                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
                            <div className="bg-primary/20 text-primary rounded-full w-10 ring ring-primary/10 ring-offset-base-100 ring-offset-2">
                                <span>{user.name?.charAt(0) || 'U'}</span>
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href={`/${lang}/profile`} className="justify-between">{dict.common.profile}</Link></li>
                            <li><button onClick={logout} className="text-error">{dict.common.logout}</button></li>
                        </ul>
                    </div>
                ) : (
                    <Link href={`/${lang}/login`} className="btn btn-primary btn-sm text-white shadow-md hover:shadow-lg transition-all">
                        {dict.common.login}
                    </Link>
                )}
            </div>
        </div>
    );
}
