/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OwnerSection } from './components/OwnerSection';
import { GallerySection } from './components/GallerySection';
import { BrickCalculator } from './components/BrickCalculator';
import { VideoSection } from './components/VideoSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ImageLightbox } from './components/ImageLightbox';
import { FloatingActions } from './components/FloatingActions';
import { GalleryItem, PRODUCTS } from './data/content';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ne'>('ne'); // Default to Nepali for local authenticity
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
    description?: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: '',
    description: '',
  });

  const handleOpenCalculator = () => {
    const elem = document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenOwner = () => {
    const elem = document.getElementById('owner');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGallery = () => {
    const elem = document.getElementById('gallery');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectGalleryImage = (item: GalleryItem) => {
    setLightboxData({
      isOpen: true,
      imageSrc: item.src,
      title: lang === 'en' ? item.titleEn : item.titleNe,
      description: lang === 'en' ? item.descriptionEn : item.descriptionNe,
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 flex flex-col font-sans selection:bg-[#B43A2B] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Overview */}
        <Hero
          lang={lang}
          onOpenCalculator={handleOpenCalculator}
          onOpenOwner={handleOpenOwner}
          onOpenGallery={handleOpenGallery}
        />

        {/* 2. Owner & Leadership Profile (Dedicated Person Profile Picture & Introduction outside gallery) */}
        <OwnerSection lang={lang} />

        {/* 3. Comprehensive Image Section (All factory, stamped brick, kiln, and puja images) */}
        <GallerySection
          lang={lang}
          onSelectImage={handleSelectGalleryImage}
        />

        {/* 4. Interactive Brick & Cost Calculator */}
        <BrickCalculator
          lang={lang}
        />

        {/* 5. Authentic Factory Operations Video */}
        <VideoSection lang={lang} />

        {/* 6. Contact Form, Hotlines, Google Map */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxData.isOpen}
        onClose={() => setLightboxData((prev) => ({ ...prev, isOpen: false }))}
        imageSrc={lightboxData.imageSrc}
        title={lightboxData.title}
        description={lightboxData.description}
        lang={lang}
      />

      {/* Floating Call & WhatsApp Bar */}
      <FloatingActions lang={lang} />
    </div>
  );
}
