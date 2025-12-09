import React from 'react';

function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Home Section */}
            <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white py-20 px-6">
                <div className="max-w-6x1 mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to <span className="text-yellow-300">Yhuri Best Shop</span></h1>
                     <p className="text-xl md:text-2xl mb-8 text-gray-100">
                        Best Products For You - Premium Stationery & Handmade Notebooks
                    </p>
                    <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition duration-300 shadow-lg">
                        Shop Now
                    </button>
                </div>
            </section>
        </div>
    )
}