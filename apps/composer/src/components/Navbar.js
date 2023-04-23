import { Search } from 'react-feather';
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-black shadow-md">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-xl font-bold text-blue-500">
                        <a href="/">
                            <img src="/logo.png" alt="Logo" />
                        </a>
                    </div>

                    {/* Navbar Links */}
                    <ul className={`md:flex space-x-6 items-center ${menuOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:space-x-6 md:items-center md:flex`}>
                        <li><a href="/" className="text-gray-100 hover:text-primary py-1 md:py-0">Digital Bahçe</a></li>
                        <li><a href="/" className="text-gray-100 hover:text-primary py-1 md:py-0">Mentor/Mentee</a></li>
                        <li><a href="/events" className="text-gray-100 hover:text-primary py-1 md:py-0">Etkinlikler</a></li>
                        <li><a href="/" className="text-gray-100 hover:text-primary py-1 md:py-0">Açık Kaynak</a></li>
                    </ul>

                    {/* Button */}
                    <div className="hidden md:block">
                        <button className="flex items-center justify-center bg-secondary text-primary text-xs px-6 py-2 rounded-lg hover:bg-primary hover:text-secondary">
                            <Search className="inline-block mr-2" width={14} />
                            Hızlı Ara
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {menuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
