'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { homePath } from "@/path";

const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navLinks = [
        { href: '/discover', label: 'discover' },
        { href: '/jobs', label: 'jobs' },
        { href: '/community', label: 'community' },
        { href: '/learn', label: 'learn' },
    ];

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem('token'));
    }, []);

    return (
        <header className="border-b bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo & Main Navigation */}
                    <div className="flex items-center">
                        <Link 
                            href={homePath()} 
                            className="text-xl font-bold tracking-tight hover:text-gray-700 transition-colors"
                        >
                            developers.
                        </Link>
                        <nav className="hidden md:ml-8 md:flex space-x-8">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`text-gray-700 hover:text-gray-900 transition-colors ${
                                        pathname === href ? 'font-semibold' : ''
                                    }`}
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-4">
                        <div className="relative w-full">
                            <input 
                                type="text" 
                                placeholder="Search models, creatives, agencies..." 
                                className="w-full px-4 py-2 border rounded-md bg-gray-50 
                                         focus:ring-2 focus:ring-gray-500 focus:border-transparent
                                         placeholder:text-gray-400 transition-all"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg 
                                    className="w-5 h-5 text-gray-400"
                                    fill="none" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* User Actions */}
                    <div className="hidden md:flex items-center space-x-6">
                        {isLoggedIn ? (
                            <>
                                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <svg 
                                        className="w-6 h-6 text-gray-600" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 256 256"
                                    >
                                        <path 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="16" 
                                            d="M56.20305 104A71.899 71.899 0 0 1 128.5484 32.002c39.58967.29432 71.25651 33.20133 71.25651 72.90185V112c0 35.81563 7.49325 56.59893 14.093 67.95814A7.999 7.999 0 0 1 207.01628 192H48.98365A7.99908 7.99908 0 0 1 42.103 179.95641c6.60328-11.35959 14.1-32.1426 14.1-67.95641zM96 192v8a32 32 0 0 0 64 0v-8"
                                        />
                                    </svg>
                                </button>
                            </>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link 
                                    href="/login" 
                                    className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                                >
                                    Login
                                </Link>
                                <Link 
                                    href="/register" 
                                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg 
                            className="w-6 h-6 text-gray-600" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`block px-3 py-2 rounded-md text-base font-medium
                                         ${pathname === href 
                                           ? 'bg-gray-900 text-white' 
                                           : 'text-gray-700 hover:bg-gray-50'
                                         }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;