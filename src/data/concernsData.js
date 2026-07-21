export const CONCERNS = [
  {
    id: 'acne-vulgaris',
    name: 'Acne & Inflammatory Blemishes',
    category: 'Medical',
    targetGroup: 'Teen & Adult',
    shortDesc: 'Comprehensive medical evaluation of comedonal, papular, and cystic acne lesions.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1512290900673-04879654157a?auto=format&fit=crop&w=1600&q=80',
    overview: 'Acne vulgaris is a multifactorial skin condition involving excess sebum production, follicular hyperkeratinization, Cutibacterium acnes proliferation, and localized inflammation.',
    commonSigns: [
      'Open and closed comedones (blackheads and whiteheads)',
      'Erythematous papules and pustules',
      'Deep nodular or cystic lesions'
    ],
    contributingFactors: [
      'Hormonal fluctuations during adolescence or adulthood',
      'Genetically influenced sebaceous gland sensitivity'
    ],
    whenToConsult: 'Seek evaluation if acne persists despite gentle over-the-counter cleansing or leaves dark spots and permanent textured scars.',
    consultationProcess: 'A dermatologist performs visual examination under dermoscopy and formulates a targeted regime.',
    relatedTreatments: ['chemical-peels-rejuvenation', 'laser-hair-reduction']
  },
  {
    id: 'hair-loss-thinning',
    name: 'Pattern Hair Loss & Thinning',
    category: 'Hair & Scalp',
    targetGroup: 'Adult & Senior',
    shortDesc: 'Trichological assessment of follicular density, scalp health, and hair shaft miniaturization.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1600&q=80',
    overview: 'Hair thinning and diffuse hair loss can stem from androgenetic factors, telogen effluvium, nutritional deficiencies, or scalp inflammation.',
    commonSigns: [
      'Widening hair part or receding hairline',
      'Increased hair shedding during brushing',
      'Reduced ponytail volume'
    ],
    contributingFactors: [
      'Genetic predisposition to androgenetic alopecia',
      'Iron or trace mineral imbalances'
    ],
    whenToConsult: 'Consult a dermatologist when hair loss thins the vertex or temporal crown.',
    consultationProcess: 'Includes trichoscopy (scalp dermoscopy) and pull test evaluation.',
    relatedTreatments: ['scalp-trichology-analysis']
  },
  {
    id: 'hyperpigmentation-melasma',
    name: 'Hyperpigmentation & Melasma',
    category: 'Aesthetic',
    targetGroup: 'Adult',
    shortDesc: 'Targeted assessment of epidermal melanin accumulation and sun-induced discoloration.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80',
    overview: 'Melasma and localized hyperpigmentation result from melanocyte hyperactivity triggered by UV rays and hormonal signals.',
    commonSigns: [
      'Brown patches on cheeks, forehead, or upper lip',
      'Post-inflammatory dark spots following acne'
    ],
    contributingFactors: [
      'UV ray exposure and high-energy visible blue light',
      'Hormonal changes during pregnancy'
    ],
    whenToConsult: 'Evaluation is advised if pigmentation worsens despite daily sunscreen use.',
    consultationProcess: 'Dermoscopy is used to determine pigment depth (epidermal vs dermal).',
    relatedTreatments: ['chemical-peels-rejuvenation']
  },
  {
    id: 'eczema-dermatitis',
    name: 'Eczema & Atopic Dermatitis',
    category: 'Medical',
    targetGroup: 'All Ages',
    shortDesc: 'Clinical barrier repair strategies for itchy, dry, and reactive eczematous skin.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1512290900673-04879654157a?auto=format&fit=crop&w=1600&q=80',
    overview: 'Atopic dermatitis involves epidermal barrier dysfunction, filaggrin protein mutations, and immune hyper-reactivity.',
    commonSigns: [
      'Dry, scaling, or thickened patches of skin',
      'Intense pruritus (itching) disturbing sleep'
    ],
    contributingFactors: [
      'Genetic lipid barrier impairment',
      'Environmental allergens and harsh detergents'
    ],
    whenToConsult: 'Consult if itching severely impacts daily routine or patches spread.',
    consultationProcess: 'Detailed medical history and barrier repair guidance.',
    relatedTreatments: ['clinical-dermatology-consultation']
  },
  {
    id: 'psoriasis-management',
    name: 'Psoriasis & Plaque Support',
    category: 'Medical',
    targetGroup: 'Adult & Senior',
    shortDesc: 'Specialized evaluation of keratinocyte proliferation and silvery plaque lesions.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80',
    overview: 'Psoriasis is a chronic immune-mediated condition causing silvery white scales over erythematous plaques.',
    commonSigns: [
      'Thickened red plaques with silvery scales',
      'Dry, cracked skin that may bleed'
    ],
    contributingFactors: [
      'Systemic immune pathway upregulation',
      'Stress and skin trauma'
    ],
    whenToConsult: 'Seek specialist consultation when plaques affect joints or surface areas.',
    consultationProcess: 'PASI severity assessment and therapeutic planning.',
    relatedTreatments: ['clinical-dermatology-consultation']
  },
  {
    id: 'rosacea-redness',
    name: 'Rosacea & Facial Redness',
    category: 'Medical',
    targetGroup: 'Adult',
    shortDesc: 'Calming interventions for persistent facial flushing, visible capillaries, and papules.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=80',
    overview: 'Rosacea is a chronic neurovascular skin disorder that causes facial flushing and visible broken blood vessels.',
    commonSigns: [
      'Persistent redness across the nose and cheeks',
      'Visible dilated capillaries (telangiectasia)'
    ],
    contributingFactors: [
      'Vascular hyper-reactivity',
      'Temperature shifts and spicy foods'
    ],
    whenToConsult: 'Schedule an appointment if facial redness becomes permanent or causes stinging.',
    consultationProcess: 'Trigger identification and barrier strengthening plan.',
    relatedTreatments: ['clinical-dermatology-consultation']
  },
  {
    id: 'dandruff-scalp-care',
    name: 'Dandruff & Scalp Dermatitis',
    category: 'Hair & Scalp',
    targetGroup: 'All Ages',
    shortDesc: 'Targeted care for scalp scaling, persistent itching, and oily flake accumulation.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1600&q=80',
    overview: 'Seborrheic dermatitis of the scalp manifests as yellowish greasy scales or dry white flakes.',
    commonSigns: [
      'White or yellow flakes on hair shafts',
      'Scalp itching and redness'
    ],
    contributingFactors: [
      'Malassezia yeast proliferation',
      'Disrupted scalp barrier function'
    ],
    whenToConsult: 'Consult if scalp flaking fails to respond to anti-dandruff shampoos.',
    consultationProcess: 'Scalp dermoscopy to assess sebum levels.',
    relatedTreatments: ['scalp-trichology-analysis']
  },
  {
    id: 'unwanted-hair',
    name: 'Unwanted Hair & Pseudofolliculitis',
    category: 'Laser',
    targetGroup: 'Adult',
    shortDesc: 'Clinical long-term reduction of unwanted hair using dark skin-safe diode/Nd:YAG laser.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1512290900673-04879654157a?auto=format&fit=crop&w=1600&q=80',
    overview: 'Selective photothermolysis targets melanin within hair follicles safely across all skin tones.',
    commonSigns: [
      'Coarse facial or body hair growth',
      'Recurrent ingrown hairs from shaving'
    ],
    contributingFactors: [
      'Androgen sensitivity or PCOS',
      'Repetitive waxing causing folliculitis'
    ],
    whenToConsult: 'Consult for a skin patch test and laser safety evaluation.',
    consultationProcess: 'Fitzpatrick skin typing and laser protocol design.',
    relatedTreatments: ['laser-hair-reduction']
  }
];
