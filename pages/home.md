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
    "logo": "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
    "copy": {
        "h1": "Write Markdown, Build Anything",
        "subtitle": "Publish anywhere",
        "justMarkdown": "Use the Markdown syntax your know and love to expressively describe, document and teach your ideas - and then ship them!",
        "justBuild": "Use Pipedown to experiment, build, and publish any idea. Whether you want to build something simple to run on your own computer or deploy to the cloud and serve the masses, Pipedown will adapt to your needs.",
        "justDeno": "Leverage Deno's exciting ecosystem to build anything you can imagine. Pipedown is just Markdown, but with super (Deno) powers.",
        "justEnough": "You can use the full power of Deno, Typescript and WebAssembly <i>within</i> Pipedown codeblocks. <br/><br/> Pipedown handles the communication between codeblocks, and understands a few carefully crafted conventions to interpret your markdown and add super powers to your ideas."
    },
    "build": ["esm"]
}
```

## hero
```ts
const { logo, copy: { h1, subtitle } } = opts.config
const hero = $p.get(input, '/partials/hero')
$p.set(input, '/sections/-', hero({logo, h1, subtitle}))
```

## howToInstall
```ts
const installSection = $p.get(input, '/partials/installSection')
$p.set(input, '/sections/-', installSection)
```


## writeMarkdown
At the end of the day, Pipedown is just Markdown. All it is doing is parsing markdown, reading the code blocks, and running them. A few conventions add some ergonomics, but the familiarity of Markdown is a key power. "Execute" the markdown, data flows through the Pipe... down.

```ts
const feature = $p.get(input, '/partials/featureWithScreenshot')
$p.set(input, '/sections/-', feature({
  h2: "Write Markdown",
  copy: $p.get(opts, '/config/copy/justMarkdown'),
  src: "/png/justMarkdown.png"
}))
```

## buildAnything
At the end of the day, Pipedown is just Markdown. All it is doing is parsing markdown, reading the code blocks, and running them. A few conventions add some ergonomics, but the familiarity of Markdown is a key power. "Execute" the markdown, data flows through the Pipe... down.

```ts
const feature = $p.get(input, '/partials/featureWithScreenshot')
$p.set(input, '/sections/-', feature({
  h2: "Build Anything",
  copy: $p.get(opts, '/config/copy/justBuild'),
  src: "/png/justBuild.png"
}))
```

## usesDeno
```ts
const feature = $p.get(input, '/partials/featureColumn')
$p.set(input, '/sections/-', feature({
  h2: "Built on Deno",
  pretitle: "Batteries included",
  copy: $p.get(opts, '/config/copy/justDeno'),
  src: "/png/justDeno.png",
  reverse: true,
}))
```

## justEnough
```ts
const feature = $p.get(input, '/partials/featureColumn')
$p.set(input, '/sections/-', feature({
  h2: "Just what you need",
  pretitle: "Embrace the constraints",
  copy: $p.get(opts, '/config/copy/justEnough'),
  src: "/png/justEnough.png"
}))
```

## addScripts
```ts
input.sections.push(`<script src="/scripts/toggleInstallTabs/index.iife.js"></script>
<script>
PD.toggleInstallTabs.pipe.process()
</script>`)
```

## putSectionsTogether
```ts
const body = input.sections.join('\n')
const footer = $p.get(input, '/partials/footer')
input.body = input.layout({body, footer})
```


## respondWithHtml
```ts
Object.assign(input.responseOptions.headers, { "content-type": "text/html" });
input.responseOptions.status = 200;
```
