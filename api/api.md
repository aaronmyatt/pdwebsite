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

    const kv = Deno.openKv && await Deno.openKv()
    const key = ['request', ...$p.get(input, '/route/pathname/input').split('/').filter(p => p)]

    async function cacheExamples(input){

        for await (const entry of walk("./examples/gettingStarted", { ext: ['.md'] })) {
          if(entry.isDirectory || !entry.path.endsWith('md')) continue;
          const markdown = await Deno.readTextFile(entry.path);
          const {heading, text} = await extractor.process({markdown})
          if(!input.entries.find(entry => entry.heading === heading))
            input.entries.push({ heading, text, name: entry.name });
        }
        input.entries = input.entries.map(entry => ({
          ...entry,
          text: entry.text.slice(0,100)
        }))
        const serialised = Object.values(Object.groupBy(input.entries, e => e.heading)).map(g => g[0])
        kv.set(key, serialised)
    }

    const maybeEntries = await kv.get(key);
    input.entries = maybeEntries.value || []

    if(input.entries.length === 0){
      await cacheExamples(input);
    } else {
      cacheExamples(input);
    }

    input.body = input.entries.sort(({name: a},{name: b}) => Number(a[0]) - Number(b[0]))
    ```
