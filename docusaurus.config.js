/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'FRESCO Knowledgebase',
  tagline: 'From FRESCO pros, to FRESCO pros',
  url: 'https://perazz.github.io/',
  baseUrl: '/fresco.knowledgebase/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/FRESCOicon_32x32.png',
  organizationName: 'perazz', // Usually your GitHub org/user name.
  projectName: 'fresco.knowledgebase', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'FRESCO',
      logo: {
        alt: 'FRESCO Logo',
        src: 'img/base_logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/4702870/federico-perini?tab=profile',
            },
            {
              label: 'Web',
              href: 'http://www.federicoperini.info',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/FedericoPerini',
            },
            {
              label: 'Consulting',
              href: 'http://www.w-erc.com',
            },		  			
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © 2014-${new Date().getFullYear()} Federico Perini. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
