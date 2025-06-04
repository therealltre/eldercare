import { paramCase } from 'change-case';

// ----------------------------------------------------------------------

export const FOUNDATION_LIST = ['Colors', 'Typography', 'Shadows', 'Grid', 'Icons'].map((item) => ({
  name: item,
  href: `/components/foundation/${paramCase(item)}`,
  icon: `/images/components/${paramCase(item)}.png`,
  icon: `/assets/images/components/${paramCase(item)}.png`,
}));

export const MUI_LIST = [
  'Accordion',
  'Autocomplete',
  'Avatar',
  'Buttons',
  'Progress',
  'Rating',
  'Textfield',
  'Tooltip',
].map((item) => ({
  name: item,
  href: `/components/mui/${paramCase(item)}`,
  icon: `/assets/images/components/${paramCase(item)}.png`,
}));

export const EXTRA_LIST = [
  'Map',
  'Carousel',
  'Animate',
  'Form Validation',
  'Image',
  'Scroll',
  'Text Max Line',
  'Navigation Bar',
].map((item) => ({
  name: item,
  href: `/components/extra/${paramCase(item)}`,
  icon: `/assets/images/components/${paramCase(item)}.png`,
}));
