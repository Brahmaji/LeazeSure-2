import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'For Landlords', href: '#landlords' },
    { name: 'For Tenants', href: '#tenants' },
  ];

  return (
    <nav 
      data-testid="nav-container"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-glass py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            data-testid="nav-logo"
            className="flex items-center gap-3"
          >
            <img 
              src="/images/shield-logo.svg" 
              alt="LeazeSure Shield" 
              className="h-10 w-auto"
            />
            <span className="font-heading font-semibold text-xl text-[#000000] tracking-tight">
              LeazeSure
            </span>
          </a>

          {/* Desktop Navigation */}
          <div 
            data-testid="nav-links"
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link font-body text-[#475569] hover:text-[#0009B3] transition-colors text-base"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              data-testid="nav-cta-button"
              className="bg-[#0009B3] text-white hover:bg-[#0009B3]/90 hover:shadow-lg transition-all rounded-full px-6 py-2.5 font-heading font-medium"
              onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Early Access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            className="md:hidden p-2 text-[#000000]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            data-testid="mobile-menu"
            className="md:hidden mt-4 pb-4 border-t border-gray-100"
          >
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-[#475569] hover:text-[#0009B3] transition-colors text-base py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="bg-[#0009B3] text-white hover:bg-[#0009B3]/90 transition-all rounded-full px-6 py-2.5 font-heading font-medium w-full mt-2"
                onClick={() => { setIsMobileMenuOpen(false); document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Get Early Access
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
