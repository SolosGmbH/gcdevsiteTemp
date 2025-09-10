
'use client';

import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { companyInfo } from '@/lib/data';
import { Sun, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-green-500 mr-2" />
              <span className="font-bold text-xl">Greencells</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t.hero.tagline}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{companyInfo.address}, {companyInfo.postalCode} {companyInfo.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} 
                   className="hover:text-green-400 transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@greencells.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('company')}
                  className="hover:text-green-400 transition-colors text-left"
                >
                  {t.nav.company}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-green-400 transition-colors text-left"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-green-400 transition-colors text-left"
                >
                  {t.nav.projects}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-green-400 transition-colors text-left"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Unsere Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Projektentwicklung</li>
              <li>EPC Services</li>
              <li>Flächenakquise</li>
              <li>Finanzierung</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {t.footer.copyright}
            </p>
            <p className="text-gray-500 text-xs">
              {t.footer.legalText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
