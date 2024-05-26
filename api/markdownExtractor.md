# Extract From Markdown

We need a utility to extract just the header and any text between the h1/# and the first none text element.
This will be used to return those data from a directory of markdown files to populate preview cards on a page.

## testMode
To make this easier to work with we will make it possible to conditionally load a file from disk, rather than requiring one from the caller.

- if: /flags
- ```ts
    input.markdown = input.markdown || await Deno.readTextFile('./start.md')
    ```

## parseMd
This is the library we for Pipedown internally. It's a small wasm wrapper around a rust markdown parser and outputs a big array of simple objects for each element it encounters, the object looks like this:
```js skip
event = {
    type: String,
    tag: String,
    content: String,
    level: Number,
    kind: String,
    fenced: Boolean,
    language: String,
    start_number: Number,
    label: String,
    alignments: Array<String>,
    url: String,
    title: String,
    checked: Boolean
}
```

```ts
import { parse } from "jsr:@pd/pulldown-cmark";
input.parsed = parse(input.markdown)
```

## extractHeading
```ts
input.headingIndex = input.parsed.findIndex(({type,tag}) => type === 'START' && tag === 'HEADING')
input.heading = input.parsed[input.headingIndex+1]?.content
```

## extractText
I want to extract the all the potential copy between the h1/# and the first none paragraph element. There could be multiple paragraphs, so just finding the first is not sufficient. I think i can rely on the `tag` values being only `PARAGRAPH` and `TEXT`. So finding the first array item, after the heading, should give me the upper bounds of the range I'm interested in, then it's just a matter of reducing out the text.

Didn't take Links into account! So the text extraction would stop there. Let's try stopping at the first HEADING or CODEBLOCK
```ts
const headingEnd = input.headingIndex+3
input.notTextIndex = input.parsed.findIndex((event,  index) => {
    if(index <= headingEnd) return;
    return (event.tag === 'CODE_BLOCK' || event.tag === 'HEADING')
})
input.text = input.parsed.slice(headingEnd, input.notTextIndex)
    .filter(({type}) => type === 'TEXT')
    .reduce((acc,{content}) => acc+content+'\n', '')
```
