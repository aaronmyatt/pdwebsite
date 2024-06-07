---
title: Pipedown as a Server
blurb: Pipedown can be used to create and host servers with ease.
tags: 
 - 'usecases'
---

# Pipedown as a Server

Every Pipedown script processed and written to the `./.pd` directory of your project also has a corresponding server file.

For example, given the [[helloWorld]] pipe. You will also find the following file:

`./.pd/helloWorld/server.ts`

We piggyback on [`Deno.serve`](https://deno.land/api@v1.41.0?s=Deno.serve) to do the heavy lifting. `Deno.serve` can be used in a traditional sense, deployed on your own infrastructure, behind a reverse proxy of some kind. However, it is also compatible with Deno Deploy! Which makes it trivial to serve up your pipes, and any associated static files, with a single command. Checkout Deno Deploy:

> https://deno.com/deploy

Note: this website is hosted on Deno Deploy! Just a single command, `deployctl deploy` serves up a fresh version of this site. See the [Repo](https://github.com/aaronmyatt/pdwebsite)

## Just a wrapper
The `server.ts` is a very simple wrapper to pass requests to your pipeline.

```ts skip
const server = Deno.serve(async (request: Request) => {
  const output = await pipe.process({
        request, 
        body: {}, 
        responseOptions: {
        headers: {
            "content-type": "application/json"
        },
        status: 200,
    }
  });
  
  return new Response(output.body, output.responseOptions);
});
```

## Requests
When working with Deno, you get the pleasure of working with Web Standard [Request](https://deno.land/api@v1.44.1?s=Request) and [Response](https://deno.land/api@v1.44.1?s=Response) objects - on the server!

We pass this request to your pipeline. You can access it in any pipe codeblock with `input.request`.

## Routing
When Pipedown finds a `request` in an `input` object, it will check to see if your function is behind a `route:` condition.

For instance, a function like this:


````md
- route: /hello
    ```ts
    console.log("Hello there!");
    ```
````

Will only be executed when the request path/slug is `/hello`. Pipedown leverages [URLPatterns](https://developer.mozilla.org/en-US/docs/Web/API/URLPattern) to provide simple and effective routing - it even supports route params!

If a pattern is matched, Pipedown will inject add `input.route` to the function which gives you access to the URLPattern return object, e.g:

````md
- route: /hello/:name
    ```ts
    const match = $p.get(input, '/route/pathname/groups/name')
    console.log(`Hello, ${match}!`);
    ```
````

## Response
The server wrapper provides a simple response setup. If you return `input.body` from your pipe, we assume it is JSON friendly and respond to the client appropriately:

```ts skip
{
    headers: {
        "content-type": "application/json"
    },
    status: 200,
}
```

You have complete control over this object, just add your response options to `input.responseOptions` and pass any data to `input.body` if desired. Alternatively you can pass a full `new Response()` object to `input.response`.

## Concrete Example
To round things off, let's turn this Markdown file itself into a server!

Let's create a small set of routes that will return random placeholder images from some fun placeholder image providers.

### placeBear
- route: /bear
    ```ts
    // check the input.route object!
    console.log(input.route);

    const response = await fetch("https://placebear.com/640/360");
    input.response = new Response(response.body, {
        headers: {
            "content-type": "image/jpeg"
        },
        status: 200,
    });
    ```

### loremflickr
- route: /flick
    ```ts
        // check the input.route object!
        console.log(input.route);

        const response = await fetch("https://loremflickr.com/640/360");
        input.response = new Response(response.body, {
            headers: {
                "content-type": "image/jpeg"
            },
            status: 200,
        });
    ```

### Lorem Picsum
- route: /picsum
    ```ts
        // check the input.route object!
        console.log(input.route);

        const response = await fetch("https://picsum.photos/640/360");
        input.response = new Response(response.body, {
            headers: {
                "content-type": "image/jpeg"
            },
            status: 200,
        });
    ```

### Root
If no route is matched, we will return a simple text response. We use the `not:` condition here to ensure this is only executed when no route is matched.

- not: /route
- ```ts
    input.response = new Response("Hello there!", {
        headers: {
            "content-type": "text/plain"
        },
        status: 200,
    });
    ```

### RIP
A very sad discovery is that both `placekitten` and `placecage` are no longer available. RIP. 🫡

## Running the server
To run the server, execute the following commands:

```bash
git clone https://github.com/aaronmyatt/pdwebsite
cd pdwebsite
# assuming you have Pipedown installed 😉

pd build
deno run --allow-net ./.pd/examples/server/server.ts
```

You can now access your server at `http://localhost:8000` and see random pictures at these routes:

- http://localhost:8000/bear
- http://localhost:8000/flick
- http://localhost:8000/picsum

## Toot toot
Horn tooting time! Writing and hosting servers has never been easier. Writing them with Pipedown has made it easy and delightful AND educational 👆! Try it for yourself and reach out if you have ideas about how to make this cooler.

[//begin]: # "Autogenerated link references for markdown compatibility"
[helloWorld]: ../helloWorld "Hello there"
[//end]: # "Autogenerated link references"


[//begin]: # "Autogenerated link references for markdown compatibility"
[helloWorld]: ../helloWorld "Hello there"
[//end]: # "Autogenerated link references"


[//begin]: # "Autogenerated link references for markdown compatibility"
[helloWorld]: ../helloWorld "Hello there"
[//end]: # "Autogenerated link references"


[//begin]: # "Autogenerated link references for markdown compatibility"
[helloWorld]: ../helloWorld "Hello there"
[//end]: # "Autogenerated link references"


[//begin]: # "Autogenerated link references for markdown compatibility"
[helloWorld]: ../helloWorld "Hello there"
[//end]: # "Autogenerated link references"


[//begin]: # "Autogenerated link references for markdown compatibility"
[helloWorld]: ../helloWorld "Hello there"
[//end]: # "Autogenerated link references"


[//begin]: # "Autogenerated link references for markdown compatibility"
[helloWorld]: ../helloWorld "Hello there"
[//end]: # "Autogenerated link references"


[//begin]: # "Autogenerated link references for markdown compatibility"
[helloWorld]: ../helloWorld "Hello there"
[//end]: # "Autogenerated link references"


[//begin]: # "Autogenerated link references for markdown compatibility"
[helloWorld]: ../helloWorld "Hello there"
[//end]: # "Autogenerated link references"


[//begin]: # "Autogenerated link references for markdown compatibility"
[helloWorld]: ../helloWorld "Hello there"
[//end]: # "Autogenerated link references"


[//begin]: # "Autogenerated link references for markdown compatibility"
[helloWorld]: ../helloWorld "Hello there"
[//end]: # "Autogenerated link references"


[//begin]: # "Autogenerated link references for markdown compatibility"
[helloWorld]: ../helloWorld "Hello there"
[//end]: # "Autogenerated link references"


[//begin]: # "Autogenerated link references for markdown compatibility"
[helloWorld]: ../helloWorld "Hello there"
[//end]: # "Autogenerated link references"