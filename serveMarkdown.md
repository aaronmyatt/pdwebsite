# Serve Markdown

A common usecase I can foresee while building the Pipedown ecosystem will be to serve and present markdown.
The markdown will needs to be:
- fetched from the filesystem
- converted to html
- wrapped with something like tailwinds `prose` class
- and decorated with any other goodies!
  - For instance, in the immediate term, I am keep to include tutorial videos
  - This will probably just involve writing a `<video>` somewhere on the page before or after the markdown

## getMarkdown
```ts
import { walk } from "jsr:@std/fs";
const mdName = $p.get(input, '/route/pathname/groups/name')

for await (const entry of walk(Deno.cwd(), { ext: ['.md'] })) {
    if(mdName === entry.name){
        input.markdown = await Deno.readTextFile(entry.path)
        break;
    }
}
```

## mdToHTML
```ts
import { html } from "jsr:@pd/pulldown-cmark";
input.parsed = html(input.markdown)
```

## wrapWithProse
```ts
import partials from 'partials'
const { wrapSection } = await partials.process()
input.withProse = wrapSection(`<div class="prose prose-xl">${input.parsed}</div>`)
```

## wrapWithLayout
```ts
import layout from 'layout';
const output = await layout.process()
input.body = output.layout({body: input.withProse})
```

## respondWithHtml
```ts
Object.assign(input.responseOptions.headers, { "content-type": "text/html" });
input.responseOptions.status = 200;
```
