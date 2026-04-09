export type Annotation = {
  label: string;
  description: string;
};

export type Stage = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  annotations: Annotation[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  stageCount: number;
  backHref: string;
  fullStudyHref?: string;
  stages: Stage[];
};

const passwordUx: Project = {
  slug: "password-ux",
  title: "Product Experience of Password Creation",
  subtitle: "Onboarding Redesign",
  company: "Entytle",
  stageCount: 7,
  backHref: "/mini",
  fullStudyHref: "/mini#password-ux",
  stages: [
    {
      id: "problem",
      title: "The Problem",
      subtitle: "Existing password field",
      description:
        "On-exit validation threw errors only after the user left the field. No password visibility toggle clarity. No strength feedback until submission. 7 monthly forgot-password support requests costing 660 minutes/year.",
      image: "/portfolio/password-ux/pwdux_05_Password_Present.png",
      annotations: [
        { label: "On-exit validation", description: "Errors appear too late — after the user leaves the field" },
        { label: "No visibility toggle", description: "Users can't verify what they've typed without ambiguous eye icon" },
        { label: "No strength meter", description: "Zero feedback on password strength before submission" },
      ],
    },
    {
      id: "research",
      title: "Research",
      subtitle: "Audit & analysis",
      description:
        "Audited 20+ B2B enterprise forms across SaaS products, studying validation patterns, copy, layout, and error handling. Mixpanel data revealed the forgot-password funnel frequency.",
      image: "/portfolio/password-ux/pwdux_04_c55daa_7b131e3b98a2469392fc974846bc3883~mv2.png",
      annotations: [
        { label: "20+ form audit", description: "Studied validation, copy, layout across enterprise SaaS" },
        { label: "Mixpanel analytics", description: "Data-driven analysis of forgot-password funnel events" },
        { label: "WCAG standards", description: "Accessibility requirements mapped to form interactions" },
      ],
    },
    {
      id: "requirements",
      title: "Requirements",
      subtitle: "Show them upfront",
      description:
        "Instead of punishing users with errors after they leave the field, the redesign surfaces every requirement before the user types. Requirements are visible, explicit, and update in real time.",
      image: "/portfolio/password-ux/pwdux_14_Password_Horizontal.png",
      annotations: [
        { label: "Live validation", description: "Requirements check off in real time as the user types" },
        { label: "UX copy tuned", description: "'Strong password should contain' — tested multiple label variations" },
        { label: "Explicit over implicit", description: "Each rule is a visible line item, not hidden behind progressive disclosure" },
      ],
    },
    {
      id: "icons",
      title: "Icon States",
      subtitle: "Met vs unmet requirements",
      description:
        "Choosing the right icon pair for 'not yet met' and 'met' states. Icons had to be universally understood, colorblind-safe, and work at 14px. Error states shift from neutral guidance to clear, non-punishing feedback.",
      image: "/portfolio/password-ux/pwdux_22_Choosen.png",
      annotations: [
        { label: "Met state", description: "Green checkmark — universally understood completion signal" },
        { label: "Unmet state", description: "Neutral dot — no punishment, just guidance" },
        { label: "Error state", description: "Red X on submit — clear but non-punishing feedback" },
      ],
    },
    {
      id: "showhide",
      title: "Show / Hide",
      subtitle: "The eye icon dilemma",
      description:
        "The eye icon carries ambiguity: does it mean 'password is visible' or 'click to make visible'? Replaced with a simple 'Show password' checkbox — clear, accessible, and natively supported by screen readers.",
      image: "/portfolio/password-ux/pwdux_32_Checkbox.png",
      annotations: [
        { label: "Checkbox approach", description: "Label removes all ambiguity about toggle state" },
        { label: "Accessibility", description: "Native screen reader and keyboard navigation support" },
        { label: "Secure default", description: "Unchecked by default — passwords start hidden" },
      ],
    },
    {
      id: "strength",
      title: "Strength Meter",
      subtitle: "How strong is strong enough?",
      description:
        "A progress bar gives users a quick, visual sense of strength without abstract labels. Three clear states: Weak (red), Medium (yellow), Strong (green) with incremental fill.",
      image: "/portfolio/password-ux/pwdux_44_Strong.png",
      annotations: [
        { label: "Progress bar", description: "Visual strength without requiring users to interpret labels" },
        { label: "Color-coded", description: "Red → Yellow → Green — universally understood spectrum" },
        { label: "Incremental", description: "Bar fills progressively as requirements are met" },
      ],
    },
    {
      id: "shipped",
      title: "Shipped",
      subtitle: "Final product",
      description:
        "The redesigned password flow shipped as part of Entytle's onboarding overhaul. Live validation replaced on-exit validation. Checkbox replaced the eye icon. Strength indicator gave users confidence before submission.",
      image: "/portfolio/password-ux/pwdux_37_Done.png",
      annotations: [
        { label: "Live validation", description: "Real-time feedback reduced error encounters" },
        { label: "Checkbox toggle", description: "Eliminated eye-icon ambiguity entirely" },
        { label: "Strength meter", description: "Users gain confidence before hitting submit" },
        { label: "Support impact", description: "Reduced monthly forgot-password support load" },
      ],
    },
  ],
};

const projects: Record<string, Project> = {
  "password-ux": passwordUx,
};

export function getProject(slug: string): Project | undefined {
  return projects[slug];
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projects);
}
