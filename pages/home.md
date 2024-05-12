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
        "subtitle": "Publish anywhere"
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
const feature = $p.get(input, '/partials/featureColumn')
$p.set(input, '/sections/-', feature({
  h2: "Write Markdown",
  copy: "Pipedown is just Markdown. Write your code in Markdown, and Pipedown will execute it. It's that simple.",
  src: "/png/heroExample.png"
}))
```

## usesDeno
```ts
const feature = $p.get(input, '/partials/featureWithScreenshot')
$p.set(input, '/sections/-', feature({
  h2: "Built on Deno",
  pretitle: "Batteries included",
  copy: "Pipedown is just Markdown. Write your code in Markdown, and Pipedown will execute it. It's that simple.",
  src: "/png/heroExample.png"
}))
```

## buildAnything
```ts
const feature = $p.get(input, '/partials/featureWithScreenshot')
$p.set(input, '/sections/-', feature({
  h2: "Build anything",
  //pretitle: "Batteries included",
  copy: "Pipedown is just Markdown. Write your code in Markdown, and Pipedown will execute it. It's that simple.",
  src: "/png/heroExample.png"
}))
```

## developersAndAll
```ts
const feature = $p.get(input, '/partials/featureWithScreenshot')
$p.set(input, '/sections/-', feature({
  h2: "Accessible to all",
  //pretitle: "Batteries included",
  copy: "Pipedown is just Markdown. Write your code in Markdown, and Pipedown will execute it. It's that simple.",
  src: "/png/heroExample.png"
}))
```

## shipMoreFightLess
```ts
const feature = $p.get(input, '/partials/featureWithScreenshot')
$p.set(input, '/sections/-', feature({
  h2: "Just what you need",
  //pretitle: "Batteries included",
  copy: "Embrace the constraints.",
  src: "/png/heroExample.png"
}))
```

## meantForReading
```ts
const feature = $p.get(input, '/partials/featureWithScreenshot')
$p.set(input, '/sections/-', feature({
  h2: "Read then write",
  //pretitle: "Batteries included",
  copy: "Pipedown is just Markdown. Write your code in Markdown, and Pipedown will execute it. It's that simple.",
  src: "/png/heroExample.png"
}))
```

## putSectionsTogether
```ts
const sections = input.sections.join('\n')
input.body = input.layout(sections)
```


## respondWithHtml
```ts
Object.assign(input.responseOptions.headers, { "content-type": "text/html" });
input.responseOptions.status = 200;
```
