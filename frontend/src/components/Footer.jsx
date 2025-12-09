import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between gap-8">
                    {/* Brand Section */}
                    <div>
                        <h2 className="text-xl font-bold">Yhuri Best Shop</h2>
                        <p className="text-gray-400 text-sm mt-2">Best Products For You</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Products</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold mb-3">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Email: info@yhuri.com</li>
                            <li>Phone: +1 234 567 890</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
                    <p>© 2025 Yhuri Best Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
