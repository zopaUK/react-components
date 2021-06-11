import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { grid } from '../../../constants';
import { GridBreakpoints } from '../../../constants/grid';

export interface AlignProps extends HTMLAttributes<HTMLDivElement> {
  xs?: string;
  s?: string;
  m?: string;
  l?: string;
  xl?: string;
}

const Alignment = styled.div<AlignProps>`
  ${(props) =>
    Object.keys(grid.breakpoints)
      .sort((a, b) => grid.breakpoints[a as GridBreakpoints] - grid.breakpoints[b as GridBreakpoints])
      .filter((breakpoint) => Object.keys(props).includes(breakpoint))
      .map(
        (breakpoint) => `
        @media (min-width: ${grid.breakpoints[breakpoint as GridBreakpoints]}px) {
          text-align: ${props[breakpoint as GridBreakpoints]};
        }
        `,
      )}
`;

const Align: FC<AlignProps> = (props) => <Alignment {...props} />;

export default Align;
