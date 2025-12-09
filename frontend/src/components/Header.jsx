import React, { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-gray-800">Yhuri Best Shop</h1>
                        <p className="text-sm text-gray-600">Best Products For You</p>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition">Products</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-700 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 space-y-2">
                        <a href="#" className="block text-gray-700 hover:text-blue-600 py-2">Home</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-600 py-2">Products</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-600 py-2">Contact</a>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;