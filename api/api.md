# API Routes

## GetMeta
A simple proxy to fetch the pdcli package meta so I don't need to fight cors
- route: /api/meta
- ```ts
  input.response = await fetch("https://jsr.io/@pd/pdcli/meta.json")
  ```

## gettingStartedExamples
- route: /api/examples/gs
- ```ts
    import extractor from 'markdownExtractor'
    import { parse, join } from "jsr:@std/path";
    import { walk } from "jsr:@std/fs";

    async function cacheExamples(input){
        for await (const entry of walk("./examples/gettingStarted", { ext: ['.md'] })) {
          if(entry.isDirectory || !entry.path.endsWith('md')) continue;
          const markdown = await Deno.readTextFile(entry.path);
          const {heading, text} = await extractor.process({markdown})
          if(!input.entries.find(entry => entry.heading === heading))
            input.entries.push({heading,text,name: entry.name});
        }
        const serialised = JSON.stringify(Object.values(Object.groupBy(input.entries, e => e.heading)).map(g => g[0]))
        localStorage.setItem($p.get(input, '/route/pathname/input'), serialised)
    }

    const maybeEntries = localStorage.getItem($p.get(input, '/route/pathname/input'));
    input.entries = maybeEntries && JSON.parse(maybeEntries) || []

    if(input.entries.length === 0){
      await cacheExamples(input);
    } else {
      cacheExamples(input);
    }

    input.body = input.entries.sort();
    ```
