import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Menu, X, Shield, Clock } from 'lucide-react';
import { FACTORY_INFO } from '../data/content';

interface NavbarProps {
  lang: 'en' | 'ne';
  setLang: (lang: 'en' | 'ne') => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenCalculator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', labelEn: 'Home', labelNe: 'गृहपृष्ठ' },
    { href: '#owner', labelEn: 'Proprietor', labelNe: 'सञ्चालक' },
    { href: '#gallery', labelEn: 'Image Gallery', labelNe: 'तस्विरहरू' },
    { href: '#calculator', labelEn: 'Cost Estimator', labelNe: 'लागत क्यालकुलेटर' },
    { href: '#video', labelEn: 'Dispatch Video', labelNe: 'गाडी लोड भिडियो' },
    { href: '#contact', labelEn: 'Contact', labelNe: 'सम्पर्क' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top Banner */}
      <div className="bg-[#1C1917] text-stone-200 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <a
              href={FACTORY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-amber-400 font-medium hover:underline"
              title="Open Google Maps Location"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? FACTORY_INFO.locationEn : FACTORY_INFO.locationNe} 📍</span>
            </a>
            <span className="hidden sm:inline text-stone-500">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              {lang === 'en' ? `Est. ${FACTORY_INFO.establishedBs}` : `स्थापना: ${FACTORY_INFO.establishedNe}`}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:+977${FACTORY_INFO.primaryPhone}`}
              className="flex items-center gap-1 font-bold text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-red-500" />
              <span>{FACTORY_INFO.primaryPhone}</span>
            </a>
            <span className="text-stone-600">·</span>
            <a
              href={`tel:+977${FACTORY_INFO.secondaryPhone}`}
              className="flex items-center gap-1 font-bold hover:text-amber-400 transition-colors text-stone-200"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{FACTORY_INFO.secondaryPhone}</span>
            </a>

            {/* Language Switcher */}
            <div className="inline-flex rounded-md p-0.5 bg-stone-800 border border-stone-700 ml-2">
              <button
                type="button"
                onClick={() => setLang('ne')}
                className={`px-2 py-0.5 text-xs font-semibold rounded transition-colors ${
                  lang === 'ne' ? 'bg-[#B43A2B] text-white' : 'text-stone-400 hover:text-white'
                }`}
              >
                नेपाली
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 text-xs font-semibold rounded transition-colors ${
                  lang === 'en' ? 'bg-[#B43A2B] text-white' : 'text-stone-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-linear-to-br from-[#B43A2B] to-[#8C2317] rounded-lg shadow-md flex items-center justify-center text-white font-extrabold text-xl tracking-wider border border-amber-600/30 group-hover:scale-105 transition-transform">
              SG
            </div>
            <div>
              <div className="font-black text-lg sm:text-xl text-stone-900 leading-tight tracking-tight">
                {lang === 'en' ? FACTORY_INFO.nameEn : FACTORY_INFO.nameNe}
              </div>
              <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                <span>{lang === 'en' ? 'Quality Brick Factory' : 'गुणस्तरीय ईटा उद्योग'}</span>
                <span className="text-amber-600">·</span>
                <span className="text-amber-700 font-bold">{FACTORY_INFO.establishedBs}</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#B43A2B] transition-colors py-2 border-b-2 border-transparent hover:border-[#B43A2B]"
              >
                {lang === 'en' ? link.labelEn : link.labelNe}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCalculator}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-md transition-colors"
            >
              {lang === 'en' ? 'Estimate Cost' : 'लागत हिसाब गर्नुहोस्'}
            </button>
            <a
              href={`https://wa.me/${FACTORY_INFO.whatsappNumber}?text=Namaste,%20I%20am%20interested%20in%20ordering%20bricks%20from%20Shiv%20Ganesh%20Ita%20Udhog.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#20bd66] hover:bg-[#1caa59] rounded-md shadow-xs hover:shadow-md transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:+977${FACTORY_INFO.primaryPhone}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#B43A2B] hover:bg-[#992c1f] rounded-md shadow-xs hover:shadow-md transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Call Now' : 'कल गर्नुहोस्'}</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href={`tel:+977${FACTORY_INFO.primaryPhone}`}
              className="p-2 bg-[#B43A2B] text-white rounded-md"
              aria-label="Call Owner"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-stone-700 hover:bg-stone-100 rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col gap-3 font-semibold text-stone-800 text-base">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-stone-50 text-stone-800 hover:text-[#B43A2B]"
              >
                {lang === 'en' ? link.labelEn : link.labelNe}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-bold bg-stone-100 text-stone-800 rounded-md border border-stone-300"
            >
              {lang === 'en' ? 'Brick & Cost Calculator' : 'ईटा र लागत क्यालकुलेटर'}
            </button>
            <a
              href={`tel:+977${FACTORY_INFO.primaryPhone}`}
              className="w-full py-2.5 px-4 text-center text-sm font-bold bg-[#B43A2B] text-white rounded-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{lang === 'en' ? `Call Owner: ${FACTORY_INFO.primaryPhone}` : `सञ्चालकलाई कल: ${FACTORY_INFO.primaryPhone}`}</span>
            </a>
            <a
              href={`https://wa.me/${FACTORY_INFO.whatsappNumber}?text=Namaste,%20I%20am%20interested%20in%20ordering%20bricks.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center text-sm font-bold bg-[#20bd66] text-white rounded-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
