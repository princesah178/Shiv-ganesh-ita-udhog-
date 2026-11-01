import React, { useState } from 'react';
import { Eye, Image as ImageIcon, Sparkles, Filter, ShieldCheck, MessageSquare, Phone } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, FACTORY_INFO } from '../data/content';

interface GallerySectionProps {
  lang: 'en' | 'ne';
  onSelectImage: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang, onSelectImage }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', labelEn: 'All Photos', labelNe: 'सबै तस्विरहरू' },
    { id: 'Bricks & Products', labelEn: 'Stamped Bricks', labelNe: 'गणेश छाप ईटा' },
    { id: 'Kiln & Factory', labelEn: 'Kiln & Chimney', labelNe: 'चिम्नी र भट्टा' },
    { id: 'Puja & Heritage', labelEn: 'Puja & Rituals', labelNe: 'पूजा संस्कार' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.categoryEn === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#B43A2B] text-xs font-bold uppercase tracking-wider mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Factory & Brick Image Gallery' : 'उद्योग तथा ईटा फोटो ग्यालरी'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            {lang === 'en' ? 'Authentic Factory Showcase' : 'शिव गणेश ईटा उद्योग — फोटो संकलन'}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            {lang === 'en'
              ? 'Real, high-definition photographs of our Sukhupur factory grounds, towering kiln chimney, sacred rituals, and signature stamped bricks.'
              : 'सुखुपुरस्थित उद्योगको अग्लो चिम्नी, पाकेको ईटामा अंकित ओरिजिनल गणेश छाप, भट्टा च्याम्बर र पूजा संस्कारका वास्तविक तस्विरहरू।'}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setActiveFilter(opt.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === opt.id
                  ? 'bg-[#B43A2B] text-white shadow-md'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {lang === 'en' ? opt.labelEn : opt.labelNe}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => {
            const isFeatured = item.id === 'brick-stamp';
            return (
              <div
                key={item.id}
                onClick={() => onSelectImage(item)}
                className={`group relative rounded-3xl overflow-hidden bg-white border transition-all duration-300 cursor-pointer flex flex-col ${
                  isFeatured
                    ? 'border-[#B43A2B] ring-2 ring-[#B43A2B]/20 shadow-xl md:col-span-2 lg:col-span-1'
                    : 'border-stone-200 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Photo container */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-900">
                  <img
                    src={item.src}
                    alt={lang === 'en' ? item.titleEn : item.titleNe}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/95 text-stone-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Eye className="w-5 h-5 text-[#B43A2B]" />
                    </div>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-stone-950/85 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-md">
                    {lang === 'en' ? item.categoryEn : item.categoryNe}
                  </div>

                  {isFeatured && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-stone-950 text-[11px] font-black px-2.5 py-1 rounded-md shadow-md">
                      {lang === 'en' ? 'Brand Mark: गणेश' : 'ओरिजिनल गणेश छाप'}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-stone-900 text-lg group-hover:text-[#B43A2B] transition-colors leading-snug">
                      {lang === 'en' ? item.titleEn : item.titleNe}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {lang === 'en' ? item.descriptionEn : item.descriptionNe}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#B43A2B] flex items-center gap-1">
                      <span>{lang === 'en' ? 'View Fullscreen' : 'ठूलो तस्विर हेर्नुहोस्'}</span>
                      <span>↗</span>
                    </span>

                    <span className="text-stone-400 text-[11px]">
                      Shiv Ganesh Ita Udhog
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Banner within Gallery */}
        <div className="mt-14 rounded-2xl bg-[#FAF7F2] border border-stone-300/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#B43A2B]/10 text-[#B43A2B] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-black text-stone-900 text-lg sm:text-xl">
                {lang === 'en' ? 'Looking for bulk supply for your project?' : 'तपाईंको निर्माणको लागि थोक ईटा चाहिन्छ?'}
              </div>
              <div className="text-xs text-stone-600 mt-0.5">
                {lang === 'en'
                  ? 'Contact our proprietor directly for immediate truck and tractor dispatch schedules.'
                  : 'सिधै सञ्चालकलाई फोन गरी आजै गाडी लोड र मूल्य सम्झौता गर्नुहोस्।'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:+977${FACTORY_INFO.primaryPhone}`}
              className="px-5 py-3 rounded-lg bg-[#B43A2B] hover:bg-[#972a1e] text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>{FACTORY_INFO.primaryPhone}</span>
            </a>
            <a
              href={`https://wa.me/${FACTORY_INFO.whatsappNumber}?text=Namaste,%20I%20am%20interested%20in%20ordering%20bricks%20from%20Shiv%20Ganesh%20Ita%20Udhog.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-lg bg-[#20bd66] hover:bg-[#1a9f55] text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
