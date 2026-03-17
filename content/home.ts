// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ─── Sponsors ───────────────────────────────────────────────────────────────
export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};

// ─── Benefits ───────────────────────────────────────────────────────────────
export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

// ─── Feature Grid ───────────────────────────────────────────────────────────
export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};

// ─── Services ───────────────────────────────────────────────────────────────
export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

// ─── Testimonials ───────────────────────────────────────────────────────────
export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

// ─── Team ───────────────────────────────────────────────────────────────────
export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};

// ─── Pricing ────────────────────────────────────────────────────────────────
export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};

// ─── Contact ────────────────────────────────────────────────────────────────
export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

// ─── FAQ ────────────────────────────────────────────────────────────────────
export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "ClientPilot CRM starter is ready",
    titleBefore: "Build your next ",
    titleHighlight: "CRM",
    titleAfter: " quickly with ClientPilot",
    subtitle:
      "ClientPilot gives you authentication, team flows, and polished UI—so your internal tools or customer portal are production-ready from Day 1.",
    primaryCta: { label: "Start Building", href: "#pricing" },
    secondaryCta: { label: "Explore Features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "ClientPilot dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why ClientPilot",
    heading: "The modern CRM app builder for teams",
    description:
      "Built for internal teams that need a stable CRM, not another inflexible demo kit. Modern Next.js, ready-to-ship workflow.",
    items: [
      {
        icon: "Blocks",
        title: "Production Ready in Hours",
        description: "You get proven auth, layout, and deploy out-of-the-box—no boilerplate work.",
      },
      {
        icon: "LineChart",
        title: "Zero to Usable Fast",
        description: "Go from blank to dashboard in a day. Focus on CRM-specific features, not scaffolding.",
      },
      {
        icon: "Wallet",
        title: "Cost Effective",
        description: "Open source, extendible, and designed for teams—get your ops up and running for less.",
      },
      {
        icon: "Sparkle",
        title: "Polished UI",
        description: "Responsive layout, dark mode, and real shadcn primitives—impress both users and execs from day one.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Your internal CRM, supercharged by default",
    subtitle:
      "ClientPilot fuses rapid developer experience, strong patterns, and everything your team expects from a CRM app or customer dashboard foundation.",
    items: [
      { icon: "TabletSmartphone", title: "Responsive Layout", description: "All screens adapt to mobile and desktop without rework." },
      { icon: "BadgeCheck", title: "Proven Auth Flow", description: "Credential-based login, email verification, and password reset included." },
      { icon: "Goal", title: "Team Management", description: "Multi-user with invitation flow, owner/admin/member roles, and permission model." },
      { icon: "PictureInPicture", title: "Dashboard Foundation", description: "Starter charts, quick actions, and sectioned UX for CRM/data views." },
      { icon: "MousePointerClick", title: "Customizable CTA", description: "Edit landing or dashboard, or layer in API/data calls as you grow." },
      { icon: "Newspaper", title: "OpenAI-Ready", description: "Includes wiring for OpenAI so you can add smart features seamlessly." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Key template capabilities",
    subtitle:
      "Everything you need for high-velocity internal tools, client portals, or SaaS admin dashboards.",
    items: [
      { title: "Authentication & Team", description: "Email auth, invitation, team roles. Extend to SSO or organization logic.", pro: false },
      { title: "Stripe Billing Ready", description: "Plan skeletons, pricing grid, and billing flow references.", pro: false },
      { title: "Built-in Theming", description: "Light/dark modes and reusable sections with first-class design system.", pro: false },
      { title: "Enterprise-Grade Patterns", description: "Security, async-ready, and maintainable section boundaries.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams shipping with ClientPilot",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Founder, NovaCRM", comment: "ClientPilot took us from backlog to working CRM fast—great flow and easy to customize.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "Product Lead, DeskSite", comment: "Loved the clear sections and focus on production features, not just boilerplate.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Nikhil Rao", role: "CTO, ArcOps", comment: "ClientPilot made onboarding the team trivial—everyone contributed from day one.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Emma Brooks", role: "Head of Ops, Nimbus Data", comment: "Simple, clear, and truly production-ready out of the box.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Daniel Kim", role: "Engineering Manager, PulseOps", comment: "Excellent setup for internal teams that need reliability and no-nonsense stack.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Sofia Green", role: "Founder, CRM Boost", comment: "Perfect for iterating rapidly—solid patterns, clean UI, and easy billing integration.", rating: 4.9 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Owner",
    heading: "Meet the ClientPilot Owner",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Owner", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "#" },
          { name: "Github", url: "#" },
          { name: "X", url: "#" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Start Free. Scale as Needed.",
    subtitle: "Your CRM, your way. Try free, upgrade for more users and advanced workflows.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Perfect for early prototypes and small internal teams.",
        buttonText: "Start for free",
        benefits: ["Up to 3 teammates", "Full CRM UI", "Team flows", "Email-based auth", "Production deployment"],
      },
      {
        title: "Growth",
        popular: true,
        price: 49,
        description: "Unlock all features for real teams or SMBs.",
        buttonText: "Start trial",
        benefits: ["Unlimited teammates", "Advanced roles & invites", "Dashboard CRUD examples", "Priority email support", "Integration ready"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "Security, scale, and white-glove deployment.",
        buttonText: "Contact sales",
        benefits: ["Compliance support", "Dedicated onboarding", "SLA & custom features", "Phone/email support", "Advisor hours"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to the ClientPilot Owner",
    description:
      "Need custom CRM flows, setup help, or technical consulting? Contact Chirag Dodiya directly and outline your goals.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Location", value: "Remote-first • San Francisco, CA" },
      phone: { label: "Phone", value: "" },
      email: { label: "Email", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 6PM PT"] },
    },
    formSubjects: ["CRM Consultation", "Template Setup", "Custom Features", "Demo Request", "Other"],
    formSubmitLabel: "Send inquiry",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Questions About ClientPilot",
    items: [
      { question: "Is ClientPilot free to start with?", answer: "Yes! Use the free tier as long as you need and upgrade only as your needs grow." },
      { question: "Can I deploy this today?", answer: "Absolutely. You can go live within the hour on your preferred cloud provider." },
      { question: "Are authentication and team management included?", answer: "Yes, both are working—no extra setup required for new tenants." },
      { question: "How do I add my own data models?", answer: "The code is clean and follows separation of concerns—add routes and DB tables easily." },
      { question: "Is this suitable for non-CRM dashboards?", answer: "Yes! ClientPilot is extensible for any SaaS or back-office app." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "ClientPilot",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 ClientPilot CRM Starter.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "ClientPilot",
    routes: [
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#team", label: "Owner" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "ClientPilot preview" },
    features: [
      { title: "Auth, Billing, Teams", description: "Production-ready flows for sign-in, subscriptions, and organizations." },
      { title: "UI + Design System", description: "Shadcn-based components with consistent theming and dark mode support." },
      { title: "Deploy Fast", description: "Sane defaults for Next.js, TypeScript, and Vercel-first deployment." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://nextjs.org/docs", ariaLabel: "View on GitHub" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}