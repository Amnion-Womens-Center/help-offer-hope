import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  isSticky: false,
  links: [
    {
      text: 'About Amnion',
      href: '/about',
      links: [
        {
          text: 'Center Tours',
          href: getPermalink('/about/tours'),
        },
        {
          text: 'Contact Us',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'Ways to Help',
      href: '/help',
      links: [
        {
          text: 'Bottles for Life',
          href: getPermalink('/help/bottles-for-life'),
        },
        {
          text: 'Partner',
          href: getPermalink('/help/partner'),
        },
        {
          text: 'Promote',
          href: getPermalink('/help/promote'),
        },
      ],
    },
    {
      text: 'Events',
      href: '/events',
      links: [
        {
          text: 'Gala',
          href: getPermalink('/events/gala'),
        },
        {
          text: 'Walk for Life',
          href: getPermalink('/events/walk-for-life'),
        },
        {
          text: 'Gala 2024',
          href: getPermalink('/events/gala/gala-2024'),
        },
      ],
    },

    {
      text: 'Resources',
      href: '/resources',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'About Amnion',
      href: '/about',
      links: [
        { text: 'Center Tours', href: '#' },
        { text: 'Contact Us', href: '#' },
      ],
    },
    {
      title: 'Ways to Help',
      href: '/help',
      links: [
        { text: 'Bottles for Life', href: '#' },
        { text: 'Partner', href: '#' },
        { text: 'Promote', href: '#' },
      ],
    },
    {
      title: 'Events',
      href: '/events',
      links: [
        { text: 'Gala', href: '#' },
        { text: 'Walk for Life', href: '#' },
      ],
    },
    {
      title: 'Resources',
      href: '/resources',
      links: [],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'mdi:facebook', href: 'https://www.facebook.com/helpofferhope/' },
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    &copy; 2024 Amnion Women's Center · All rights reserved.
  `,
};
