import React from 'react';
import styled from 'styled-components';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

import FlexRow from '../../../layout/FlexRow/FlexRow';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import Heading from '../../../atoms/Heading/Heading';
import Text from '../../../atoms/Text/Text';
import Link from '../../../atoms/Link/Link';
import Icon from '../../../atoms/Icon/Icon';
import { useViewport } from '../../../../hooks/useViewport/useViewport';
import { breakpoints } from '../../../../constants/breakpoints';
import { buttonStyle } from '../../../atoms/Button/Button';
import { colors } from '../../../../constants';
import { ErrorTemplateProps } from '../Template/Template';

interface Four0FourProps extends ErrorTemplateProps {
  buttonLink?: string;
  buttonText?: string;
}

const ButtonLink = styled(Link)`
  ${buttonStyle}
`;

const StyledIcon = styled(Icon)`
  width: 80px;
  height: 80px;
`;

const Four0Four: React.FC<Four0FourProps> = ({
  buttonLink = 'https://www.zopa.com',
  buttonText = 'Go to Zopa home',
  icon = faInfo,
}) => {
  const { width = 0 } = useViewport();

  return (
    <div data-automation="ZA.ErrorPage.Four0Four">
      <FlexRow justify="center">
        <FlexCol xs="auto" className="mb-7">
          <StyledIcon bgColor={colors.greyLighter} variant={icon} size="3x" color={colors.greyDark} />
        </FlexCol>
      </FlexRow>
      <Heading as="h1" size={width <= breakpoints.desktop ? 'h4' : 'h3'} align="center" className="mb-4">
        Sorry, there’s been a problem
      </Heading>
      <Text as="p" size={width <= breakpoints.desktop ? 'body' : 'lead'} align="center" className="mb-7">
        Seems like the page you’re looking for doesn’t exist.
      </Text>
      <FlexRow justify="center">
        <FlexCol xs="auto">
          <ButtonLink className="mb-10" href={buttonLink} styling="secondary">
            {buttonText}
          </ButtonLink>
        </FlexCol>
      </FlexRow>
      <Text as="p" size="small" align="center">
        Error code: 404
      </Text>
    </div>
  );
};

export default Four0Four;
