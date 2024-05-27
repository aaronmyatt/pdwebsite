# ToggleTabs

The landing page has some tabs. To showcase other ways of using Pipedown, the way I hope will become the our audiences default, we will write a basic script to register a listener on the tabs and toggle their CSS.

```json
{
    "build": ["iife"]
}
```

```ts
input.selector = '[name="installTabs"]'
```

## grabElement
```ts
input.el = document.querySelector(input.selector)
```

## callback
TailwindUI provides this hint:
`<!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->`
Looks like we want to add these two classes to which ever tab is active:
`border-indigo-500 text-indigo-600`

Let's try getting all the tabs under `input.el` removing those two active classes and adding them to the event target.
We will also want to show/hide the div corresponding to the tab content. I'll rely on the position of the tab clicked to infer which of the children with a `.tabcontent` class to show or hide.
```ts
input.cb = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let clickIndex = 0;
    input.el.querySelectorAll('a').forEach((el, index) => {
        if(el === event.target){
            clickIndex = index;
            el.classList.add('border-indigo-500')
            el.classList.add('text-indigo-600')
        } else {
            el.classList.remove('border-indigo-500')
            el.classList.remove('text-indigo-600')
        }
    })

    input.el.querySelectorAll('.tabcontent').forEach((el, index) => {
        if(index === clickIndex){
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    })
}
```

## registerListener
```ts
input.el.querySelectorAll('a').forEach(el => {
    el.addEventListener('click', input.cb);
});
```
