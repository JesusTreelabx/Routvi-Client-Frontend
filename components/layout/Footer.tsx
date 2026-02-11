export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Routvi</h3>
                        <p className="text-gray-400">
                            Descubre los mejores lugares en Zacatecas. Promociones, menús y más.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Enlaces</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-gray-400 hover:text-white transition">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="/businesses" className="text-gray-400 hover:text-white transition">
                                    Buscar Negocios
                                </a>
                            </li>
                            <li>
                                <a href="/suggestions" className="text-gray-400 hover:text-white transition">
                                    Sugerir Lugar
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contacto</h3>
                        <p className="text-gray-400">
                            ¿Eres dueño de un negocio?
                        </p>
                        <p className="text-gray-400 mt-2">
                            contacto@routvi.com
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2026 Routvi. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
