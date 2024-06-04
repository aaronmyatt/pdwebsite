import { parse, join, basename } from "jsr:@std/path";

import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";
import pug from "lume/plugins/pug.ts";

const site = lume();

site.use(pug(/* Options */));
site.use(tailwindcss({
    extensions: [".html", ".md", ".pug"],
    options: {
        plugins: [typography],
    },
}));
site.use(postcss());
site.copy("public", ".");
site.copy("img");
site.copy(".pd/scripts/fetchJsrMeta/index.iife.js", "fetchJsrMeta/index.iife.js");
site.copy(".pd/scripts/toggleInstallTabs/index.iife.js", "toggleInstallTabs/index.iife.js");

export default site;
