import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {themes} from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
export default {
    markdown: {
        mdx1Compat: {
            comments: false,
            admonitions: false,
            headingIds: false
        }
    },

    title: 'Boda Bálint',
    favicon: 'img/favicon.svg',

    url: 'https://valentinusz.github.io',
    baseUrl: '/',
    trailingSlash: false,
    deploymentBranch: 'gh-pages',

    organizationName: 'valentinusz',
    projectName: 'valentinusz.github.io',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {defaultLocale: 'hu', locales: ['hu']},

    plugins: ['docusaurus-plugin-sass'],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            {
                docs: {
                    path: 'notes',
                    routeBasePath: 'notes',
                    sidebarPath: './sidebars.js',
                    admonitions: {
                        keywords: ['example'],
                        extendDefaults: true
                    },
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [
                        [rehypeKatex, {macros: {'\\pr': '\\mathrm{P}', '\\B': '\\mathrm{B}', '\\E': '\\mathrm{E}'}}]
                    ]
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
            },
        ],
    ],

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        }
    ],

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    themeConfig: {
        respectPrefersColorScheme: true,
        image: 'img/social-card.jpg',

        navbar: {
            title: 'Boda Bálint',
            logo: {
                alt: 'logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'notesSidebar',
                    position: 'left',
                    label: 'Jegyzetek',
                }
            ]
        },

        prism: {
            theme: themes.vsLight,
            darkTheme: themes.vsDark,
            additionalLanguages: ['java', 'python', 'sql']
        },

        footer: {
            style: 'dark',
            links: [],
            copyright: `Boda Bálint © ${new Date().getFullYear()}`,
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
        ]
    }
};
