# Deploy Site

```ts
import $ from "jsr:@david/dax";
```

## build
```ts
import build from "build";
await build.process();
```

## Deploy
```ts
await $`deployctl deploy`
```
