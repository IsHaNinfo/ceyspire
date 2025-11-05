"use client";

import { useState } from "react";
import { ShoppingCart, Heart, User, Search, Menu, X } from "lucide-react";
import Link from "next/link";
const Header = () => {
    // 1. Define state within the component
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const MobileMenu = () => (
        // 2. Mobile Menu Overlay uses the state
        <div
            className={`fixed top-0 left-0 h-full w-full bg-white z-[60] transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-emerald-700">Menu</h2>
                {/* Close Button toggles state to false */}
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close Menu"
                    className="p-2 text-gray-700 hover:text-emerald-700"
                >
                    <X size={28} />
                </button>
            </div>

            <nav className="flex flex-col gap-2 p-6">
                {[
                    { name: "Shop All", path: "/shop" },
                    { name: "About Us", path: "/about" },
                ].map((link) => (
                    <Link
                        key={link.name}
                        href={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xl font-medium text-gray-800 py-3 border-b border-gray-100 hover:text-emerald-700 transition"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
            {/* Optional: Add mobile user/wishlist links here */}

        </div>
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            {/* Mobile Menu is rendered here (hidden by default on desktop) */}
            <MobileMenu />

            <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
                <Link href="/" className="text-2xl font-bold text-emerald-700 hover:text-emerald-800 transition">
                    CeySpire
                </Link>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 font-medium">
                    <a href="/shop" className="hover:text-emerald-700 transition">Shop All</a>
                    <a href="/about" className="hover:text-emerald-700 transition">About Us</a>
                </nav>

                {/* Icons and Mobile Menu Toggle */}
                <div className="flex items-center gap-3">
                    {/* Placeholder for desktop/wide search or other icons */}
                    <button aria-label="Shopping Cart" className="p-2 hover:text-emerald-700 transition"><ShoppingCart size={20} /></button>

                    {/* 3. The essential Mobile Menu Toggle Button */}
                    <button
                        aria-label="Open Menu"
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 hover:text-emerald-700 transition md:hidden" // Only visible on mobile
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;