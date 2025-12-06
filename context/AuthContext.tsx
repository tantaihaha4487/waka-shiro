
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, users } from '@/lib/data';
import { useRouter } from 'next/navigation';

interface AuthContextType {
    user: User | null;
    login: (email: string, pass: string) => boolean;
    guestLogin: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    const login = (email: string, pass: string) => {
        const foundUser = users.find(u => u.email === email && u.pass === pass);
        if (foundUser) {
            const userData: User = {
                id: email,
                email: foundUser.email,
                role: foundUser.role as 'ADMIN' | 'CUSTOMER',
                name: foundUser.name
            };
            setUser(userData);
            // Persist to local storage for demo purposes
            localStorage.setItem('waka_user', JSON.stringify(userData));
            return true;
        }
        return false;
    };

    const guestLogin = () => {
        const guestUser: User = {
            id: 'guest-' + Date.now(),
            email: '',
            role: 'GUEST',
            name: 'Guest'
        };
        setUser(guestUser);
        localStorage.setItem('waka_user', JSON.stringify(guestUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('waka_user');
        router.push('/');
    };

    useEffect(() => {
        const stored = localStorage.getItem('waka_user');
        if (stored) {
            try {
                setUser(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse user", e);
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, guestLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
