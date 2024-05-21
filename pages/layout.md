# Page Layout

## injectNavbar
```ts
const mobileNav = `<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
  <li><a href="/home">Home</a></li>
  <li><a href="/about">About</a></li>
  <li>
    <a>Parent</a>
    <ul class="p-2">
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
    </ul>
  </li>
  <li><a>Item 3</a></li>
</ul>`

const desktopNav = `
<div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></svg>
      </div>
      <ul class="menu menu-horizontal px-1">
        <li><a href="/home">Home</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>`

input.navbar = `
<div class="navbar bg-base-100">
  <div class="navbar-start">
      <!-- mobile nav goes here -->
    <span class="btn btn-ghost">
      <img src="/png/logo_green.jpeg" class="w-6"/>
      <a class="text-xl">Pipedown</a>
    </span>
  </div>
  <div class="navbar-center hidden lg:flex">
    <!-- desktop nav -->
  </div>
  <!-- <div class="navbar-end">
    <a class="btn">Button</a>
  </div> -->
</div>
`;
```

## Boilerplate
```ts
input.layout = ({body, footer}) => `<html class="no-js" lang="">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Pipedown</title>
  <meta name="description" content=""/>
  <meta property="og:title" content=""/>
  <meta property="og:type" content=""/>
  <meta property="og:url" content=""/>
  <meta property="og:image" content=""/>
  <meta property="og:image:alt" content=""/>

  <link rel="icon" href="/favicon.ico" sizes="any"/>
  <link rel="icon" href="/icon.svg" type="image/svg+xml"/>
  <link rel="apple-touch-icon" href="icon.png"/>

  <link rel="manifest" href="site.webmanifest"/>
  <meta name="theme-color" content="#fafafa"/>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.9.0/dist/full.min.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.tailwindcss.com">pd</script>
</head>

<body>
  ${input.navbar}
  <section id="app">
    ${body}
  </section>
  ${footer && footer}
</body>

</html>
`;
```
