# Start

```ts
import { serveFile } from 'https://deno.land/std/http/file_server.ts';
```

## Serve Pages

```ts
import pages from 'pages'
Object.assign(input, await pages.process(input));
```

## Serve API
```ts
import api from 'api'
Object.assign(input, await api.process(input));
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
