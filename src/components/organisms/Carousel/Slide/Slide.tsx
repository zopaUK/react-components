import React, { createRef, FC, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { grid } from '../../../../constants';
import { useViewport } from '../../../../hooks/useViewport/useViewport';
import FlexCol, { FlexColProps } from '../../../layout/FlexCol/FlexCol';
import { useCarouselContext } from '../context/CarouselContext';

const StyledFlexCol = styled(FlexCol)<FlexColProps & { hidden: boolean; sliderHeight: number }>`
  text-align: center;
  position: relative;
  opacity: 1;
  min-height: ${({ sliderHeight }) => `${sliderHeight}px`};
  ${({ hidden }) => {
    if (hidden) {
      return css`
        position: absolute;
        opacity: 0;
      `;
    }
  }}
`;

export type SlideProps = {
  index?: number;
};

const Slide: FC<SlideProps> = ({ index, children, ...rest }) => {
  const { slidesCount, activeSlide, sliderHeight, setSliderHeight } = useCarouselContext();
  const { width } = useViewport();
  const isActive = index === activeSlide;
  const isSmall = width && width < grid.breakpoints.m;
  const slideRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const slideHeight = slideRef.current?.clientHeight || 0;
    setSliderHeight((height) => Math.max(height, slideHeight));
  }, [slideRef.current, activeSlide]);

  return (
    <StyledFlexCol
      hidden={!!isSmall && !isActive}
      sliderHeight={sliderHeight}
      xs={slidesCount}
      s={slidesCount}
      m={1}
      align="flex-start"
      {...rest}
    >
      <div ref={slideRef}>{children}</div>
    </StyledFlexCol>
  );
};

export default Slide;
