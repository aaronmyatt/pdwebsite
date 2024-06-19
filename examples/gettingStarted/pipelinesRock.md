---
tags:
  - getting-started
order: 4
title: Pipelines Rock!
blurb: From big oil to the hiring pipeline in your company, pipelines are common.
---

# Pipelines Rock!

From big oil to the hiring pipeline in your company, pipelines are common. They are a simple and intuitive concept to understand. Something goes in one end and comes out the other. 

Many things can be generalised as pipelines. Factory assembly lines, a recipe, even life itself is a pipeline! These examples differ slightly: something goes in, **something happens in the middle**, and something new comes out. A car, a cake, an adult.

Software pipelines are common too. In the simplest form, a function is a pipeline. You pass in arguments, something happens in the middle, and you get a return value.

```ts skip
function add(input: { a: number, b: number }): number {
    return input.a + input.b;
}
const output = add({ a: 1, b: 2 });
```

Data processing is most usually associated with pipelines. Data engineers create ETL pipelines. Extract, Transform, Load. Get data, "clean it", load it into your data warehouse.

> Servers are piplines, CLI apps are pipelines, games are pipelines running in an infinite loop!

The idea that pipelines can be generalised to almost any use case has stuck with me. I have imagined using pipelines for everything. To build websites, APIs, apps and scripts. Can I use pipelines to build pipelines?! 🤯

Tools like [Jupyter notebooks](https://jupyter.org/), [Airflow](https://airflow.apache.org/), [Luigi](https://luigi.readthedocs.io/en/stable/), [NodeRed](https://nodered.org/), [Total.js Flow](https://www.totaljs.com/flow/) and every drag-and-drop CRM campaign builder have been constant reminders of the power of pipelines.

![alt text](/img/iseepipelines.png)

## Just pipe down

Pipelines can serve as an approachable and accessible programming mental model that can scale from beginner to professional. Start with an `input` object, pass it as the only argument to a sequence of functions and get an `output` object back. 

With pipelines:
-  The sequence, order and direction are clear
-  Abstraction and indirection can be minimised
-  Data and logic flow is transparent. Errors are easily traceable.

## Consistency and constraints

The real power, however, comes from using pipelines _only_. With consistency and constraints you get so much.

### Consistency

A consistent interface to both execute and write your code removes a tremendous amount of mental overhead. 

Every pipelines is executed the same:

```ts skip
await pipeline.process(input)
```

Every pipeline is an array of functions:

```ts skip
const steps = [
    function1,
    function2,
    function3
]
new Pipeline(steps)
```

The only decisions needed by the developer are: 

> *write a function or create a pipe?*

### Constraints
As we get older the value of constraint becomes much more apparent. The more constraints you have, the more creative you become. Not to mention our old ass brains can't focus on so many things anymore!

Consistency makes the life of a developer much easier, but constraining ourselves to use pipelines alone allow us to confidently build upon them.

When we have a unified and consistent entry point to our program, a unified and consistent way to extend our programs, to understand and models our problems, development becomes as simple as:

> *write a function or create a pipe?*

## Pipedown emerges

With a consistent, constrained, simple, and intuitive concept in my back pocket I started to explore how I could create a set of tooling to make working with pipelines even easier. I wanted to eliminate the typical boilerplate code of a pipeline:

From:
```ts skip
const steps = [
    (input) => { console.log('step 1'); return input; },
    (input) => { console.log('step 2'); return input; },
    (input) => { console.log('step 3'); return input; },
]
new Pipeline(steps)
```

To:
```ts skip
`console.log('step 1')`
`console.log('step 2')`
`console.log('step 3')`
```

Initially Pipedown was Jupyter Notebook-like. A series of text inputs on a web page that could be run top-down and exported as scripts.

An immediate requirement I foresaw was adding notes throughout the pipeline. To give different names and headlines to functions within the pipeline. As you can imagine, this quickly started to feel like Markdown!

```
- title
  - description
- subtitle
  - code
- subtitle
  - description
  - code
- subtitle
  - code
```

An iteration later and I was parsing Markdown files to extract codeblocks and drop them into a pipeline template.

## Only the beginning
Reducing boilerplate when writing pipelines is already a developer experience win.

Using pipelines exclusively opened the doors to writing simple consistent wrappers for: serverless functions, web servers, command line apps, browser scripts and more.

This is one of Pipedown's unique selling points. A consistent, constrained, simple, and intuitive way to build software that is ready to use in any context - pretty amazing. (Who's tooting their own horn?! 😂).

## In closing
I think I have been looking for a consistent, constrained, simple, and intuitive way to write code since I wrote my first libraries.

It just took me 10 years for all the pieces to come together, and put them into a set of practices and tools.

Overtime I hope pipedown will evolve, a community will form, and we can all build amazing things together.