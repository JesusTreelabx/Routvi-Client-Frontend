import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Home Feed API
export const getHomeFeed = (lat: number, lng: number, radiusKm: number = 10) => {
    return api.get('/v1/home-feed', {
        params: { lat, lng, radiusKm },
    });
};

// Business Discovery API
export const getBusinesses = (params: any) => {
    return api.get('/v1/businesses', { params });
};

// Business Profile API
export const getBusinessBySlug = (slug: string) => {
    return api.get(`/v1/businesses/${slug}`);
};

// Business Menu API
export const getBusinessMenu = (businessId: string, availableOnly: boolean = true) => {
    return api.get(`/v1/businesses/${businessId}/menu`, {
        params: { availableOnly },
    });
};

// WhatsApp Preview API
export const getWhatsAppPreview = (businessId: string, items: any[]) => {
    return api.post('/v1/whatsapp/preview', {
        businessId,
        items,
    });
};

// Suggestions API
export const submitSuggestion = (data: any) => {
    return api.post('/v1/suggestions', data);
};

// Corrections API
export const submitCorrection = (data: any) => {
    return api.post('/v1/corrections', data);
};

export default api;
