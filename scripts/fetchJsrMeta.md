# pdCoreJsrMeta

[jsr.io](https://jsr.io/) makes it convenient to fetch a packages meta information. Just add `/meta.json` to a package URL, e.g. https://jsr.io/@pd/pdcli/meta.json

```json
{
    "metaUrl": "/meta",
    "build": ["iife"]
}
```

## fetchJson
```ts
const response = await fetch($p.get(opts, '/config/metaUrl'))
input.meta = await response.json()
```

## updateElement
- if: /selector
- ```ts
    const el = document.querySelector($p.get(input, '/selector'))
    el.innerText = $p.get(input, '/meta/latest')
    el.setAttribute('class', '')
    ```
