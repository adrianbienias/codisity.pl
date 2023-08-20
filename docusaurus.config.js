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
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
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
          routeBasePath: "/",
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
      image: "images/og/homepage.png",
      navbar: {
        logo: {
          alt: "Logo",
          src: "images/codisity-logo-light.svg",
          srcDark: "images/codisity-logo-dark.svg",
          className: "navbar-codisity-logo",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "basicsSidebar",
            position: "left",
            label: "Podstawy",
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
            type: "docSidebar",
            sidebarId: "backendSidebar",
            position: "left",
            label: "Backend",
          },
          {
            type: "docSidebar",
            sidebarId: "fullstackSidebar",
            position: "left",
            label: "Full Stack",
          },
          {
            to: "/100-bugow-js",
            position: "left",
            label: "100 Bugów JS",
          },
          {
            href: "/youtube",
            target: "_blank",
            rel: "noopener",
            position: "right",
            html: "<div class='navbar-youtube-logo'>YouTube</div>",
          },
          {
            to: "/tags",
            position: "right",
            label: "Tagi",
          },
          {
            type: "dropdown",
            label: "Język",
            position: "right",
            items: [
              {
                html: "🇵🇱 Polski",
                target: "",
                href: "https://codisity.pl",
              },
              {
                html: "🇺🇸 Angielski",
                target: "",
                href: "https://codisity.com",
              },
            ],
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `<div class="text-base">Codisity © ${new Date().getFullYear()}, by <a href="https://adrianbienias.pl" target="_blank" rel="noopener">Adrian Bienias</a></div>`,
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
