import { css } from 'styled-components';
import { breakpoints } from '../constants';
import { DeviceSizes } from '../constants/breakpoints';

type Media = Record<DeviceSizes, ReturnType<typeof interpolate>>;

const maxMedia: Media = {
  phone: interpolate('phone', 'max'),
  tablet: interpolate('tablet', 'max'),
  desktop: interpolate('desktop', 'max'),
  largeDesktop: interpolate('largeDesktop', 'max'),
};

const minMedia: Media = {
  phone: interpolate('phone', 'min'),
  tablet: interpolate('tablet', 'min'),
  desktop: interpolate('desktop', 'min'),
  largeDesktop: interpolate('largeDesktop', 'min'),
};

/* Required due to 1px overlap between minMedia and maxMedia See https://github.com/zopaUK/react-components/issues/453 for details*/
const maxEqualToMedia: Media = {
  phone: interpolate('phone', 'maxEqualTo'),
  tablet: interpolate('tablet', 'maxEqualTo'),
  desktop: interpolate('desktop', 'maxEqualTo'),
  largeDesktop: interpolate('largeDesktop', 'min'),
};

function interpolate(sizeLabel: keyof typeof breakpoints, direction: 'min' | 'max' | 'maxEqualTo') {
  const directionLabel = direction === 'maxEqualTo' ? 'max' : direction;
  const breakpointSize = direction === 'maxEqualTo' ? breakpoints[sizeLabel] - 1 : breakpoints[sizeLabel];

  return (style: TemplateStringsArray, ...rest: any) => css`
    @media (${directionLabel}-width: ${breakpointSize}px) {
      ${style};
      ${rest};
    }
  `;
}

export { maxMedia, minMedia, maxEqualToMedia };
