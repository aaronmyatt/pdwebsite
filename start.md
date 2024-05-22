# Start

```ts
import { serveFile } from 'https://deno.land/std/http/file_server.ts';
```

## Serve Pages

```ts
import pages from 'pages'
Object.assign(input, await pages.process(input));
```

## GetMeta
A simple proxy to fetch the pdcli package meta so I don't need to fight cors
- route: /meta
- ```ts
  input.response = await fetch("https://jsr.io/@pd/pdcli/meta.json")
  ```

## Serve Png
- route: /png/*
- ```ts
    const pngPath = $p.get(input, '/route/pathname/input')
    input.response = await serveFile(input.request, Deno.cwd()+pngPath)
    ```

## Serve Js
- route: /scripts/*
- ```ts
    const jsPath = $p.get(input, '/route/pathname/input')
    input.response = await serveFile(input.request, Deno.cwd()+'/.pd'+jsPath)
    ```
