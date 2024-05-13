# Embrace the constraints

## Shared input object
```ts
input.sharedData = { toggle: true }
```

## Default Async, no boilterplate
```ts
input.response = await fetch('https://picsum.photos/200');
```

## Carefully crafted utilities
- check: /response
- route: /catpic/:kitten
- ```ts
    input.el = `<img src="${$p.get(input, '/response/url')}" />`
    ```


