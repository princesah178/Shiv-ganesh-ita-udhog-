import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { FACTORY_INFO } from '../data/content';

interface FloatingActionsProps {
  lang: 'en' | 'ne';
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto w-11 h-11 rounded-full bg-stone-900/90 text-white flex items-center justify-center shadow-lg hover:bg-stone-800 transition-all cursor-pointer border border-stone-700"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Direct Call Button 1 */}
      <a
        href={`tel:+977${FACTORY_INFO.primaryPhone}`}
        aria-label="Call 9804758926"
        className="pointer-events-auto flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#B43A2B] text-white shadow-xl hover:bg-[#972a1e] hover:scale-105 transition-all group border border-red-400/30"
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <Phone className="w-3.5 h-3.5 fill-white" />
        </div>
        <span className="text-xs font-bold hidden sm:inline">
          {FACTORY_INFO.primaryPhone}
        </span>
      </a>

      {/* Direct Call Button 2 */}
      <a
        href={`tel:+977${FACTORY_INFO.secondaryPhone}`}
        aria-label="Call 9827706501"
        className="pointer-events-auto flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-stone-900 text-white shadow-xl hover:bg-stone-800 hover:scale-105 transition-all group border border-stone-700"
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <Phone className="w-3.5 h-3.5 text-amber-400" />
        </div>
        <span className="text-xs font-bold hidden sm:inline">
          {FACTORY_INFO.secondaryPhone}
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${FACTORY_INFO.whatsappNumber}?text=Namaste%20Shiv%20Ganesh%20Ita%20Udhog,%20I%20would%20like%20to%20order%20bricks%20for%20my%20building%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Owner on WhatsApp"
        className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#20bd66] text-white shadow-xl hover:bg-[#1a9f55] hover:scale-105 transition-all group border border-emerald-400/30"
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <MessageSquare className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-bold hidden sm:inline">
          {lang === 'en' ? 'WhatsApp' : 'ह्वाट्सएप'}
        </span>
      </a>
    </div>
  );
};
