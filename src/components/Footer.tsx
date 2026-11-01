import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck, Heart } from 'lucide-react';
import { FACTORY_INFO } from '../data/content';

interface FooterProps {
  lang: 'en' | 'ne';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-stone-950 text-white border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-[#B43A2B] to-[#8C2317] rounded-xl flex items-center justify-center font-black text-xl text-white border border-amber-500/30">
                SG
              </div>
              <div>
                <div className="text-xl font-black text-white tracking-tight">
                  {lang === 'en' ? FACTORY_INFO.nameEn : FACTORY_INFO.nameNe}
                </div>
                <div className="text-xs text-amber-400 font-semibold tracking-wider uppercase">
                  {lang === 'en' ? `Established ${FACTORY_INFO.establishedBs}` : `स्थापना: ${FACTORY_INFO.establishedNe}`}
                </div>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              {lang === 'en'
                ? 'Strong & Quality Bricks for Lasting Foundations. Premium kiln-fired Class-A red clay bricks crafted in Sukhupur-3, Siraha, Nepal.'
                : 'बलियो र गुणस्तरीय ईंट, मजबुत निर्माण। सुखुपुर-३, सिराहामा आधुनिक चिम्नी भट्टाबाट उत्पादित १ नम्बर गुणस्तर।'}
            </p>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-xs text-stone-400 font-bold uppercase tracking-wider mb-2">
                {lang === 'en' ? 'Follow & Connect With Us:' : 'सामाजिक सञ्जालमा जोडिनुहोस्:'}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={FACTORY_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-amber-500 text-stone-200 hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <span>TikTok</span>
                  <span className="text-amber-400">↗</span>
                </a>

                <a
                  href={FACTORY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-blue-500 text-stone-200 hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <span>Facebook</span>
                  <span className="text-blue-400">↗</span>
                </a>

                <a
                  href={`https://wa.me/${FACTORY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800 hover:border-emerald-500 text-emerald-300 hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              {lang === 'en' ? 'Quick Navigation' : 'छिटो लिङ्कहरू'}
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  {lang === 'en' ? 'Home' : 'गृहपृष्ठ'}
                </a>
              </li>
              <li>
                <a href="#owner" className="hover:text-amber-400 transition-colors">
                  {lang === 'en' ? 'Proprietor Profile (Owner)' : 'सञ्चालक परिचय'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  {lang === 'en' ? 'Photo Gallery' : 'फोटो ग्यालरी'}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  {lang === 'en' ? 'Brick & Cost Calculator' : 'लागत हिसाब क्यालकुलेटर'}
                </a>
              </li>
              <li>
                <a href="#video" className="hover:text-amber-400 transition-colors">
                  {lang === 'en' ? 'Truck Dispatch Video' : 'गाडी लोड भिडियो'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  {lang === 'en' ? 'Contact & Location' : 'सम्पर्क र ठेगाना'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Numbers */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              {lang === 'en' ? 'Factory Hotlines' : 'सम्पर्क फोन नम्बरहरू'}
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div>
                <span className="text-stone-400 block">{lang === 'en' ? `Proprietor: ${FACTORY_INFO.ownerNameEn} (Orders):` : `सञ्चालक: ${FACTORY_INFO.ownerNameNe} (अर्डर):`}</span>
                <a
                  href={`tel:+977${FACTORY_INFO.primaryPhone}`}
                  className="text-lg font-bold text-white hover:text-amber-400 transition-colors"
                >
                  +977 {FACTORY_INFO.primaryPhone}
                </a>
              </div>
              <div>
                <span className="text-stone-400 block">{lang === 'en' ? 'Secondary Helpline:' : 'थप सम्पर्क नम्बर:'}</span>
                <a
                  href={`tel:+977${FACTORY_INFO.secondaryPhone}`}
                  className="text-sm font-semibold text-stone-200 hover:text-amber-400 transition-colors"
                >
                  +977 {FACTORY_INFO.secondaryPhone}
                </a>
              </div>
              <div className="pt-2 flex items-start gap-2 text-stone-400">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <a
                  href={FACTORY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  {lang === 'en' ? FACTORY_INFO.locationEn : FACTORY_INFO.locationNe} 📍 ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {FACTORY_INFO.nameEn}. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-stone-400">
            {lang === 'en'
              ? `Est. ${FACTORY_INFO.establishedBs} · Sukhupur-3, Siraha, Nepal`
              : `स्थापना वि.सं. ${FACTORY_INFO.establishedNe} · सुखुपुर-३, सिराहा, नेपाल`}
          </div>
        </div>
      </div>
    </footer>
  );
};
