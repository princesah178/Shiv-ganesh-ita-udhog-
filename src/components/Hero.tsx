import React from 'react';
import { Phone, MessageSquare, Calculator, ShieldCheck, Flame, Truck, Award, Sparkles, Building2 } from 'lucide-react';
import { FACTORY_INFO } from '../data/content';

interface HeroProps {
  lang: 'en' | 'ne';
  onOpenCalculator: () => void;
  onOpenOwner: () => void;
  onOpenGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenCalculator, onOpenOwner, onOpenGallery }) => {
  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[660px] flex items-center overflow-hidden bg-stone-950 text-white">
      {/* Premium dark industrial terracotta architectural background (no image here - strictly following user instruction) */}
      <div className="absolute inset-0 z-0 bg-radial from-[#35100B] via-stone-950 to-stone-950" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 60px)`,
        }}
      />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#B43A2B]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6">
            {/* Editorial established kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>
                {lang === 'en'
                  ? `Est. ${FACTORY_INFO.establishedBs} (${FACTORY_INFO.establishedAd})`
                  : `स्थापना वि.सं. ${FACTORY_INFO.establishedNe}`}
              </span>
              <span className="text-stone-500">·</span>
              <span className="text-stone-200">
                {lang === 'en' ? FACTORY_INFO.locationEn : FACTORY_INFO.locationNe}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-white">
              {lang === 'en' ? (
                <>
                  Strong, Quality Bricks for <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-200 to-amber-400">
                    Lasting Foundations.
                  </span>
                </>
              ) : (
                <>
                  मजबुत ईंट, भरपर्दो निर्माण <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-200 to-amber-400">
                    पुस्तौंपुस्ता टिक्ने संरचना।
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
              {lang === 'en'
                ? `Welcome to SHIV GANESH ITA UDHOG (शिव गणेश ईटा उद्योग) in Sukhupur-3, Siraha. We produce premium kiln-baked red clay bricks tested for heavy load bearing, superior ringing sound, and zero moisture seepage for residential and infrastructure construction across Siraha, Gaighat, and Madhesh.`
                : `शिव गणेश ईटा उद्योग, सुखुपुर-३, सिराहामा यहाँलाई स्वागत छ। हामी उच्च गुणस्तरको रातो माटोबाट बनेको, टिन जस्तो टन्टन आवाज आउने, भारवहन क्षमता भएको १ नम्बर र निर्माण ईंटहरू उत्पादन तथा आपूर्ति गर्दछौं।`}
            </p>

            {/* Direct Contact & Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={`tel:+977${FACTORY_INFO.primaryPhone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#B43A2B] hover:bg-[#972d20] text-white font-bold text-sm shadow-lg shadow-red-950/50 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>
                  {lang === 'en' ? `Call: ${FACTORY_INFO.primaryPhone}` : `कल: ${FACTORY_INFO.primaryPhone}`}
                </span>
              </a>

              <a
                href={`tel:+977${FACTORY_INFO.secondaryPhone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white border border-stone-700 font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>
                  {lang === 'en' ? `Call: ${FACTORY_INFO.secondaryPhone}` : `कल: ${FACTORY_INFO.secondaryPhone}`}
                </span>
              </a>

              <a
                href={`https://wa.me/${FACTORY_INFO.whatsappNumber}?text=Namaste,%20I%20want%20to%20inquire%20about%20brick%20pricing%20and%20delivery%20from%20Shiv%20Ganesh%20Ita%20Udhog.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#20bd66] hover:bg-[#1caa59] text-white font-bold text-sm shadow-lg shadow-emerald-950/40 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'en' ? 'WhatsApp Order' : 'ह्वाट्सएप अर्डर'}</span>
              </a>

              <button
                type="button"
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-lg bg-stone-900/90 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 font-semibold text-sm backdrop-blur-md transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>{lang === 'en' ? 'Calculate Bricks' : 'ईटा हिसाब क्यालकुलेटर'}</span>
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="flex items-center gap-2 text-stone-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{lang === 'en' ? 'Class-A Strength Tested' : 'क्लास-ए उच्च शक्ति'}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Flame className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{lang === 'en' ? '1000°C Uniform Kiln Fired' : 'पूर्ण पाकेको रातो ईटा'}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'en' ? 'Fast Truck/Tractor Delivery' : 'सिराहा र गाईघाट डेलिभरी'}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{lang === 'en' ? 'Genuine Brand Stamp' : 'ओरिजिनल गणेश छाप'}</span>
              </div>
            </div>
          </div>

          {/* Quick Info Card Spotlight */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl bg-stone-900/90 border border-stone-700/80 p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    {lang === 'en' ? 'Factory Verification' : 'उद्योग विवरण'}
                  </span>
                  <div className="text-lg font-extrabold text-white">
                    {lang === 'en' ? 'Direct From Kiln' : 'भट्टाबाट सिधै आपूर्ति'}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Founder Reference Box (Clean typographic design, image is in dedicated Owner section below) */}
              <div className="mt-4 p-4 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  {lang === 'en' ? 'Proprietor & Founder' : 'उद्योग सञ्चालक'}
                </div>
                <div className="text-lg font-black text-white mt-0.5">
                  {lang === 'en' ? FACTORY_INFO.ownerNameEn : FACTORY_INFO.ownerNameNe}
                </div>
                <div className="text-xs font-semibold text-stone-300">
                  {lang === 'en' ? 'Shiv Ganesh Ita Udhog' : 'शिव गणेश ईटा उद्योग'}
                </div>
                <div className="text-xs text-stone-400 mt-0.5">
                  {lang === 'en' ? `Established ${FACTORY_INFO.establishedBs} · Sukhupur-3, Siraha` : `स्थापना: ${FACTORY_INFO.establishedNe} · सुखुपुर-३, सिराहा`}
                </div>
                <button
                  type="button"
                  onClick={onOpenOwner}
                  className="mt-3 text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>{lang === 'en' ? 'View Founder Introduction' : 'सञ्चालकको परिचय हेर्नुहोस्'}</span>
                  <span>→</span>
                </button>
              </div>

              <div className="mt-4 space-y-2.5 text-xs text-stone-300">
                <div className="flex justify-between py-1.5 border-b border-stone-800/60">
                  <span className="text-stone-400">{lang === 'en' ? 'Primary Hotline' : 'सम्पर्क नम्बर'}</span>
                  <a href={`tel:+977${FACTORY_INFO.primaryPhone}`} className="font-bold text-amber-300 hover:underline">
                    {FACTORY_INFO.primaryPhone}
                  </a>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-800/60">
                  <span className="text-stone-400">{lang === 'en' ? 'Secondary Contact' : 'थप सम्पर्क'}</span>
                  <a href={`tel:+977${FACTORY_INFO.secondaryPhone}`} className="font-semibold text-stone-200 hover:underline">
                    {FACTORY_INFO.secondaryPhone}
                  </a>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-stone-400">{lang === 'en' ? 'Location' : 'ठेगाना'}</span>
                  <a
                    href={FACTORY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-amber-300 hover:underline flex items-center gap-1"
                  >
                    <span>{lang === 'en' ? FACTORY_INFO.locationEn : FACTORY_INFO.locationNe}</span>
                    <span>📍</span>
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenGallery}
                className="mt-5 w-full py-2.5 px-4 rounded-lg bg-[#B43A2B] hover:bg-[#972a1e] text-white font-semibold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{lang === 'en' ? 'Explore Factory & Brick Images' : 'भट्टा तथा ईटाका सबै तस्विरहरू हेर्नुहोस्'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
