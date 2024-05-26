# Pages
Deno deploy was slow to serve pages that involved any sort of reading and rendering. So we will instead generate those pages before deployment. Though this will make development a little more cumbersome. All the more reason to use one of the many static site generators out there!

## defaultLayout
```ts
import layout from 'layout';
Object.assign(input, await layout.process(input));
```

## partials
```ts
import _partials from 'partials';
input.partials = await _partials.process(input);
input.sections = []
```


## Pages
```ts
import home from 'home';
Object.assign(input, await home.process(input))
```

## ExamplesPage
```ts
import examples from 'examples';
Object.assign(input, await examples.process(input))
```
