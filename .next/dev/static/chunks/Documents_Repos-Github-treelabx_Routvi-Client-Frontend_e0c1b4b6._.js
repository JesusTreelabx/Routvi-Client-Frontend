(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getBusinessBySlug",
    ()=>getBusinessBySlug,
    "getBusinessMenu",
    ()=>getBusinessMenu,
    "getBusinesses",
    ()=>getBusinesses,
    "getHomeFeed",
    ()=>getHomeFeed,
    "getWhatsAppPreview",
    ()=>getWhatsAppPreview,
    "submitCorrection",
    ()=>submitCorrection,
    "submitSuggestion",
    ()=>submitSuggestion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:4000") || 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json'
    }
});
const getHomeFeed = (lat, lng, radiusKm = 10)=>{
    return api.get('/v1/home-feed', {
        params: {
            lat,
            lng,
            radiusKm
        }
    });
};
const getBusinesses = (params)=>{
    return api.get('/v1/businesses', {
        params
    });
};
const getBusinessBySlug = (slug)=>{
    return api.get(`/v1/businesses/${slug}`);
};
const getBusinessMenu = (businessId, availableOnly = true)=>{
    return api.get(`/v1/businesses/${businessId}/menu`, {
        params: {
            availableOnly
        }
    });
};
const getWhatsAppPreview = (businessId, items)=>{
    return api.post('/v1/whatsapp/preview', {
        businessId,
        items
    });
};
const submitSuggestion = (data)=>{
    return api.post('/v1/suggestions', data);
};
const submitCorrection = (data)=>{
    return api.post('/v1/corrections', data);
};
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/HeroSearch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function HeroSearch({ onSearch }) {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (onSearch && searchQuery.trim()) {
            onSearch(searchQuery);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[400px] bg-gradient-to-r from-gray-900 to-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-cover bg-center",
                style: {
                    backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200)',
                    opacity: 0.4
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/HeroSearch.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full flex flex-col items-center justify-center px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-white text-3xl md:text-5xl font-bold text-center mb-4",
                        children: [
                            "¿QUÉ PROMO DESCUBRIREMOS HOY EN ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "ZACATECAS"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/HeroSearch.tsx",
                                lineNumber: 34,
                                columnNumber: 53
                            }, this),
                            "?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/HeroSearch.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/90 text-center mb-8 max-w-2xl",
                        children: "Explora las mejores ofertas en comida, café y diversión nocturna cerca de ti"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/HeroSearch.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "w-full max-w-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Busca tacos, sushi, pizza...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "w-full px-6 py-4 pr-14 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-2xl",
                                    style: {
                                        backgroundColor: 'white',
                                        color: '#000'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/HeroSearch.tsx",
                                    lineNumber: 43,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition",
                                    style: {
                                        backgroundColor: '#10b981'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/HeroSearch.tsx",
                                        lineNumber: 56,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/HeroSearch.tsx",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/HeroSearch.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/HeroSearch.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/HeroSearch.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/HeroSearch.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_s(HeroSearch, "uixqA8hxOTN7LqZPWxVzG2fnyhQ=");
_c = HeroSearch;
var _c;
__turbopack_context__.k.register(_c, "HeroSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/CategoryGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const categories = [
    {
        id: 'all',
        name: 'Todo',
        icon: '🏠',
        type: ''
    },
    {
        id: 'pizza',
        name: 'Pizza',
        icon: '🍕',
        type: 'pizzeria'
    },
    {
        id: 'sushi',
        name: 'Sushi',
        icon: '🍱',
        type: 'sushi'
    },
    {
        id: 'tacos',
        name: 'Tacos',
        icon: '🌮',
        type: 'tacos'
    },
    {
        id: 'burgers',
        name: 'Burgers',
        icon: '🍔',
        type: 'burgers'
    },
    {
        id: 'cafe',
        name: 'Café',
        icon: '☕',
        type: 'cafe'
    },
    {
        id: 'drinks',
        name: 'Bebidas',
        icon: '🍹',
        type: 'bar'
    },
    {
        id: 'dessert',
        name: 'Postres',
        icon: '🍰',
        type: 'postres'
    }
];
function CategoryGrid() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleCategoryClick = (type)=>{
        if (type) {
            router.push(`/businesses?type=${type}`);
        } else {
            router.push('/businesses');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 overflow-x-auto pb-4 scrollbar-hide",
            children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handleCategoryClick(category.type),
                    className: "flex flex-col items-center min-w-[80px] group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl group-hover:shadow-lg group-hover:scale-110 transition-all",
                            children: category.icon
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/CategoryGrid.tsx",
                            lineNumber: 36,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mt-2 text-sm font-medium text-gray-700 group-hover:text-primary transition",
                            children: category.name
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/CategoryGrid.tsx",
                            lineNumber: 39,
                            columnNumber: 25
                        }, this)
                    ]
                }, category.id, true, {
                    fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/CategoryGrid.tsx",
                    lineNumber: 31,
                    columnNumber: 21
                }, this))
        }, void 0, false, {
            fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/CategoryGrid.tsx",
            lineNumber: 29,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/CategoryGrid.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_s(CategoryGrid, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CategoryGrid;
var _c;
__turbopack_context__.k.register(_c, "CategoryGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BusinessCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function BusinessCard({ business }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClick = ()=>{
        router.push(`/businesses/${business.slug}`);
    };
    // Calculate distance (if available)
    const distance = business.distance ? `${business.distance.toFixed(1)} km` : null;
    // Check if open now (simplified)
    const isOpenNow = business.isOpenNow || false;
    // Check if has promotions
    const hasPromo = business.hasActivePromos || business.promotions && business.promotions.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: handleClick,
        className: "bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: business.image || 'https://via.placeholder.com/400x300?text=No+Image',
                        alt: business.name,
                        className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 right-2 flex flex-col gap-2",
                        children: [
                            hasPromo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full",
                                children: "Promo"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                                lineNumber: 60,
                                columnNumber: 25
                            }, this),
                            isOpenNow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                                        lineNumber: 66,
                                        columnNumber: 29
                                    }, this),
                                    "Abierto"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-gray-900 mb-1 line-clamp-1",
                        children: business.name
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mb-2",
                        children: business.category || business.type
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        className: "w-4 h-4 fill-yellow-400 text-yellow-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: business.rating || '4.5'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                                        lineNumber: 87,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-500",
                                        children: [
                                            "(",
                                            business.reviewCount || '0',
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                                        lineNumber: 90,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                                lineNumber: 85,
                                columnNumber: 21
                            }, this),
                            distance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-sm text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: distance
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                                        lineNumber: 98,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this),
                    business.priceRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-sm font-medium text-gray-700",
                        children: business.priceRange
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_s(BusinessCard, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BusinessCard;
var _c;
__turbopack_context__.k.register(_c, "BusinessCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/SectionTitle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionTitle({ icon, title, subtitle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 mb-6",
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-3xl",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/SectionTitle.tsx",
                lineNumber: 10,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-900",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/SectionTitle.tsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/SectionTitle.tsx",
                        lineNumber: 13,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/SectionTitle.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/SectionTitle.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = SectionTitle;
var _c;
__turbopack_context__.k.register(_c, "SectionTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$components$2f$home$2f$HeroSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/HeroSearch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$components$2f$home$2f$CategoryGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/CategoryGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$components$2f$home$2f$BusinessCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/BusinessCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$components$2f$home$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/components/home/SectionTitle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Home() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [feedData, setFeedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userLocation, setUserLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        lat: 22.7709,
        lng: -102.5832
    }); // Zacatecas default
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Request geolocation
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition({
                    "Home.useEffect": (position)=>{
                        setUserLocation({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        });
                    }
                }["Home.useEffect"], {
                    "Home.useEffect": (error)=>{
                        console.error('Geolocation error:', error);
                    // Use default location
                    }
                }["Home.useEffect"]);
            }
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            fetchHomeFeed();
        }
    }["Home.useEffect"], [
        userLocation
    ]);
    const fetchHomeFeed = async ()=>{
        try {
            setLoading(true);
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHomeFeed"])(userLocation.lat, userLocation.lng, 10);
            setFeedData(response.data.data);
        } catch (error) {
            console.error('Error fetching home feed:', error);
            // Set empty data on error
            setFeedData({
                featured: [],
                openNow: [],
                withPromotions: [],
                experiences: [],
                dailyFeatured: null
            });
        } finally{
            setLoading(false);
        }
    };
    const handleSearch = (query)=>{
        router.push(`/businesses?search=${encodeURIComponent(query)}`);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl text-gray-600",
                children: "Cargando..."
            }, void 0, false, {
                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                lineNumber: 74,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
            lineNumber: 73,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$components$2f$home$2f$HeroSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSearch: handleSearch
            }, void 0, false, {
                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$components$2f$home$2f$CategoryGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12",
                children: [
                    feedData?.openNow && feedData.openNow.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$components$2f$home$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                icon: "🕒",
                                title: "Abierto ahora",
                                subtitle: "Lugares abiertos en este momento"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                                lineNumber: 92,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                                children: feedData.openNow.slice(0, 4).map((business)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$components$2f$home$2f$BusinessCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        business: business
                                    }, business.ID, false, {
                                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                                lineNumber: 97,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 21
                    }, this),
                    feedData?.withPromotions && feedData.withPromotions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$components$2f$home$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                icon: "🎉",
                                title: "Con Promociones",
                                subtitle: "Aprovecha las mejores ofertas"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                                children: feedData.withPromotions.slice(0, 4).map((business)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$components$2f$home$2f$BusinessCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        business: business
                                    }, business.ID, false, {
                                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                                lineNumber: 113,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                        lineNumber: 107,
                        columnNumber: 21
                    }, this),
                    feedData?.featured && feedData.featured.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$components$2f$home$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                icon: "🧭",
                                title: "Descubrimientos cerca",
                                subtitle: "8 resultados"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                                lineNumber: 124,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                                children: feedData.featured.map((business)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$components$2f$home$2f$BusinessCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        business: business
                                    }, business.ID, false, {
                                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                                lineNumber: 129,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                        lineNumber: 123,
                        columnNumber: 21
                    }, this),
                    feedData?.dailyFeatured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-gradient-to-r from-primary to-emerald-600 rounded-2xl p-8 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$components$2f$home$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                icon: "⭐",
                                title: "Destacado del día"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                                lineNumber: 140,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$components$2f$home$2f$BusinessCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    business: feedData.dailyFeatured
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                                lineNumber: 144,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                        lineNumber: 139,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Repos-Github-treelabx/Routvi-Client-Frontend/app/page.tsx",
        lineNumber: 80,
        columnNumber: 9
    }, this);
}
_s(Home, "ViqYaB7phLJGzMoTlTadwMIt1MM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repos$2d$Github$2d$treelabx$2f$Routvi$2d$Client$2d$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Repos-Github-treelabx_Routvi-Client-Frontend_e0c1b4b6._.js.map