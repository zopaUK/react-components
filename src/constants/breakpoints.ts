export const breakpoints = {
  largeDesktop: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
} as const;

export type DeviceSizes = keyof typeof breakpoints;
