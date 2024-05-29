# Build Site

```json
{
  "scripts": [
    ".pd/scripts/fetchJsrMeta/index.iife.js",
    ".pd/scripts/toggleInstallTabs/index.iife.js"
  ]
}
```

```ts
import $ from "jsr:@david/dax";
import { parse, join, basename } from "jsr:@std/path";
```

## pdBuild
Just incase.
```ts
await $`pd build`
```

## PreDeploy
Turns out Deno Deploy doesn't permit file system writes. The [Deno Deploy filesystem reference documentation](https://docs.deno.com/deploy/api/runtime-fs) is a dead give away...
<figure>
  <img src="/img/noWriting.png" alt="Install Deno"/>
  <figcaption>Writes, where art thou!</figcaption>
</figure>

```ts
import pages from 'pages'
await pages.process()
```

## copyScripts
```ts
const copyPromises = $p.get(opts, '/config/scripts').map(path => {
    const parsed = parse(path)
    return Deno.mkdir(join('./public', basename(parsed.dir)))
        .catch(() => console.log('Already mkdir: ' + basename(parsed.dir)))
        .finally(() => Deno.copyFile(path, join('./public', basename(parsed.dir), parsed.base)))
})
await Promise.all(copyPromises)
```
