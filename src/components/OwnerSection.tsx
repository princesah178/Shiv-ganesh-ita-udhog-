import React from 'react';
import { Phone, MessageSquare, Award, Calendar, CheckCircle2, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { FACTORY_INFO } from '../data/content';

interface OwnerSectionProps {
  lang: 'en' | 'ne';
}

export const OwnerSection: React.FC<OwnerSectionProps> = ({ lang }) => {
  return (
    <section id="owner" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>{lang === 'en' ? 'Leadership & Vision' : 'उद्योग नेतृत्व'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            {lang === 'en' ? (
              <>Meet the Owner & Founder</>
            ) : (
              <>उद्योगका सञ्चालक तथा संस्थापक</>
            )}
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            {lang === 'en'
              ? `Founded in 2080 B.S. in Sukhupur-3, Siraha with a vision to deliver unmatched structural durability, honest pricing, and personal accountability for every brick that leaves our kiln.`
              : `वि.सं. २०८० मा सुखुपुर-३, सिराहामा स्थापना भएको यस उद्योगले उच्च गुणस्तर र इमान्दारिताका साथ गुणस्तरीय ईंट उत्पादन गर्दै आएको छ।`}
          </p>
        </div>

        {/* Owner Profile Card */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative bg-stone-900 overflow-hidden h-[450px] sm:h-[520px] lg:h-full min-h-[460px]">
              <img
                src={FACTORY_INFO.ownerImage}
                alt="Proprietor of Shiv Ganesh Ita Udhog"
                className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/85 via-stone-950/20 to-transparent lg:hidden" />
              
              {/* Badges on mobile overlay */}
              <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#B43A2B] text-white text-xs font-bold uppercase tracking-wider mb-1">
                  {lang === 'en' ? 'Proprietor & Founder' : 'संस्थापक तथा सञ्चालक'}
                </span>
                <div className="text-xl font-black text-white">{lang === 'en' ? FACTORY_INFO.ownerNameEn : FACTORY_INFO.ownerNameNe}</div>
                <div className="text-xs text-amber-300 font-medium">Shiv Ganesh Ita Udhog · Est. 2080 B.S.</div>
              </div>

              {/* Decorative Corner Label on Desktop */}
              <div className="hidden lg:block absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-stone-950/85 backdrop-blur-md border border-stone-800 text-white">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {lang === 'en' ? 'Direct Founder Guarantee' : 'सञ्चालकको प्रतिबद्धता'}
                </div>
                <div className="text-sm font-medium text-stone-200 mt-1">
                  {lang === 'en'
                    ? '"Every brick bearing our stamp represents our personal name and honesty."'
                    : '"हाम्रो छाप लागेको प्रत्येक ईटाले हाम्रो इमान्दारिता र गुणस्तरको ग्यारेन्टी दिन्छ।"'}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-[#B43A2B]/10 text-[#B43A2B] text-xs font-black uppercase tracking-wider">
                    {lang === 'en' ? FACTORY_INFO.ownerTitleEn : FACTORY_INFO.ownerTitleNe}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-stone-500">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    {lang === 'en' ? `Established ${FACTORY_INFO.establishedBs}` : `स्थापना: ${FACTORY_INFO.establishedNe}`}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
                  {lang === 'en' ? FACTORY_INFO.ownerNameEn : FACTORY_INFO.ownerNameNe}
                </h3>
                <div className="text-sm font-bold text-[#B43A2B]">
                  {lang === 'en' ? 'Proprietor & Founder, Shiv Ganesh Ita Udhog' : 'संस्थापक तथा सञ्चालक, शिव गणेश ईटा उद्योग'}
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-600 font-medium pt-1">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{lang === 'en' ? FACTORY_INFO.locationEn : FACTORY_INFO.locationNe}</span>
                </div>
              </div>

              <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
                <p>
                  {lang === 'en' ? (
                    <>
                      Under the dedicated leadership of <strong>Kaplesh Sah</strong>, <strong>Shiv Ganesh Ita Udhog</strong> was established in <strong>2080 B.S.</strong> in Sukhupur-3, Siraha with an uncompromising standard: to produce the hardest, best-fired red clay bricks in the region. Guided by direct personal oversight over raw soil quality, skilled hand-molding, sun-curing, and uniform chimney kiln firing.
                    </>
                  ) : (
                    <>
                      सञ्चालक <strong>कपलेश साह</strong>को प्रत्यक्ष नेतृत्वमा <strong>शिव गणेश ईटा उद्योग</strong>को स्थापना <strong>वि.सं. २०८०</strong> मा सुखुपुर, सिराहामा गरिएको हो। स्थानीय माटोको उपयुक्त छनोट, कुशल कारीगरद्वारा बनाइने काँचो ईंट र वैज्ञानिक चिम्नी भट्टामा उचित तापक्रममा पकाएर हामी निर्माणकर्ता, ठेकेदार तथा घरधनीहरूलाई १ नम्बर ईटा उपलब्ध गराउँदै आएका छौं।
                    </>
                  )}
                </p>
                <p>
                  {lang === 'en' ? (
                    <>
                      Whether you are constructing a private residence, educational institution, hospital, or commercial complex in <strong>Siraha Bazaar, Gaighat, Lahan, Mirchaiya, or Golbazar</strong>, you can contact proprietor <strong>Kaplesh Sah</strong> directly for bulk pricing, immediate site inspection, and scheduled tractor or truck delivery.
                    </>
                  ) : (
                    <>
                      सिराहा, गाईघाट, लहान, मिर्चैया लगायतका विभिन्न क्षेत्रमा भवन, विद्यालय, अस्पताल तथा अन्य भौतिक पूर्वाधार निर्माणका लागि आवश्यक पर्ने ईंटको अर्डर र सोधपुछका लागि सञ्चालक <strong>कपलेश साह</strong>लाई सिधै सम्पर्क गर्न सक्नुहुनेछ।
                    </>
                  )}
                </p>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-stone-800">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B43A2B] shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Direct Factory Gate Wholesale Rates' : 'भट्टाबाटै सिधै थोक मूल्य'}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B43A2B] shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'No Middleman Extra Commission' : 'बिचौलिया विना सोझै कारोबार'}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B43A2B] shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Exact Brick Count Delivery Guarantee' : 'सटीक गन्ती र सुरक्षित ढुवानी'}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B43A2B] shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Tractor & Truck Dispatch Service' : 'ट्रयाक्टर तथा ट्रक लोड सेवा'}</span>
                </div>
              </div>

              {/* Direct Phone & Contact Bar */}
              <div className="pt-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-stone-500 font-bold uppercase tracking-wider mb-1">
                    {lang === 'en' ? 'Direct Contact Numbers' : 'सिधा सम्पर्क नम्बरहरू'}
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:+977${FACTORY_INFO.primaryPhone}`}
                      className="text-2xl sm:text-3xl font-black text-[#B43A2B] hover:text-[#8f2115] tracking-tight"
                    >
                      {FACTORY_INFO.primaryPhone}
                    </a>
                    <span className="text-stone-300 font-bold hidden sm:inline">|</span>
                    <a
                      href={`tel:+977${FACTORY_INFO.secondaryPhone}`}
                      className="text-xl sm:text-2xl font-bold text-stone-800 hover:text-[#B43A2B] tracking-tight"
                    >
                      {FACTORY_INFO.secondaryPhone}
                    </a>
                  </div>
                  <div className="text-xs text-stone-500 mt-1">
                    {lang === 'en' ? 'Available daily from 6:00 AM – 9:00 PM' : 'बिहान ६:०० देखि साँझ ९:०० बजेसम्म उपलब्ध'}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={`tel:+977${FACTORY_INFO.primaryPhone}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#B43A2B] hover:bg-[#92281c] text-white font-bold text-xs shadow-md transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-300" />
                    <span>{lang === 'en' ? `Call ${FACTORY_INFO.primaryPhone}` : `कल: ${FACTORY_INFO.primaryPhone}`}</span>
                  </a>

                  <a
                    href={`tel:+977${FACTORY_INFO.secondaryPhone}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'en' ? `Call ${FACTORY_INFO.secondaryPhone}` : `कल: ${FACTORY_INFO.secondaryPhone}`}</span>
                  </a>

                  <a
                    href={`https://wa.me/${FACTORY_INFO.whatsappNumber}?text=Namaste%20Sir,%20I%20am%20calling%20from%20your%20website%20to%20order%20bricks%20for%20my%20construction%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#20bd66] hover:bg-[#1a9f55] text-white font-bold text-xs shadow-md transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
