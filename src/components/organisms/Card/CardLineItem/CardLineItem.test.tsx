import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Card from '..';

describe('<Card.LineItem />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(<Card.LineItem />);
    const results = await axe(container.innerHTML);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
