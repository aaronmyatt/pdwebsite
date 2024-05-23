# Start
Any pipe can be run as a:
- server  `deno run --watch .pd/start/server.ts`
- cli app `deno run .pd/start/cli.ts`
- script  `pd run start.md`
  | `<script src="/start/index.iife.js" />`

## And much much more
Bundle as a binary, build react components, serve entire websites, libraries, Web Workers, scheduled jobs.

## Host
On Deno Deploy! `deployctl --entrypoint="pd/start/server.ts"`