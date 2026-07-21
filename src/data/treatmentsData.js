export const TREATMENTS = [
  {
    id: 'clinical-dermatology-consultation',
    name: 'Clinical Medical Dermatology Consultation',
    category: 'Medical Dermatology',
    shortDesc: 'In-depth diagnostic assessment of acute and chronic skin, hair, and nail conditions by a qualified specialist.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    overview: 'A clinical consultation forms the cornerstone of evidence-based dermatological care. It combines dermoscopic skin examination, detailed medical history, lifestyle assessment, and prescription guidance tailored to your specific dermatological needs.',
    suitableFor: [
      'Persistent acne, rosacea, or facial redness',
      'Unexplained skin rashes, itching, or hives',
      'Eczema, psoriasis, or chronic dermatitis flares',
      'Atypical moles, skin lesions, or nail discoloration'
    ],
    consultationRequirement: 'Mandatory prior to any clinical procedure or prescription regimen.',
    procedureDetails: [
      'Comprehensive medical history review',
      'High-magnification dermoscopy of skin, scalp, or lesions',
      'Barrier integrity and hydration assessment',
      'Personalized treatment map and prescription formulation'
    ],
    preparationSteps: [
      'Remove facial makeup, heavy moisturizers, or nail polish before appointment',
      'Bring a list of all current skin care products, topicals, and oral medications',
      'Note key trigger factors or flare history'
    ],
    recoveryExpectations: 'No downtime. Immediate continuation of daily activities with your tailored skin routine.',
    sessionGuidance: 'Initial consultation takes 30-45 minutes. Follow-up intervals depend on condition severity (typically 4-6 weeks).',
    disclaimer: 'Treatment suitability, diagnosis, and prescription medications must be determined through in-person evaluation by a licensed dermatologist.',
    faqs: [
      {
        q: 'What should I bring to my initial skin consultation?',
        a: 'Please bring your current skincare products, list of medications, previous medical reports, and any relevant blood test results.'
      }
    ]
  },
  {
    id: 'scalp-trichology-analysis',
    name: 'Hair Density & Scalp Trichology Analysis',
    category: 'Hair & Scalp',
    shortDesc: 'Digital trichoscopic scalp evaluation to assess hair density, follicular health, and shedding causes.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1600&q=80',
    overview: 'Utilizing specialized trichoscopy cameras with high optical magnification, our scalp analysis visualizes hair shaft diameter, follicular unit count, sebum accumulation, and scalp vascularity to pinpoint hair loss drivers.',
    suitableFor: [
      'Male and female pattern hair thinning',
      'Sudden excessive hair shedding (telogen effluvium)',
      'Scalp itching, dandruff flaking, or inflammation',
      'Monitoring response to trichology therapies'
    ],
    consultationRequirement: 'Required to accurately diagnose hair loss types before starting hair restoration protocols.',
    procedureDetails: [
      'Non-invasive trichoscopic imaging of scalp zones (frontal, vertex, occipital)',
      'Follicular unit density calculation (hairs per sq cm)',
      'Microscopic hair shaft thickness measurement',
      'Scalp barrier and microcirculation evaluation'
    ],
    preparationSteps: [
      'Wash hair 24 hours before consultation',
      'Avoid hair fibers, temporary root touch-up sprays, or heavy styling gels on consultation day'
    ],
    recoveryExpectations: 'Painless, non-invasive digital evaluation with instant visual report review.',
    sessionGuidance: 'Recommended baseline session followed by progress checks every 3 months.',
    disclaimer: 'Hair growth outcomes vary significantly based on underlying systemic causes, genetics, and adherence to prescribed trichology protocols.',
    faqs: [
      {
        q: 'Does scalp analysis hurt?',
        a: 'Not at all. Scalp analysis is a completely painless digital camera imaging procedure.'
      }
    ]
  },
  {
    id: 'laser-hair-reduction',
    name: 'Advanced Laser Hair Reduction',
    category: 'Laser Treatments',
    shortDesc: 'Precision photo-epilation targeting hair follicles using dark skin-safe diode/Nd:YAG technology.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1512290900673-04879654157a?auto=format&fit=crop&w=1600&q=80',
    overview: 'Our medical laser hair reduction platform employs dual-wavelength (810nm Diode / 1064nm Nd:YAG) energy with integrated sapphire contact cooling. Energy is selectively absorbed by melanin in active hair shafts, disabling follicle regeneration while safeguarding surrounding tissue.',
    suitableFor: [
      'Unwanted facial hair (chin, upper lip, sideburns)',
      'Body hair reduction (underarms, arms, legs, back, chest)',
      'Recurrent ingrown hair and pseudofolliculitis barbae',
      'Sensitive skin prone to razor burn'
    ],
    consultationRequirement: 'Mandatory medical consultation and skin patch test required before first session.',
    procedureDetails: [
      'Skin cleansing and target area marking',
      'Application of chilled clear ultrasound coupling gel',
      'Passage of laser handpiece with continuous sapphire cooling',
      'Post-procedure soothing moisturizer and broad-spectrum sunscreen'
    ],
    preparationSteps: [
      'Shave target area 24 hours prior to appointment',
      'Do not wax, pluck, or thread hair for 3-4 weeks prior',
      'Avoid active sun tanning or sunbeds for 2 weeks prior'
    ],
    recoveryExpectations: 'Mild transient redness (erythema) or perifollicular edema lasting 1 to 4 hours.',
    sessionGuidance: 'Typically requires 6 to 8 sessions spaced 4 to 6 weeks apart depending on body area and hair cycle stage.',
    disclaimer: 'Laser hair reduction achieves long-term hair reduction; individual maintenance sessions may be needed over time. Outcomes vary based on hair color, skin tone, and hormonal balance.',
    faqs: [
      {
        q: 'Is laser hair reduction safe for Indian skin tones?',
        a: 'Yes, long-pulse Nd:YAG and chilled Diode lasers are clinically engineered for safe use on medium to deep Fitzpatrick skin types.'
      }
    ]
  },
  {
    id: 'chemical-peels-rejuvenation',
    name: 'Clinical Dermatological Chemical Peels',
    category: 'Aesthetic Dermatology',
    shortDesc: 'Customized acid solutions (AHA/BHA/TCA) to gently exfoliate damaged superficial layers and boost cellular turnover.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80',
    overview: 'Clinical chemical peels utilize precise concentrations of salicylic acid, glycolic acid, lactic acid, mandelic acid, or TCA solutions. By controlled exfoliation of the stratum corneum, peels promote epidermal renewal, unclog pores, and lighten superficial hyperpigmentation.',
    suitableFor: [
      'Acne prone skin, active blackheads, and congestion',
      'Post-acne dark marks and mild hyperpigmentation',
      'Dull texture, uneven skin tone, and fine lines',
      'Oil balancing and pore refinement'
    ],
    consultationRequirement: 'Dermatologist evaluation required to select exact peel formulation and depth.',
    procedureDetails: [
      'Gentle skin degreasing and barrier protection of sensitive eye/lip zones',
      'Controlled application of customized peel solution',
      'Precise timing and neutralization protocol',
      'Application of barrier-repair cream and Mineral Sunscreen SPF 50+'
    ],
    preparationSteps: [
      'Discontinue retinoids, AHAs, BHAs, and exfoliant scrubs 3-5 days before treatment',
      'Avoid bleaching, waxing, or threading facial hair 5 days prior'
    ],
    recoveryExpectations: 'Mild redness for 24 hours, followed by subtle flaking or peeling for 3-5 days. Sun protection is mandatory.',
    sessionGuidance: 'Recommended series of 3 to 6 peels spaced 2 to 4 weeks apart.',
    disclaimer: 'Peel intensity and recovery differ based on peel depth. Strict sun avoidance and post-procedure care adherence are essential to avoid post-inflammatory hyperpigmentation.',
    faqs: [
      {
        q: 'Will my face peel heavily after a chemical peel?',
        a: 'Modern superficial to medium clinical peels produce fine, micro-flaking rather than dramatic sheet peeling, allowing comfortable recovery.'
      }
    ]
  },
  {
    id: 'collagen-microneedling',
    name: 'Targeted Collagen Microneedling',
    category: 'Aesthetic Dermatology',
    shortDesc: 'Micro-channelling procedure designed to stimulate dermal collagen remodeling and diminish textured scars.',
    image: 'https://images.unsplash.com/photo-1512290900673-04879654157a?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    overview: 'Microneedling creates thousands of microscopic epidermal micro-injuries using ultra-fine sterile needles. This natural wound-healing cascade triggers fibroblasts to produce new collagen (type I and III) and elastin, refining skin texture and softening acne scars.',
    suitableFor: [
      'Atrophic acne scars (boxcar, rolling scars)',
      'Enlarged skin pores and coarse texture',
      'Fine lines and early loss of skin firmness',
      'General skin rejuvenation and serum absorption boost'
    ],
    consultationRequirement: 'Requires dermatologist assessment to ensure no active bacterial/viral skin infection is present.',
    procedureDetails: [
      'Application of topical numbing cream for 30-45 minutes for maximum comfort',
      'Sterile micro-needling device pass with hyaluronic acid glide',
      'Cooling botanical mask and LED soothing light session',
      'Post-procedure barrier recovery balm'
    ],
    preparationSteps: [
      'Avoid direct sun exposure and retinoids 5 days prior',
      'Stay well hydrated before appointment'
    ],
    recoveryExpectations: 'Mild sunburn-like redness for 24-48 hours. Mild dryness for 3 days.',
    sessionGuidance: 'A series of 3 to 5 sessions spaced 4 weeks apart yields cumulative collagen synthesis.',
    disclaimer: 'Results are gradual as natural neocollagenesis develops over 6 to 12 weeks. Results depend on scar depth and healing capacity.',
    faqs: [
      {
        q: 'Does microneedling hurt?',
        a: 'With prescription topical anesthetic cream applied beforehand, most patients report only light vibration sensations.'
      }
    ]
  }
];
