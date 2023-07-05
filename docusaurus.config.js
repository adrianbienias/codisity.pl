// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Codisity",
  favicon: "images/favicon.ico",

  // Set the production url of your site here
  url: "https://codisity.pl",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "adrianbienias", // Usually your GitHub org/user name.
  // projectName: "codisity", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pl",
    locales: ["pl"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/adrianbienias/codisity.pl/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-C4MJB6VCM9",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      // image: "images/codisity-social-card.jpg",
      navbar: {
        logo: {
          alt: "Logo",
          src: "images/logo-black.svg",
          srcDark: "images/logo-white.svg",
          className: "navbar-logo",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "csFundamentalsSidebar",
            position: "left",
            label: "Informatyka",
          },
          {
            type: "docSidebar",
            sidebarId: "uxuiSidebar",
            position: "left",
            label: "UX/UI",
          },
          {
            type: "docSidebar",
            sidebarId: "frontendSidebar",
            position: "left",
            label: "Frontend",
          },
          {
            to: "/100-bugow-js",
            position: "left",
            label: "100 Bugów JS",
          },
          {
            to: "docs/tags",
            position: "right",
            label: "Tagi",
          },
        ],
      },
      footer: {
        style: "light",
        links: [],
        copyright: `Codisity © ${new Date().getFullYear()}, by <a href="https://bienias.dev" target="_blank" rel="noopener">Adrian Bienias</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    // Docs: https://github.com/praveenn77/docusaurus-lunr-search
    require.resolve("docusaurus-lunr-search"),
    // TailwindCSS
    async function docusaurusTailwindCSS(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"))
          postcssOptions.plugins.push(require("autoprefixer"))
          return postcssOptions
        },
      }
    },
  ],
}

module.exports = config
