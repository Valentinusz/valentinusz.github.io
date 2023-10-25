const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Boda Bálint',
    favicon: 'img/favicon.ico',

    url: 'https://valentinusz.github.io',
    baseUrl: '/',
    trailingSlash: false,
    deploymentBranch: 'gh-pages',

    organizationName: 'valentinusz',
    projectName: 'valentinusz.github.io',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'hu',
        locales: ['hu'],
    },

    plugins: ['docusaurus-plugin-sass'],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: 'notes',
                    routeBasePath: 'notes',
                    sidebarPath: require.resolve('./sidebars.js'),
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    remarkPlugins: [math],
                    rehypePlugins: [katex]
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.scss'),
                        require.resolve('./src/css/react_flow.scss'),
                        require.resolve('./src/css/math.scss')
                    ],
                },
            }),
        ],
    ],
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
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
                        label: 'Jegyzetek',
                    },
                ],
            },
            docs: {
                sidebar: {
                    hideable: true
                }
            },
            algolia: {
                appId: 'C09RZLQGSR',
                apiKey: '8a7a4806d9bfdfacfb3a9f7be78038b7',
                indexName: 'valentinuszio',
                contextualSearch: true,
                replaceSearchResultPathname: {
                    from: '/notes/',
                    to: '/',
                },
                searchPagePath: 'search',
            },

            metadata: [
                {name: 'keywords', content: 'ELTE IK, ELTE IK tananyagok, Valentinusz, Boda Bálint'},
            ],

            footer: {
                style: 'dark',
                links: [],
                copyright: `Boda Bálint © ${new Date().getFullYear()}`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['java', 'python']
            },
        }),
};

module.exports = config;
