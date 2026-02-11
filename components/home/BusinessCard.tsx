'use client';

import { useRouter } from 'next/navigation';
import { MapPin, Star, Clock } from 'lucide-react';

interface Business {
    ID: string;
    name: string;
    slug: string;
    image?: string;
    category?: string;
    type?: string;
    rating?: number;
    reviewCount?: number;
    distance?: number;
    isOpenNow?: boolean;
    hasActivePromos?: boolean;
    promotions?: any[];
    priceRange?: string;
}

interface BusinessCardProps {
    business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/businesses/${business.slug}`);
    };

    // Calculate distance (if available)
    const distance = business.distance
        ? `${business.distance.toFixed(1)} km`
        : null;

    // Check if open now (simplified)
    const isOpenNow = business.isOpenNow || false;

    // Check if has promotions
    const hasPromo = business.hasActivePromos || (business.promotions && business.promotions.length > 0);

    return (
        <div
            onClick={handleClick}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={business.image || 'https://via.placeholder.com/400x300?text=No+Image'}
                    alt={business.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Badges */}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                    {hasPromo && (
                        <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                            Promo
                        </span>
                    )}
                    {isOpenNow && (
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Abierto
                        </span>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                    {business.name}
                </h3>

                <p className="text-sm text-gray-600 mb-2">
                    {business.category || business.type}
                </p>

                {/* Rating & Distance */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-700">
                            {business.rating || '4.5'}
                        </span>
                        <span className="text-sm text-gray-500">
                            ({business.reviewCount || '0'})
                        </span>
                    </div>

                    {distance && (
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{distance}</span>
                        </div>
                    )}
                </div>

                {/* Price Range */}
                {business.priceRange && (
                    <div className="mt-2 text-sm font-medium text-gray-700">
                        {business.priceRange}
                    </div>
                )}
            </div>
        </div>
    );
}
