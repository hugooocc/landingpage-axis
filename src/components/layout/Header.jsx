import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Servicios', href: '/#servicios' },
        { name: 'Sobre Nosotros', href: '/#nosotros' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md border-b border-white/20 h-16" : "bg-transparent h-24"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src="/logoaxis.png"
                        alt="Axis BCN Realty"
                        className={cn(
                            "w-auto transition-all duration-500",
                            isScrolled ? "h-14 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" : "h-20 drop-shadow-md"
                        )}
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-bold transition-colors hover:text-primary",
                                isScrolled ? "text-slate-600" : "text-slate-600"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={cn("p-2", isScrolled ? "text-slate-900" : "text-slate-900")}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-bold text-slate-700 hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
