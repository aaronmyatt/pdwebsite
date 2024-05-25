# How to install Pipedown (Advanced)

Let's use the wonderful [Dax](https://jsr.io/@david/dax) tool to write a Pipedown script... to install Pipedown!

```ts
import { dax } from "jsr:@david/dax";
```

## WhichOS
Let's use some [Deno Standard Library code](https://github.com/denoland/deno_std/blob/main/path/_os.ts) to figure out which OS we're on. Since Deno builds upon web standards we can just use the `navigator` object to get the OS!

No doubt I'm gonna offend some pro's here, but I'm a 1x developer, so we will just assume if you're not on windows, you're on something we can run bash-y commands on!
```ts
const { navigator } = globalThis as any;

input.os = "unix";
if (navigator?.appVersion?.includes?.("Win")) {
    input.os = "windows";
}
```

## installDeno
Depending on which OS we're on, the [Deno](https://deno.com) website tells us to install differently.
![Deno Install Screenshot](/img/denoInstall.png)

```ts

```
