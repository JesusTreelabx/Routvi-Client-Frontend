'use client';

import Link from 'next/link';
import { MapPin, User } from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="bg-primary text-white font-bold text-xl px-4 py-2 rounded-lg">
                            Routvi
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-primary transition">
                            Inicio
                        </Link>
                        <Link href="/businesses" className="text-gray-700 hover:text-primary transition">
                            Buscar
                        </Link>
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center text-gray-700 hover:text-primary transition">
                            <MapPin className="w-5 h-5 mr-1" />
                            <span className="hidden sm:inline">Zacatecas</span>
                        </button>
                        <button className="flex items-center text-gray-700 hover:text-primary transition">
                            <User className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
