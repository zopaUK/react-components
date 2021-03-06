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
    l: 992,
    m: 768,
    s: 576,
    xl: 1300,
    xs: 0,
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
