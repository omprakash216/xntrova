export const siteData = {
  brand: {
    name: "Xntrova",
    fullName: "Xntrova Technologies",
    tagline: "Scale Your Business With The Best Digital Marketing Agency in Delhi",
    heroSubtitle:
      "Unlock your business potential and connect with your targeted customers by partnering with Xntrova, the best digital marketing agency in Delhi.",
    phone: "+91 868-382-8646",
    email: "info@xntrova.com",
    address: "2703, E-Block, Ansal Palam Vihar, Gurugram, Delhi NCR, India - 122017",
    workingHours: "Mon – Sat: 9:30 AM – 6:30 PM IST",
    socialLinks: {
      facebook: "https://www.facebook.com/xntrova/",
      instagram: "https://www.instagram.com/xntrova.agency/",
      linkedin: "https://www.linkedin.com/company/xntrova/",
      twitter: "https://x.com/xntrova"
    }
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services", hasDropdown: true },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" }
  ],

  // Real Xntrova Services matching the 6 cards in screenshot (served locally to eliminate ERR_NETWORK_CHANGED)
  services: [
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      image: "/images/service-seo.svg",
      tagline: "Rank where high-intent buyers make decisions",
      description:
        "Technical site audits, search intent mapping, and authoritative link acquisition to secure top organic rankings and qualified inbound inquiries.",
      badge: "Organic Search",
      metric: "+250% Search Inbound",
      tags: ["Technical SEO", "Keyword Strategy", "Authority Links"],
      linkText: "Explore Service"
    },
    {
      id: "ppc",
      title: "Paid Advertising (PPC)",
      image: "/images/service-ppc.svg",
      tagline: "High-precision campaigns measured on real ROAS",
      description:
        "Granular Google Search, Meta ads, and Performance Max funnels strictly optimized around acquisition costs, pipeline quality, and revenue yield.",
      badge: "Paid Acquisition",
      metric: "4.8x Avg ROAS",
      tags: ["Google & PMax", "Meta Retargeting", "ROAS Scaling"],
      linkText: "Explore Service"
    },
    {
      id: "smo",
      title: "Social Media Optimization (SMO)",
      image: "/images/service-smo.svg",
      tagline: "Build genuine community loyalty & brand authority",
      description:
        "Engaging short-form creative, executive profile positioning, and active community management that turn passive scrollers into brand advocates.",
      badge: "Brand Authority",
      metric: "3.5x Engagement",
      tags: ["Short-Form Video", "Executive Reach", "Community Growth"],
      linkText: "Explore Service"
    },
    {
      id: "ecommerce",
      title: "E-Commerce Marketing",
      image: "/images/service-ecommerce.svg",
      tagline: "Higher average order value & customer repeat rate",
      description:
        "Full-funnel storefront CRO, friction-free checkout flows, and automated customer retention sequences to scale lifetime store revenue.",
      badge: "Storefront Revenue",
      metric: "+45% Repeat Rate",
      tags: ["Storefront CRO", "Funnel Scaling", "Retention Automation"],
      linkText: "Explore Service"
    },
    {
      id: "content",
      title: "Content Marketing",
      image: "/images/service-content.svg",
      tagline: "Strategic editorial that turns readers into buyers",
      description:
        "High-impact industry teardowns, founder thought leadership, and buyer comparison guides that establish authority and drive sales pipeline.",
      badge: "Editorial Strategy",
      metric: "3.2x Lead Conversion",
      tags: ["Buyer Guides", "Industry Teardowns", "SEO Moats"],
      linkText: "Explore Service"
    },
    {
      id: "web-dev",
      title: "Website Development",
      image: "/images/service-webdev.svg",
      tagline: "Fast, mobile-first web engineering that converts",
      description:
        "High-performance, modern websites and applications built for sub-second load times, seamless user journeys, and maximum conversion rates.",
      badge: "Engineering & UX",
      metric: "Sub-1s Load Time",
      tags: ["Custom Dev", "Core Web Vitals", "Conversion UX"],
      linkText: "Explore Service"
    }
  ],

  // All 13 services for the view all modal
  allServices: [
    { title: "Search Engine Optimization (SEO)", category: "Organic" },
    { title: "Paid Advertising (PPC / SEM)", category: "Performance" },
    { title: "Social Media Optimization (SMO)", category: "Brand" },
    { title: "E-Commerce Marketing", category: "Revenue" },
    { title: "Content Marketing", category: "Content" },
    { title: "Website Development", category: "Engineering" },
    { title: "Email Marketing & Retention", category: "Lifecycle" },
    { title: "Performance Marketing", category: "Performance" },
    { title: "Local SEO & Google Business Profile", category: "Organic" },
    { title: "Video Marketing & Motion Creatives", category: "Creative" },
    { title: "Mobile App Development", category: "Engineering" },
    { title: "Graphic Design & UI/UX", category: "Creative" },
    { title: "Online Reputation Management (ORM)", category: "Brand" }
  ],

  // Real review platforms from screenshot
  reviewPlatforms: [
    { name: "Clutch", rating: "4.9/5", reviews: "Verified Reviews", color: "#E11D48" },
    { name: "Trustpilot", rating: "4.8/5", reviews: "Excellent", color: "#00B67A" },
    { name: "GoodFirms", rating: "4.9/5", reviews: "Top Digital Agency", color: "#2563EB" },
    { name: "DesignRush", rating: "Top Agency", reviews: "Accredited", color: "#0284C7" },
    { name: "Google", rating: "4.9/5", reviews: "Premier Partner", color: "#EA4335" }
  ],

  // Real client logos
  clientLogos: [
    "ETEX Global",
    "NITDA",
    "Aura Living",
    "Nexus Healthcare",
    "Vanguard Systems",
    "FinSphere Wealth",
    "Stratovate",
    "OmniLogistics"
  ],

  // Tools for dual-row marquee
  toolsRow1: ["Ahrefs", "SEMrush", "Meta Ads", "Mailchimp", "Google Analytics 4", "HubSpot", "Google Ads", "Adobe Cloud"],
  toolsRow2: ["Shopify", "WordPress", "Salesforce", "Rank Math", "Moz Pro", "Canva", "Figma", "Klaviyo"],

  // Real client reviews matching screenshot
  testimonials: [
    {
      author: "Amit Verma",
      role: "Managing Director",
      company: "Apex Retail Solutions",
      rating: 5,
      review:
        "What impressed us most about Xntrova was their strategic mindset. They didn't just run ads—they analyzed our unit economics, rebuilt our search visibility, and aligned every campaign directly with our quarterly bottom-line goals."
    },
    {
      author: "Neha Kapoor",
      role: "Head of Marketing",
      company: "CloudScale Software",
      rating: 5,
      review:
        "Xntrova completely demystified performance marketing for our team. Their reporting is transparent, concise, and focused on actual closed pipeline rather than vanity impressions."
    },
    {
      author: "Rahul Sharma",
      role: "E-Commerce Director",
      company: "Moda Lifestyle Group",
      rating: 5,
      review:
        "Their technical SEO expertise solved crawl and indexation bottlenecks our team couldn't identify in two years. Organic search is now our primary revenue channel."
    },
    {
      author: "Ankit Gupta",
      role: "Business Head",
      company: "Vanguard Tech Systems",
      rating: 5,
      review:
        "From campaign structure to high-converting landing pages, the Xntrova team acts as an authentic extension of our internal growth squad. Highly reliable execution."
    }
  ],

  // Real Accordion in "Boost your brand growth" section
  approachAccordions: [
    {
      title: "Comprehensive Digital Marketing Services",
      content:
        "We offer an end-to-end suite of marketing solutions spanning SEO, paid search, social media, conversion optimization, and web engineering under one roof, eliminating agency fragmentation."
    },
    {
      title: "Tailored Marketing Solutions",
      content:
        "Every campaign is custom engineered around your distinct industry niche, audience purchase behavior, margin thresholds, and commercial milestones."
    },
    {
      title: "Data-Driven Approach",
      content:
        "We test relentlessly, tracking CPA, ROAS, pipeline velocity, and organic rank momentum through closed-loop attribution telemetry to scale what works."
    },
    {
      title: "Commitment to Continuous Improvement",
      content:
        "Our iterative optimization sprints refresh creative assets, refine keyword bid strategies, and remove on-page friction to sustain compound return on investment."
    }
  ],

  // Real FAQs from screenshot
  faqs: [
    {
      question: "What services does a digital marketing agency in Delhi NCR provide?",
      answer:
        "A full-service digital marketing agency like Xntrova provides Search Engine Optimization (SEO), Paid Advertising (Google Ads & Meta Ads), Social Media Marketing, E-Commerce CRO, Content Marketing, and Custom Web & App Development tailored for ambitious businesses."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "Paid advertising campaigns (Google Search, Meta Ads) begin generating high-intent traffic and conversions within days of launch. Organic search optimization (SEO) and editorial content authority typically build momentum and compound sustainably within 3 to 6 months."
    },
    {
      question: "How do you measure the success of a digital marketing campaign?",
      answer:
        "We measure success strictly through commercial business metrics: customer acquisition cost (CAC), return on ad spend (ROAS), qualified lead pipeline value, organic ranking positions, and closed revenue—never vanity impressions."
    },
    {
      question: "What is the cost of hiring a digital marketing agency in Delhi NCR?",
      answer:
        "Pricing is tailored based on your business stage, target channels, and growth objectives. We offer flexible performance retainers and deliver a complete scope and ROI forecast during our initial Free Digital Audit."
    },
    {
      question: "Why should I choose Xntrova for digital marketing services?",
      answer:
        "Unlike agencies that operate in silos, Xntrova combines creative storytelling with advanced technology engineering and data telemetry. We guarantee transparent reporting, direct founder-level involvement, and measurable commercial results."
    }
  ],

  // Detailed information for every service in the Mega-Menu
  serviceDetailsMap: {
    "Search Engine Optimization": {
      title: "Search Engine Optimization (SEO)",
      category: "SEO SERVICES",
      tagline: "Dominate Google search results and capture high-intent organic buyers.",
      description: "Our full-funnel search engine optimization combines technical architecture audits, on-page content alignment, high-authority backlink development, and keyword dominance to put your business at the top of Google.",
      highlights: [
        "In-depth Technical SEO & Core Web Vitals optimization",
        "High-intent keyword research and competitor gap analysis",
        "Authoritative link-building and digital PR outreach",
        "Real-time rank tracking and transparent monthly ROI reports"
      ],
      deliverables: ["Full Technical Site Audit", "Target Keyword Matrix", "On-Page SEO Execution", "Monthly Organic Traffic Report"],
      timeline: "Initial results in 60-90 days; compound exponential growth over 6-12 months.",
      anchor: "seo"
    },
    "Local SEO": {
      title: "Local SEO & Google Business Profile",
      category: "SEO SERVICES",
      tagline: "Drive high-intent local footfall and inquiries across Delhi NCR.",
      description: "Optimize your Google Business Profile, local citations, and geo-targeted keywords so nearby customers discover, trust, and call your business before your competitors.",
      highlights: [
        "Google Business Profile (GBP) complete optimization & verification",
        "Consistent NAP citations across 50+ local Indian directories",
        "Geo-targeted landing page creation and schema markup",
        "Review generation strategy and local map pack rank boost"
      ],
      deliverables: ["GBP Audit & Optimization", "Local Citation Building", "Geo-Schema Integration", "Local Rank Tracking"],
      timeline: "Noticeable map pack ranking improvements in 30-45 days.",
      anchor: "quote"
    },
    "SEO Packages": {
      title: "Customized SEO Packages",
      category: "SEO SERVICES",
      tagline: "Scalable monthly SEO plans tailored for startups, SMEs, and enterprise brands.",
      description: "Transparent, deliverable-backed monthly retainer packages that combine technical fixes, monthly content assets, and high-impact authority links designed for every growth stage.",
      highlights: [
        "Starter, Growth, and Enterprise tier packages with clear deliverables",
        "Dedicated SEO Account Director and Slack/WhatsApp coordination",
        "Guaranteed monthly white-hat backlinks and content publication",
        "No long-term lock-in contracts; 100% performance-driven retention"
      ],
      deliverables: ["Custom Scope of Work", "Dedicated Account Manager", "Monthly Content Calendar", "Keyword Performance Dashboards"],
      timeline: "Month-to-month sprints with milestone reviews every 30 days.",
      anchor: "quote"
    },
    "Paid Advertising (PPC)": {
      title: "Paid Advertising (PPC / Google & Meta Ads)",
      category: "PERFORMANCE MARKETING",
      tagline: "High-return paid media funnels engineered for maximum customer acquisition.",
      description: "Precision-targeted paid search, shopping, display, and social ad campaigns on Google Ads, Meta Ads (Instagram/Facebook), and YouTube that maximize ROAS and minimize CAC.",
      highlights: [
        "High-intent Google Search & Performance Max campaign buildouts",
        "Meta Ads creative testing with dynamic catalog ads & retargeting",
        "Conversion rate optimized landing page wireframes and A/B testing",
        "End-to-end conversion tracking with GA4, Google Tag Manager, & Meta CAPI"
      ],
      deliverables: ["Campaign Strategy & Audience Segmentation", "High-Converting Ad Copy & Creatives", "Pixel & CAPI Setup", "Weekly ROAS & CAC Reporting"],
      timeline: "Campaigns launched in 5-7 business days; conversions generated from Day 1.",
      anchor: "ppc"
    },
    "Social Media Optimization": {
      title: "Social Media Optimization (SMO)",
      category: "SOCIAL MEDIA MARKETING",
      tagline: "Transform casual followers into loyal brand advocates.",
      description: "Build an unmistakable digital presence across Instagram, LinkedIn, and Facebook with thumb-stopping creative design, viral reels, community engagement, and consistent storytelling.",
      highlights: [
        "Monthly content calendar with branded graphics, reels, and carousels",
        "Active community management, DM responses, and audience nurturing",
        "Influencer partnerships and co-marketing collaborations",
        "Brand voice development and multi-platform growth strategies"
      ],
      deliverables: ["15-30 Monthly Creative Assets", "Reel Scripts & Video Edits", "Hashtag & Trend Strategy", "Monthly Engagement Analytics"],
      timeline: "Consistent weekly publishing with compounding reach over 30-60 days.",
      anchor: "smo"
    },
    "Online Reputation Management": {
      title: "Online Reputation Management (ORM)",
      category: "SOCIAL MEDIA MARKETING",
      tagline: "Safeguard and elevate your brand's digital reputation and executive authority.",
      description: "Monitor sentiment, suppress negative reviews, amplify authentic customer praise, and establish thought leadership for your founders and company across Google and social channels.",
      highlights: [
        "24/7 brand sentiment monitoring across forums, reviews, and search results",
        "Google review generation funnels and negative feedback mitigation",
        "Executive LinkedIn personal branding and PR placement",
        "Search result suppression for unfair or misleading negative press"
      ],
      deliverables: ["Sentiment Audit Report", "Review Acceleration Funnel", "Crisis Management Protocol", "PR & Positive Signal Plan"],
      timeline: "Ongoing protection and measurable sentiment shift within 60 days.",
      anchor: "quote"
    },
    "E-Commerce Marketing": {
      title: "E-Commerce Marketing & Scale",
      category: "ECOMMERCE",
      tagline: "Scale your online storefront with high-converting customer journeys.",
      description: "Drive qualified shopping traffic, recover abandoned carts, boost average order value (AOV), and scale your Shopify or custom e-commerce store profitably with omnichannel retention.",
      highlights: [
        "Google Shopping & Meta Catalog dynamic product ad campaigns",
        "Klaviyo email & SMS automated retention funnels (welcome, abandon, win-back)",
        "On-site CRO audits to reduce checkout drop-offs and improve conversion rate",
        "Customer lifetime value (LTV) maximization and repeat purchase programs"
      ],
      deliverables: ["Full E-Com Funnel Strategy", "Dynamic Product Ad Setup", "Klaviyo Retention Automations", "Store Conversion Audit"],
      timeline: "Immediate ROAS lift within 14-21 days of ad campaign ramp.",
      anchor: "ecommerce"
    },
    "Amazon Marketing": {
      title: "Amazon Marketing Services (AMS)",
      category: "ECOMMERCE",
      tagline: "Win the Buy Box and scale Sponsored Products on India's #1 marketplace.",
      description: "Comprehensive Amazon marketplace management including A+ Content design, backend search term optimization, Sponsored Brands/Products PPC, and Brand Store creation.",
      highlights: [
        "Amazon PPC bid management with negative keyword pruning",
        "Compelling A+ Content (EBC) and high-converting product photography design",
        "Backend listing optimization for maximum organic search indexing",
        "Review harvesting strategies aligned with Amazon Terms of Service"
      ],
      deliverables: ["Product Listing SEO Overhaul", "A+ Content Graphic Assets", "Amazon PPC Setup & Management", "ACoS & TACoS Reports"],
      timeline: "Optimized listings go live within 7-10 days; PPC scaling within 2-4 weeks.",
      anchor: "quote"
    },
    "Graphic Design": {
      title: "Graphic Design & UI/UX Studio",
      category: "STUDIO",
      tagline: "Stunning visual identities that elevate perception and drive action.",
      description: "Our in-house design studio creates high-impact brand identities, performance marketing ad creatives, pitch decks, infographics, and website UI/UX designed to stop scrolling.",
      highlights: [
        "Brand identity kits: logos, typography guidelines, and design systems",
        "High-converting performance marketing banners and carousel designs",
        "Website and mobile application UI/UX wireframing in Figma",
        "Sales collateral, brochures, pitch decks, and print media ready assets"
      ],
      deliverables: ["Figma Design Files", "Exported High-Res PNG/SVG Assets", "Brand Style Guide Book", "Ad Creative Asset Packs"],
      timeline: "Quick turnaround in 48-72 hours for ad assets; 10-14 days for brand systems.",
      anchor: "quote"
    },
    "Content Marketing": {
      title: "Content Marketing & SEO Copywriting",
      category: "MARKETING",
      tagline: "High-value content that educates, builds trust, and ranks #1 on Google.",
      description: "Craft authoritative long-form blog articles, whitepapers, case studies, and conversion copywriting that attract organic prospects and nurture them through your sales funnel.",
      highlights: [
        "Search-optimized topic cluster strategy and keyword mapping",
        "In-depth, human-written editorial articles with original data and graphics",
        "Lead magnets, whitepapers, and downloadable guides that collect emails",
        "Content syndication and distribution across LinkedIn and industry newsletters"
      ],
      deliverables: ["Editorial Topic Calendar", "SEO-Optimized Articles (1500-2500 words)", "Lead Magnet PDFs", "Monthly Organic Traffic Attribution"],
      timeline: "Bi-weekly publication sprints with compound organic growth.",
      anchor: "content"
    },
    "Email Marketing": {
      title: "Email Marketing & Lifecycle Automation",
      category: "MARKETING",
      tagline: "Turn your subscriber list into your most predictable revenue engine.",
      description: "Build automated lifecycle email funnels, segment your customer list, and deploy beautifully designed newsletter broadcasts that drive repeat sales with industry-leading open rates.",
      highlights: [
        "Behavior-triggered automated flows: Welcome, Post-Purchase, Cart Abandon",
        "List segmentation based on purchase frequency, engagement, and geography",
        "Responsive, mobile-optimized HTML email template design",
        "Continuous A/B testing on subject lines, preview text, send times, and CTAs"
      ],
      deliverables: ["Email Platform Setup (Klaviyo / Mailchimp)", "Automated Drip Series", "Weekly Newsletter Production", "Revenue Attribution Reports"],
      timeline: "Core automation flows live within 7-10 days.",
      anchor: "quote"
    },
    "Video Marketing": {
      title: "Video Marketing & Motion Creatives",
      category: "MARKETING",
      tagline: "Captivating video content engineered for Instagram Reels and YouTube.",
      description: "Produce short-form vertical videos, YouTube explainers, animated motion graphics, and video ads that hook viewers in the first 3 seconds and drive clicks.",
      highlights: [
        "Concept development, scriptwriting, and storyboard creation",
        "High-energy video editing, captions, and motion typography",
        "YouTube channel optimization, thumbnail design, and tags",
        "Multi-platform format adaptation (9:16 vertical, 16:9 widescreen, 1:1 square)"
      ],
      deliverables: ["Script & Storyboards", "Finished High-Definition Video Files", "Custom Video Thumbnails", "Platform-Specific Cuts"],
      timeline: "Turnaround of 3-5 days per batch of video creative.",
      anchor: "quote"
    },
    "Website Development": {
      title: "Custom Website Development",
      category: "DEVELOPMENT",
      tagline: "Lightning-fast, mobile-responsive websites engineered for conversions.",
      description: "We design and build modern corporate websites, high-converting landing pages, and custom web portals using modern React, Next.js, and WordPress with sub-second loading speeds.",
      highlights: [
        "100% responsive, mobile-first design tailored to your brand",
        "SEO-friendly architecture with pristine schema and Google Core Web Vitals",
        "Interactive UX with smooth animations and frictionless lead forms",
        "Easy-to-manage CMS integration, SSL security, and blazing-fast CDN hosting"
      ],
      deliverables: ["Figma UI/UX Mockups", "Production-Ready Clean Code", "CMS Training & Documentation", "30-Day Post-Launch Support"],
      timeline: "Complete bespoke websites launched in 2 to 4 weeks.",
      anchor: "web-dev"
    },
    "Website Packages": {
      title: "All-Inclusive Website Packages",
      category: "DEVELOPMENT",
      tagline: "Fixed-price website packages designed for fast deployment and high ROI.",
      description: "Everything you need to launch an enterprise-grade website without hidden costs: custom UI/UX design, mobile responsiveness, SSL, domain setup, hosting configuration, and on-page SEO.",
      highlights: [
        "Business Starter, Corporate Pro, and E-Commerce storefront packages",
        "Includes copy refinement, stock photography licensing, and lead forms",
        "Google Analytics 4 & Meta Pixel tracking pre-installed and verified",
        "Free 1-year hosting assistance and maintenance support"
      ],
      deliverables: ["Complete Website Build", "Domain/DNS & SSL Configuration", "Lead Form Email Automation", "Analytics Setup"],
      timeline: "Turnkey delivery within 7-14 business days.",
      anchor: "quote"
    },
    "App Development": {
      title: "Mobile App Development (iOS & Android)",
      category: "DEVELOPMENT",
      tagline: "Scalable mobile experiences built with React Native and modern cloud backends.",
      description: "From concept and wireframes to app store submission, we build native-quality mobile applications with intuitive interfaces, real-time push notifications, and secure payment integrations.",
      highlights: [
        "Cross-platform React Native and Flutter mobile development",
        "Intuitive UX/UI designed for touch-first navigation and accessibility",
        "Cloud backend API integration, user authentication, and databases",
        "App Store (Apple) and Google Play Store deployment assistance"
      ],
      deliverables: ["Interactive Prototype", "iOS & Android Builds", "Backend API Documentation", "App Store Submission Support"],
      timeline: "MVP delivery in 4-6 weeks with continuous milestone releases.",
      anchor: "quote"
    }
  }
};

