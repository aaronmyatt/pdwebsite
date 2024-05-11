# Start

## Serve Pages

```ts
import pages from 'pages'
Object.assign(input, await pages.process(input));
```

## Serve Png
- route: /png/*
- ```ts
    import { serveFile } from 'https://deno.land/std/http/file_server.ts';
    const pngPath = $p.get(input, '/route/pathname/input')
    input.response = await serveFile(input.request, Deno.cwd()+pngPath)
    ```
