# API Routes

## GetMeta
A simple proxy to fetch the pdcli package meta so I don't need to fight cors
- route: /api/meta
- ```ts
  input.response = await fetch("https://jsr.io/@pd/pdcli/meta.json")
  ```

## getCliExamples
- route: /api/examples/cli
- ```ts
    import { parse, join } from "jsr:@std/path";
    import { walk } from "jsr:@std/fs";
    const entries = [];
    for await (const entry of walk("./.pd", { ext: ['.md'] })) {
        try {
            const path = parse(entry.path)
            await Deno.stat() 
            entries.push(entry);
        } catch (e) {}
    }

    ```
