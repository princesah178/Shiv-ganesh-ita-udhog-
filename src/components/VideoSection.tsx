import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Truck, Phone, MessageSquare, CheckCircle, MapPin } from 'lucide-react';
import { FACTORY_INFO } from '../data/content';

interface VideoSectionProps {
  lang: 'en' | 'ne';
}

export const VideoSection: React.FC<VideoSectionProps> = ({ lang }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="video" className="py-20 lg:py-24 bg-stone-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Video Player Column */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden border-2 border-stone-800 shadow-2xl bg-stone-900 aspect-9/16 sm:aspect-auto sm:h-[580px]">
              <video
                ref={videoRef}
                src={FACTORY_INFO.videoUrl}
                playsInline
                loop
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
              />

              {/* Overlay controls */}
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/90 via-transparent to-stone-950/40 pointer-events-none" />

              {/* Center Play Button if paused */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Play factory video"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#B43A2B] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                >
                  <Play className="w-8 h-8 ml-1 fill-white" />
                </button>
              )}

              {/* Top Bar with Status */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-amber-400 text-xs font-bold border border-amber-500/30">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>{lang === 'en' ? 'Live Dispatch' : 'प्रत्यक्ष गाडी लोड'}</span>
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-stone-900/80 backdrop-blur-md text-white hover:bg-stone-800 transition-colors cursor-pointer"
                    aria-label="Toggle mute"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={handleFullscreen}
                    className="p-2 rounded-full bg-stone-900/80 backdrop-blur-md text-white hover:bg-stone-800 transition-colors cursor-pointer"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bottom Video Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-stone-900/90 backdrop-blur-md border border-stone-800 pointer-events-auto">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Gaighat & Siraha Regional Supply</span>
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  Shiv Ganesh Ita Udhog · Sukhupur-3
                </div>
                <div className="flex items-center justify-between text-xs text-stone-400 mt-2 pt-2 border-t border-stone-800">
                  <span>Factory hotline:</span>
                  <a href={`tel:+977${FACTORY_INFO.primaryPhone}`} className="text-amber-400 font-bold hover:underline">
                    {FACTORY_INFO.primaryPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Video Description & Dispatch Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800/90 text-amber-400 text-xs font-bold uppercase tracking-wider border border-stone-700">
              <Truck className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Live Operations in Action' : 'भट्टाबाट प्रत्यक्ष लोड'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {lang === 'en' ? (
                <>Daily Truck & Tractor Dispatch to Gaighat and Siraha</>
              ) : (
                <>गाईघाट, सिराहा लगायतका ठाउँमा निरन्तर ईटा ढुवानी</>
              )}
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {lang === 'en'
                ? `See our skilled workforce loading finished Grade 1 and Grade 3 bricks onto high-capacity delivery trucks. From foundation soling bricks to structural red bricks, we ensure swift transit straight from our Sukhupur kiln yard to your construction site.`
                : `सुखुपुरस्थित शिव गणेश ईटा उद्योगबाट गाईघाट, सिराहा, लहान, मिर्चैया लगायतका विभिन्न गन्तव्यका लागि सिधै ट्रक तथा ट्रयाक्टरमा ईटाहरू लोड गरिन्छ। सुरक्षित गन्ती र भरपर्दो डेलिभरी हाम्रो प्राथमिकता हो।`}
            </p>

            {/* Logistics Highlights */}
            <div className="space-y-3 text-xs sm:text-sm text-stone-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {lang === 'en'
                    ? 'Same-day or next-day loading schedules for bulk truck orders'
                    : 'थोक अर्डरका लागि सोही दिन वा भोलिपल्टै गाडी लोड'}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {lang === 'en'
                    ? 'Proper hand-stacking inside truck beds to prevent transit breakage'
                    : 'ढुवानीमा ईटा नफुट्ने गरी सुरक्षित तवरले लोड गरिने'}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {lang === 'en'
                    ? 'Dedicated dispatch phone line for transport drivers and contractors'
                    : 'चालक र ठेकेदारका लागि सिधै गाडी लोड सम्पर्क लाइन'}
                </span>
              </div>
            </div>

            {/* Quick Dispatch Contacts */}
            <div className="pt-4 border-t border-stone-800 space-y-3">
              <div className="text-xs text-stone-400">
                {lang === 'en' ? 'Book a truck or tractor load today:' : 'आजै गाडी बुक गर्नुहोस्:'}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:+977${FACTORY_INFO.primaryPhone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#B43A2B] hover:bg-[#962a1d] text-white font-bold text-xs shadow-md transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-300" />
                  <span>{lang === 'en' ? `Call Owner: ${FACTORY_INFO.primaryPhone}` : `सञ्चालक: ${FACTORY_INFO.primaryPhone}`}</span>
                </a>

                <a
                  href={`tel:+977${FACTORY_INFO.secondaryPhone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs border border-stone-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'en' ? `Tel: ${FACTORY_INFO.secondaryPhone}` : `सम्पर्क: ${FACTORY_INFO.secondaryPhone}`}</span>
                </a>

                <a
                  href={`https://wa.me/${FACTORY_INFO.whatsappNumber}?text=Namaste,%20I%20saw%20your%20factory%20dispatch%20video%20and%20want%20to%20order%20truckloads%20for%20delivery.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#20bd66] hover:bg-[#1a9f55] text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
