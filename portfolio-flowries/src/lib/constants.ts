// App configuration constants
export const APP_CONFIG = {
  name: "Flowries",
  description: "Professional Floral Design & Artistry",
  tagline: "Where nature meets creativity",
  version: "1.0.0",
  author: "Sarah Johnson",
  email: "hello@flowries.com",
  phone: "+1 (555) 123-4567",
  address: "123 Flower Street, Garden City, CA 90210",
  website: "https://flowries.com",

  // Social media links
  social: {
    instagram: "https://instagram.com/flowries_design",
    facebook: "https://facebook.com/flowries",
    twitter: "https://twitter.com/flowries",
    pinterest: "https://pinterest.com/flowries",
    youtube: "https://youtube.com/@flowries",
  },

  // Business hours
  hours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "By appointment only",
  },

  // Service areas
  serviceAreas: [
    "San Francisco Bay Area",
    "Napa Valley",
    "Sonoma County",
    "Peninsula",
    "East Bay",
    "South Bay",
  ],
};

// Animation constants
export const ANIMATION_CONFIG = {
  durations: {
    fast: 300,
    normal: 600,
    slow: 1200,
    verySlow: 2000,
  },

  delays: {
    none: 0,
    short: 100,
    medium: 200,
    long: 500,
  },

  stagger: {
    fast: 0.1,
    normal: 0.2,
    slow: 0.3,
  },

  easing: {
    default: "power2.out",
    bounce: "back.out(1.7)",
    elastic: "elastic.out(1, 0.3)",
    smooth: "power3.out",
  },
};

// UI constants
export const UI_CONFIG = {
  breakpoints: {
    xs: 475,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  },

  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
    toast: 1070,
    cursor: 9999,
  },

  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    "2xl": "4rem",
    "3xl": "6rem",
  },

  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    full: "9999px",
  },
};

// Color palette
export const COLORS = {
  brand: {
    primary: "#f43f5e",
    secondary: "#ec4899",
    accent: "#fb7185",
    light: "#fff1f2",
    dark: "#881337",
  },

  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
  },

  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
  },

  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
};

// Service categories and types
export const SERVICES = {
  categories: [
    {
      id: "wedding",
      name: "Wedding Florals",
      icon: "💒",
      description: "Complete wedding floral design services",
      basePrice: 2500,
    },
    {
      id: "corporate",
      name: "Corporate Events",
      icon: "🏢",
      description: "Professional arrangements for business events",
      basePrice: 800,
    },
    {
      id: "personal",
      name: "Special Occasions",
      icon: "🎉",
      description: "Celebrations and personal milestones",
      basePrice: 150,
    },
    {
      id: "home",
      name: "Home Decor",
      icon: "🏡",
      description: "Seasonal and ongoing home arrangements",
      basePrice: 200,
    },
  ],

  weddingPackages: [
    {
      name: "Essential",
      price: 2500,
      includes: [
        "Bridal bouquet",
        "4 bridesmaid bouquets",
        "6 boutonnieres",
        "4 centerpieces",
        "Ceremony arch decoration",
      ],
    },
    {
      name: "Premium",
      price: 4500,
      includes: [
        "Bridal bouquet",
        "6 bridesmaid bouquets",
        "8 boutonnieres",
        "8 centerpieces",
        "Ceremony arch decoration",
        "Aisle petals",
        "Reception entrance arrangement",
      ],
    },
    {
      name: "Luxury",
      price: 7500,
      includes: [
        "Bridal bouquet",
        "8 bridesmaid bouquets",
        "12 boutonnieres",
        "12 centerpieces",
        "Ceremony arch decoration",
        "Aisle petals",
        "Reception entrance arrangement",
        "Cocktail table arrangements",
        "Cake flowers",
        "Full venue styling",
      ],
    },
  ],

  addOns: [
    { name: "Flower crown", price: 150 },
    { name: "Toss bouquet", price: 75 },
    { name: "Flower girl petals", price: 50 },
    { name: "Additional centerpiece", price: 85 },
    { name: "Corsage", price: 35 },
    { name: "Boutonniere", price: 25 },
    { name: "Setup & delivery", price: 200 },
    { name: "Same-day delivery", price: 100 },
  ],
};

// Portfolio categories and filters
export const PORTFOLIO = {
  categories: [
    { id: "all", name: "All Work", count: 24 },
    { id: "wedding", name: "Weddings", count: 12 },
    { id: "corporate", name: "Corporate", count: 6 },
    { id: "personal", name: "Personal", count: 4 },
    { id: "seasonal", name: "Seasonal", count: 2 },
  ],

  styles: [
    "romantic",
    "modern",
    "rustic",
    "bohemian",
    "classic",
    "minimalist",
    "garden",
    "vintage",
    "tropical",
    "winter",
  ],

  colors: [
    "white",
    "blush",
    "pink",
    "red",
    "burgundy",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "mixed",
    "seasonal",
  ],

  flowers: [
    "roses",
    "peonies",
    "hydrangeas",
    "eucalyptus",
    "baby's breath",
    "orchids",
    "lilies",
    "tulips",
    "sunflowers",
    "dahlias",
    "ranunculus",
    "anemones",
    "freesia",
    "stock",
    "lisianthus",
  ],
};

// Contact form configuration
export const CONTACT_CONFIG = {
  eventTypes: [
    { value: "wedding", label: "Wedding" },
    { value: "corporate", label: "Corporate Event" },
    { value: "personal", label: "Personal Celebration" },
    { value: "home", label: "Home Decor" },
    { value: "other", label: "Other" },
  ],

  budgetRanges: [
    { value: "under-500", label: "Under $500" },
    { value: "500-1000", label: "$500 - $1,000" },
    { value: "1000-2500", label: "$1,000 - $2,500" },
    { value: "2500-5000", label: "$2,500 - $5,000" },
    { value: "over-5000", label: "Over $5,000" },
  ],

  timeframes: [
    { value: "asap", label: "ASAP" },
    { value: "1-month", label: "Within 1 month" },
    { value: "3-months", label: "Within 3 months" },
    { value: "6-months", label: "Within 6 months" },
    { value: "1-year", label: "Within 1 year" },
    { value: "planning", label: "Just planning ahead" },
  ],

  emailTemplates: {
    autoReply: {
      subject: "Thank you for contacting Flowries!",
      message: `
        Hi {name},
        
        Thank you for reaching out! I'm excited to learn about your vision for {eventType}.
        
        I've received your inquiry and will get back to you within 24 hours with some initial ideas and to schedule a consultation.
        
        In the meantime, feel free to browse my portfolio for inspiration!
        
        Best regards,
        Sarah Johnson
        Flowries
      `,
    },
  },
};

// SEO and metadata
export const SEO_CONFIG = {
  title: "Flowries - Professional Floral Design & Wedding Flowers",
  description:
    "Expert floral designer creating stunning arrangements for weddings, corporate events, and special occasions in the San Francisco Bay Area.",
  keywords: [
    "floral design",
    "wedding flowers",
    "florist",
    "flower arrangements",
    "bridal bouquets",
    "corporate events",
    "bay area florist",
    "wedding decorator",
    "flower delivery",
    "custom arrangements",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Flowries",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flowries - Professional Floral Design",
      },
    ],
  },

  structuredData: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Flowries",
    description: "Professional floral design services",
    image: "/images/logo.jpg",
    telephone: "+1-555-123-4567",
    email: "hello@flowries.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Flower Street",
      addressLocality: "Garden City",
      addressRegion: "CA",
      postalCode: "90210",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0522,
      longitude: -118.2437,
    },
    url: "https://flowries.com",
    priceRange: "$$",
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
  },
};

// Performance and optimization
export const PERFORMANCE_CONFIG = {
  imageOptimization: {
    quality: 85,
    formats: ["webp", "jpeg"],
    sizes: [640, 768, 1024, 1280, 1920],
    placeholder: "blur",
    loading: "lazy",
  },

  caching: {
    staticAssets: "1y",
    images: "1y",
    fonts: "1y",
    api: "1h",
    pages: "1d",
  },

  lazyLoading: {
    rootMargin: "50px",
    threshold: 0.1,
    images: true,
    components: true,
  },

  preload: {
    criticalImages: ["/images/hero-bg.jpg", "/images/logo.svg"],
    fonts: ["/fonts/geist-sans.woff2", "/fonts/geist-mono.woff2"],
  },
};

// Analytics and tracking
export const ANALYTICS_CONFIG = {
  googleAnalytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    enabled: process.env.NODE_ENV === "production",
  },

  events: {
    contactForm: "contact_form_submit",
    portfolioView: "portfolio_item_view",
    serviceInquiry: "service_inquiry",
    phoneCall: "phone_call_click",
    emailClick: "email_click",
    socialClick: "social_media_click",
    downloadBrochure: "brochure_download",
    newsletterSignup: "newsletter_signup",
    consultationBook: "consultation_booking",
    portfolioFilter: "portfolio_filter_change",
  },

  customDimensions: {
    eventType: "custom_dimension_1",
    budgetRange: "custom_dimension_2",
    serviceArea: "custom_dimension_3",
    referralSource: "custom_dimension_4",
  },
};

// Toast messages
export const TOAST_MESSAGES = {
  success: {
    formSubmit: "Thank you! Your message has been sent successfully.",
    newsletter: "Successfully subscribed to our newsletter!",
    appointment: "Consultation booked successfully!",
    quote: "Quote request sent! We'll get back to you soon.",
    contact: "Message sent! Expect a response within 24 hours.",
  },

  error: {
    formSubmit:
      "Sorry, there was an error sending your message. Please try again.",
    newsletter: "Subscription failed. Please check your email and try again.",
    appointment: "Booking failed. Please try again or call us directly.",
    network: "Network error. Please check your connection and try again.",
    validation: "Please fill in all required fields correctly.",
  },

  warning: {
    unsavedChanges: "You have unsaved changes. Are you sure you want to leave?",
    sessionExpiring: "Your session is about to expire.",
    quota:
      "You've reached the maximum number of requests. Please try again later.",
  },

  info: {
    loading: "Loading...",
    processing: "Processing your request...",
    saving: "Saving...",
    uploading: "Uploading images...",
  },

  flowries: {
    welcome:
      "🌸 Welcome to Flowries! Let's create something beautiful together.",
    inspiration: "✨ New portfolio pieces added! Check out our latest work.",
    seasonal: "🌺 Spring collection now available! Book your consultation.",
    holiday: "🎄 Holiday arrangements booking now! Limited availability.",
    appreciation: "💕 Thank you for choosing Flowries for your special day!",
  },
};

// API endpoints and configuration
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "https://api.flowries.com",
  timeout: 10000,
  retries: 3,

  endpoints: {
    contact: "/api/contact",
    newsletter: "/api/newsletter",
    portfolio: "/api/portfolio",
    services: "/api/services",
    booking: "/api/booking",
    gallery: "/api/gallery",
    testimonials: "/api/testimonials",
    blog: "/api/blog",
  },

  rateLimit: {
    contact: 5, // 5 requests per hour
    newsletter: 3, // 3 requests per hour
    general: 100, // 100 requests per hour
  },
};

// Feature flags
export const FEATURE_FLAGS = {
  newsletter: true,
  blog: false,
  onlineBooking: true,
  paymentIntegration: false,
  virtualConsultation: true,
  aiChatbot: false,
  multiLanguage: false,
  darkMode: false,
  accessibility: true,
  analytics: true,
};

// Content management
export const CONTENT_CONFIG = {
  testimonials: [
    {
      id: 1,
      name: "Emily Rodriguez",
      role: "Bride",
      image: "/images/testimonials/emily.jpg",
      rating: 5,
      text: "Sarah created the most beautiful wedding florals I could have ever imagined. Every detail was perfect, and she truly understood our vision. Our guests are still talking about how stunning everything looked!",
      event: "Napa Valley Wedding",
      date: "2024-06-15",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Event Coordinator",
      image: "/images/testimonials/michael.jpg",
      rating: 5,
      text: "Working with Flowries for our corporate events has been exceptional. Professional, creative, and always exceeds expectations. Sarah's attention to detail is unmatched.",
      event: "Tech Conference 2024",
      date: "2024-05-20",
    },
    {
      id: 3,
      name: "Jessica Taylor",
      role: "Anniversary Celebration",
      image: "/images/testimonials/jessica.jpg",
      rating: 5,
      text: "The anniversary bouquet Sarah created was absolutely stunning. She captured the romance and elegance we wanted perfectly. Highly recommend!",
      event: "25th Anniversary",
      date: "2024-04-10",
    },
  ],

  faqs: [
    {
      question: "How far in advance should I book?",
      answer:
        "For weddings, I recommend booking 6-12 months in advance to ensure availability and adequate planning time. For other events, 2-4 weeks is usually sufficient, though I can accommodate rush orders when possible.",
    },
    {
      question: "Do you offer delivery and setup?",
      answer:
        "Yes! I provide professional delivery and setup services to ensure your arrangements look perfect for your event. Delivery is included within my standard service area.",
    },
    {
      question: "Can you work within my budget?",
      answer:
        "Absolutely! I work with various budgets and can suggest alternatives that maintain the beauty and impact you're looking for while staying within your price range.",
    },
    {
      question: "What's included in wedding packages?",
      answer:
        "Wedding packages typically include consultation, design, all arrangements, delivery, and setup. I can customize based on your specific needs and preferences.",
    },
    {
      question: "Do you preserve bouquets?",
      answer:
        "Yes! I offer bouquet preservation services including pressed flower arrangements, resin preservation, and dried flower displays to help you keep your special arrangements as lasting memories.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "I serve the greater San Francisco Bay Area and surrounding regions. For events outside this area, please contact me to discuss travel arrangements.",
    },
  ],

  about: {
    story: `My journey into floral design began with a simple love for nature's beauty, which has evolved into a deep understanding of how flowers can transform spaces, emotions, and memories. With over 5 years of experience, I've had the privilege of creating arrangements for hundreds of special occasions.
    
    What drives me is the joy I see in my clients' faces when they see their vision come to life. Whether it's a bride's first glimpse of her bouquet or the moment guests enter a beautifully decorated venue, these reactions fuel my passion for this art form.
    
    I believe that every flower has a story to tell, and I'm here to help you tell yours through the timeless beauty of floral design.`,

    mission:
      "To create stunning floral arrangements that capture the essence of life's most precious moments, bringing joy, beauty, and elegance to every celebration.",

    values: [
      "Artistry: Every arrangement is a work of art",
      "Quality: Only the finest, freshest flowers",
      "Service: Exceeding expectations every time",
      "Sustainability: Eco-conscious practices",
      "Passion: Love for what we do shows in every detail",
    ],
  },
};

// Error messages
export const ERROR_MESSAGES = {
  validation: {
    required: "This field is required",
    email: "Please enter a valid email address",
    phone: "Please enter a valid phone number",
    minLength: "Minimum {min} characters required",
    maxLength: "Maximum {max} characters allowed",
    invalidDate: "Please select a valid date",
    futureDate: "Date must be in the future",
  },

  network: {
    offline: "You appear to be offline. Please check your connection.",
    timeout: "Request timed out. Please try again.",
    serverError: "Server error. Please try again later.",
    notFound: "The requested resource was not found.",
    unauthorized: "You are not authorized to access this resource.",
    rateLimited: "Too many requests. Please wait before trying again.",
  },

  file: {
    tooLarge: "File size is too large. Maximum size is {maxSize}MB.",
    invalidType: "Invalid file type. Allowed types: {allowedTypes}",
    uploadFailed: "File upload failed. Please try again.",
    corruptFile: "The file appears to be corrupted.",
  },
};

// Loading states
export const LOADING_STATES = {
  initial: "idle",
  loading: "loading",
  success: "success",
  error: "error",
  submitting: "submitting",
  uploading: "uploading",
  processing: "processing",
};

// Local storage keys
export const STORAGE_KEYS = {
  theme: "flowries_theme",
  preferences: "flowries_preferences",
  cart: "flowries_cart",
  recentViews: "flowries_recent_views",
  newsletter: "flowries_newsletter_status",
  cookieConsent: "flowries_cookie_consent",
  language: "flowries_language",
  accessibility: "flowries_accessibility",
};

// Regex patterns
export const REGEX_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[\d\s\-\(\)]{10,}$/,
  zipCode: /^\d{5}(-\d{4})?$/,
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  creditCard: /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/,
  slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  hexColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  strongPassword:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

// Environment-specific configurations
export const ENV_CONFIG = {
  development: {
    logLevel: "debug",
    enableDevTools: true,
    apiTimeout: 30000,
    enableHotReload: true,
    showDebugInfo: true,
  },
  production: {
    logLevel: "error",
    enableDevTools: false,
    apiTimeout: 10000,
    enableHotReload: false,
    showDebugInfo: false,
  },
  staging: {
    logLevel: "warn",
    enableDevTools: true,
    apiTimeout: 15000,
    enableHotReload: false,
    showDebugInfo: true,
  },
};

// Default configurations based on environment
const currentEnv = process.env.NODE_ENV || "development";
export const CURRENT_ENV_CONFIG =
  ENV_CONFIG[currentEnv as keyof typeof ENV_CONFIG];

// Export all configurations as a single object
export default {
  APP: APP_CONFIG,
  ANIMATION: ANIMATION_CONFIG,
  UI: UI_CONFIG,
  COLORS,
  SERVICES,
  PORTFOLIO,
  CONTACT: CONTACT_CONFIG,
  SEO: SEO_CONFIG,
  PERFORMANCE: PERFORMANCE_CONFIG,
  ANALYTICS: ANALYTICS_CONFIG,
  TOAST: TOAST_MESSAGES,
  API: API_CONFIG,
  FEATURES: FEATURE_FLAGS,
  CONTENT: CONTENT_CONFIG,
  ERRORS: ERROR_MESSAGES,
  LOADING: LOADING_STATES,
  STORAGE: STORAGE_KEYS,
  REGEX: REGEX_PATTERNS,
  ENV: CURRENT_ENV_CONFIG,
};
