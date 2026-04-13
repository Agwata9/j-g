import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShoppingBag } from 'lucide-react';
import { BUSINESS_NAME, BUSINESS_TAGLINE, BUSINESS_LOCATION, NAV_ITEMS } from '@/src/constants';

export function Footer() {
  return (
    <footer className="border-top bg-secondary/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-accent" />
              <span className="font-serif text-2xl font-bold text-primary">{BUSINESS_NAME}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {BUSINESS_TAGLINE}. Bringing elegance and comfort to your home with our premium collection of curtains, bedding, and rugs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>{BUSINESS_LOCATION}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>info@jgfashions.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary">Visit Us</h4>
            <p className="text-sm text-muted-foreground">
              Experience our collection in person at our showroom in Kiambu.
            </p>
            <div className="pt-2">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                Opening Hours
              </p>
              <p className="text-sm text-muted-foreground">Mon - Sat: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
