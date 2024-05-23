# (Deno's) Batteries Included

## Deno namespace and standard library 😎
```ts
input.kv = await Deno.openKv();
input.rawData = await Deno.readTextFile("hello.txt");
```


## Web APIs 🤤
```ts
input.data = JSON.parse(input.rawData);
```

## And all the other bells and whistles!
`deployctl --entrypoint ./.pd/justDeno/server.ts`
```ts
input.status = await kv.set(["user", data.username], data);
```