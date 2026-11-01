import React, { useState, useId } from 'react';
import { Phone, MessageSquare, MapPin, Send, CheckCircle2, Clock, Truck, ShieldCheck } from 'lucide-react';
import { FACTORY_INFO, SERVICE_REGIONS } from '../data/content';

interface ContactSectionProps {
  lang: 'en' | 'ne';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brickType: 'No. 1 Red Brick (१ नम्बर)',
    quantity: '5,000 Bricks',
    location: 'Siraha / Sukhupur',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const nameId = useId();
  const phoneId = useId();
  const brickTypeId = useId();
  const quantityId = useId();
  const locationId = useId();
  const messageId = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `*Inquiry for SHIV GANESH ITA UDHOG*%0A` +
      `--------------------------------%0A` +
      `• *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `• *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `• *Brick Grade:* ${encodeURIComponent(formData.brickType)}%0A` +
      `• *Quantity:* ${encodeURIComponent(formData.quantity)}%0A` +
      `• *Delivery Location:* ${encodeURIComponent(formData.location)}%0A` +
      (formData.message ? `• *Note:* ${encodeURIComponent(formData.message)}%0A` : '') +
      `--------------------------------%0A` +
      `_Sent via official website inquiry form_`;

    setSubmitted(true);
    // Open in WhatsApp to the proprietor's number
    window.open(`https://wa.me/${FACTORY_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#B43A2B] text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Get In Touch' : 'सम्पर्क गर्नुहोस्'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            {lang === 'en' ? 'Direct Factory Orders & Inquiries' : 'सिधै उद्योगबाट ईटा अर्डर गर्नुहोस्'}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            {lang === 'en'
              ? 'Connect directly with our owner and dispatch team. We supply builders, institutions, and homeowners across Siraha and Udayapur.'
              : 'कुनै पनि सोधपुछ वा अर्डरका लागि सिधै सञ्चालकलाई फोन गर्नुहोस् वा तलको फारम मार्फत ह्वाट्सएपमा सन्देश पठाउनुहोस्।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Card */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-stone-200 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B43A2B]/10 text-[#B43A2B] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    {lang === 'en' ? `Proprietor: ${FACTORY_INFO.ownerNameEn}` : `सञ्चालक: ${FACTORY_INFO.ownerNameNe}`}
                  </div>
                  <div className="space-y-1 mt-1">
                    <a
                      href={`tel:+977${FACTORY_INFO.primaryPhone}`}
                      className="text-2xl font-black text-[#B43A2B] hover:underline block"
                    >
                      {FACTORY_INFO.primaryPhone}
                    </a>
                    <a
                      href={`tel:+977${FACTORY_INFO.secondaryPhone}`}
                      className="text-xl font-bold text-stone-800 hover:text-[#B43A2B] hover:underline block"
                    >
                      {FACTORY_INFO.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-stone-100 text-xs text-stone-600">
                <div className="flex items-center justify-between">
                  <span>{lang === 'en' ? 'Direct Hotline 1:' : 'सम्पर्क नम्बर १:'}</span>
                  <a href={`tel:+977${FACTORY_INFO.primaryPhone}`} className="font-bold text-stone-800 hover:underline">
                    {FACTORY_INFO.primaryPhone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>{lang === 'en' ? 'Direct Hotline 2:' : 'सम्पर्क नम्बर २:'}</span>
                  <a href={`tel:+977${FACTORY_INFO.secondaryPhone}`} className="font-bold text-stone-800 hover:underline">
                    {FACTORY_INFO.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <a
                  href={`tel:+977${FACTORY_INFO.primaryPhone}`}
                  className="py-2.5 px-3 rounded-xl bg-[#B43A2B] text-white text-xs font-bold text-center hover:bg-[#972a1e] transition-colors flex items-center justify-center gap-1"
                >
                  <Phone className="w-3 h-3 text-amber-300" />
                  <span>{FACTORY_INFO.primaryPhone}</span>
                </a>
                <a
                  href={`tel:+977${FACTORY_INFO.secondaryPhone}`}
                  className="py-2.5 px-3 rounded-xl bg-stone-800 text-white text-xs font-bold text-center hover:bg-stone-700 transition-colors flex items-center justify-center gap-1"
                >
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>{FACTORY_INFO.secondaryPhone}</span>
                </a>
                <a
                  href={`https://wa.me/${FACTORY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#20bd66] text-white text-xs font-bold text-center hover:bg-[#1a9f55] transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-stone-200 shadow-md space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    {lang === 'en' ? 'Factory Location' : 'उद्योगको ठेगाना'}
                  </div>
                  <div className="text-lg font-black text-stone-900">
                    {lang === 'en' ? FACTORY_INFO.locationEn : FACTORY_INFO.locationNe}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      ★ 4.7 (3 Reviews)
                    </span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {lang === 'en' ? 'Open 24 Hours' : '२४ घण्टा खुला'}
                    </span>
                  </div>
                  <div className="text-xs text-stone-500 mt-2">
                    {lang === 'en'
                      ? 'Located at Kushaha Laxminiya / Sukhupur-3, Siraha. Accessible for heavy trucks, tippers, and tractors.'
                      : 'कुशाहा लक्ष्मिनिया / सुखुपुर-३, सिराहा। ठूला ट्रक, ट्रयाक्टर र टिपरका लागि सहज बाटो।'}
                  </div>
                  <a
                    href={FACTORY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 px-3.5 py-2 rounded-lg bg-red-50 hover:bg-red-100 text-[#B43A2B] border border-red-200 text-xs font-bold transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#B43A2B]" />
                    <span>{lang === 'en' ? 'Open Exact Location on Google Maps 📍' : 'गुगल म्यापमा ठ्याक्कै स्थान हेर्नुहोस् 📍'}</span>
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 text-xs">
                <span className="font-bold text-stone-700 block mb-2">
                  {lang === 'en' ? 'Serving Regular Delivery Zones:' : 'नियमित ढुवानी हुने क्षेत्रहरू:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {SERVICE_REGIONS.map((region, i) => (
                    <span key={i} className="px-2 py-1 rounded-md bg-stone-100 text-stone-700 text-[11px]">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-200 shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-stone-900">
                {lang === 'en' ? 'Send Instant Booking Inquiry' : 'ईटा बुकिङ्ग सोधपुछ फारम'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                {lang === 'en'
                  ? 'Fill your requirements below. Clicking submit will directly open WhatsApp with your formatted order summary.'
                  : 'विवरण भर्नुहोस् र पठाउनुहोस् क्लिक गर्दा सोझै सञ्चालकको ह्वाट्सएपमा अर्डर पुग्नेछ।'}
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-900 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  {lang === 'en'
                    ? 'Inquiry created! Opening WhatsApp now to connect with the owner.'
                    : 'तपाईंको सोधपुछ तयार भयो! सञ्चालकसँग कुराकानी गर्न WhatsApp खुल्दैछ।'}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={nameId} className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'en' ? 'Full Name *' : 'तपाईंको नाम *'}
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    required
                    placeholder={lang === 'en' ? 'e.g. Ramesh Sah' : 'उदा: रमेश साह'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#B43A2B] text-sm text-stone-800"
                  />
                </div>
                <div>
                  <label htmlFor={phoneId} className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'en' ? 'Phone Number *' : 'फोन नम्बर *'}
                  </label>
                  <input
                    id={phoneId}
                    type="tel"
                    required
                    placeholder="98XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#B43A2B] text-sm text-stone-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={brickTypeId} className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'en' ? 'Select Brick Grade' : 'ईटाको प्रकार'}
                  </label>
                  <select
                    id={brickTypeId}
                    value={formData.brickType}
                    onChange={(e) => setFormData({ ...formData, brickType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#B43A2B] text-sm text-stone-800 bg-white"
                  >
                    <option value="No. 1 Red Brick (१ नम्बर - Class A)">No. 1 Super Red Brick (१ नम्बर ईटा)</option>
                    <option value="No. 2 Standard Brick (२ नम्बर)">No. 2 Standard Brick (२ नम्बर ईटा)</option>
                    <option value="No. 3 Foundation Brick (३ नम्बर)">No. 3 Soling / Foundation Brick (३ नम्बर)</option>
                    <option value="Bulk Project Requirement">Bulk Commercial Project (ठूलो परियोजना)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={quantityId} className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'en' ? 'Estimated Quantity' : 'अनुमानित परिमाण'}
                  </label>
                  <select
                    id={quantityId}
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#B43A2B] text-sm text-stone-800 bg-white"
                  >
                    <option value="2,500 Bricks (1 Tractor)">2,500 Bricks (१ ट्रयाक्टर लोड)</option>
                    <option value="5,000 Bricks (1 Truck)">5,000 Bricks (१ ट्रक लोड)</option>
                    <option value="10,000 Bricks (2 Trucks)">10,000 Bricks (२ ट्रक लोड)</option>
                    <option value="20,000+ Bricks (Bulk)">20,000+ Bricks (थोक आवश्यकता)</option>
                    <option value="Need Advice / Calculation">Need Consultation (थप सल्लाह आवश्यक)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor={locationId} className="block text-xs font-bold text-stone-700 mb-1">
                  {lang === 'en' ? 'Construction Site / Delivery Location' : 'डेलिभरी ठेगाना'}
                </label>
                <input
                  id={locationId}
                  type="text"
                  required
                  placeholder={lang === 'en' ? 'e.g. Sukhupur, Siraha, Gaighat, Lahan' : 'उदा: सुखुपुर, सिराहा, गाईघाट, लहान'}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#B43A2B] text-sm text-stone-800"
                />
              </div>

              <div>
                <label htmlFor={messageId} className="block text-xs font-bold text-stone-700 mb-1">
                  {lang === 'en' ? 'Additional Notes / Questions' : 'थप विवरण वा सन्देश (ऐच्छिक)'}
                </label>
                <textarea
                  id={messageId}
                  rows={3}
                  placeholder={lang === 'en' ? 'Tell us about your building schedule, access road, or specific requirements...' : 'साइटको बाटो, डेलिभरी समय वा अन्य केही सोध्न चाहनुहुन्छ भने लेख्नुहोस्...'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#B43A2B] text-sm text-stone-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#20bd66] hover:bg-[#1a9f55] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>
                  {lang === 'en'
                    ? `Submit Inquiry via WhatsApp (Owner: ${FACTORY_INFO.ownerNameEn} · 9804758926)`
                    : `ह्वाट्सएप मार्फत अर्डर पठाउनुहोस् (सञ्चालक: ${FACTORY_INFO.ownerNameNe} · ९८०४७५८९२६)`}
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-14 rounded-3xl overflow-hidden border border-stone-200 shadow-xl bg-white p-2">
          <div className="p-4 bg-stone-50 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <span>Shiv ganesh Ita Udhog · Kushaha Laxminiya / Sukhupur-3, Siraha</span>
              </span>
              <div className="text-[11px] text-stone-500 mt-0.5 flex items-center gap-2">
                <span className="text-amber-600 font-bold">★ 4.7 (Google Business Profile)</span>
                <span>·</span>
                <span className="text-emerald-700 font-medium">Open 24 Hours</span>
              </div>
            </div>
            <a
              href={FACTORY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#B43A2B] text-white font-bold text-xs hover:bg-[#972a1e] transition-colors shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>{lang === 'en' ? 'Open in Google Maps 📍' : 'गुगल म्यापमा ठ्याक्कै स्थान 📍'}</span>
              <span>↗</span>
            </a>
          </div>
          <iframe
            title="Shiv Ganesh Ita Udhog Location Map Kushaha Laxminiya Siraha"
            src="https://www.google.com/maps?q=Shiv+ganesh+Ita+Udhog%2C+Kushahalaxminiya%2C+Siraha%2C+Nepal&output=embed"
            className="w-full h-[320px] sm:h-[400px] border-0 rounded-2xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};
