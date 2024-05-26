# Partial HTML

Extracted all html pieces here for convenience, having HTML inline with the markdown gets noisy quite quickly.

## heroSection
Lifted [this hero section](https://tailwindui.com/components/marketing/sections/heroes) from Tailwindui. 

The complexity of the component makes my brain spin. No doubt great thought has gone into the example, particularly to make the diagonal... shadow(?) seamlessly cross from outside to inside the code example. Daisyui has a lovely components that will fit nicely within this layout, like these [Code mockup](https://daisyui.com/components/mockup-code/) examples.

```ts
const whatsNew = `<a href="https://jsr.io/@pd/pdcli" class="inline-flex space-x-6">
  <span class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">What's new</span>
  <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
      <span>Just shipped <span name="pdcli-version" class="animate-pulse h-2 bg-slate-200 rounded col-span-2 text-transparent">0.0.0</span></span>
      <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
      </svg>
  </span>
</a>`

const heroNav = `<div class="mt-10 flex items-center gap-x-6">
    <a href="/examples" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Examples</a>
    <a href="https://github.com/aaronmyatt/pipedown" class="text-sm font-semibold leading-6 text-gray-900">View on GitHub <span aria-hidden="true">→</span></a>
</div>`

input.codeExamplePresentation = ({src}) => `<div class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
  <div class="shadow-lg md:rounded-3xl">
      <img src="${src}" class=""/>
  </div>
</div>`

input.hero = ({h1, subtitle}) => `<div class="bg-white">
  <div class="isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
    <div class="mx-auto max-w-7xl pb-16 pt-10 sm:pb-24 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-24">
      <div class="px-6 lg:px-0 lg:pt-4">
        <div class="mx-auto max-w-2xl">
          <div class="max-w-lg">
            ${whatsNew}
            <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">${h1}</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">${subtitle}</p>
            ${heroNav}
          </div>
        </div>
      </div>
      ${input.codeExamplePresentation({src: "/img/hero.png"})}
  </div>
</div>
`
```

## sectionContainer
Based on the advise of my super designer friend, we want to standardise the padding between sections and _WITHIN_ sections. I'll do that with a little wrapper
```ts
input.wrapSection = (inner) => `
  <div class="bg-white mx-auto max-w-7xl px-6 lg:px-0 lg:px-8 space-y-8 sm:space-y-10 md:space-y-12 mb-24 sm:md-28 md:mb-36">
    ${inner}
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
input.installSection = input.wrapSection(`<div class="mx-auto space-y-12" name="installTabs">
  <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Install</h2>
  <div class="space-y-3 flex flex-col items-center">
    <div class="border-b border-gray-200 w-full">
      <nav class="-mb-px flex" aria-label="Tabs">
        <a href class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 w-1/2 border-b-2 py-4 px-1 text-center text-sm font-medium border-indigo-500 text-indigo-600">Mac / Linux</a>
        <a href class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 w-1/2 border-b-2 py-4 px-1 text-center text-sm font-medium">Windows</a>
      </nav>
    </div>
    <div class="flex flex-col items-center md:w-1/2 text-xs sm:text-lg text-white">
      <div class="tabcontent bg-gray-500 flex flex-col items-center p-4 rounded space-y-2">
        <pre class="w-full"><code class="text-wrap">curl -fsSL https://deno.land/install.sh | sh</code></pre>
        <pre class="w-full"><code class="text-wrap">deno install -Arfg -n pd jsr:@pd/pdcli</code></pre>
      </div>
      <div class="tabcontent windows bg-gray-500 flex flex-col items-center p-4 rounded space-y-2 hidden">
        <pre class="w-full"><code class="text-wrap">irm https://deno.land/install.ps1 | iex</code></pre>
        <pre class="w-full"><code class="text-wrap">deno install -Arfg -n pd jsr:@pd/pdcli</code></pre>
      </div>
    </div>
  </div>
</div>`)
```

## useCases

```ts
input.horizontalCards = ({
  title, cards
} = {
  title: "",
  cards: [{
    icon: "DEFAULT",
    title: "DEFAULT",
    body: "DEFAULT",
  }]
}) => input.wrapSection(`<div>
  <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">${title}</h2>
  <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
    ${cards.map(card => `<li class="col-span-1 flex rounded-md shadow-sm">
          <div class="flex w-16 flex-shrink-0 items-center justify-center bg-pink-600 rounded-l-md text-sm font-medium text-white">${card.icon}</div>
          <div class="flex flex-1 items-center justify-between rounded-r-md border-b border-r border-t border-gray-200 bg-white">
            <div class="flex-1 px-4 py-2 text-sm">
              <a href="#" class="font-medium text-gray-900 hover:text-gray-600">${card.title}</a>
              <p class="text-gray-500">${card.body}</p>
            </div>
          </div>
        </li>`
      ).join("\n")
    }
  </ul>
</div>
`)
```

## featureColumn
Can we just repurpose the hero section for the feature section? 

```ts
const buttonEl = button => `<a href="${button.href}" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">${button.label}</a>`

input.featureColumn = ({h2, copy, imageSrc, reverse, buttons} = { h2: '', copy: '', imageSrc: '', reverse: false, buttons: []}) => input.wrapSection(`<div class="lg:grid lg:grid-cols-2 space-y-12">
  <div class="space-y-12">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">${h2}</h2>
    <p class="text-base md:text-xl leading-normal md:leading-8 text-gray-700">${copy}</p>
    <div>
      ${
        buttons ? buttons.map(buttonEl).join("\n") : buttonEl({ href: 'https://github.com/aaronmyatt/pipedown', label: 'Get Started'})
      }
    </div>
  </div>
  <img src="${imageSrc}" class="${reverse && 'order-1'}" />
</div>`)
```

## featureWithScreenshot
```ts
const buttonEl = button => `<a href="${button.href}" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">${button.label}</a>`

input.featureWithScreenshot = ({h2, pretitle, copy, copy2, imageSrc, buttons}) => input.wrapSection(`
  ${ pretitle ? `<p class="text-sm font-semibold leading-6 text-indigo-600">${pretitle}</p>` : '' }

  <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">${h2}</h2>
  <div>
    <p class="text-base md:text-xl leading-normal md:leading-8 text-gray-700">${copy}</p>
  </div>
  ${copy2 ? `<div><p class="text-base md:text-xl leading-normal md:leading-8 text-gray-700">${copy2}</p></div>` : ''} 
  <div class="flex">
      ${
        buttons ? buttons.map(buttonEl).join("\n") : buttonEl({ href: 'https://github.com/aaronmyatt/pipedown', label: 'Get Started'})
      }
  </div>
  <div class="relative overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <img class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10" src="${imageSrc}" alt="">
      <div class="relative" aria-hidden="true">
        <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"></div>
      </div>
    </div>
  </div>`)
```
