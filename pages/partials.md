# Partial HTML

Extracted all html pieces here for convenience, having HTML inline with the markdown gets noisy quite quickly.

## heroSection
Lifted [this hero section](https://tailwindui.com/components/marketing/sections/heroes) from Tailwindui. 

The complexity of the component makes my brain spin. No doubt great thought has gone into the example, particularly to make the diagonal... shadow(?) seamlessly cross from outside to inside the code example. Daisyui has a lovely components that will fit nicely within this layout, like these [Code mockup](https://daisyui.com/components/mockup-code/) examples.

```ts
const whatsNew = `<div class="mt-24 sm:mt-32 lg:mt-16">
    <a href="#" class="inline-flex space-x-6">
    <span class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">What's new</span>
    <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
        <span>Just shipped v0.1.0</span>
        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
        </svg>
    </span>
    </a>
</div>`

const heroNav = `<div class="mt-10 flex items-center gap-x-6">
    <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Documentation</a>
    <a href="#" class="text-sm font-semibold leading-6 text-gray-900">View on GitHub <span aria-hidden="true">→</span></a>
</div>`

input.codeExamplePresentation = ({src}) => `<div class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
<div class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" aria-hidden="true"><!-- wat --></div>
<div class="shadow-lg md:rounded-3xl">
    <div class="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
    <div class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true"><!-- wat --></div>
    <div class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
        <div class="mx-auto max-w-2xl md:mx-0 md:max-w-none">
        <div class="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
            <div class="flex bg-gray-800/40 ring-1 ring-white/5"><!-- wat --></div>
            <img src="${src}" class="h-3/5"/>
        </div>
        </div>
        <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl" aria-hidden="true"><!-- wat --></div>
    </div>
    </div>
</div>
</div>
</div>`

input.hero = ({logo, h1, subtitle}) => `<div class="bg-white">
  <div class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
    <div class="mx-auto max-w-7xl pb-16 pt-10 sm:pb-24 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-24">
      <div class="px-6 lg:px-0 lg:pt-4">
        <div class="mx-auto max-w-2xl">
          <div class="max-w-lg">
            <img class="h-11" src="${logo}" alt="Your Company" />
            ${whatsNew}
            <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">${h1}</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">${subtitle}</p>
            ${heroNav}
          </div>
        </div>
      </div>
      ${input.codeExamplePresentation({src: "/png/hero.png"})}
    <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"><!-- wat --></div>
  </div>
</div>
`
```

## featureColumn
Can we just repurpose the hero section for the feature section? 

```ts
input.featureColumn = ({h2, copy, src, reverse}) => `<div class="bg-white">
    <div class="mx-auto max-w-7xl pb-10 pt-8 sm:pb-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-16">
      <div class="px-6 lg:px-0 lg:pt-4 ${reverse && 'order-2'}">
        <div class="mx-auto max-w-2xl">
          <div class="max-w-lg">
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">${h2}</h1>
            <div class="mt-10">
              <p class="text-xl leading-8 text-justify text-gray-700">${copy}</p>
            </div>
            <div class="mt-10 flex">
              <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            </div>
          </div>
        </div>
      </div>
      <img src="${src}" />
</div>
`
```

## featureWithScreenshot
```ts
input.featureWithScreenshot = ({h2, pretitle, copy, copy2, src}) => `<div class="bg-white py-4 sm:py-8">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
      ${ pretitle ? `<p class="text-sm font-semibold leading-6 text-indigo-600">${pretitle}</p>` : '' }
      <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">${h2}</h2>
      <div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none ${copy2 && 'lg:grid-cols-2'}">
        <div>
          <p class="text-xl leading-8 text-justify text-gray-700">${copy}</p>
        </div>
        ${copy2 ? `<div><p class="text-xl leading-8 text-justify text-gray-700">${copy2}</p>` : ''} 
      </div>
      <div class="mt-10 flex">
        <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
      </div>
    </div>
  </div>
  <div class="relative overflow-hidden pt-16 lg:pt-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <img class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10" src="${src}" alt="">
      <div class="relative" aria-hidden="true">
        <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"></div>
      </div>
    </div>
  </div>
</div>
`
```

## installSection
For the smallest breakpoint Tailwindui was suggesting a `<select>` but I am planning for only two tabs:
```html skip
<div class="sm:hidden">
  <label for="tabs" class="sr-only">Select a tab</label>
  <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
  <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
    <option>Mac / Linux</option>
    <option>Windows</option>
  </select>
</div>
```

```ts
input.installSection = `<div class="w-1/2 mx-auto text-center" name="installTabs">
  <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Install</h2>
  <div class="border-b border-gray-200">
    <nav class="-mb-px flex" aria-label="Tabs">
      <a href class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 w-1/2 border-b-2 py-4 px-1 text-center text-sm font-medium border-indigo-500 text-indigo-600">Mac / Linux</a>
      <a href class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 w-1/2 border-b-2 py-4 px-1 text-center text-sm font-medium">Windows</a>
    </nav>
  </div>
  <div class="tabcontent bg-gray-500 flex flex-col items-center p-4 rounded-2xl space-y-2 text-lg text-white">
    <pre><code>curl -fsSL https://deno.land/install.sh | sh</code></pre>
    <pre><code>deno install -Arfg -n pd jsr:@pd/pdcli</code></pre>
  </div>
  <div class="tabcontent windows bg-gray-500 flex flex-col items-center p-4 rounded-2xl space-y-2 text-lg text-white ${Deno.env.has('DENO_DEPLOYMENT_ID') && 'hidden'}">
    <pre><code>irm https://deno.land/install.ps1 | iex</code></pre>
    <pre><code>deno install -Arfg -n pd jsr:@pd/pdcli</code></pre>
  </div>
</div>`
```

## footer
https://tailwindui.com/components/marketing/sections/footers

```ts
input.footer = `<footer class="bg-white">
  <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
    <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
      <div class="pb-6">
        <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
      </div>
      <div class="pb-6">
        <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
      </div>
      <div class="pb-6">
        <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</a>
      </div>
      <div class="pb-6">
        <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Press</a>
      </div>
      <div class="pb-6">
        <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Accessibility</a>
      </div>
      <div class="pb-6">
        <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Partners</a>
      </div>
    </nav>
    <div class="mt-10 flex justify-center space-x-10">
      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Facebook</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
        </svg>
      </a>
      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Instagram</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
        </svg>
      </a>
      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">X</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      </a>
      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">GitHub</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
        </svg>
      </a>
      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">YouTube</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>
    <p class="mt-10 text-center text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
  </div>
</footer>`
```
