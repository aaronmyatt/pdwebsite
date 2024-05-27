# Serve Markdown

A common usecase I can foresee while building the Pipedown ecosystem will be to serve and present markdown.
The markdown will needs to be:
- fetched from the filesystem
- converted to html
- wrapped with something like tailwinds `prose` class
- and decorated with any other goodies!
  - For instance, in the immediate term, I am keep to include tutorial videos
  - This will probably just involve writing a `<video>` somewhere on the page before or after the markdown


**Input requirements**
```ts skip
{
  format: 'pretty'|'raw',
  name: String,
}
```

```ts
input[input.format] = true;
```

## getMarkdown
```ts
import { walk } from "jsr:@std/fs";

for await (const entry of walk(Deno.cwd(), { ext: ['.md'] })) {
    if(input.name === entry.name){
        input.markdown = await Deno.readTextFile(entry.path)
        break;
    }
}
```

## mdToHTML
- check: /pretty
- ```ts
  import { html } from "jsr:@pd/pulldown-cmark";
  input.parsed = html(input.markdown)
  ```

## wrapWithProse
- check: /pretty
  ```ts
  import partials from 'partials'
  const { wrapSection } = await partials.process()
  input.innerHTML = wrapSection(`<div class="prose prose-xl">${input.parsed}</div>`)
  ```

## wrapWithCode
- check: /raw
  ```ts
  const { wrapSection } = await partials.process()
  input.innerHTML = wrapSection(`<pre><code>${input.markdown}</code></div>`)
  ```

## wrapWithLayout
```ts
import layout from 'layout';
const output = await layout.process()
input.body = output.layout({body: input.innerHTML})
```

## respondWithHtml
```ts
Object.assign(input, $p.make({ "content-type": "text/html", status: 200 }, '/responseOptions/headers')  );
```
