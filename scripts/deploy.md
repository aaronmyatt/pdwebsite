# Deploy Site

```ts
import $ from "jsr:@david/dax";
```

## Rebuild static files
```ts
await $`deno task build`
```

## Deploy
- flag: /deployctl
    ```ts
    await $`deployctl deploy`
    ```
