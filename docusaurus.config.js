// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Boda Bálint',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://valentinusz.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    trailingSlash: false,
    deploymentBranch: 'gh-pages',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'valentinusz', // Usually your GitHub org/user name.
    projectName: 'valentinusz.github.io', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'hu',
        locales: ['hu', 'en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: 'materials',
                    routeBasePath: 'materials',
                    sidebarPath: require.resolve('./sidebars.js')
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Boda Bálint',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Tananyagok',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/Valentinusz/valentinusz.github.io',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            algolia: {
                // The application ID provided by Algolia
                appId: 'C09RZLQGSR',

                // Public API key: it is safe to commit it
                apiKey: '8a7a4806d9bfdfacfb3a9f7be78038b7',

                indexName: 'valentinuszio',

                // Optional: see doc section below
                contextualSearch: true,

                // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                // externalUrlRegex: 'external\\.com|domain\\.com',

                // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
                replaceSearchResultPathname: {
                    from: '/materials/', // or as RegExp: /\/docs\//
                    to: '/',
                },

                // Optional: path for search page that enabled by default (`false` to disable it)
                searchPagePath: 'search',
            },

            footer: {
                style: 'dark',
                links: [
                    // {
                    //   title: 'Docs',
                    //   items: [
                    //     {
                    //       label: 'Tutorial',
                    //       to: '/materials/intro',
                    //     },
                    //   ],
                    // },
                    // {
                    //   title: 'Community',
                    //   items: [
                    //     {
                    //       label: 'Stack Overflow',
                    //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                    //     },
                    //     {
                    //       label: 'Discord',
                    //       href: 'https://discordapp.com/invite/docusaurus',
                    //     },
                    //     {
                    //       label: 'Twitter',
                    //       href: 'https://twitter.com/docusaurus',
                    //     },
                    //   ],
                    // },
                    // {
                    //   title: 'More',
                    //   items: [
                    //     {
                    //       label: 'Blog',
                    //       to: '/blog',
                    //     },
                    //     {
                    //       label: 'GitHub',
                    //       href: 'https://github.com/facebook/docusaurus',
                    //     },
                    //   ],
                    // },
                ],
                copyright: `Boda Bálint © ${new Date().getFullYear()}`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['java', 'python', 'agda']
            },
        }),
};

module.exports = config;
