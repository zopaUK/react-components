import { breakpoints } from './breakpoints';

export type GridBreakpoints = 'xs' | 's' | 'm' | 'l' | 'xl';
export type GridWidths = 's' | 'm' | 'l' | 'xl';

interface Grid {
  breakpoints: Record<GridBreakpoints, number>;
  cols: number;
  gutter: number;
  width: Record<GridWidths, number>;
}

const grid: Grid = {
  breakpoints: {
    xs: 0,
    xl: breakpoints.largeDesktop,
    l: breakpoints.desktop,
    m: breakpoints.tablet,
    s: breakpoints.phone,
  },
  cols: 12,
  gutter: 12,
  width: {
    l: 960,
    m: 720,
    s: 540,
    xl: 1224,
  },
};

export default grid;
