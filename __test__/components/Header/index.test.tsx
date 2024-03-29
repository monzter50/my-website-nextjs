import { render } from '@test/testUtils';
import React from "react";
import Header from '@components/Header';

describe("Header", () => {

  it("should render the Header", () => {
    const tree = render(<Header/>);
    expect(tree).toMatchInlineSnapshot(`
{
  "asFragment": [Function],
  "baseElement": <body>
    <div>
      <section
        class="relative pt-[8rem] pb-[3rem]"
        data-testid="HeaderTest"
        id="home"
      >
        <div
          class="absolute inset-0 z-[-1] bg-cover bg-center"
          style="background-image: url(https://s3.amazonaws.com/monstercodes.dev/assets/mc_textura.png);"
        />
        <section
          class="mx-auto max-w-[1200px] w-11/12"
        >
          <header
            class="flex justify-between"
          >
            <article
              class="relative flex flex-col justify-center leading-3 text-blue-ligth"
            >
              <h1
                class="text-7xl text-blue-ligth text-black dark:text-blue my-2 text-5xl font-bold"
              >
                common:introduction.title
              </h1>
              <h2
                class="bg-[linear-gradient(90deg,var(--blue),var(--blue-ligth))] bg-clip-text dark:text-transparent text-transparent text-black dark:text-blue my-2 text-4xl font-bold"
              >
                common:introduction.subtitle
              </h2>
              <div
                class="flex items-center py-3"
              >
                <p
                  class="text-white text-base font-normal text-black dark:text-white my-5"
                >
                  common:introduction.followme
                  :
                </p>
                <span
                  class="flex items-center ml-5"
                >
                  <a
                    class="flex"
                    href="https://github.com/monzter50"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div
                      class="tooltip"
                      role="alert"
                    >
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-github fa-xs icon"
                        data-icon="github"
                        data-prefix="fab"
                        focusable="false"
                        role="img"
                        viewBox="0 0 496 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                </span>
                <span
                  class="flex items-center ml-5"
                >
                  <a
                    class="flex"
                    href="https://codepen.io/monstercodes"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div
                      class="tooltip"
                      role="alert"
                    >
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-codepen fa-xs icon"
                        data-icon="codepen"
                        data-prefix="fab"
                        focusable="false"
                        role="img"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                </span>
                <span
                  class="flex items-center ml-5"
                >
                  <a
                    class="flex"
                    href="https://www.linkedin.com/in/jose-gonzalez-b32228138/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div
                      class="tooltip"
                      role="alert"
                    >
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-linkedin fa-xs icon"
                        data-icon="linkedin"
                        data-prefix="fab"
                        focusable="false"
                        role="img"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                </span>
                <span
                  class="flex items-center ml-5"
                >
                  <a
                    class="flex"
                    href="https://twitter.com/monster_codes"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div
                      class="tooltip"
                      role="alert"
                    >
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-twitter fa-xs icon"
                        data-icon="twitter"
                        data-prefix="fab"
                        focusable="false"
                        role="img"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                </span>
                <span
                  class="flex items-center ml-5"
                >
                  <a
                    class="flex"
                    href="https://www.instagram.com/monstercodes/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div
                      class="tooltip"
                      role="alert"
                    >
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-instagram fa-xs icon"
                        data-icon="instagram"
                        data-prefix="fab"
                        focusable="false"
                        role="img"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                </span>
                <span
                  class="flex items-center ml-5"
                >
                  <a
                    class="flex"
                    href="https://s3.amazonaws.com/monstercodes.dev/assets/CV+Jose+Antonio.pdf"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div
                      class="tooltip"
                      role="alert"
                    >
                      <svg
                        aria-hidden="true"
                        class="svg-inline--fa fa-file fa-xs iconFile"
                        data-icon="file"
                        data-prefix="fas"
                        focusable="false"
                        role="img"
                        viewBox="0 0 384 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                </span>
              </div>
            </article>
            <div
              class="hidden lg:block"
            >
              <span
                style="box-sizing: border-box; display: inline-block; overflow: hidden; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"
              >
                <span
                  style="box-sizing: border-box; display: block; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27300%27%20height=%27500%27/%3e"
                    style="display: block; max-width: 100%; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"
                  />
                </span>
                <img
                  data-nimg="intrinsic"
                  decoding="async"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                />
                <noscript />
              </span>
            </div>
          </header>
        </section>
      </section>
    </div>
  </body>,
  "container": <div>
    <section
      class="relative pt-[8rem] pb-[3rem]"
      data-testid="HeaderTest"
      id="home"
    >
      <div
        class="absolute inset-0 z-[-1] bg-cover bg-center"
        style="background-image: url(https://s3.amazonaws.com/monstercodes.dev/assets/mc_textura.png);"
      />
      <section
        class="mx-auto max-w-[1200px] w-11/12"
      >
        <header
          class="flex justify-between"
        >
          <article
            class="relative flex flex-col justify-center leading-3 text-blue-ligth"
          >
            <h1
              class="text-7xl text-blue-ligth text-black dark:text-blue my-2 text-5xl font-bold"
            >
              common:introduction.title
            </h1>
            <h2
              class="bg-[linear-gradient(90deg,var(--blue),var(--blue-ligth))] bg-clip-text dark:text-transparent text-transparent text-black dark:text-blue my-2 text-4xl font-bold"
            >
              common:introduction.subtitle
            </h2>
            <div
              class="flex items-center py-3"
            >
              <p
                class="text-white text-base font-normal text-black dark:text-white my-5"
              >
                common:introduction.followme
                :
              </p>
              <span
                class="flex items-center ml-5"
              >
                <a
                  class="flex"
                  href="https://github.com/monzter50"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div
                    class="tooltip"
                    role="alert"
                  >
                    <svg
                      aria-hidden="true"
                      class="svg-inline--fa fa-github fa-xs icon"
                      data-icon="github"
                      data-prefix="fab"
                      focusable="false"
                      role="img"
                      viewBox="0 0 496 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </span>
              <span
                class="flex items-center ml-5"
              >
                <a
                  class="flex"
                  href="https://codepen.io/monstercodes"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div
                    class="tooltip"
                    role="alert"
                  >
                    <svg
                      aria-hidden="true"
                      class="svg-inline--fa fa-codepen fa-xs icon"
                      data-icon="codepen"
                      data-prefix="fab"
                      focusable="false"
                      role="img"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </span>
              <span
                class="flex items-center ml-5"
              >
                <a
                  class="flex"
                  href="https://www.linkedin.com/in/jose-gonzalez-b32228138/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div
                    class="tooltip"
                    role="alert"
                  >
                    <svg
                      aria-hidden="true"
                      class="svg-inline--fa fa-linkedin fa-xs icon"
                      data-icon="linkedin"
                      data-prefix="fab"
                      focusable="false"
                      role="img"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </span>
              <span
                class="flex items-center ml-5"
              >
                <a
                  class="flex"
                  href="https://twitter.com/monster_codes"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div
                    class="tooltip"
                    role="alert"
                  >
                    <svg
                      aria-hidden="true"
                      class="svg-inline--fa fa-twitter fa-xs icon"
                      data-icon="twitter"
                      data-prefix="fab"
                      focusable="false"
                      role="img"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </span>
              <span
                class="flex items-center ml-5"
              >
                <a
                  class="flex"
                  href="https://www.instagram.com/monstercodes/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div
                    class="tooltip"
                    role="alert"
                  >
                    <svg
                      aria-hidden="true"
                      class="svg-inline--fa fa-instagram fa-xs icon"
                      data-icon="instagram"
                      data-prefix="fab"
                      focusable="false"
                      role="img"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </span>
              <span
                class="flex items-center ml-5"
              >
                <a
                  class="flex"
                  href="https://s3.amazonaws.com/monstercodes.dev/assets/CV+Jose+Antonio.pdf"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div
                    class="tooltip"
                    role="alert"
                  >
                    <svg
                      aria-hidden="true"
                      class="svg-inline--fa fa-file fa-xs iconFile"
                      data-icon="file"
                      data-prefix="fas"
                      focusable="false"
                      role="img"
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </span>
            </div>
          </article>
          <div
            class="hidden lg:block"
          >
            <span
              style="box-sizing: border-box; display: inline-block; overflow: hidden; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"
            >
              <span
                style="box-sizing: border-box; display: block; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"
              >
                <img
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27300%27%20height=%27500%27/%3e"
                  style="display: block; max-width: 100%; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"
                />
              </span>
              <img
                data-nimg="intrinsic"
                decoding="async"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
              />
              <noscript />
            </span>
          </div>
        </header>
      </section>
    </section>
  </div>,
  "debug": [Function],
  "findAllByAltText": [Function],
  "findAllByDisplayValue": [Function],
  "findAllByLabelText": [Function],
  "findAllByPlaceholderText": [Function],
  "findAllByRole": [Function],
  "findAllByTestId": [Function],
  "findAllByText": [Function],
  "findAllByTitle": [Function],
  "findByAltText": [Function],
  "findByDisplayValue": [Function],
  "findByLabelText": [Function],
  "findByPlaceholderText": [Function],
  "findByRole": [Function],
  "findByTestId": [Function],
  "findByText": [Function],
  "findByTitle": [Function],
  "getAllByAltText": [Function],
  "getAllByDisplayValue": [Function],
  "getAllByLabelText": [Function],
  "getAllByPlaceholderText": [Function],
  "getAllByRole": [Function],
  "getAllByTestId": [Function],
  "getAllByText": [Function],
  "getAllByTitle": [Function],
  "getByAltText": [Function],
  "getByDisplayValue": [Function],
  "getByLabelText": [Function],
  "getByPlaceholderText": [Function],
  "getByRole": [Function],
  "getByTestId": [Function],
  "getByText": [Function],
  "getByTitle": [Function],
  "queryAllByAltText": [Function],
  "queryAllByDisplayValue": [Function],
  "queryAllByLabelText": [Function],
  "queryAllByPlaceholderText": [Function],
  "queryAllByRole": [Function],
  "queryAllByTestId": [Function],
  "queryAllByText": [Function],
  "queryAllByTitle": [Function],
  "queryByAltText": [Function],
  "queryByDisplayValue": [Function],
  "queryByLabelText": [Function],
  "queryByPlaceholderText": [Function],
  "queryByRole": [Function],
  "queryByTestId": [Function],
  "queryByText": [Function],
  "queryByTitle": [Function],
  "rerender": [Function],
  "unmount": [Function],
}
`);

  });


})