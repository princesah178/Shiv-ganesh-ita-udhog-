import React, { useState, useId } from 'react';
import { Calculator, MessageSquare, Phone, Truck, ShieldAlert, Sparkles, RefreshCw, Check } from 'lucide-react';
import { PRODUCTS, FACTORY_INFO, BrickProduct } from '../data/content';

interface BrickCalculatorProps {
  lang: 'en' | 'ne';
  preSelectedProduct?: BrickProduct;
}

export const BrickCalculator: React.FC<BrickCalculatorProps> = ({
  lang,
  preSelectedProduct,
}) => {
  const [calcMode, setCalcMode] = useState<'dimensions' | 'quantity'>('dimensions');
  const [wallLength, setWallLength] = useState<number>(30); // in feet
  const [wallHeight, setWallHeight] = useState<number>(10); // in feet
  const [wallThickness, setWallThickness] = useState<'4.5' | '9'>('9'); // inches
  const [openingsArea, setOpeningsArea] = useState<number>(40); // sq ft (doors/windows)
  const [directQuantity, setDirectQuantity] = useState<number>(5000);
  const [selectedProductId, setSelectedProductId] = useState<string>(
    preSelectedProduct ? preSelectedProduct.id : 'grade-1'
  );
  const [deliveryLocation, setDeliveryLocation] = useState<string>('Siraha / Sukhupur');

  const selectedProduct =
    PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  // Calculation Math
  let totalBricks = 0;
  let grossArea = 0;
  let netArea = 0;

  if (calcMode === 'dimensions') {
    grossArea = Math.max(0, wallLength * wallHeight);
    netArea = Math.max(0, grossArea - openingsArea);
    // Standard rule of thumb in Nepal construction:
    // 4.5 inch wall ≈ 4.8 bricks per sq ft
    // 9 inch wall ≈ 9.8 bricks per sq ft
    const bricksPerSqFt = wallThickness === '4.5' ? 4.8 : 9.8;
    const baseBricks = Math.ceil(netArea * bricksPerSqFt);
    // Add 5% breakage/wastage safety factor
    totalBricks = Math.ceil(baseBricks * 1.05);
  } else {
    totalBricks = Math.max(0, directQuantity);
  }

  // Cost estimates in NPR
  const estimatedCost = totalBricks * selectedProduct.pricePerBrick;
  // Transport loads
  const tractorTrips = Math.ceil(totalBricks / 2500); // 1 tractor ~ 2,500 bricks
  const truckTrips = Math.ceil(totalBricks / 5000); // 1 truck ~ 5,000 bricks

  // Mortar estimation (for dimensions mode)
  // ~1 bag cement per 500 bricks (in 1:6 mix), ~15 cu ft sand
  const estimatedCementBags = Math.ceil(totalBricks / 500);
  const estimatedSandCuFt = Math.ceil(estimatedCementBags * 15);

  const lengthId = useId();
  const heightId = useId();
  const openingsId = useId();
  const locationId = useId();
  const quantityId = useId();

  const handleWhatsAppSend = () => {
    let message = '';
    if (calcMode === 'dimensions') {
      message = `Namaste Kaplesh Sah Sir (Shiv Ganesh Ita Udhog, 9804758926),%0A` +
        `I calculated my brick requirements on your website:%0A` +
        `• Wall Dimensions: ${wallLength} ft × ${wallHeight} ft (${wallThickness}" Wall)%0A` +
        `• Net Area: ${netArea} sq.ft%0A` +
        `• Required Bricks: ${totalBricks.toLocaleString()} pcs (${selectedProduct.grade})%0A` +
        `• Estimated Amount: NPR रू ${estimatedCost.toLocaleString()}%0A` +
        `• Approx Transport: ${tractorTrips} Tractor load(s)%0A` +
        `• Delivery Area: ${deliveryLocation}%0A%0A` +
        `Please confirm current availability and booking process.`;
    } else {
      message = `Namaste Kaplesh Sah Sir (Shiv Ganesh Ita Udhog, 9804758926),%0A` +
        `I would like to order bricks:%0A` +
        `• Quantity: ${totalBricks.toLocaleString()} Bricks%0A` +
        `• Grade: ${selectedProduct.nameEn} (${selectedProduct.grade})%0A` +
        `• Estimated Value: NPR रू ${estimatedCost.toLocaleString()}%0A` +
        `• Delivery Location: ${deliveryLocation}%0A%0A` +
        `Please provide delivery time and booking details.`;
    }

    window.open(`https://wa.me/${FACTORY_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="calculator" className="py-20 lg:py-24 bg-[#F5F1EA] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/80 text-amber-950 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Smart Building Tool' : 'निर्माण लागत क्यालकुलेटर'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            {lang === 'en' ? 'Brick Quantity & Cost Estimator' : 'ईटा संख्या र बजेट हिसाब गर्नुहोस्'}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            {lang === 'en'
              ? 'Avoid buying excess or falling short. Calculate exact brick counts, transport requirements, and budget based on your wall size.'
              : 'पर्खालको लम्बाइ, उचाइ वा प्रत्यक्ष संख्या राखेर आवश्यक पर्ने ईटा, गाडी लोड र अनुमानित लागत सजिलै हिसाब गर्नुहोस्।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Controls */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-lg space-y-6">
            {/* Mode Selector Tabs */}
            <div className="flex rounded-xl p-1 bg-stone-100 border border-stone-200">
              <button
                type="button"
                onClick={() => setCalcMode('dimensions')}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                  calcMode === 'dimensions'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {lang === 'en' ? 'By Wall Dimensions (ft)' : 'पर्खालको नापबाट (लम्बाइ × उचाइ)'}
              </button>
              <button
                type="button"
                onClick={() => setCalcMode('quantity')}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                  calcMode === 'quantity'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {lang === 'en' ? 'By Brick Count' : 'ईटाको सिधा संख्याबाट'}
              </button>
            </div>

            {/* Brick Grade Selector */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                {lang === 'en' ? 'Select Brick Grade / Quality' : 'ईटाको ग्रेड रोज्नुहोस्'}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {PRODUCTS.map((prod) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => setSelectedProductId(prod.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedProductId === prod.id
                        ? 'border-[#B43A2B] bg-red-50/50 ring-2 ring-[#B43A2B]/20'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div className="text-xs font-bold text-stone-900 truncate">
                      {prod.grade}
                    </div>
                    <div className="text-[11px] text-stone-500 mt-0.5">
                      {lang === 'en' ? `Rs. ${prod.pricePerBrick} / pc` : `रू ${prod.pricePerBrick} / थान`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {calcMode === 'dimensions' ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={lengthId} className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === 'en' ? 'Total Wall Length (Feet)' : 'पर्खालको लम्बाइ (फिट)'}
                    </label>
                    <input
                      id={lengthId}
                      type="number"
                      min="1"
                      max="1000"
                      value={wallLength}
                      onChange={(e) => setWallLength(Math.max(1, Number(e.target.value)))}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#B43A2B] font-semibold text-stone-800"
                    />
                  </div>
                  <div>
                    <label htmlFor={heightId} className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === 'en' ? 'Wall Height (Feet)' : 'पर्खालको उचाइ (फिट)'}
                    </label>
                    <input
                      id={heightId}
                      type="number"
                      min="1"
                      max="100"
                      value={wallHeight}
                      onChange={(e) => setWallHeight(Math.max(1, Number(e.target.value)))}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#B43A2B] font-semibold text-stone-800"
                    />
                  </div>
                </div>

                {/* Wall Thickness Selector */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    {lang === 'en' ? 'Wall Type & Thickness' : 'पर्खालको मोटाइ'}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setWallThickness('9')}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        wallThickness === '9'
                          ? 'border-[#B43A2B] bg-red-50/50 font-bold text-stone-900'
                          : 'border-stone-200 text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      <div className="text-sm font-bold">9-Inch Wall (२ इट्टा)</div>
                      <div className="text-xs text-stone-500 mt-1">
                        {lang === 'en' ? 'Main exterior / Load-bearing' : 'मुख्य बाहिरी लोड वहन गर्ने पर्खाल'}
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setWallThickness('4.5')}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        wallThickness === '4.5'
                          ? 'border-[#B43A2B] bg-red-50/50 font-bold text-stone-900'
                          : 'border-stone-200 text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      <div className="text-sm font-bold">4.5-Inch Wall (१ इट्टा)</div>
                      <div className="text-xs text-stone-500 mt-1">
                        {lang === 'en' ? 'Internal room partition wall' : 'कोठाको भित्री पार्टिसन पर्खाल'}
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor={openingsId} className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'en'
                      ? 'Deduct Doors & Windows (Sq. Feet approx)'
                      : 'झ्याल र ढोकाको भाग घटाउनुहोस् (वर्ग फिट)'}
                  </label>
                  <input
                    id={openingsId}
                    type="number"
                    min="0"
                    max="1000"
                    value={openingsArea}
                    onChange={(e) => setOpeningsArea(Math.max(0, Number(e.target.value)))}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#B43A2B] font-semibold text-stone-800"
                  />
                  <span className="text-[11px] text-stone-500 block mt-1">
                    {lang === 'en'
                      ? 'E.g. standard door = 21 sq ft (3×7), standard window = 16 sq ft (4×4)'
                      : 'उदाहरण: १ ढोका = २१ वर्ग फिट (३×७), १ झ्याल = १६ वर्ग फिट (४×४)'}
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <label htmlFor={quantityId} className="block text-xs font-bold text-stone-700 mb-2">
                  {lang === 'en' ? 'Direct Brick Quantity Required' : 'आवश्यक ईटाको संख्या'}
                </label>
                <div className="relative">
                  <input
                    id={quantityId}
                    type="number"
                    step="500"
                    min="500"
                    max="500000"
                    value={directQuantity}
                    onChange={(e) => setDirectQuantity(Math.max(100, Number(e.target.value)))}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#B43A2B] font-bold text-lg text-stone-800"
                  />
                  <div className="absolute right-3 top-3.5 text-xs font-bold text-stone-400">
                    {lang === 'en' ? 'Bricks (Pcs)' : 'थान ईटा'}
                  </div>
                </div>
                {/* Quick Presets */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {[2500, 5000, 10000, 15000, 25000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setDirectQuantity(preset)}
                      className={`text-xs px-2.5 py-1 rounded-md border ${
                        directQuantity === preset
                          ? 'bg-stone-900 text-white border-stone-900'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {preset.toLocaleString()} {lang === 'en' ? 'Bricks' : 'ईटा'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label htmlFor={locationId} className="block text-xs font-bold text-stone-700 mb-1">
                {lang === 'en' ? 'Delivery Destination Location' : 'डेलिभरी हुने स्थान'}
              </label>
              <select
                id={locationId}
                value={deliveryLocation}
                onChange={(e) => setDeliveryLocation(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#B43A2B] font-semibold text-stone-800 bg-white"
              >
                <option value="Sukhupur / Siraha Bazaar">Sukhupur / Siraha Bazaar (सुखुपुर / सिराहा बजार)</option>
                <option value="Lahan / Mirchaiya">Lahan / Mirchaiya (लहान / मिर्चैया)</option>
                <option value="Gaighat (Udayapur)">Gaighat / Udayapur (गाईघाट / उदयपुर)</option>
                <option value="Golbazar / Chhoharba">Golbazar / Chhoharba (गोलबजार / छोहरबा)</option>
                <option value="Kalyanpur / Bishnupur">Kalyanpur / Bishnupur (कल्याणपुर / बिष्णपुर)</option>
                <option value="Other Regional Location">Other Regional Location (अन्य स्थान)</option>
              </select>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-stone-900 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl space-y-6">
            <div className="flex items-center justify-end pb-3 border-b border-stone-800">
              <div className="px-2.5 py-1 rounded bg-[#B43A2B] text-white text-xs font-bold">
                {selectedProduct.grade}
              </div>
            </div>

            {/* Big Brick Count */}
            <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 text-center">
              <span className="text-xs text-stone-400 font-medium">
                {lang === 'en'
                  ? 'Total Recommended Bricks (incl. 5% buffer)'
                  : 'कुल आवश्यक ईटा (५% सुरक्षा सहित)'}
              </span>
              <div className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight my-1">
                {totalBricks.toLocaleString()}
              </div>
              <span className="text-xs text-stone-400">
                {lang === 'en' ? 'Pieces / गोटा' : 'थान उच्च गुणस्तरको ईटा'}
              </span>
            </div>

            {/* Estimated Cost Breakdown */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between py-2 border-b border-stone-800">
                <span className="text-stone-400">
                  {lang === 'en' ? 'Unit Price (Approx)' : 'प्रति ईटा दर'}
                </span>
                <span className="font-semibold text-white">
                  रू {selectedProduct.pricePerBrick} / pc
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-stone-800">
                <span className="text-stone-400">
                  {lang === 'en' ? 'Estimated Brick Cost' : 'कुल ईटाको अनुमानित मूल्य'}
                </span>
                <span className="text-lg font-bold text-amber-400">
                  रू {estimatedCost.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-stone-800">
                <span className="text-stone-400 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-stone-400" />
                  {lang === 'en' ? 'Estimated Tractor Trips' : 'ट्रयाक्टर ढुवानी ट्रिप'}
                </span>
                <span className="font-semibold text-white">
                  ≈ {tractorTrips} {lang === 'en' ? 'Tractor Trips (2,500/trip)' : 'ट्रिप (२,५००/ट्रिप)'}
                </span>
              </div>

              {calcMode === 'dimensions' && (
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">
                    {lang === 'en' ? 'Est. Cement & Sand' : 'मसला (सिमेन्ट र बालुवा)'}
                  </span>
                  <span className="font-semibold text-stone-300">
                    ≈ {estimatedCementBags} बोरा / {estimatedSandCuFt} cu.ft
                  </span>
                </div>
              )}

              <div className="flex justify-between py-2">
                <span className="text-stone-400">
                  {lang === 'en' ? 'Delivery Destination' : 'गन्तव्य'}
                </span>
                <span className="font-semibold text-amber-300 text-right">
                  {deliveryLocation}
                </span>
              </div>
            </div>

            {/* Order & WhatsApp Trigger */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full py-3.5 px-4 rounded-xl bg-[#20bd66] hover:bg-[#1a9f55] text-white font-bold text-sm shadow-lg shadow-emerald-950/40 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>
                  {lang === 'en'
                    ? 'Send Estimate to Owner (WhatsApp)'
                    : 'सञ्चालकलाई WhatsApp मा पठाउनुहोस्'}
                </span>
              </button>

              <a
                href={`tel:+977${FACTORY_INFO.primaryPhone}`}
                className="w-full py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs border border-stone-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>
                  {lang === 'en'
                    ? `Call Owner: ${FACTORY_INFO.primaryPhone}`
                    : `सिधै फोन गर्नुहोस्: ${FACTORY_INFO.primaryPhone}`}
                </span>
              </a>
            </div>

            <p className="text-[11px] text-stone-400 text-center leading-normal">
              {lang === 'en'
                ? '*Prices may vary based on exact delivery distance from Sukhupur and seasonal market factors. Call owner for bulk negotiation.'
                : '*सुखुपुर भट्टाबाट दूरी र थोक परिमाण अनुसार ढुवानी शुल्क फरक पर्न सक्दछ। सञ्चालकसँग सिधै छलफल गर्नुहोस्।'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
