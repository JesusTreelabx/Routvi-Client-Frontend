'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getHomeFeed } from '@/lib/api';
import HeroSearch from '@/components/home/HeroSearch';
import CategoryGrid from '@/components/home/CategoryGrid';
import BusinessCard from '@/components/home/BusinessCard';
import SectionTitle from '@/components/home/SectionTitle';

interface FeedData {
    featured: any[];
    openNow: any[];
    withPromotions: any[];
    experiences: any[];
    dailyFeatured: any | null;
}

export default function Home() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [feedData, setFeedData] = useState<FeedData | null>(null);
    const [userLocation, setUserLocation] = useState({ lat: 22.7709, lng: -102.5832 }); // Zacatecas default

    useEffect(() => {
        // Request geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    // Use default location
                }
            );
        }
    }, []);

    useEffect(() => {
        fetchHomeFeed();
    }, [userLocation]);

    const fetchHomeFeed = async () => {
        try {
            setLoading(true);
            const response = await getHomeFeed(userLocation.lat, userLocation.lng, 10);
            setFeedData(response.data.data);
        } catch (error) {
            console.error('Error fetching home feed:', error);
            // Set empty data on error
            setFeedData({
                featured: [],
                openNow: [],
                withPromotions: [],
                experiences: [],
                dailyFeatured: null,
            });
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (query: string) => {
        router.push(`/businesses?search=${encodeURIComponent(query)}`);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-2xl text-gray-600">Cargando...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <HeroSearch onSearch={handleSearch} />

            {/* Category Grid */}
            <CategoryGrid />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
                {/* Empty State */}
                {(!feedData || (
                    (!feedData.openNow || feedData.openNow.length === 0) &&
                    (!feedData.withPromotions || feedData.withPromotions.length === 0) &&
                    (!feedData.featured || feedData.featured.length === 0) &&
                    !feedData.dailyFeatured
                )) && (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🍽️</div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                No hay negocios cerca
                            </h2>
                            <p className="text-gray-600 mb-6 max-w-md mx-auto">
                                Aún no hay negocios registrados en tu área. ¡Sé el primero en descubrir y compartir lugares increíbles!
                            </p>
                            <button
                                onClick={() => router.push('/suggestions')}
                                className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
                                style={{ backgroundColor: '#10b981' }}
                            >
                                Sugerir un Negocio
                            </button>
                        </div>
                    )}

                {/* Abierto Ahora */}
                {feedData?.openNow && feedData.openNow.length > 0 && (
                    <section>
                        <SectionTitle
                            icon="🕒"
                            title="Abierto ahora"
                            subtitle="Lugares abiertos en este momento"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {feedData.openNow.slice(0, 4).map((business) => (
                                <BusinessCard key={business.ID} business={business} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Con Promociones */}
                {feedData?.withPromotions && feedData.withPromotions.length > 0 && (
                    <section>
                        <SectionTitle
                            icon="🎉"
                            title="Con Promociones"
                            subtitle="Aprovecha las mejores ofertas"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {feedData.withPromotions.slice(0, 4).map((business) => (
                                <BusinessCard key={business.ID} business={business} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Descubrimientos Cerca */}
                {feedData?.featured && feedData.featured.length > 0 && (
                    <section>
                        <SectionTitle
                            icon="🧭"
                            title="Descubrimientos cerca"
                            subtitle={`${feedData.featured.length} resultados`}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {feedData.featured.map((business) => (
                                <BusinessCard key={business.ID} business={business} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Daily Featured */}
                {feedData?.dailyFeatured && (
                    <section className="bg-gradient-to-r from-primary to-emerald-600 rounded-2xl p-8 text-white">
                        <SectionTitle
                            icon="⭐"
                            title="Destacado del día"
                        />
                        <div className="max-w-2xl">
                            <BusinessCard business={feedData.dailyFeatured} />
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
