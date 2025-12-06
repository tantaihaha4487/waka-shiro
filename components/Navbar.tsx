
"use client";

import Link from 'next/link';
import { ShoppingCart, User as UserIcon, LogOut, Menu } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';

export default function Navbar({ lang, dict }: { lang: string, dict: any }) {
    const { user, logout } = useAuth();
    const { count } = useCart();

    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
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
                <Link href={`/${lang}`} className="btn btn-ghost text-xl font-bold text-primary">Waka-Shiro</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={`/${lang}/shop`} className="font-medium">{dict.nav.shop}</Link></li>
                    <li><Link href={`/${lang}/about`} className="font-medium">{dict.nav.about}</Link></li>
                    {user?.role === 'ADMIN' && <li><Link href={`/${lang}/admin/dashboard`} className="font-medium">{dict.common.dashboard}</Link></li>}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link href={`/${lang}/cart`} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <ShoppingCart className="h-5 w-5" />
                        {count > 0 && <span className="badge badge-sm badge-primary indicator-item">{count}</span>}
                    </div>
                </Link>

                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-10">
                                <span>{user.name?.charAt(0) || 'U'}</span>
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href={`/${lang}/profile`} className="justify-between">{dict.common.profile}</Link></li>
                            <li><button onClick={logout}>{dict.common.logout}</button></li>
                        </ul>
                    </div>
                ) : (
                    <Link href={`/${lang}/login`} className="btn btn-primary btn-sm text-white">
                        {dict.common.login}
                    </Link>
                )}
            </div>
        </div>
    );
}
