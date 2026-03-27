import React from 'react';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'For Tenants', href: '#tenants' },
      { name: 'For Landlords', href: '#landlords' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer 
      data-testid="footer-section"
      className="bg-[#000000] text-white py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a 
              href="/" 
              data-testid="footer-logo"
              className="flex items-center gap-3 mb-6"
            >
              <img 
                src="/images/shield-logo.svg" 
                alt="LeazeSure Shield" 
                className="h-10 w-auto"
              />
              <span className="font-heading font-semibold text-xl text-white tracking-tight">
                LeazeSure
              </span>
            </a>
            <p className="font-body text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Building trust between tenants and landlords through verified profiles and credit-building rent reporting.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Product</h4>
            <ul data-testid="footer-links" className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-body text-sm text-gray-400 hover:text-[#0BFFC9] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-body text-sm text-gray-400 hover:text-[#0BFFC9] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-body text-sm text-gray-400 hover:text-[#0BFFC9] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-gray-500">
              © 2026 LeazeSure Technologies Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <img src="https://www.equifax.com/favicon.ico" alt="Equifax" className="w-6 h-6 rounded object-contain" />
              <span className="font-body text-xs text-gray-500">Reporting to Equifax</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
