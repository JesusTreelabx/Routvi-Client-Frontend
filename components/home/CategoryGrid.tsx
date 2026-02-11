'use client';

import { useRouter } from 'next/navigation';

const categories = [
    { id: 'all', name: 'Todo', icon: '🏠', type: '' },
    { id: 'pizza', name: 'Pizza', icon: '🍕', type: 'pizzeria' },
    { id: 'sushi', name: 'Sushi', icon: '🍱', type: 'sushi' },
    { id: 'tacos', name: 'Tacos', icon: '🌮', type: 'tacos' },
    { id: 'burgers', name: 'Burgers', icon: '🍔', type: 'burgers' },
    { id: 'cafe', name: 'Café', icon: '☕', type: 'cafe' },
    { id: 'drinks', name: 'Bebidas', icon: '🍹', type: 'bar' },
    { id: 'dessert', name: 'Postres', icon: '🍰', type: 'postres' },
];

export default function CategoryGrid() {
    const router = useRouter();

    const handleCategoryClick = (type: string) => {
        if (type) {
            router.push(`/businesses?type=${type}`);
        } else {
            router.push('/businesses');
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.type)}
                        className="flex flex-col items-center min-w-[80px] group"
                    >
                        <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl group-hover:shadow-lg group-hover:scale-110 transition-all">
                            {category.icon}
                        </div>
                        <span className="mt-2 text-sm font-medium text-gray-700 group-hover:text-primary transition">
                            {category.name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
