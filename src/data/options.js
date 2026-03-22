export const AUDIT_STEPS = [
  {
    number: 1,
    label: 'Platforms',
    title: 'Where are you currently showing up?',
    description: 'Choose every platform that plays an active role in your current marketing mix.',
  },
  {
    number: 2,
    label: 'Consistency',
    title: 'How consistent does your marketing feel?',
    description: 'Pick the option that feels closest to your current publishing and messaging rhythm.',
  },
  {
    number: 3,
    label: 'Challenges',
    title: 'What is getting in the way?',
    description: 'Select the main problems you feel today and the assets you already have available.',
  },
];

// Customize these labels and descriptions if you want the audit to reflect a different audience.
export const PLATFORM_OPTIONS = [
  { value: 'instagram', label: 'Instagram', description: 'Visual brand presence and short-form engagement.' },
  { value: 'facebook', label: 'Facebook', description: 'Community updates, events, and local audience reach.' },
  { value: 'linkedin', label: 'LinkedIn', description: 'Professional visibility, authority, and B2B awareness.' },
  { value: 'email', label: 'Email Marketing', description: 'Direct audience nurture and campaign follow-up.' },
  { value: 'website', label: 'Website', description: 'Your core digital storefront and conversion hub.' },
  { value: 'blog', label: 'Blog / SEO', description: 'Evergreen content that compounds over time.' },
];

// Customize this section if you want a different maturity model or tone.
export const CONSISTENCY_OPTIONS = [
  {
    value: 'inconsistent',
    label: 'Very inconsistent',
    description: 'Marketing happens in bursts and often stalls when the team gets busy.',
  },
  {
    value: 'somewhat-consistent',
    label: 'Somewhat consistent',
    description: 'There is a rhythm, but it is not always supported by a clear plan or message.',
  },
  {
    value: 'mostly-consistent',
    label: 'Mostly consistent',
    description: 'You show up regularly, though clarity and cohesion still have gaps.',
  },
  {
    value: 'highly-consistent',
    label: 'Highly consistent',
    description: 'Marketing is active and reliable, with only a few areas needing refinement.',
  },
];

export const PROBLEM_OPTIONS = [
  { value: 'unclear-message', label: 'Unclear message', description: 'The value proposition does not feel crisp or memorable.' },
  { value: 'low-engagement', label: 'Low engagement', description: 'Posts go out, but attention and response stay soft.' },
  { value: 'irregular-posting', label: 'Irregular posting', description: 'Publishing frequency slips when priorities shift.' },
  { value: 'lead-generation', label: 'Weak lead generation', description: 'Marketing activity is not translating into enough inquiries.' },
  { value: 'content-overwhelm', label: 'Content overwhelm', description: 'It is hard to know what to say or what to prioritize next.' },
  { value: 'brand-misalignment', label: 'Brand inconsistency', description: 'Channels feel disconnected in tone, visuals, or promises.' },
];

export const ASSET_OPTIONS = [
  { value: 'brand-guide', label: 'Brand guide', description: 'Colors, voice, visuals, and messaging rules already exist.' },
  { value: 'photo-library', label: 'Photo library', description: 'You have usable, on-brand visuals available now.' },
  { value: 'email-list', label: 'Email list', description: 'An audience exists that can be re-engaged quickly.' },
  { value: 'case-studies', label: 'Case studies', description: 'Proof points and client stories are already documented.' },
  { value: 'lead-magnet', label: 'Lead magnet', description: 'A downloadable resource or offer is ready to support growth.' },
  { value: 'content-calendar', label: 'Content calendar', description: 'There is already some planning infrastructure in place.' },
];

export const DEFAULT_FORM_STATE = {
  platforms: [],
  consistencyLevel: '',
  problems: [],
  assets: [],
};

export const OPTION_LABELS = [...PLATFORM_OPTIONS, ...PROBLEM_OPTIONS, ...ASSET_OPTIONS].reduce((acc, option) => {
  acc[option.value] = option.label;
  return acc;
}, {});

// These sections control the visible copy on the results and follow-up cards.
export const RESULTS_COPY = {
  title: 'Your Marketing Clarity Snapshot',
  description:
    'Here is a high-level view of how aligned your channels, consistency, and supporting assets appear based on your answers.',
  emailTitle: 'Send your clarity plan to your inbox',
  emailDescription:
    'Keep your priorities and next steps in one place so you can come back to them when you\'re ready to act.',
  ctaTitle: 'Your next step: make this actionable',
  ctaDescription:
    'You don\'t need more ideas. You need a simple structure you can follow.',
  ctaButton: 'Get the 30-Day Marketing Planner',
};
