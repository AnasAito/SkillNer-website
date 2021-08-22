/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Newsletter() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <svg
            className="absolute top-8 left-1/2 -ml-3"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={392}
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            ></div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Get notified when we&rsquo;re launching.
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
                  SkillNer is more of an ecosystem than a single product. we
                  work hard to deliver bricks of it to you.Subscribe to our
                  newsletter so you get infomed about our roadmap and get
                  notified when we lunch a new part of skillner .
                </p>
              </div>

              <iframe
                // title="newsletter"
                src="https://skillner.substack.com/embed"
                frameborder="0"
                scrolling="no"
                className="w-full   rounded-md "
                //style={{ backgroundColor: 'transparent' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
