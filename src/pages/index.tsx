import Link from "@docusaurus/Link"
import Layout from "@theme/Layout"
import React from "react"

export default function Home() {
  return (
    <Layout
      title="Źródło nauki tworzenia stron i aplikacji internetowych"
      description="Kompendium wiedzy na temat web developmentu"
    >
      <div className="bg-hero-pattern flex-1">
        <div className="min-h-[75vh] flex justify-center items-center">
          <header>
            <h1 className="font-bold text-5xl sm:text-7xl text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-indigo-700">
              Źródło nauki tworzenia stron
              <br /> i aplikacji internetowych
            </h1>

            <div className="text-slate-700 dark:text-slate-300 max-w-prose mx-auto text-left">
              <ul>
                <li>
                  Serwis jest w trakcie rozwoju i treści będą pojawiały się
                  sukcesywnie
                </li>
                <li>
                  Sekcje linkują do zewnętrznych źródeł z informacjami na dany
                  temat
                </li>
                <li>Część sekcji zawiera dodatkowe materiały w formie wideo</li>
              </ul>
            </div>

            <div className="my-16 text-center">
              <Link
                className="bg-indigo-500 hover:bg-indigo-600 text-xl font-semibold text-white hover:text-white py-4 px-8 rounded hover:no-underline"
                to="/docs/informatyka/informatyka"
              >
                Rozpocznij Naukę
              </Link>
            </div>
          </header>

          <main></main>
        </div>
      </div>
    </Layout>
  )
}
