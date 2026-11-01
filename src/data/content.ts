export interface BrickProduct {
  id: string;
  nameEn: string;
  nameNe: string;
  taglineEn: string;
  taglineNe: string;
  grade: string;
  pricePerBrick: number; // In NPR
  dimensions: string;
  strength: string;
  waterAbsorption: string;
  bestForEn: string;
  bestForNe: string;
  featuresEn: string[];
  featuresNe: string[];
  image: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleNe: string;
  categoryEn: string;
  categoryNe: string;
  src: string;
  descriptionEn: string;
  descriptionNe: string;
}

export const FACTORY_INFO = {
  nameEn: "SHIV GANESH ITA UDHOG",
  nameNe: "शिव गणेश ईटा उद्योग",
  taglineEn: "Strong & Quality Bricks for Lasting Foundations",
  taglineNe: "बलियो र गुणस्तरीय ईंट, मजबुत भविष्यको जग",
  establishedBs: "2080 B.S.",
  establishedNe: "वि.सं. २०८०",
  establishedAd: "2023 / 2024 A.D.",
  locationEn: "Kushaha Laxminiya / Sukhupur-3, Siraha, Nepal",
  locationNe: "कुशाहा लक्ष्मिनिया / सुखुपुर-३, सिराहा, नेपाल",
  googleMapsUrl: "https://maps.app.goo.gl/Gf9FBzpWEiCZCA5s9",
  googleRating: "4.7",
  googleReviews: "3",
  primaryPhone: "9804758926",
  secondaryPhone: "9827706501",
  whatsappNumber: "9779804758926",
  ownerNameEn: "Kaplesh Sah",
  ownerNameNe: "कपलेश साह",
  ownerTitleEn: "Proprietor & Founder",
  ownerTitleNe: "संस्थापक तथा सञ्चालक",
  ownerImage: "/assets/aistudio/IMG-20241027-WA0000_9841a482.jpg",
  tiktokUrl: "https://www.tiktok.com/@shiv_ganesh_ita_udhog?_r=1&_t=ZS-9B21BLhqaij",
  facebookUrl: "https://www.facebook.com/profile.php?id=61596115194529",
  kilnImage: "/assets/aistudio/IMG_20260509_115716_be3e5d52.jpg",
  kilnAltImage: "/assets/aistudio/IMG_20260424_165519_3a5ff42c.jpg",
  stampedBrickImage: "/assets/aistudio/IMG_20261028_161318_7f2b27e2.jpg",
  pujaImage1: "/assets/aistudio/IMG-20261017-WA0002_8e2d14d8.jpg",
  pujaImage2: "/assets/aistudio/IMG-20261017-WA0005_6cd07e92.jpg",
  videoUrl: "/assets/aistudio/ganesh_ita_Udyog__contact_number_9828621364_c6d4fc36.mp4",
};

export const PRODUCTS: BrickProduct[] = [
  {
    id: "grade-1",
    nameEn: "No. 1 Premium Red Brick (Class-A)",
    nameNe: "१ नम्बर सुपर रेड ईटा (क्लास ए)",
    taglineEn: "Deep terracotta red, clear metallic ring sound, sharp precise edges",
    taglineNe: "गाढा रातो रङ्ग, टिन जस्तो घण्टीको आवाज, धारिलो र सीधा किनारा",
    grade: "Grade 1 (१ नम्बर)",
    pricePerBrick: 16,
    dimensions: "9\" × 4.25\" × 2.75\" (228 × 108 × 70 mm)",
    strength: "> 14.5 - 18 MPa",
    waterAbsorption: "< 12%",
    bestForEn: "Residential homes, multi-story structural pillars, commercial buildings, exterior exposed brickwork",
    bestForNe: "आवासीय भवन, पिलर सिस्टम, व्यापारिक भवन, र बलियो भारवहन पर्खाल",
    featuresEn: [
      "Genuine brand stamp 'गणेश / SG'",
      "Even kiln firing with zero carbon core",
      "High compressive load resistance",
      "Low water absorption prevents dampness (seepage)",
      "Standard uniform sizing saves mortar cost"
    ],
    featuresNe: [
      "स्पष्ट छाप 'गणेश / SG' अंकित",
      "एकनासको उच्च तापक्रममा पाकेको",
      "अधिक भार वहन क्षमता",
      "पानी नसोस्ने हुनाले सीलन आउँदैन",
      "समान आकार भएकाले मसला कम लाग्ने"
    ],
    image: "/assets/aistudio/IMG_20261028_161318_7f2b27e2.jpg",
    popular: true,
  },
  {
    id: "grade-2",
    nameEn: "No. 2 Standard Construction Brick",
    nameNe: "२ नम्बर निर्माण ईटा",
    taglineEn: "Reliable kiln-fired bricks for interior partition and compound walls",
    taglineNe: "भित्री पर्खाल, कम्पाउण्ड वाल र सामान्य निर्माणका लागि उपयुक्त",
    grade: "Grade 2 (२ नम्बर)",
    pricePerBrick: 13,
    dimensions: "9\" × 4.25\" × 2.75\" (228 × 108 × 70 mm)",
    strength: "> 10 - 12.5 MPa",
    waterAbsorption: "< 16%",
    bestForEn: "Internal partition walls, boundary perimeter walls, plaster-covered masonry",
    bestForNe: "भित्री पार्टिसन पर्खाल, कम्पाउण्ड वाल, प्लास्टर हुने संरचना",
    featuresEn: [
      "Solid kiln-baked density",
      "Budget-friendly construction rate",
      "Ideal for walls receiving cement plaster",
      "Good thermal insulation for homes"
    ],
    featuresNe: [
      "मजबुत पाकेको बनावट",
      "किफायती दरमा उपलब्ध",
      "प्लास्टर हुने पर्खालको लागि उत्तम",
      "गर्मीमा शीतल राख्ने माटोको गुण"
    ],
    image: "/assets/aistudio/IMG_20260424_165519_3a5ff42c.jpg",
  },
  {
    id: "grade-3",
    nameEn: "No. 3 Soling & Foundation Brick",
    nameNe: "३ नम्बर सोलिङ्ग तथा जग ईटा",
    taglineEn: "Heavy-duty foundation soling, flooring base, and road sub-base",
    taglineNe: "जग सोलिङ्ग, भुइँ ढलान बेस, बाटो र अस्थायी निर्माणको लागि",
    grade: "Grade 3 (३ नम्बर)",
    pricePerBrick: 10,
    dimensions: "Standard Kiln Size",
    strength: "> 7.5 - 9 MPa",
    waterAbsorption: "< 20%",
    bestForEn: "Foundation trench soling, floor bed preparation, drains, and road base work",
    bestForNe: "घरको जग सोलिङ्ग, भुइँको बेस तयारी, नाला तथा सडक बेस",
    featuresEn: [
      "Bulk delivery available for Gaighat & regional projects",
      "Extremely economical for foundation base",
      "High natural hardness from clay base",
      "Direct loading from kiln yard"
    ],
    featuresNe: [
      "गाईघाट तथा विभिन्न स्थानका लागि ट्रक लोड उपलब्ध",
      "जग सोलिङ्गका लागि निकै सस्तो र भरपर्दो",
      "माटोको प्राकृतिक कडापन",
      "भट्टाबाटै सिधै गाडीमा लोड हुने"
    ],
    image: "/assets/aistudio/IMG-20261017-WA0005_6cd07e92.jpg",
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "brick-stamp",
    titleEn: "Authentic Class-A Red Brick with Embossed 'गणेश' Trademark",
    titleNe: "सक्कली १ नम्बर ईटा — ओरिजिनल 'गणेश' छाप अंकित",
    categoryEn: "Bricks & Products",
    categoryNe: "ईटा तथा उत्पादन",
    src: "/assets/aistudio/IMG_20261028_161318_7f2b27e2.jpg",
    descriptionEn: "Deep terracotta red brick tested for maximum compressive load (>15 MPa), clear metallic ringing sound, and sharp precise edges for lasting homes.",
    descriptionNe: "गाढा रातो रङ्ग, धारिलो किनारा, उच्च भार वहन क्षमता र टिन जस्तो टन्टन घण्टीको आवाज आउने १ नम्बर गुणस्तरको ईटा।"
  },
  {
    id: "kiln-sky",
    titleEn: "Shiv Ganesh Ita Udhog Tall Industrial Chimney",
    titleNe: "उद्योग परिसरको आधुनिक अग्लो चिम्नी र भट्टा",
    categoryEn: "Kiln & Factory",
    categoryNe: "चिम्नी तथा भट्टा",
    src: "/assets/aistudio/IMG_20260509_115716_be3e5d52.jpg",
    descriptionEn: "Our towering kiln chimney in Sukhupur-3 provides natural upward draft and uniform heat distribution across all baking chambers.",
    descriptionNe: "सुखुपुरस्थित उद्योगको अग्लो चिम्नीले भट्टाभित्र एकनासको तापक्रम र उचित हावा प्रवाह कायम गर्दछ।"
  },
  {
    id: "kiln-trench",
    titleEn: "Kiln Burning Trench & Cured Brick Stacks",
    titleNe: "ईटा पाक्ने च्याम्बर र तयार ईंटका चाङहरू",
    categoryEn: "Kiln & Factory",
    categoryNe: "चिम्नी तथा भट्टा",
    src: "/assets/aistudio/IMG_20260424_165519_3a5ff42c.jpg",
    descriptionEn: "Continuous high-temperature firing trench where alluvial clay bricks are baked at over 1000°C for exceptional structural weather resistance.",
    descriptionNe: "१००० डिग्री सेल्सियस भन्दा बढीको तापक्रममा माटोको ईंट पाक्ने च्याम्बर, जहाँबाट बलियो र टिकाउ ईटा तयार हुन्छ।"
  },
  {
    id: "puja-altar",
    titleEn: "Auspicious Shiva & Ganesh Shrine at Factory",
    titleNe: "उद्योग परिसरमा भगवान शिव र गणेशको मन्दिर एवं त्रिशूल",
    categoryEn: "Puja & Heritage",
    categoryNe: "धार्मिक पूजा एवं संस्कार",
    src: "/assets/aistudio/IMG-20261017-WA0002_8e2d14d8.jpg",
    descriptionEn: "Sacred shrine honoring Lord Shiva and Lord Ganesh, seeking divine blessings for worker safety, factory prosperity, and strength in every building.",
    descriptionNe: "प्रत्येक नयाँ सिजनको सुरुआतमा उद्योग परिसरमै रहेको भगवान शिव र गणेशको मन्दिरमा विधिपूर्वक पूजा अर्चना गरिन्छ।"
  },
  {
    id: "puja-bricks",
    titleEn: "Ceremonial Blessing of Freshly Molded Raw Bricks",
    titleNe: "नयाँ काँचो ईटाको पूजा, संकल्प एवं अबीर-फूल अर्पण",
    categoryEn: "Puja & Heritage",
    categoryNe: "धार्मिक पूजा एवं संस्कार",
    src: "/assets/aistudio/IMG-20261017-WA0005_6cd07e92.jpg",
    descriptionEn: "Traditional consecration of initial brick batches with vermilion and floral offerings, blending cultural heritage with industrial standards.",
    descriptionNe: "साँचिएका काँचो ईंटहरूलाई अबीर, फूल र अक्षता चढाएर मंगलमय संकल्पका साथ भट्टामा लोड गरिन्छ।"
  }
];

export const SERVICE_REGIONS = [
  "Sukhupur & Siraha Bazaar",
  "Lahan & Mirchaiya",
  "Golbazar & Chhoharba",
  "Gaighat (Udayapur)",
  "Kalyanpur & Bishnupur",
  "Bariyarpatti & Aurahi",
  "Bathanaha & Border Areas",
  "Dhanusha & Surrounding Districts"
];
