# Deploy Site

```ts
import $ from "jsr:@david/dax";
```

## PreDeploy
Turns out Deno Deploy doesn't permit file system writes. The [Deno Deploy filesystem reference documentation](https://docs.deno.com/deploy/api/runtime-fs) is a dead give away...
<figure>
  <img src="/img/noWriting.png" alt="Install Deno"/>
  <figcaption>Writes, where art thou!</figcaption>
</figure>

```ts
await $`pd run pages/pages.md`
```

## Deploy
```ts
await $`deployctl deploy`
```
