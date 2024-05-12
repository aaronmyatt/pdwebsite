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
            <img src="${src}" />
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
    <div class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
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
      ${input.codeExamplePresentation({src: "/png/heroExample.png"})}
    <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"><!-- wat --></div>
  </div>
</div>
`
```

## featureColumn
Can we just repurpose the hero section for the feature section? 

```ts
input.featureColumn = ({h2, copy, src, reverse}) => `<div class="bg-white">
    <div class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
      <div class="px-6 lg:px-0 lg:pt-4 order-2">
        <div class="mx-auto max-w-2xl">
          <div class="max-w-lg">
            <h2 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">${h2}</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">${copy}</p>
          </div>
        </div>
      </div>
      <img src="${src}" />
</div>
`
```

## featureWithScreenshot
```ts
input.featureWithScreenshot = ({h2, pretitle, copy, copy2, src}) => `<div class="bg-white py-12 sm:py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
      ${ pretitle ? `<p class="text-sm font-semibold leading-6 text-indigo-600">${pretitle}</p>` : '' }
      <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">${h2}</h2>
      <div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none ${copy2 && 'lg:grid-cols-2'}">
        <div>
          <p>${copy}</p>
        </div>
        ${copy2 ? `<div><p>${copy2}</p>` : ''} 
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
input.installSection = `<div class="w-1/2 mx-auto">
  <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Install</h2>
  <div name="installTabs flex flex-col items-center">
    <div class="border-b border-gray-200">
      <nav class="-mb-px flex" aria-label="Tabs">
        <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
        <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 w-1/2 border-b-2 py-4 px-1 text-center text-sm font-medium">Mac / Linux</a>
        <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 w-1/2 border-b-2 py-4 px-1 text-center text-sm font-medium">Windows</a>
      </nav>
    </div>
  </div>
  <div class="tab1 maclinux flex items-center flex-col">
    <pre><code>curl -fsSL https://deno.land/install.sh | sh</code></pre>
    <pre><code>deno install -Arfg -n pd jsr:@pd/pdcli</code></pre>
  </div>
  <div class="tab2 windows flex items-center flex-col">
    <pre><code>irm https://deno.land/install.ps1 | iex</code></pre>
    <pre><code>deno install -Arfg -n pd jsr:@pd/pdcli</code></pre>
  </div>
</div>`
```
