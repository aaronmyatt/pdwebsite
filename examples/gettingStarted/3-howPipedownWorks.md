# How does Pipedown work?

The goal of Pipedown is to extract codeblocks from Markdown and create a "pipeline" of functions. A pipeline will be familiar to anyone who has worked with data. "Piping" data through a sequence of (Extract Transform Load) steps until it is the desired shape. 

Each codeblock will become a function, each codeblock will be triggered top-down, from the top of the Markdown file to the bottom. A plain old Javascript object (`{}`) is passed as an `input` argument to the first function and passed to each function in turn.

This simple mental model of piping data through a sequence of steps was the inspiration for Pipedown (surprise! 😆). For many years I have looked at web frameworks, command line apps, ETL and low/no-code tools and thought - "they are all the same". 

- A server receives a request and "pipes" it through middleware and controllers before outputting a response
- A command line app "pipes" the command line flags through a series of handlers before one matches and processes the arguments

The [Pipedown core library](https://github.com/aaronmyatt/pipedown) is also written as a series of pipelines! Though they are handwritten, they are delightfully readable. Pipedown goes through a few steps to parse Markdown, extract the necessary information and output a Typescript module.

1. Read markdown
   1. Extract codeblocks and headings
   2. If codeblocks are in a markdown list, they might be special
2. [Convert to JSON](https://github.com/aaronmyatt/pipedown/blob/main/mdToPipe.ts)
3. [Write Javascript](https://github.com/aaronmyatt/pipedown/blob/main/pipeToScript.ts)

<figure>
  <img src="/img/howPipedownWorks.png" alt="Install Deno"/>
  <figcaption>Codeblocks -> JSON -> Typescript</figcaption>
</figure>

