---
tags:
  - getting-started
order: 2
title: How to install Pipedown (Advanced)
blurb: Use Pipedown to install Pipedown!
---

# How to install Pipedown (Advanced)

## useDax
Let's use the wonderful [Dax](https://jsr.io/@david/dax) tool to write a Pipedown script... to install Pipedown!
```ts
import $ from "jsr:@david/dax";
```

Next we can piggyback on some [Deno Standard Library code](https://github.com/denoland/deno_std/blob/main/path/_os.ts) to figure out which OS we're on. 

> Today I learned: Since Deno is built upon web standards we can just use the `navigator` object to get the OS!

No doubt I'm gonna offend some pro's here, but I'm a 1x developer, so we will just assume if you're not on windows, you're on something we can run bash-y commands on!


## WhichOS
Check the `navigator` object to see which OS we're on, default to `unix`.
```ts
const { navigator } = globalThis as any;

input.os = "unix";
if (navigator?.appVersion?.includes?.("Win")) {
    input.os = "windows";
}
```

## installDeno
Depending on which OS we're on, the [Deno](https://deno.com) website tells us to install with different commands.
<figure>
  <img src="/img/denoInstall.png" alt="Install Deno"/>
  <figcaption><a href="https://www.deno.com">Visit Deno's website</a></figcaption>
</figure>

```ts
if(input.os === "windows") {
    await $`irm https://deno.land/install.ps1 | iex`;
} else {
    await $`curl -fsSL https://deno.land/install.sh | sh`;
}

console.log('Deno installed.')
```

## installPipedown
Now that we have Deno installed, we can use Deno to install Pipedown.
```ts
await $`deno install -Arfg -n pd jsr:@pd/pdcli`;
console.log('Pipedown installed.')
```

This will install Pipedown globally on your system. Pipedown will be available anywhere by running the `pd` command. You can customise the command name by providing a different `-n` option value: `deno install -Arfg -n {your_name} jsr:@pd/pdcli`

Or update the last codeblock to to add your own command name!
```ts skip
const yourCommandName = 'pd'
await $`deno install -Arfg -n ${yourCommandName} jsr:@pd/pdcli`;
console.log('Pipedown installed.')
```

## Oh so contrived
This whole markdown file is runnable using `pd run installationAdvanced.md`, and, if you have Pipedown installed (😂) it will do what it says on the tin! 

However, this entire example could be compiled into a binary with `deno compile ./.pd/installationAdvanced/index.ts` and shipped as a single executable.

I suppose this is the next step for Pipedown's installation process! _Watch this space!_
