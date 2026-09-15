

export type ProductVariant = {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  foodGrade?: boolean;
  image?: string;
  sizes: string[];
};

export type ProductFAQ = {
  question: string;
  answer: string;
};

export type ProductInformation = {
  title: string;
  paragraphs: string[];
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: string;

  tagline: string;
  shortDescription: string;
  description: string;

  heroImage: string;
  images: string[];

  features: string[];

  suitableFor: string[];

  usage?: string[];

  information?: ProductInformation;

  sizes: string[];

  variants?: ProductVariant[];

  specifications: {
    label: string;
    value: string;
  }[];

  faqs: ProductFAQ[];

  relatedProducts: string[];

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const products: Product[] = [
  // ============================================================
  // CAMPHOR
  // ============================================================

  {
    slug: "camphor",

    name: "100% Pure Camphor",

    shortName: "Camphor",

    category: "Pooja & Devotional Products",

    tagline: "Offer Pure to the Divine.",

    shortDescription:
      "100% pure camphor made without adulteration or added fillers, for pooja, aarti and traditional devotional rituals.",

    description:
      "Hari Nandanam 100% Pure Camphor is made from pure camphor without adulteration or added fillers. It is intended for pooja, aarti and traditional devotional rituals at home, temples and during religious occasions.",

    heroImage: "/images/products/camphor.webp",

    images: [
      "/images/products/camphor.webp",
    ],

    features: [
      "100% pure camphor",
      "No adulteration or added fillers",
      "Clean burning",
      "Does not leave oily, wax-like or powdery residue",
      "Suitable for pooja and aarti",
      "Suitable for daily devotional use",
    ],

    suitableFor: [
      "Daily Pooja",
      "Aarti",
      "Temple Worship",
      "Festivals & Religious Occasions",
    ],

    usage: [
      "Place a suitable piece of camphor on an appropriate aarti holder or heat-resistant surface.",
      "Light the camphor carefully.",
      "Use the flame according to your customary pooja or aarti practice.",
      "Allow the camphor to burn safely and completely.",
    ],

    information: {
      title: "A Natural Characteristic of Pure Camphor",

      paragraphs: [
        "Camphor naturally undergoes sublimation, changing directly from a solid into vapour. Because Hari Nandanam Camphor is 100% pure, some of this vapour can condense on the inside surface of the packaging, particularly when the product experiences changes in temperature during storage or transportation.",

        "You may therefore occasionally notice a thin layer of condensation inside the pack. This is a natural characteristic of camphor and does not indicate a manufacturing defect.",
      ],
    },

    sizes: [],

    specifications: [
      {
        label: "Product",
        value: "100% Pure Camphor",
      },
      {
        label: "Brand",
        value: "Hari Nandanam",
      },
      {
        label: "Category",
        value: "Pooja & Devotional Products",
      },
      {
        label: "Usage",
        value: "Pooja, Aarti & Traditional Rituals",
      },
      {
        label: "Manufacturer",
        value: "Unitech Industries",
      },
    ],

    faqs: [
      {
        question: "What is Hari Nandanam Camphor used for?",
        answer:
          "Hari Nandanam Camphor is intended for pooja, aarti and other traditional devotional rituals at home, temples and religious occasions.",
      },

      {
        question: "Is Hari Nandanam Camphor pure?",
        answer:
          "Hari Nandanam Camphor is made from 100% pure camphor without adulteration or added fillers.",
      },

      {
        question:
          "Why does Hari Nandanam Camphor not leave oily or powdery residue?",
        answer:
          "Because the product is made from 100% pure camphor without adulteration or added fillers, it burns without the oily, wax-like or powdery residue associated with adulterated camphor.",
      },

      {
        question:
          "Why is there condensation inside the camphor packet?",
        answer:
          "Camphor naturally undergoes sublimation, changing directly from a solid into vapour. Some of this vapour can condense on the inside surface of the packaging, particularly when the product experiences temperature changes during storage or transportation. This is a natural characteristic of camphor and does not by itself indicate a manufacturing defect.",
      },

      {
        question: "Can Hari Nandanam Camphor be used for daily pooja?",
        answer:
          "Yes. It is intended for daily pooja, aarti and traditional devotional rituals.",
      },

      {
        question: "How should camphor be stored?",
        answer:
          "Keep the package tightly closed and store it in a cool, dry place away from heat, direct sunlight and sources of ignition.",
      },
    ],

    relatedProducts: [
      "lamp-oil",
      "rose-water",
      "kumkum",
      "vibuthi",
      "kalabham",
      "dhoop-sticks",
      "dhoop-cones",
      "natural-sambrani-sticks",
      "natural-spices-sticks",
    ],

    seo: {
      title: "100% Pure Camphor for Pooja & Aarti | Hari Nandanam",

      description:
        "Hari Nandanam 100% Pure Camphor for pooja and aarti. Made without adulteration or added fillers for a clean devotional experience.",

      keywords: [
        "pure camphor",
        "100% pure camphor",
        "camphor for pooja",
        "camphor for aarti",
        "pooja camphor",
        "devotional camphor",
        "Hari Nandanam camphor",
      ],
    },
  },

  // ============================================================
  // ROSE WATER
  // ============================================================

  {
    slug: "rose-water",

    name: "Rose Water",

    shortName: "Rose Water",

    category: "Pooja & Devotional Products",

    tagline: "A Gentle Touch of Freshness for Every Offering.",

    shortDescription:
      "Hari Nandanam Rose Water is available in Food Grade and Non-Food Grade varieties for different devotional and traditional applications.",

    description:
      "Hari Nandanam Rose Water is available in two varieties. The Food Grade Rose Water is made from natural rose and is suitable for applications where food-grade rose water is required. The Non-Food Grade Rose Water uses synthetic rose perfume to provide a consistent rose fragrance and is intended for suitable non-food devotional and fragrance applications.",

    heroImage: "/images/products/rose-water-1.webp",

    images: [
      "/images/products/rose-water-1.webp",
    ],

    features: [
      "Available in two varieties",
      "Food Grade variety made from natural rose",
      "Non-Food Grade variety with synthetic rose perfume",
      "Suitable for devotional applications",
      "Available in convenient pack sizes",
    ],

    suitableFor: [
      "Pooja",
      "Devotional Offerings",
      "Traditional Rituals",
      "Religious Occasions",
    ],

    usage: [
      "Use according to your customary pooja or devotional practice.",
      "Use the Food Grade variety where food-grade rose water is specifically required.",
      "Use the Non-Food Grade variety only for appropriate non-food applications.",
    ],

    sizes: [
      "200 ml",
      "500 ml",
      "1 Litre",
    ],

    variants: [
      {
        id: "food-grade",

        name: "Food Grade Rose Water",

        subtitle: "Made from Natural Rose",

        description:
          "Food Grade Rose Water made from natural rose, suitable for applications where food-grade rose water is required.",

        foodGrade: true,

        image: "/images/products/rose-water-1.webp",

        sizes: [
          "200 ml",
          "500 ml",
          "1 Litre",
        ],
      },

      {
        id: "non-food-grade",

        name: "Rose Water",

        subtitle: "Non-Food Grade",

        description:
          "Non-Food Grade Rose Water using synthetic rose perfume to provide a consistent rose fragrance for suitable non-food devotional and fragrance applications.",

        foodGrade: false,

        image: "/images/products/rose-water-1.webp",

        sizes: [
          "200 ml",
          "500 ml",
          "1 Litre",
        ],
      },
    ],

    specifications: [
      {
        label: "Product",
        value: "Rose Water",
      },

      {
        label: "Brand",
        value: "Hari Nandanam",
      },

      {
        label: "Category",
        value: "Pooja & Devotional Products",
      },

      {
        label: "Variants",
        value: "Food Grade & Non-Food Grade",
      },

      {
        label: "Manufacturer",
        value: "Unitech Industries",
      },
    ],

    faqs: [
      {
        question:
          "What varieties of Hari Nandanam Rose Water are available?",
        answer:
          "Hari Nandanam Rose Water is available in Food Grade and Non-Food Grade varieties.",
      },

      {
        question:
          "What is the Food Grade Rose Water made from?",
        answer:
          "The Food Grade variety comes from natural rose and is intended for applications where food-grade rose water is required.",
      },

      {
        question:
          "What is the Non-Food Grade Rose Water made with?",
        answer:
          "The Non-Food Grade variety uses synthetic rose perfume to provide a consistent rose fragrance.",
      },

      {
        question:
          "Can the Non-Food Grade Rose Water be consumed?",
        answer:
          "No. The Non-Food Grade variety is not intended for food or consumption.",
      },

      {
        question: "What sizes are available?",
        answer:
          "Hari Nandanam Rose Water is available in 200 ml, 500 ml and 1 litre packs.",
      },

      {
        question: "How should Rose Water be stored?",
        answer:
          "Keep the container properly closed and store it according to the storage instructions provided on the product packaging. Avoid excessive heat and direct sunlight.",
      },
    ],

    relatedProducts: [
      "camphor",
      "lamp-oil",
      "kumkum",
      "vibuthi",
      "kalabham",
      "dhoop-sticks",
      "dhoop-cones",
      "natural-sambrani-sticks",
      "natural-spices-sticks",
    ],

    seo: {
      title: "Rose Water for Pooja & Devotional Use | Hari Nandanam",

      description:
        "Hari Nandanam Rose Water for pooja and devotional use, available in Food Grade made from natural rose and Non-Food Grade varieties.",

      keywords: [
        "rose water for pooja",
        "rose water for devotional use",
        "food grade rose water",
        "natural rose water",
        "pooja rose water",
        "Hari Nandanam rose water",
      ],
    },
  },

  // ============================================================
  // LAMP OIL
  // ============================================================

  {
    slug: "lamp-oil",

    name: "Lamp Oil",

    shortName: "Lamp Oil",

    category: "Pooja & Devotional Products",

    tagline: "For Every Sacred Flame.",

    shortDescription:
      "Hari Nandanam Lamp Oil for traditional lamp lighting, daily pooja and devotional rituals.",

    description:
      "Hari Nandanam Lamp Oil is intended for traditional lamp lighting, daily pooja and devotional rituals at home, temples and religious occasions.",

    heroImage: "/images/products/lamp-oil-1.webp",

    images: [
      "/images/products/lamp-oil-1.webp",
    ],

    features: [
      "Suitable for traditional lamps",
      "Ideal for daily pooja",
      "Suitable for devotional rituals",
      "Available in convenient pack sizes",
    ],

    suitableFor: [
      "Daily Pooja",
      "Traditional Lamp Lighting",
      "Temple Worship",
      "Festivals & Religious Occasions",
    ],

    usage: [
      "Fill the appropriate quantity of lamp oil into a suitable lamp.",
      "Place the wick correctly before lighting.",
      "Light the lamp carefully.",
      "Keep the burning lamp away from flammable materials and unattended areas.",
    ],

    sizes: [
      "200 ml",
      "500 ml",
      "1 Litre",
    ],

    specifications: [
      {
        label: "Product",
        value: "Lamp Oil",
      },

      {
        label: "Brand",
        value: "Hari Nandanam",
      },

      {
        label: "Category",
        value: "Pooja & Devotional Products",
      },

      {
        label: "Usage",
        value: "Traditional Lamp Lighting & Pooja",
      },

      {
        label: "Manufacturer",
        value: "Unitech Industries",
      },
    ],

    faqs: [
      {
        question: "What is Hari Nandanam Lamp Oil used for?",
        answer:
          "Hari Nandanam Lamp Oil is intended for traditional lamp lighting, daily pooja and devotional rituals.",
      },

      {
        question: "Can it be used for daily pooja?",
        answer:
          "Yes. It is intended for regular devotional lamp lighting and pooja.",
      },

      {
        question: "What sizes are available?",
        answer:
          "Hari Nandanam Lamp Oil is available in 200 ml, 500 ml and 1 litre packs.",
      },

      {
        question: "How should lamp oil be stored?",
        answer:
          "Store the product in its original closed container in a cool, dry place away from direct sunlight, heat and sources of ignition.",
      },
    ],

    relatedProducts: [
      "camphor",
      "rose-water",
      "kumkum",
      "vibuthi",
      "kalabham",
      "dhoop-sticks",
      "dhoop-cones",
      "natural-sambrani-sticks",
      "natural-spices-sticks",
    ],

    seo: {
      title: "Lamp Oil for Pooja & Traditional Lamps | Hari Nandanam",

      description:
        "Hari Nandanam Lamp Oil for daily pooja, traditional lamp lighting, temple worship and devotional rituals.",

      keywords: [
        "lamp oil for pooja",
        "pooja lamp oil",
        "lamp oil",
        "oil for traditional lamps",
        "Hari Nandanam lamp oil",
      ],
    },
  },

  // ============================================================
  // KUMKUM
  // ============================================================

  {
    slug: "kumkum",

    name: "Kumkum",

    shortName: "Kumkum",

    category: "Pooja & Devotional Products",

    tagline: "A Traditional Mark of Devotion.",

    shortDescription:
      "Hari Nandanam Kumkum for traditional pooja, devotional practices and religious occasions.",

    description:
      "Hari Nandanam Kumkum is intended for traditional pooja, devotional practices and religious occasions. It is designed for convenient everyday use at home and during festivals and special ceremonies.",

    heroImage: "/images/products/kumkum.webp",

    images: [
      "/images/products/kumkum.webp",
    ],

    features: [
      "Suitable for traditional pooja",
      "Ideal for daily devotional use",
      "Suitable for religious occasions",
      "Conveniently packed",
    ],

    suitableFor: [
      "Daily Pooja",
      "Temple Worship",
      "Festivals",
      "Traditional Religious Occasions",
    ],

    usage: [
      "Use according to your customary religious or devotional practice.",
      "Keep the product dry and use a clean applicator where appropriate.",
    ],

    sizes: [],

    specifications: [
      {
        label: "Product",
        value: "Kumkum",
      },

      {
        label: "Brand",
        value: "Hari Nandanam",
      },

      {
        label: "Category",
        value: "Pooja & Devotional Products",
      },

      {
        label: "Usage",
        value: "Pooja & Traditional Devotional Practices",
      },

      {
        label: "Manufacturer",
        value: "Unitech Industries",
      },
    ],

    faqs: [
      {
        question: "What is Hari Nandanam Kumkum used for?",
        answer:
          "Hari Nandanam Kumkum is intended for traditional pooja, devotional practices and religious occasions.",
      },

      {
        question: "Can Kumkum be used for daily pooja?",
        answer:
          "Yes. It is suitable for regular devotional practices and pooja.",
      },

      {
        question: "How should Kumkum be stored?",
        answer:
          "Keep the package tightly closed and store the product in a cool, dry place away from moisture.",
      },
    ],

    relatedProducts: [
      "camphor",
      "rose-water",
      "vibuthi",
      "kalabham",
      "lamp-oil",
      "dhoop-sticks",
      "dhoop-cones",
      "natural-sambrani-sticks",
      "natural-spices-sticks",
    ],

    seo: {
      title: "Kumkum for Pooja & Traditional Worship | Hari Nandanam",

      description:
        "Hari Nandanam Kumkum for daily pooja, traditional devotional practices, festivals and religious occasions.",

      keywords: [
        "kumkum",
        "kumkum for pooja",
        "pooja kumkum",
        "traditional kumkum",
        "Hari Nandanam kumkum",
      ],
    },
  },

  // ============================================================
  // VIBUTHI
  // ============================================================

  {
    slug: "vibuthi",

    name: "Vibuthi",

    shortName: "Vibuthi",

    category: "Pooja & Devotional Products",

    tagline: "Tradition in Every Sacred Mark.",

    shortDescription:
      "Hari Nandanam Vibuthi for traditional worship, pooja and devotional practices.",

    description:
      "Hari Nandanam Vibuthi is intended for traditional worship and devotional practices. It is suitable for daily pooja, temple worship, religious occasions and customary devotional use.",

    heroImage: "/images/products/vibuthi.webp",

    images: [
      "/images/products/vibuthi.webp",
    ],

    features: [
      "Suitable for traditional worship",
      "Ideal for daily pooja",
      "Suitable for temple and home worship",
      "Conveniently packed",
    ],

    suitableFor: [
      "Daily Pooja",
      "Temple Worship",
      "Religious Occasions",
      "Traditional Devotional Practices",
    ],

    usage: [
      "Use according to your customary religious or devotional practice.",
      "Keep the product dry and the package properly closed when not in use.",
    ],

    sizes: [],

    specifications: [
      {
        label: "Product",
        value: "Vibuthi",
      },

      {
        label: "Brand",
        value: "Hari Nandanam",
      },

      {
        label: "Category",
        value: "Pooja & Devotional Products",
      },

      {
        label: "Usage",
        value: "Traditional Worship & Devotional Practices",
      },

      {
        label: "Manufacturer",
        value: "Unitech Industries",
      },
    ],

    faqs: [
      {
        question: "What is Hari Nandanam Vibuthi used for?",
        answer:
          "Hari Nandanam Vibuthi is intended for traditional worship, pooja and devotional practices.",
      },

      {
        question: "Can Vibuthi be used for daily pooja?",
        answer:
          "Yes. It is suitable for regular devotional use according to customary practices.",
      },

      {
        question: "How should Vibuthi be stored?",
        answer:
          "Keep the package properly closed and store it in a cool, dry place away from moisture.",
      },
    ],

    relatedProducts: [
      "camphor",
      "rose-water",
      "kumkum",
      "kalabham",
      "lamp-oil",
      "dhoop-sticks",
      "dhoop-cones",
      "natural-sambrani-sticks",
      "natural-spices-sticks",
    ],

    seo: {
      title: "Vibuthi for Pooja & Traditional Worship | Hari Nandanam",

      description:
        "Hari Nandanam Vibuthi for daily pooja, traditional worship, temple use and devotional practices.",

      keywords: [
        "vibuthi",
        "vibhuti",
        "vibuthi for pooja",
        "pooja vibuthi",
        "traditional vibuthi",
        "Hari Nandanam vibuthi",
      ],
    },
  },

  // ============================================================
  // KALABHAM
  // ============================================================

  {
    slug: "kalabham",

    name: "Kalabham (Sandalwood Powder)",

    shortName: "Kalabham",

    category: "Pooja & Devotional Products",

    tagline: "The Fragrance of Sacred Tradition.",

    shortDescription:
      "Hari Nandanam Kalabham, a sandalwood powder product intended for traditional pooja and devotional practices.",

    description:
      "Hari Nandanam Kalabham is sandalwood powder intended for traditional pooja, devotional practices and religious occasions. It is suitable for customary worship at home, temples and during special religious ceremonies.",

    heroImage: "/images/products/kalabham.webp",

    images: [
      "/images/products/kalabham.webp",
    ],

    features: [
      "Sandalwood powder for traditional worship",
      "Suitable for pooja and devotional practices",
      "Suitable for temple and home worship",
      "Conveniently packed",
    ],

    suitableFor: [
      "Daily Pooja",
      "Temple Worship",
      "Festivals",
      "Traditional Religious Occasions",
    ],

    usage: [
      "Use according to your customary religious or devotional practice.",
      "Prepare or apply according to the requirements of your traditional ritual.",
    ],

    sizes: [],

    specifications: [
      {
        label: "Product",
        value: "Kalabham (Sandalwood Powder)",
      },

      {
        label: "Brand",
        value: "Hari Nandanam",
      },

      {
        label: "Category",
        value: "Pooja & Devotional Products",
      },

      {
        label: "Usage",
        value: "Pooja & Traditional Devotional Practices",
      },

      {
        label: "Manufacturer",
        value: "Unitech Industries",
      },
    ],

    faqs: [
      {
        question: "What is Hari Nandanam Kalabham?",
        answer:
          "Hari Nandanam Kalabham is a sandalwood powder product intended for traditional pooja and devotional practices.",
      },

      {
        question: "What is Kalabham used for?",
        answer:
          "Kalabham is used according to customary devotional and religious practices during pooja and other traditional rituals.",
      },

      {
        question: "Can Kalabham be used for daily pooja?",
        answer:
          "Yes. It is suitable for customary daily devotional practices.",
      },

      {
        question: "How should Kalabham be stored?",
        answer:
          "Keep the package tightly closed and store the product in a cool, dry place away from moisture.",
      },
    ],

    relatedProducts: [
      "camphor",
      "rose-water",
      "kumkum",
      "vibuthi",
      "lamp-oil",
      "dhoop-sticks",
      "dhoop-cones",
      "natural-sambrani-sticks",
      "natural-spices-sticks",
    ],

    seo: {
      title: "Kalabham Sandalwood Powder for Pooja | Hari Nandanam",

      description:
        "Hari Nandanam Kalabham (Sandalwood Powder) for pooja, temple worship, devotional practices and traditional religious occasions.",

      keywords: [
        "kalabham",
        "kalabham powder",
        "sandalwood powder for pooja",
        "sandalwood powder",
        "pooja sandalwood powder",
        "Hari Nandanam kalabham",
      ],
    },
  },

  // ============================================================
  // DHOOP STICKS
  // ============================================================

  {
    slug: "dhoop-sticks",

    name: "Dhoop Sticks",

    shortName: "Dhoop Sticks",

    category: "Incense & Fragrance Products",

    tagline: "A Fragrant Tradition for Every Sacred Moment.",

    shortDescription:
      "Hari Nandanam Dhoop Sticks are available in Rose, Jasmine, Sandal and Javadhu fragrances in convenient 90 gm jars.",

    description:
      "Hari Nandanam Dhoop Sticks are made for pooja, prayer, meditation and everyday devotional use. Available in Rose, Jasmine, Sandal and Javadhu fragrances, each variety is packed in a convenient 90 gm jar.",

    heroImage: "/images/products/dhoop-sticks.webp",

    images: [
      "/images/products/dhoop-sticks.webp",
    ],

    features: [
      "Available in four fragrances",
      "Rose, Jasmine, Sandal and Javadhu varieties",
      "90 gm jar",
      "Suitable for pooja and devotional use",
      "Suitable for prayer and meditation",
    ],

    suitableFor: [
      "Daily Pooja",
      "Prayer",
      "Meditation",
      "Temple Worship",
      "Festivals & Religious Occasions",
    ],

    usage: [
      "Place a dhoop stick in a suitable heat-resistant holder.",
      "Light the tip carefully and allow it to catch fire.",
      "Extinguish the flame and allow the dhoop stick to smoulder.",
      "Keep the burning dhoop stick away from flammable materials and unattended areas.",
    ],

    sizes: [
      "90 gm Jar",
    ],

    variants: [
      {
        id: "rose",
        name: "Rose Dhoop Sticks",
        subtitle: "Rose Fragrance",
        description:
          "Hari Nandanam Rose Dhoop Sticks with a floral rose fragrance for pooja, prayer and devotional use.",
        image: "/images/products/dhoop-sticks/rose.webp",
        sizes: [
          "90 gm Jar",
        ],
      },
      {
        id: "jasmine",
        name: "Jasmine Dhoop Sticks",
        subtitle: "Jasmine Fragrance",
        description:
          "Hari Nandanam Jasmine Dhoop Sticks with a jasmine fragrance for pooja, prayer and devotional use.",
        image: "/images/products/dhoop-sticks/jasmine.webp",
        sizes: [
          "90 gm Jar",
        ],
      },
      {
        id: "sandal",
        name: "Sandal Dhoop Sticks",
        subtitle: "Sandal Fragrance",
        description:
          "Hari Nandanam Sandal Dhoop Sticks with a sandal fragrance for pooja, prayer and devotional use.",
        image: "/images/products/dhoop-sticks/sandal.webp",
        sizes: [
          "90 gm Jar",
        ],
      },
      {
        id: "javadhu",
        name: "Javadhu Dhoop Sticks",
        subtitle: "Javadhu Fragrance",
        description:
          "Hari Nandanam Javadhu Dhoop Sticks with a traditional Javadhu fragrance for pooja, prayer and devotional use.",
        image: "/images/products/dhoop-sticks/javadhu.webp",
        sizes: [
          "90 gm Jar",
        ],
      },
    ],

    specifications: [
      {
        label: "Product",
        value: "Dhoop Sticks",
      },
      {
        label: "Brand",
        value: "Hari Nandanam",
      },
      {
        label: "Category",
        value: "Incense & Fragrance Products",
      },
      {
        label: "Fragrances",
        value: "Rose, Jasmine, Sandal & Javadhu",
      },
      {
        label: "Pack Size",
        value: "90 gm Jar",
      },
      {
        label: "Manufacturer",
        value: "Unitech Industries",
      },
    ],

    faqs: [
      {
        question: "What fragrances are available in Hari Nandanam Dhoop Sticks?",
        answer:
          "Hari Nandanam Dhoop Sticks are available in Rose, Jasmine, Sandal and Javadhu fragrances.",
      },
      {
        question: "What is the pack size?",
        answer:
          "Hari Nandanam Dhoop Sticks are packed in 90 gm jars.",
      },
      {
        question: "What are Dhoop Sticks used for?",
        answer:
          "Dhoop Sticks are intended for pooja, prayer, meditation and traditional devotional use.",
      },
      {
        question: "How should Dhoop Sticks be used?",
        answer:
          "Place a dhoop stick in a suitable heat-resistant holder, light the tip carefully, extinguish the flame and allow it to smoulder.",
      },
      {
        question: "How should Dhoop Sticks be stored?",
        answer:
          "Keep the jar tightly closed and store the product in a cool, dry place away from moisture, heat and direct sunlight.",
      },
    ],

    relatedProducts: [
      "dhoop-cones",
      "natural-sambrani-sticks",
      "natural-spices-sticks",
      "camphor",
      "lamp-oil",
    ],

    seo: {
      title: "Dhoop Sticks - Rose, Jasmine, Sandal & Javadhu | Hari Nandanam",

      description:
        "Hari Nandanam Dhoop Sticks in Rose, Jasmine, Sandal and Javadhu fragrances. 90 gm jars for pooja, prayer, meditation and devotional use.",

      keywords: [
        "dhoop sticks",
        "dhoop sticks for pooja",
        "rose dhoop sticks",
        "jasmine dhoop sticks",
        "sandal dhoop sticks",
        "javadhu dhoop sticks",
        "incense sticks",
        "pooja dhoop sticks",
        "Hari Nandanam dhoop sticks",
      ],
    },
  },

  // ============================================================
  // DHOOP CONES
  // ============================================================

  {
    slug: "dhoop-cones",

    name: "Dhoop Cones",

    shortName: "Dhoop Cones",

    category: "Incense & Fragrance Products",

    tagline: "Fragrance in a Traditional Cone.",

    shortDescription:
      "Hari Nandanam Dhoop Cones are available in Rose, Jasmine, Sandal and Javadhu fragrances in convenient 90 gm jars.",

    description:
      "Hari Nandanam Dhoop Cones are made for pooja, prayer, meditation and everyday devotional use. Available in Rose, Jasmine, Sandal and Javadhu fragrances, each variety is packed in a convenient 90 gm jar.",

    heroImage: "/images/products/dhoop-cones.webp",

    images: [
      "/images/products/dhoop-cones.webp",
    ],

    features: [
      "Available in four fragrances",
      "Rose, Jasmine, Sandal and Javadhu varieties",
      "90 gm jar",
      "Suitable for pooja and devotional use",
      "Suitable for prayer and meditation",
    ],

    suitableFor: [
      "Daily Pooja",
      "Prayer",
      "Meditation",
      "Temple Worship",
      "Festivals & Religious Occasions",
    ],

    usage: [
      "Place a dhoop cone on a suitable heat-resistant incense holder.",
      "Light the tip carefully and allow it to catch fire.",
      "Extinguish the flame and allow the cone to smoulder.",
      "Keep the burning dhoop cone away from flammable materials and unattended areas.",
    ],

    sizes: [
      "90 gm Jar",
    ],

    variants: [
      {
        id: "rose",
        name: "Rose Dhoop Cones",
        subtitle: "Rose Fragrance",
        description:
          "Hari Nandanam Rose Dhoop Cones with a floral rose fragrance for pooja, prayer and devotional use.",
        image: "/images/products/dhoop-cones/rose.webp",
        sizes: [
          "90 gm Jar",
        ],
      },
      {
        id: "jasmine",
        name: "Jasmine Dhoop Cones",
        subtitle: "Jasmine Fragrance",
        description:
          "Hari Nandanam Jasmine Dhoop Cones with a jasmine fragrance for pooja, prayer and devotional use.",
        image: "/images/products/dhoop-cones/jasmine.webp",
        sizes: [
          "90 gm Jar",
        ],
      },
      {
        id: "sandal",
        name: "Sandal Dhoop Cones",
        subtitle: "Sandal Fragrance",
        description:
          "Hari Nandanam Sandal Dhoop Cones with a sandal fragrance for pooja, prayer and devotional use.",
        image: "/images/products/dhoop-cones/sandal.webp",
        sizes: [
          "90 gm Jar",
        ],
      },
      {
        id: "javadhu",
        name: "Javadhu Dhoop Cones",
        subtitle: "Javadhu Fragrance",
        description:
          "Hari Nandanam Javadhu Dhoop Cones with a traditional Javadhu fragrance for pooja, prayer and devotional use.",
        image: "/images/products/dhoop-cones/javadhu.webp",
        sizes: [
          "90 gm Jar",
        ],
      },
    ],

    specifications: [
      {
        label: "Product",
        value: "Dhoop Cones",
      },
      {
        label: "Brand",
        value: "Hari Nandanam",
      },
      {
        label: "Category",
        value: "Incense & Fragrance Products",
      },
      {
        label: "Fragrances",
        value: "Rose, Jasmine, Sandal & Javadhu",
      },
      {
        label: "Pack Size",
        value: "90 gm Jar",
      },
      {
        label: "Manufacturer",
        value: "Unitech Industries",
      },
    ],

    faqs: [
      {
        question: "What fragrances are available in Hari Nandanam Dhoop Cones?",
        answer:
          "Hari Nandanam Dhoop Cones are available in Rose, Jasmine, Sandal and Javadhu fragrances.",
      },
      {
        question: "What is the pack size?",
        answer:
          "Hari Nandanam Dhoop Cones are packed in 90 gm jars.",
      },
      {
        question: "What are Dhoop Cones used for?",
        answer:
          "Dhoop Cones are intended for pooja, prayer, meditation and traditional devotional use.",
      },
      {
        question: "How should Dhoop Cones be used?",
        answer:
          "Place a dhoop cone on a suitable heat-resistant holder, light the tip carefully, extinguish the flame and allow it to smoulder.",
      },
      {
        question: "How should Dhoop Cones be stored?",
        answer:
          "Keep the jar tightly closed and store the product in a cool, dry place away from moisture, heat and direct sunlight.",
      },
    ],

    relatedProducts: [
      "dhoop-sticks",
      "natural-sambrani-sticks",
      "natural-spices-sticks",
      "camphor",
      "lamp-oil",
    ],

    seo: {
      title: "Dhoop Cones - Rose, Jasmine, Sandal & Javadhu | Hari Nandanam",

      description:
        "Hari Nandanam Dhoop Cones in Rose, Jasmine, Sandal and Javadhu fragrances. 90 gm jars for pooja, prayer, meditation and devotional use.",

      keywords: [
        "dhoop cones",
        "dhoop cones for pooja",
        "rose dhoop cones",
        "jasmine dhoop cones",
        "sandal dhoop cones",
        "javadhu dhoop cones",
        "pooja dhoop cones",
        "incense cones",
        "Hari Nandanam dhoop cones",
      ],
    },
  },

  // ============================================================
  // NATURAL SAMBRANI STICKS
  // ============================================================

  {
    slug: "natural-sambrani-sticks",

    name: "Natural Sambrani Sticks",

    shortName: "Natural Sambrani Sticks",

    category: "Incense & Fragrance Products",

    tagline: "The Traditional Fragrance of Sambrani.",

    shortDescription:
      "Hari Nandanam Natural Sambrani Sticks made with pure natural ingredients, packed in a 200 gm jar with 1 hour+ burning time.",

    description:
      "Hari Nandanam Natural Sambrani Sticks are made with pure natural ingredients and are intended for pooja, prayer, meditation and traditional devotional use. Each 200 gm jar offers a burning time of 1 hour or more.",

    heroImage: "/images/products/natural-sambrani-sticks.webp",

    images: [
      "/images/products/natural-sambrani-sticks.webp",
    ],

    features: [
      "Pure natural ingredients",
      "1 hour+ burning time",
      "200 gm jar",
      "Suitable for pooja and devotional use",
      "Suitable for prayer and meditation",
    ],

    suitableFor: [
      "Daily Pooja",
      "Prayer",
      "Meditation",
      "Temple Worship",
      "Traditional Devotional Practices",
    ],

    usage: [
      "Place a Natural Sambrani Stick in a suitable heat-resistant holder.",
      "Light the tip carefully and allow it to catch fire.",
      "Extinguish the flame and allow the stick to smoulder.",
      "Keep the burning stick away from flammable materials and unattended areas.",
    ],

    sizes: [
      "200 gm Jar",
    ],

    specifications: [
      {
        label: "Product",
        value: "Natural Sambrani Sticks",
      },
      {
        label: "Brand",
        value: "Hari Nandanam",
      },
      {
        label: "Category",
        value: "Incense & Fragrance Products",
      },
      {
        label: "Ingredients",
        value: "Pure Natural Ingredients",
      },
      {
        label: "Burning Time",
        value: "1 Hour+",
      },
      {
        label: "Pack Size",
        value: "200 gm Jar",
      },
      {
        label: "Manufacturer",
        value: "Unitech Industries",
      },
    ],

    faqs: [
      {
        question: "What are Hari Nandanam Natural Sambrani Sticks made with?",
        answer:
          "Hari Nandanam Natural Sambrani Sticks are made with pure natural ingredients.",
      },
      {
        question: "What is the burning time?",
        answer:
          "The stated burning time for Hari Nandanam Natural Sambrani Sticks is 1 hour or more.",
      },
      {
        question: "What is the pack size?",
        answer:
          "Hari Nandanam Natural Sambrani Sticks are packed in 200 gm jars.",
      },
      {
        question: "What are Natural Sambrani Sticks used for?",
        answer:
          "They are intended for pooja, prayer, meditation and traditional devotional use.",
      },
      {
        question: "How should Natural Sambrani Sticks be stored?",
        answer:
          "Keep the jar tightly closed and store the product in a cool, dry place away from moisture, heat and direct sunlight.",
      },
    ],

    relatedProducts: [
      "dhoop-sticks",
      "dhoop-cones",
      "natural-spices-sticks",
      "camphor",
      "lamp-oil",
    ],

    seo: {
      title: "Natural Sambrani Sticks | 1 Hour+ Burning | Hari Nandanam",

      description:
        "Hari Nandanam Natural Sambrani Sticks made with pure natural ingredients, with 1 hour+ burning time in a 200 gm jar.",

      keywords: [
        "natural sambrani sticks",
        "sambrani sticks",
        "sambrani incense sticks",
        "natural sambrani",
        "sambrani sticks for pooja",
        "sambrani for pooja",
        "long burning sambrani sticks",
        "Hari Nandanam sambrani sticks",
      ],
    },
  },

  // ============================================================
  // NATURAL SPICES STICKS
  // ============================================================

  {
    slug: "natural-spices-sticks",

    name: "Natural Spices Sticks",

    shortName: "Natural Spices Sticks",

    category: "Incense & Fragrance Products",

    tagline: "A Warm, Natural Fragrance for Sacred Spaces.",

    shortDescription:
      "Hari Nandanam Natural Spices Sticks made with pure natural ingredients, packed in a 200 gm jar with 1 hour+ burning time.",

    description:
      "Hari Nandanam Natural Spices Sticks are made with pure natural ingredients and are intended for pooja, prayer, meditation and traditional devotional use. Each 200 gm jar offers a burning time of 1 hour or more.",

    heroImage: "/images/products/natural-spices-sticks.webp",

    images: [
      "/images/products/natural-spices-sticks.webp",
    ],

    features: [
      "Pure natural ingredients",
      "1 hour+ burning time",
      "200 gm jar",
      "Suitable for pooja and devotional use",
      "Suitable for prayer and meditation",
    ],

    suitableFor: [
      "Daily Pooja",
      "Prayer",
      "Meditation",
      "Temple Worship",
      "Traditional Devotional Practices",
    ],

    usage: [
      "Place a Natural Spices Stick in a suitable heat-resistant holder.",
      "Light the tip carefully and allow it to catch fire.",
      "Extinguish the flame and allow the stick to smoulder.",
      "Keep the burning stick away from flammable materials and unattended areas.",
    ],

    sizes: [
      "200 gm Jar",
    ],

    specifications: [
      {
        label: "Product",
        value: "Natural Spices Sticks",
      },
      {
        label: "Brand",
        value: "Hari Nandanam",
      },
      {
        label: "Category",
        value: "Incense & Fragrance Products",
      },
      {
        label: "Ingredients",
        value: "Pure Natural Ingredients",
      },
      {
        label: "Burning Time",
        value: "1 Hour+",
      },
      {
        label: "Pack Size",
        value: "200 gm Jar",
      },
      {
        label: "Manufacturer",
        value: "Unitech Industries",
      },
    ],

    faqs: [
      {
        question: "What are Hari Nandanam Natural Spices Sticks made with?",
        answer:
          "Hari Nandanam Natural Spices Sticks are made with pure natural ingredients.",
      },
      {
        question: "What is the burning time?",
        answer:
          "The stated burning time for Hari Nandanam Natural Spices Sticks is 1 hour or more.",
      },
      {
        question: "What is the pack size?",
        answer:
          "Hari Nandanam Natural Spices Sticks are packed in 200 gm jars.",
      },
      {
        question: "What are Natural Spices Sticks used for?",
        answer:
          "They are intended for pooja, prayer, meditation and traditional devotional use.",
      },
      {
        question: "How should Natural Spices Sticks be stored?",
        answer:
          "Keep the jar tightly closed and store the product in a cool, dry place away from moisture, heat and direct sunlight.",
      },
    ],

    relatedProducts: [
      "dhoop-sticks",
      "dhoop-cones",
      "natural-sambrani-sticks",
      "camphor",
      "lamp-oil",
    ],

    seo: {
      title: "Natural Spices Sticks | 1 Hour+ Burning | Hari Nandanam",

      description:
        "Hari Nandanam Natural Spices Sticks made with pure natural ingredients, with 1 hour+ burning time in a 200 gm jar.",

      keywords: [
        "natural spices sticks",
        "spice incense sticks",
        "natural incense sticks",
        "spices sticks for pooja",
        "natural sticks for pooja",
        "long burning incense sticks",
        "Hari Nandanam spices sticks",
      ],
    },
  },

];

// ============================================================
// PRODUCT HELPERS
// ============================================================

export function getProductBySlug(
  slug: string
): Product | undefined {
  return products.find(
    (product) => product.slug === slug
  );
}

export function getRelatedProducts(
  product: Product
): Product[] {
  return product.relatedProducts
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is Product => Boolean(product));
}