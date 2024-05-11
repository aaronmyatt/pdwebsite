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


## Just Write Markdown
A format most coders will be familiar with. Enhanced with just a few conventions to simplify life. 
```
```

## Execute the Code Blocks
All Typescript code blocks are executed in sequence, and anything added to the global `input` object is _piped down_ To the next code block!
Marry your code with a gloriously expressive, publishable format
Test inputs, config, conditional execution, import other pipes and more!
```
```

## Export for any usecase
Pipedown exports your
```
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
