# Home Page

I want the Pipedown home page to spell out why writing code with Pipedown is superior to doing so with traditional tools and files. Some of the key points to cover will be the:
- Executable Markdown
  - It's just Markdown.
- Simplified mental model
  - It's just Markdown!
- Universal applicability
  - Exports to almost anything
- Shorten time from idea to _publishing_
  - Deploy to any host
- "Self" documenting
  - Marry your code to Markdown
  - Code is meant for reading, seamlessly mix prose, brain dumps, share mental context
- I can't believe it's just markdown!
- Constraints/Guard rails/Pipes




Some SaaS/software tool home pages I like:
- https://laravel.com/
  - Simple, no fluff
- https://pipedream.com/
  - A similarly positioned, and named, tool
  - These interactive sections seem useful for condensing a lot of features into one slice of the page
  - ![featurebox](../../img/featurebox.png)
- https://nodered.org/
- https://deno.com/

```json
{
    "writePath": "./public/index.html",
    "copy": {
        "h1": "Executable Markdown",
        "subtitle": "Pipedown executes your markdown codeblocks top-<b>down</b>, turning your markdown into general purpose <b>executable</b> pipelines",
        "justMarkdown": "Use the Markdown syntax your know and love to expressively describe, document and teach your ideas.",
        "justBuild": "Use Pipedown to experiment, build, and publish any idea. From standalone scripts to serving websites, Pipedown will adapt to your needs.",
        "justDeno": "Leverage Deno's exciting ecosystem to build anything you can imagine. Pipedown is just Markdown, but with super (Deno) powers.",
        "justEnough": "You can use the full power of Deno, Typescript and WebAssembly <i>within</i> Pipedown codeblocks. <br/><br/> Pipedown handles the communication between codeblocks, and understands a few carefully crafted conventions to interpret your markdown and make writing code as simple as prose."
    }
}
```

## hero
```ts
const { copy: { h1, subtitle } } = opts.config
const hero = $p.get(input, '/partials/hero')
$p.set(input, '/sections/-', hero({ h1, subtitle }))
```

## howToInstall
```ts
const installSection = $p.get(input, '/partials/installSection')
$p.set(input, '/sections/-', installSection)
```

## useCases
```ts
const horizontalCards = $p.get(input, '/partials/horizontalCards')
$p.set(input, '/sections/-', horizontalCards({
  title: "Use Cases",
  cards: [
    {
      title: "Servers",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
</svg>`,
      body: "Run and deploy as a server"
    },
    {
      title: "CLI",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
`,
      body: "From the command line"
    },
    {
      title: "Browser & Scripts",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>`,
      body: "Generate one off and browser scripts"
    },
    {
      title: "Education and Tutorials",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>`,
      body: "The optimal format for teaching"
    },
  ]
}))
```


## writeMarkdown
Pipedown is just Markdown. All it is doing is parsing markdown, reading the code blocks, and running them. A few conventions add some ergonomics, but the familiarity of Markdown is a key power. "Execute" the markdown, data flows through the Pipe... down.

```ts
const feature = $p.get(input, '/partials/featureWithScreenshot')
$p.set(input, '/sections/-', feature({
  h2: "Write Markdown",
  copy: $p.get(opts, '/config/copy/justMarkdown'),
  imageSrc: "/img/justMarkdown.png"
}))
```

## buildAnything
At the end of the day, Pipedown is just Markdown. All it is doing is parsing markdown, reading the code blocks, and running them. A few conventions add some ergonomics, but the familiarity of Markdown is a key power. "Execute" the markdown, data flows through the Pipe... down.

```ts
const feature = $p.get(input, '/partials/featureWithScreenshot')
$p.set(input, '/sections/-', feature({
  h2: "Build Anything",
  copy: $p.get(opts, '/config/copy/justBuild'),
  imageSrc: "/img/justBuild.png"
}))
```

## usesDeno
```ts
const feature = $p.get(input, '/partials/featureColumn')
$p.set(input, '/sections/-', feature({
  h2: "Built on Deno",
  pretitle: "Batteries included",
  copy: $p.get(opts, '/config/copy/justDeno'),
  imageSrc: "/img/justDeno.png",
  reverse: true,
  buttons: [
    { href: 'https://deno.com/', label: 'Learn about Deno' },
    { href: 'https://github.com/aaronmyatt/pipedown', label: 'Get Started' }
  ]
}))
```

## justEnough
```ts
const feature = $p.get(input, '/partials/featureColumn')
$p.set(input, '/sections/-', feature({
  h2: "Just what you need",
  pretitle: "Embrace the constraints",
  copy: $p.get(opts, '/config/copy/justEnough'),
  imageSrc: "/img/justEnough.png"
}))
```

## addScripts
```ts
input.sections.push(`<script src="/toggleInstallTabs/index.iife.js"></script>
<script src="/fetchJsrMeta/index.iife.js"></script>
<script>
PD.toggleInstallTabs.pipe.process()
PD.fetchJsrMeta.pipe.process({ selector: '[name="pdcli-version"]' })
</script>`)
```

## putSectionsTogether
```ts
const body = input.sections.join('\n')
const footer = $p.get(input, '/partials/footer')
input.body = input.layout({body, footer})
```

## writePage
```ts
await Deno.writeTextFile($p.get(opts, '/config/writePath'), input.body)
input.body = ''
```
