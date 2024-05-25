# Start

Start the app!

That could be multiple paragraphs long

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

## Serve Img
- route: /img/*
- ```ts
    const imgPath = $p.get(input, '/route/pathname/input')
    input.response = await serveFile(input.request, Deno.cwd()+imgPath)
    ```

## Serve Js
- route: /scripts/*
- ```ts
    const jsPath = $p.get(input, '/route/pathname/input')
    input.response = await serveFile(input.request, Deno.cwd()+'/.pd'+jsPath)
    ```

## Serve Md
- route: /md/:name
- ```ts
    import serveMarkdown from 'serveMarkdown'
    Object.assign(input, await serveMarkdown.process(input))
    ```
