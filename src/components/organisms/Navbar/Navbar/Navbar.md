### Summary

Navbar will render an array of links provided using a dropdown which works on click and a link which is a wrap around our [`<Link />`](/#/Components/Atoms/Link) atom, decorated with two extra props: `active` and `withChevron`. You can opt out displaying the CTA using `withCTA` prop.

⚠️ The menu animates when scrolling. For a better preview view [Default example](#/Components/Organisms/Navbar/Navbar/1)

### Examples

- Default theme

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#FFFFFF", "overflow": "hidden", "height": "500px", "padding": "0" } } }
import { Navbar } from '@zopauk/react-components';

const NAV_ITEMS = [
  {
    label: 'Borrow',
    'data-automation': 'Borrow.topBar.Button',
    children: [
      {
        label: 'Loans',
        href: '/loans',
        onClick: () => alert('testing'),
        'data-automation': 'loans.Borrow.topBar.Menu',
      },
      {
        label: 'Car loans',
        href: '/loans/car-loans',
        'data-automation': 'Car_loan.Borrow.topBar.Menu',
      },
      {
        label: 'Borrowing power',
        href: '/borrowing-power',
        'data-automation': 'Borrowing_Power.Borrow.topBar.Menu',
      },
    ],
  },
  {
    label: 'Invest',
    'data-automation': 'Invest.topBar.Menu',
    children: [
      {
        label: 'Peer-to peer investments',
        href: '/invest',
        'data-automation': 'Peer_to_peer.Invest.topBar.Menu',
      },
      {
        label: 'Innovative Finance ISA',
        href: '/invest/isa',
        'data-automation': 'Innovative.Invest.topBar.Menu',
      },
    ],
  },
  {
    label: 'Save',
    href: '/savings-accounts',
    'data-automation': 'Save.topBar.Menu',
  },
  {
    label: 'About',
    'data-automation': 'About.topBar.Menu',
    children: [
      {
        label: 'About Zopa',
        href: '/about',
        'data-automation': 'About.About.topBar.Menu',
      },
      {
        label: 'Our story',
        href: '/about/our-story',
        'data-automation': 'Story.About.topBar.Menu',
      },
      {
        label: 'Our board',
        href: '/about/board',
        'data-automation': 'Our_Board.About.topBar.Menu',
      },
      {
        label: 'Our leadership team',
        href: '/about/leadership',
        'data-automation': 'Our_Leadership.About.topBar.Menu',
      },
      {
        label: 'Awards',
        href: '/about/awards',
        'data-automation': 'Awards.About.topBar.Menu',
      },
      {
        label: 'Careers',
        href: '/about/careers',
        'data-automation': 'Careers.About.topBar.Menu',
      },
      {
        label: 'Press office',
        href: '/about/press',
        'data-automation': 'Press_office.About.topBar.Menu',
      },
    ],
  },
  {
    label: 'Support',
    href: '/contact',
    'data-automation': 'Support.topBar.Menu',
  },
];

<>
  <Navbar overlayLogoWith={<span></span>} links={NAV_ITEMS} />
  <div>
    <h1>This is a heading</h1>
    <p>This is a paragraph</p>
  </div>
</>;
```

- Collapsed theme

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#FFFFFF", "overflow": "hidden", "height": "500px", "padding": "0" } } }
import { Navbar } from '@zopauk/react-components';

const NAV_ITEMS = [
  {
    label: 'Borrow',
    'data-automation': 'Borrow.topBar.Button',
    children: [
      {
        label: 'Loans',
        href: '/loans',
        onClick: () => alert('testing'),
        'data-automation': 'loans.Borrow.topBar.Menu',
      },
      {
        label: 'Car loans',
        href: '/loans/car-loans',
        'data-automation': 'Car_loan.Borrow.topBar.Menu',
      },
      {
        label: 'Borrowing power',
        href: '/borrowing-power',
        'data-automation': 'Borrowing_Power.Borrow.topBar.Menu',
      },
    ],
  },
  {
    label: 'Invest',
    'data-automation': 'Invest.topBar.Menu',
    children: [
      {
        label: 'Peer-to peer investments',
        href: '/invest',
        'data-automation': 'Peer_to_peer.Invest.topBar.Menu',
      },
      {
        label: 'Innovative Finance ISA',
        href: '/invest/isa',
        'data-automation': 'Innovative.Invest.topBar.Menu',
      },
    ],
  },
  {
    label: 'About',
    'data-automation': 'About.topBar.Menu',
    children: [
      {
        label: 'About Zopa',
        href: '/about',
        'data-automation': 'About.About.topBar.Menu',
      },
      {
        label: 'Our story',
        href: '/about/our-story',
        'data-automation': 'Story.About.topBar.Menu',
      },
      {
        label: 'Our board',
        href: '/about/board',
        'data-automation': 'Our_Board.About.topBar.Menu',
      },
      {
        label: 'Our leadership team',
        href: '/about/leadership',
        'data-automation': 'Our_Leadership.About.topBar.Menu',
      },
      {
        label: 'Awards',
        href: '/about/awards',
        'data-automation': 'Awards.About.topBar.Menu',
      },
      {
        label: 'Careers',
        href: '/about/careers',
        'data-automation': 'Careers.About.topBar.Menu',
      },
      {
        label: 'Press office',
        href: '/about/press',
        'data-automation': 'Press_office.About.topBar.Menu',
      },
    ],
  },
  {
    label: 'Support',
    href: '/contact',
    'data-automation': 'Support.topBar.Menu',
  },
];

<>
  <Navbar overlayLogoWith={<span></span>} links={NAV_ITEMS} collapsed />
  <div>
    <h1>This is a heading</h1>
    <p>This is a paragraph</p>
  </div>
</>;
```

- With sub headings

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#FFFFFF", "overflow": "hidden", "height": "500px", "padding": "0" } } }
import { Navbar } from '@zopauk/react-components';

const NAV_ITEMS = [
  {
    label: 'Borrow',
    'data-automation': 'Borrow.topBar.Button',
    children: [
      {
        label: 'Loans',
        href: '/loans',
        'data-automation': 'loans.Borrow.topBar.Menu',
      },
      {
        label: 'Car finance',
        isDropdownHeading: true,
      },
      {
        label: 'Car loans',
        href: '/loans/car-loans',
        'data-automation': 'Car_loan.Borrow.topBar.Menu',
      },
      {
        label: 'Tools',
        isDropdownHeading: true,
      },
      {
        label: 'Borrowing power',
        href: '/borrowing-power',
        'data-automation': 'Borrowing_Power.Borrow.topBar.Menu',
      },
    ],
  },
  {
    label: 'Invest',
    'data-automation': 'Invest.topBar.Menu',
    children: [
      {
        label: 'Peer-to peer investments',
        href: '/invest',
        'data-automation': 'Peer_to_peer.Invest.topBar.Menu',
      },
      {
        label: 'Innovative Finance ISA',
        href: '/invest/isa',
        'data-automation': 'Innovative.Invest.topBar.Menu',
      },
    ],
  },
  {
    label: 'About',
    'data-automation': 'About.topBar.Menu',
    children: [
      {
        label: 'About Zopa',
        href: '/about',
        'data-automation': 'About.About.topBar.Menu',
      },
      {
        label: 'Our story',
        href: '/about/our-story',
        'data-automation': 'Story.About.topBar.Menu',
      },
      {
        label: 'Our board',
        href: '/about/board',
        'data-automation': 'Our_Board.About.topBar.Menu',
      },
      {
        label: 'Our leadership team',
        href: '/about/leadership',
        'data-automation': 'Our_Leadership.About.topBar.Menu',
      },
      {
        label: 'Awards',
        href: '/about/awards',
        'data-automation': 'Awards.About.topBar.Menu',
      },
      {
        label: 'Careers',
        href: '/about/careers',
        'data-automation': 'Careers.About.topBar.Menu',
      },
      {
        label: 'Press office',
        href: '/about/press',
        'data-automation': 'Press_office.About.topBar.Menu',
      },
    ],
  },
  {
    label: 'Support',
    href: '/contact',
    'data-automation': 'Support.topBar.Menu',
  },
];

<>
  <Navbar overlayLogoWith={<span></span>} links={NAV_ITEMS} />
  <div>
    <h1>This is a heading</h1>
    <p>This is a paragraph</p>
  </div>
</>;
```

- Custom Navbar components

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#FFFFFF", "overflow": "hidden", "height": "500px", "padding": "0" } } }
import { forwardRef } from 'react';
import styled from 'styled-components';

import { Navbar, Link, navbarLinkStyles } from '@zopauk/react-components';

const NAV_ITEMS = [
  {
    label: 'Borrow',
    'data-automation': 'Borrow.topBar.Button',
    children: [
      {
        label: 'Loans',
        href: '/loans',
        onClick: () => alert('testing'),
        'data-automation': 'loans.Borrow.topBar.Menu',
      },
      {
        label: 'Car Finance',
        isDropdownHeading: true,
      },
      {
        label: 'Car loans',
        href: '/loans/car-loans',
        'data-automation': 'Car_loan.Borrow.topBar.Menu',
      },
      {
        label: 'Borrowing power',
        href: '/borrowing-power',
        'data-automation': 'Borrowing_Power.Borrow.topBar.Menu',
      },
    ],
  },
  {
    label: 'Invest',
    'data-automation': 'Invest.topBar.Menu',
    children: [
      {
        label: 'Peer-to peer investments',
        href: '/invest',
        'data-automation': 'Peer_to_peer.Invest.topBar.Menu',
      },
      {
        label: 'Innovative Finance ISA',
        href: '/invest/isa',
        'data-automation': 'Innovative.Invest.topBar.Menu',
      },
    ],
  },
  {
    label: 'About',
    'data-automation': 'About.topBar.Menu',
    children: [
      {
        label: 'About Zopa',
        href: '/about',
        'data-automation': 'About.About.topBar.Menu',
      },
      {
        label: 'Our story',
        href: '/about/our-story',
        'data-automation': 'Story.About.topBar.Menu',
      },
      {
        label: 'Our board',
        href: '/about/board',
        'data-automation': 'Our_Board.About.topBar.Menu',
      },
      {
        label: 'Our leadership team',
        href: '/about/leadership',
        'data-automation': 'Our_Leadership.About.topBar.Menu',
      },
      {
        label: 'Awards',
        href: '/about/awards',
        'data-automation': 'Awards.About.topBar.Menu',
      },
      {
        label: 'Careers',
        href: '/about/careers',
        'data-automation': 'Careers.About.topBar.Menu',
      },
      {
        label: 'Press office',
        href: '/about/press',
        'data-automation': 'Press_office.About.topBar.Menu',
      },
    ],
  },
  {
    label: 'Support',
    href: '/contact',
    'data-automation': 'Support.topBar.Menu',
  },
];

// could be a gatsby or react-router-dom <Link />
const SomeLibraryLink = React.forwardRef((props, ref) => {
  const linkProps = Object.assign({}, props);
  delete linkProps.isDropdownLink;

  return <a {...linkProps} ref={ref} />;
});

const CustomLink = styled(SomeLibraryLink)`
  ${navbarLinkStyles}
`;

<Navbar
  overlayLogoWith={<a href="https://www.zopa.com" />}
  links={NAV_ITEMS}
  renderLink={(item, index, props) => (
    <CustomLink {...item} target="_blank" {...props} className="px-4 py-2">
      {item.label}
    </CustomLink>
  )}
/>;
```

- Without CTA

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#FFFFFF", "overflow": "hidden", "height": "500px", "padding": "0" } } }
import { Navbar } from '@zopauk/react-components';

const NAV_ITEMS = [
  {
    label: 'Borrow',
    'data-automation': 'Borrow.topBar.Button',
    children: [
      {
        label: 'Loans',
        href: '/loans',
        onClick: () => alert('testing'),
        'data-automation': 'loans.Borrow.topBar.Menu',
      },
      {
        label: 'Car loans',
        href: '/loans/car-loans',
        'data-automation': 'Car_loan.Borrow.topBar.Menu',
      },
      {
        label: 'Borrowing power',
        href: '/borrowing-power',
        'data-automation': 'Borrowing_Power.Borrow.topBar.Menu',
      },
    ],
  },
  {
    label: 'Invest',
    'data-automation': 'Invest.topBar.Menu',
    children: [
      {
        label: 'Peer-to peer investments',
        href: '/invest',
        'data-automation': 'Peer_to_peer.Invest.topBar.Menu',
      },
      {
        label: 'Innovative Finance ISA',
        href: '/invest/isa',
        'data-automation': 'Innovative.Invest.topBar.Menu',
      },
    ],
  },
  {
    label: 'About',
    'data-automation': 'About.topBar.Menu',
    children: [
      {
        label: 'About Zopa',
        href: '/about',
        'data-automation': 'About.About.topBar.Menu',
      },
      {
        label: 'Our story',
        href: '/about/our-story',
        'data-automation': 'Story.About.topBar.Menu',
      },
      {
        label: 'Our board',
        href: '/about/board',
        'data-automation': 'Our_Board.About.topBar.Menu',
      },
      {
        label: 'Our leadership team',
        href: '/about/leadership',
        'data-automation': 'Our_Leadership.About.topBar.Menu',
      },
      {
        label: 'Awards',
        href: '/about/awards',
        'data-automation': 'Awards.About.topBar.Menu',
      },
      {
        label: 'Careers',
        href: '/about/careers',
        'data-automation': 'Careers.About.topBar.Menu',
      },
      {
        label: 'Press office',
        href: '/about/press',
        'data-automation': 'Press_office.About.topBar.Menu',
      },
    ],
  },
  {
    label: 'Support',
    href: '/contact',
    'data-automation': 'Support.topBar.Menu',
  },
];

<Navbar withCTA={false} links={NAV_ITEMS} />;
```

- Without links

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#FFFFFF", "overflow": "hidden", "height": "500px", "padding": "0" } } }
import { Navbar } from '@zopauk/react-components';

<Navbar overlayLogoWith={<a href="https://www.zopa.com" />}></Navbar>;
```

- Custom CTA

```ts { "props": { "style": { "transform": "translate3d(0, 0, 0)", "backgroundColor": "#FFFFFF", "overflow": "hidden", "height": "500px", "padding": "0" } } }
import { Navbar, Link, buttonStyle } from '@zopauk/react-components';
import styled from 'styled-components';

const ButtonLink = styled(Link)`
  ${buttonStyle}
  margin: 8px;
`;

<Navbar
  overlayLogoWith={<a href="https://www.zopa.com" />}
  cta={
    <ButtonLink href="https://www.zopa.com" styling="primary" data-automation="My_Account.topBar.Menu">
      Sign-in
    </ButtonLink>
  }
></Navbar>;
```
