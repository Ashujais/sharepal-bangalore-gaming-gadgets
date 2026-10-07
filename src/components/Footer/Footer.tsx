import React from 'react';
import { FOOTER_SEO_CATEGORIES } from '../../data/products';
import { SharePalLogo } from '../Header/SharePalLogo';
import { Instagram, Facebook, Youtube, Linkedin, MessageCircle, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-gray-200 pt-12 pb-24 md:pb-16 border-t border-primary-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* SEO Categories Grid */}
        <div className="border-b border-white/10 pb-10">
          <h4 className="text-xs uppercase font-bold tracking-wider text-secondary-500 mb-6">
            Explore Categories on Rent in Bangalore
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-xs text-neutral-300">
            {FOOTER_SEO_CATEGORIES.map(category => (
              <div key={category.name} className="space-y-2">
                <h5 className="font-bold text-white text-sm">{category.name}</h5>
                <ul className="space-y-1.5">
                  {category.items.map(item => (
                    <li key={item}>
                      <a
                        href="#products-section"
                        className="hover:text-secondary-400 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8 text-xs text-neutral-300 border-b border-white/10">
          {/* Column 1: SharePal */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-sm">Sharepal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white">Blogs & Guides</a></li>
              <li><a href="#" className="hover:text-white">Press Mentions</a></li>
            </ul>
          </div>

          {/* Column 2: Become a Pal */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-sm">Become a Pal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Lend Your Gadgets</a></li>
              <li><a href="#" className="hover:text-white">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-white">Creator Partnerships</a></li>
              <li><a href="#" className="hover:text-white">Gaming Tournaments</a></li>
            </ul>
          </div>

          {/* Column 3: Information */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-sm">Information</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">How Rental Works</a></li>
              <li><a href="#" className="hover:text-white">Zero Deposit Policy</a></li>
              <li><a href="#" className="hover:text-white">KYC Verification</a></li>
              <li><a href="#" className="hover:text-white">Delivery Localities</a></li>
              <li><a href="#" className="hover:text-white">Quality Guarantee</a></li>
            </ul>
          </div>

          {/* Column 4: Policies */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-sm">Policies</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Rental Agreement</a></li>
              <li><a href="#" className="hover:text-white">Cancellation & Refund</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 5: Need Help */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <h5 className="font-bold text-white text-sm">Need Help?</h5>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-secondary-500" />
                <span>WhatsApp: +91 91083 72345</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary-500" />
                <span>care@sharepal.in</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary-500" />
                <span>Bangalore Hub: Koramangala 4th Block</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Social & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-4">
            <Link to="/bangalore/gaming-gadgets-on-rent">
              <SharePalLogo isMobile />
            </Link>
            <span>© 2026 SharePal Technologies Pvt. Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
