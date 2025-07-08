// SEO Configuration and Structured Data
export const siteConfig = {
  name: "Alex Chen",
  title: "Alex Chen - Full Stack Developer Portfolio",
  description:
    "Professional full stack developer specializing in React, Node.js, TypeScript, and modern web technologies. Building exceptional digital experiences with clean code and innovative design.",
  url: "https://alexchen.dev",
  ogImage: "/og-image.jpg",
  twitterImage: "/twitter-image.jpg",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Next.js",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "Portfolio",
    "San Francisco",
    "Software Engineer",
  ],
  author: {
    name: "Alex Chen",
    email: "hello@alexchen.dev",
    url: "https://alexchen.dev",
    social: {
      twitter: "@alexchen",
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
    },
  },
  company: {
    name: "Alex Chen Development",
    type: "Freelance",
  },
};

// Structured Data for Rich Snippets
export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author.name,
  url: siteConfig.url,
  email: siteConfig.author.email,
  jobTitle: "Full Stack Developer",
  description: siteConfig.description,
  image: `${siteConfig.url}/profile-image.jpg`,
  sameAs: [
    siteConfig.author.social.github,
    siteConfig.author.social.linkedin,
    `https://twitter.com/${siteConfig.author.social.twitter.replace("@", "")}`,
  ],
  knowsAbout: [
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Tailwind CSS",
    "GSAP",
    "Web Development",
    "Software Engineering",
    "Cloud Computing",
    "DevOps",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    description: "Develops web applications using modern technologies",
    skills: "React, Node.js, TypeScript, Next.js, JavaScript, Python",
  },
  worksFor: {
    "@type": "Organization",
    name: siteConfig.company.name,
    description: siteConfig.company.type,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

// Website Structured Data
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  author: {
    "@type": "Person",
    name: siteConfig.author.name,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// Professional Service Structured Data
export const professionalServiceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Alex Chen Development Services",
  description:
    "Professional web development services including React applications, Node.js backends, and full-stack solutions",
  url: siteConfig.url,
  telephone: "+1-555-123-4567",
  email: siteConfig.author.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "37.7749",
    longitude: "-122.4194",
  },
  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "$$",
  serviceType: "Web Development",
  provider: {
    "@type": "Person",
    name: siteConfig.author.name,
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Frontend Development",
          description: "React, Next.js, TypeScript applications",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backend Development",
          description: "Node.js, Python, API development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Stack Development",
          description: "Complete web application development",
        },
      },
    ],
  },
};

// Portfolio Projects Structured Data
export const portfolioStructuredData = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Alex Chen Portfolio",
  description:
    "A collection of web development projects showcasing modern technologies",
  author: {
    "@type": "Person",
    name: siteConfig.author.name,
  },
  url: siteConfig.url,
  dateCreated: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isFamilyFriendly: true,
  keywords: siteConfig.keywords.join(", "),
  mainEntity: {
    "@type": "ItemList",
    name: "Featured Projects",
    description: "Showcase of recent web development projects",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        name: "E-Commerce Platform",
        description:
          "Modern e-commerce platform built with Next.js and TypeScript",
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "Task Management App",
        description:
          "Collaborative project management tool with real-time updates",
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
      },
    ],
  },
};

// Blog Article Structured Data Template
export const createArticleStructuredData = (article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
  tags: string[];
  readTime: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: article.title,
  description: article.description,
  image: article.image || `${siteConfig.url}/blog-default.jpg`,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.author.url,
  },
  publisher: {
    "@type": "Person",
    name: siteConfig.author.name,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`,
    },
  },
  url: `${siteConfig.url}/blog/${article.slug}`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/blog/${article.slug}`,
  },
  keywords: article.tags.join(", "),
  wordCount: estimateWordCount(article.readTime),
  timeRequired: article.readTime,
  inLanguage: "en-US",
  isAccessibleForFree: true,
  genre: "Technology",
  about: {
    "@type": "Thing",
    name: "Web Development",
  },
});

// Utility function to estimate word count from read time
function estimateWordCount(readTime: string): number {
  const minutes = parseInt(readTime.replace(/\D/g, ""));
  return minutes * 200; // Average reading speed: 200 words per minute
}

// Breadcrumb Structured Data
export const createBreadcrumbStructuredData = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// FAQ Structured Data for About/Contact sections
export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What technologies do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I specialize in React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, AWS, and modern web development technologies.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with clients remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I work with clients worldwide and offer remote development services for web applications and digital products.",
      },
    },
    {
      "@type": "Question",
      name: "What types of projects do you work on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I work on a variety of projects including e-commerce platforms, web applications, mobile apps, API development, and custom software solutions.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get in touch for a project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact me through the contact form on this website, send an email to hello@alexchen.dev, or connect with me on LinkedIn.",
      },
    },
  ],
};

// Open Graph metadata generator
export const generateOpenGraphMetadata = (pageData?: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) => ({
  title: pageData?.title || siteConfig.title,
  description: pageData?.description || siteConfig.description,
  url: pageData?.url || siteConfig.url,
  siteName: siteConfig.name,
  images: [
    {
      url: pageData?.image || siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: pageData?.title || siteConfig.title,
    },
  ],
  locale: "en_US",
  type: "website",
});

// Twitter metadata generator
export const generateTwitterMetadata = (pageData?: {
  title?: string;
  description?: string;
  image?: string;
}) => ({
  card: "summary_large_image" as const,
  title: pageData?.title || siteConfig.title,
  description: pageData?.description || siteConfig.description,
  creator: siteConfig.author.social.twitter,
  images: [pageData?.image || siteConfig.twitterImage],
});

// Complete metadata generator for pages
export const generatePageMetadata = (pageData?: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  noIndex?: boolean;
}) => ({
  title: pageData?.title || siteConfig.title,
  description: pageData?.description || siteConfig.description,
  keywords: [...siteConfig.keywords, ...(pageData?.keywords || [])],
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: pageData?.url || siteConfig.url,
  },
  openGraph: generateOpenGraphMetadata(pageData),
  twitter: generateTwitterMetadata(pageData),
  robots: {
    index: !pageData?.noIndex,
    follow: !pageData?.noIndex,
    nocache: true,
    googleBot: {
      index: !pageData?.noIndex,
      follow: !pageData?.noIndex,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
});

export default siteConfig;
