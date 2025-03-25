import Link from "@docusaurus/Link"
import Layout from "@theme/Layout"
import React from "react"

function FeatureItem({ children, href = "" }) {
  return (
    <>
      <a
        className="group flex gap-y-6 w-full h-full hover:bg-gray-100 hover:no-underline rounded-lg p-5 transition-all dark:hover:bg-white/[.075]"
        href={href}
        target="_blank"
        rel="noopener"
      >
        <div className="flex gap-2 items-center">{children}</div>
      </a>
    </>
  )
}

export default function Home() {
  return (
    <Layout
      title="Źródło nauki tworzenia stron i aplikacji internetowych"
      description="Kompendium wiedzy na temat web developmentu"
    >
      <div className="bg-hero-pattern flex-1">
        <div className="min-h-[60vh] flex justify-center items-center">
          <header>
            <h1 className="p-2 font-bold text-5xl sm:text-7xl text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-indigo-700">
              Źródło nauki tworzenia stron
              <br /> i aplikacji internetowych
            </h1>

            <p className="text-slate-700 dark:text-slate-300 text-center">
              Mimo wysiłku wkładanego w tworzenie serwisu, materiały są w pełni
              darmowe!
            </p>

            <div className="my-16 text-center">
              <Link
                className="bg-indigo-500 hover:bg-indigo-600 text-xl font-semibold text-white hover:text-white py-4 px-8 rounded hover:no-underline"
                to="/podstawy/informatyka"
              >
                Rozpocznij Naukę
              </Link>
            </div>
          </header>
        </div>

        <main className="max-w-screen-sm mx-auto">
          <p className="mb-12">
            Jeśli uznasz Codisity za wartościowy serwis, rozważ proszę wsparcie:
          </p>

          <div className="flex flex-col gap-4">
            <FeatureItem href="https://codisity.pl/youtube">
              <svg
                className="w-8 h-8 text-gray-800 mr-2 dark:text-gray-200 group-hover:scale-110 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="32"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z"
                />
              </svg>
              <p className="m-0 block font-bold text-gray-800 dark:text-white group-hover:translate-x-1 transition-transform">
                Zasubskrybuj YouTube'owy kanał Codisity
              </p>
            </FeatureItem>

            <FeatureItem href="https://www.udemy.com/user/adrianbienias">
              <svg
                className="w-8 h-8 text-gray-800 mr-2 dark:text-gray-200 group-hover:scale-110 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 0L5.81 3.573v3.574l6.189-3.574l6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.509 3.055-2.948 3.055c-1.428 0-2.947-.991-2.947-3.027v-7.878z"
                />
              </svg>
              <p className="m-0 block font-bold text-gray-800 dark:text-white group-hover:translate-x-1 transition-transform">
                Kup jeden z moich kursów, który Cię interesuje, na Udemy
              </p>
            </FeatureItem>

            {/* <FeatureItem href="/100-bugow-js">
              <svg
                className="w-8 h-8 text-gray-800 mr-2 dark:text-gray-200 group-hover:scale-110 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="currentColor"
                    d="M7.67 5.5A4.998 4.998 0 0 1 12 3a4.998 4.998 0 0 1 4.33 2.5L17.2 7H6.8l.869-1.5Zm-4.117.606a1 1 0 0 1 1.341.447c.147.293.5.674.973.99C6.353 7.867 6.781 8 7 8h10c.219 0 .647-.133 1.133-.457c.474-.316.826-.697.973-.99a1 1 0 1 1 1.788.894c-.353.707-1 1.326-1.652 1.76a5.48 5.48 0 0 1-.966.516A9.77 9.77 0 0 1 18.892 12H21a1 1 0 1 1 0 2h-2.012a9.995 9.995 0 0 1-.74 3.327c.572.33.963.86 1.209 1.35A5.5 5.5 0 0 1 20 21a1 1 0 1 1-2 0c0-.374-.101-.966-.332-1.428c-.13-.26-.26-.409-.385-.49c-1.056 1.486-2.539 2.54-4.283 2.835V13a1 1 0 1 0-2 0v8.917c-1.744-.295-3.227-1.35-4.283-2.834c-.126.08-.255.23-.385.49A3.513 3.513 0 0 0 6 21a1 1 0 1 1-2 0a5.5 5.5 0 0 1 .543-2.322c.246-.492.637-1.02 1.209-1.35A9.994 9.994 0 0 1 5.012 14H3a1 1 0 1 1 0-2h2.108a9.782 9.782 0 0 1 .616-2.277a5.483 5.483 0 0 1-.966-.516c-.651-.434-1.3-1.053-1.652-1.76a1 1 0 0 1 .447-1.341Z"
                  />
                </g>
              </svg>
              <p className="m-0 block font-bold text-gray-800 dark:text-white group-hover:translate-x-1 transition-transform">
                Zapisz się na darmowy kurs emailowy "100 Bugów JS"
              </p>
            </FeatureItem> */}

            <FeatureItem href="/">
              <svg
                className="w-8 h-8 text-gray-800 mr-2 dark:text-gray-200 group-hover:scale-110 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 9a3 3 0 1 0-2.977-2.63l-6.94 3.47a3 3 0 1 0 0 4.319l6.94 3.47a3 3 0 1 0 .895-1.789l-6.94-3.47a3.03 3.03 0 0 0 0-.74l6.94-3.47C16.456 8.68 17.19 9 18 9Z"
                />
              </svg>

              <p className="m-0 block font-bold text-gray-800 dark:text-white group-hover:translate-x-1 transition-transform">
                Udostępnij link do tej strony swoimi znajomymi
              </p>
            </FeatureItem>
          </div>

          <p className="my-16">Z góry wielkie dzięki! 🎉</p>
        </main>
      </div>
    </Layout>
  )
}
