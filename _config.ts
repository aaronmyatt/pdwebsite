import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";
import daisyui from "npm:daisyui";
import pug from "lume/plugins/pug.ts";
import prism from "lume/plugins/prism.ts";
import "npm:prismjs@1.29.0/components/prism-bash.js";
import "npm:prismjs@1.29.0/components/prism-markdown.js";
import { Plugin as wikilinkPlugin } from "jsr:@atm/markdown-it-wikilink-plugin@0.1.0"


const site = lume({}, {
    markdown: {
        plugins: [
            wikilinkPlugin({
                basePath: "",
                relativePaths: false,
                stripExtension: true,
                regex: false,
            }),
        ],
    },
});

site.use(pug(/* Options */));
site.use(tailwindcss({
    extensions: [".html", ".md", ".pug"],
    options: {
        plugins: [typography, daisyui],
    },
}));
site.use(postcss());
site.use(prism({
    extensions: [".html", ".md", ".pug"],
    theme: {
        name: "funky", // The theme name to download
        path: "code_theme.css", // The destination filename
      },
}));
site.copy("public", ".");
site.copy("img");
site.copy(".pd/scripts/fetchJsrMeta/index.iife.js", "fetchJsrMeta/index.iife.js");
site.copy(".pd/scripts/toggleInstallTabs/index.iife.js", "toggleInstallTabs/index.iife.js");

export default site;
