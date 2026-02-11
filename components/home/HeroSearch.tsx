'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface HeroSearchProps {
    onSearch: (query: string) => void;
}

export default function HeroSearch({ onSearch }: HeroSearchProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSearch && searchQuery.trim()) {
            onSearch(searchQuery);
        }
    };

    return (
        <div className="relative h-[400px] bg-gradient-to-r from-gray-900 to-gray-700">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200)',
                    opacity: 0.4
                }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-4">
                <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">
                    ¿QUÉ PROMO DESCUBRIREMOS HOY EN <span className="text-primary">ZACATECAS</span>?
                </h1>
                <p className="text-white/90 text-center mb-8 max-w-2xl">
                    Explora las mejores ofertas en comida, café y diversión nocturna cerca de ti
                </p>

                {/* Search Bar */}
                <form onSubmit={handleSubmit} className="w-full max-w-2xl">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Busca tacos, sushi, pizza..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-4 pr-14 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-2xl"
                            style={{ backgroundColor: 'white', color: '#000' }}
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition"
                            style={{ backgroundColor: '#10b981' }}
                        >
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
