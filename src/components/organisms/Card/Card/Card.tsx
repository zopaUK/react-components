import styled, { css } from 'styled-components';
import { typography } from '../../../../constants/typography';
import { colors } from '../../../../constants/colors';
import { CardImageContainer } from '../CardImage/CardImage';
import CardHeading from '../CardHeading/CardHeading';
import CardText from '../CardText/CardText';
import CardLineItem from '../CardLineItem/CardLineItem';

export type CardLayout = 'horizontal' | 'vertical';
export type CardStyling = 'primary' | 'secondary' | 'brand' | 'action';

export interface CardProps {
  /**
   * Determines the layout of the card
   * @default `vertical`
   */
  layout?: CardLayout;
  /**
   * Determines the styling of the card
   * @default `secondary`
   */
  styling?: CardStyling;
}

const layoutDirections: Record<CardLayout, string> = {
  horizontal: 'row',
  vertical: 'column',
};

const layoutImageStyles: Record<CardLayout, string> = {
  horizontal: '200px',
  vertical: '200px',
};

const headingSizes: Record<CardStyling, string> = {
  secondary: typography.sizes.heading.h6,
  primary: typography.sizes.heading.h5,
  brand: typography.sizes.heading.h6,
  action: typography.sizes.heading.h6,
};

const textSizes: Record<CardStyling, string> = {
  secondary: typography.sizes.text.small,
  primary: typography.sizes.text.body,
  brand: typography.sizes.text.small,
  action: typography.sizes.text.small,
};

const boxShadowStyle: Record<CardStyling, string> = {
  primary: `0 1px 0 0 ${colors.greyLight}`,
  secondary: `0 1px 0 0 ${colors.greyLight}`,
  brand: `none`,
  action: `none`,
};

const borderStyle: Record<CardStyling, string> = {
  primary: `1px solid ${colors.greyLighter}`,
  secondary: `1px solid ${colors.greyLighter}`,
  brand: `1px solid ${colors.brand}`,
  action: `1px solid ${colors.greyLighter}`,
};

const backgroundStyle: Record<CardStyling, string> = {
  primary: `${colors.white};`,
  secondary: `${colors.white};`,
  brand: `${colors.brandLight};`,
  action: `${colors.white};`,
};

const Card = styled.div<CardProps>`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  background-color: ${({ styling = 'secondary' }) => backgroundStyle[styling]};
  border: ${({ styling = 'secondary' }) => borderStyle[styling]};
  border-radius: 12px;
  box-shadow: ${({ styling = 'secondary' }) => boxShadowStyle[styling]};
  flex-direction: ${({ layout = 'vertical' }) => layoutDirections[layout]};
  & > ${CardImageContainer} {
    flex: 0 1
      ${({ layout = 'vertical' }) =>
        css`
          ${layoutImageStyles[layout]}
        `};
  }
  & ${CardHeading} {
    font-size: ${({ styling = 'secondary' }) =>
      css`
        ${headingSizes[styling]}
      `};
  }
  & ${CardText} {
    font-size: ${({ styling = 'secondary' }) =>
      css`
        ${textSizes[styling]}
      `};
  }
  & > ${CardLineItem} {
    align-self: center;
  }
  ${({ styling }) =>
    styling === 'action'
      ? `&:hover {
        cursor: pointer;
        background-color: ${colors.greyLightest};

        & > ${CardLineItem}:last-of-type { 
          svg {
            color: ${colors.greyDark};
          }
        }
      } 
  }`
      : null}
`;

export default Card;
