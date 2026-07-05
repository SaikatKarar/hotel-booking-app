import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from './../assets/assets';

const Navbar = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/experience' },
        { name: 'About', path: '/about' },
    ];

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Check if on home page
    const isHomePage = location.pathname === '/';

    // Determine if navbar should be dark/white
    const isNavbarWhite = isScrolled || !isHomePage;

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 
            ${isNavbarWhite
                    ? "bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4 text-gray-700"
                    : "py-4 md:py-6"
                }`}
        >

            {/* Logo */}
            <Link to='/'>
                <img
                    src={assets.logo}
                    alt='logo'
                    className={`h-9 transition-all duration-500 ${isNavbarWhite ? "invert opacity-80" : ""}`}
                />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        className={`group flex flex-col gap-0.5 transition-all duration-300 
                        ${isNavbarWhite ? "text-gray-700" : "text-white"}
                        ${location.pathname === link.path ? "font-semibold" : ""}`}
                    >
                        {link.name}
                        <div
                            className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 
                            ${isNavbarWhite ? "bg-gray-700" : "bg-white"}
                            ${location.pathname === link.path ? "w-full" : ""}`}
                        />
                    </Link>
                ))}
                <button
                    className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all duration-300
                    ${isNavbarWhite ? 'text-black border-gray-300 hover:bg-gray-100' : 'text-white border-white/50 hover:bg-white/10'}`}
                >
                    Dashboard
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <img
                    src={assets.searchIcon}
                    alt="search"
                    className={`h-7 w-7 transition-all duration-500 cursor-pointer hover:scale-110 ${isNavbarWhite ? "invert" : ""}`}
                />

                <button
                    className={`px-8 py-2.5 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-lg
                    ${isNavbarWhite ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-100"}`}
                >
                    Login
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <img
                    src={assets.menuIcon}
                    alt="menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`h-6 w-6 cursor-pointer transition-all duration-300 ${isNavbarWhite ? "invert" : ""}`}
                />
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <button
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <img src={assets.closeIcon} alt="close" className='h-6' />
                </button>

                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-lg hover:text-blue-600 transition ${location.pathname === link.path ? "text-blue-600 font-bold" : ""}`}
                    >
                        {link.name}
                    </Link>
                ))}

                <button className="border border-gray-300 px-6 py-2 text-sm font-light rounded-full cursor-pointer transition-all hover:bg-gray-100">
                    Dashboard
                </button>

                <button className="bg-black text-white px-8 py-3 rounded-full transition-all duration-500 hover:bg-gray-800 hover:scale-105">
                    Login
                </button>
            </div>
        </nav>
    );
}

export default Navbar;