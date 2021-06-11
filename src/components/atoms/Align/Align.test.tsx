import axe from '../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import Align from './Align';

describe('Align', () => {
  it('renders the component with no props and no a11y violations', async () => {
    const { container } = render(<Align>Align Content</Align>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it.each`
    alignment
    ${'left'}
    ${'center'}
    ${'right'}
  `('renders with specific severity: $severity', ({ alignment }) => {
    const { container } = render(<Align xs={alignment}>Align Content</Align>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
