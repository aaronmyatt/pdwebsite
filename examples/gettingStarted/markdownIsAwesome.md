---
tags:
  - getting-started
order: 5
title: Markdown is Awesome
blurb: Markdown is just HTML - but it is also much more!
---

# Markdown is Awesome

> This will likely serve as a living document as I collect more cool things from the Markdown ecosystem.

![Markdown Logo](/img/mdlogo.png)

As a subset of HTML, with simplified syntax, basic Markdown provides you with ample flexibility to present your content. That simplicity, I suspect, is what has made it such an attractive target to build upon. The Markdown ecosystem is _rich_. Whether it is different flavours of Markdown syntax, hosting your Markdown written blog posts, or offering unanticipated experiences, like slideshows or generating entire books! The Markdown landscape is vast.

## Markdown, generally available

Perhaps the "killer feature" of Markdown is that you can find it everywhere! Those of us in tech are inundated with tooltips reminding us that we can use Markdown syntax. Markdown is used for writing tickets on Jira, issues/pull requests on Github or to format documentation in code. Adoption of Markdown syntax by tools like Notion and [Google Docs](https://support.google.com/docs/answer/12014036)(!), is the biggest endorsement of Markdown's universal appeal though.

<img src="/img/gdocsmarkdown.png"  alt="Google Docs Markdown Support" width="300" />

### Accessibility

This "killer feature" is enabled by a more fundamental and important aspect of Markdown.

> #### It's easy!

The stripped down syntax is extremely accessible to anyone regardless of their background. So simple that anyone who has formatted a document in Microsoft Word can understand Markdown's syntax.

I like constraints. See: [[pipelinesRock]]. Markdown does an excellent job of giving you just enough, there's no overwhelming desire to format your documents beautifully. It's like being forced to do all your work in "zen mode" - aka, a delightfully focused experience!

## Publishable

Markdown is just HTML. Many times in my career I have wished to make some internal documents or communications more broadly accessible without actually giving away more seats on an expensive service. If everything was Markdown, you would just put it on the internet! 

There are numerous publishing and blogging tools out there serving that slice of Markdowns utility: 

- https://ghost.org/
- https://getgrav.org/
- Or just about any CMS tool, like Wordpress, will support Markdown for publishing content

## Just add HTML

Since Markdown _is just HTML_ you can actually add raw HTML to spice up and take more control of your presentation! 

For example, in a recent article, [[installationBeginner]], I wanted to add a caption to an image. Markdown doesn't support adding captions to images. No matter, just add HTML!

```html
<figure>
  <img src="/img/denoInstall.png" alt="Install Deno"/>
  <figcaption>It <i>should be</i> a single copy and paste to install Deno on your system.</figcaption>
</figure>
```

It's great to have the flexibility of going one level deeper and using standard HTML when needed.

Tools like [MDX](https://mdxjs.com/) are trying to take this to the next level allowing you to utilise React components in your Markdown.

## Personal Knowledge Management

An area that I use most frequently, and imagine will have the most exciting relationship with Pipedown, is Personal Knowledge Management (PKM).

There's a ton of PKM tools out there these days:

- [Foam](https://foambubble.github.io/) (My personal choice)
- https://obsidian.md/
- https://zenkit.com/en/hypernotes/
- https://scrapbox.io/

This will be a powerful combination with Pipedown because PKM is all about linking knowledge, enhancing learning and increasing the likelihood of serendipity. Each of these can have a massive impact on the average developers workflow and have yet to be effectively incorporated in the tools I use day to day. Let's touch on those points a little:

### (Back) linking
A core feature of most PKM tools is the ability to link conveniently between documents, specific parts of documents and keep track of which documents link to and from which. This is provides a rich knowledge graph of which information relate to one another. This could be a big win for code bases enabling developers to easily discover deeper context, historical relationships between parts of an app and generally get around a bunch of files more conveniently.

### Learning
A hall mark of a great developer is their ability to learn effectively. Though no matter how prolific an individual is at learning, that knowledge is always silo'd. We need tooling that encourages learning to be documented and proliferated in the context in which it is occurring. Marrying code with rich, contextual, timely information about its implementation, referencing sources, imagery, relationships and documentation within the organisation it is built would bring a whole new level to code.

### Serendipity
Utilising techniques like Zettelkasten or generally making an effort to document ones learning and discovery process along side your solutioneering would be the cherry on top. Imagine being privy to all effort that went into researching a new feature, or reading through a past developers notes only to have your own imagination sparked. That's what a Personal Knowledge Management system aspires to invoke and it is exactly what drives innovation.

[More PKM Awesomeness](https://github.com/doanhthong/awesome-pkm)

## Eat your left overs

A last piece here is that Markdown is just code, simple code, that can be ingested and transformed and output as something cool. There's a whole other ecosystem of programming libraries that provide utilities and enhancements to the markdown. Here's just a few that I will be to digging into in the hopes of crafting a beautiful markdown editing and programming experience in a [future SaaS](https://pipedown.dev/)!

- [Silverbullet](https://silverbullet.md/)
  - This might may belong in the PKM section but it is an exciting tool that brings querying and programmability to your PKM
- https://docs.evidence.dev/
  - A tool which others have compared Pipedown to. Both tools have different goals but I like Evidence a lot and can see it also having a strong place in a PKM
- https://remark.js.org/
  - Remark is a toolkit that is referenced to the most frequently when I was researching. It seems the most feature rich markdown to html tool out there with a butt load of plugins to achieve numerous outcomes
- https://markdowndb.com/
  - A very intriguing tool that I think could be baked directly into Pipedown to do a lot of the heavy lifting in memory via SQLite. Though it might be better to piggy back on Deno KV...
- https://milkdown.dev/
  - A comprehensive custom Markdown editor framework
- https://mdxjs.com/

Discover more from the Markdown ecosystem:
- https://github.com/BubuAnabelas/awesome-markdown


[//begin]: # "Autogenerated link references for markdown compatibility"
[pipelinesRock]: pipelinesRock "Pipelines Rock!"
[installationBeginner]: installationBeginner "How to install Pipedown"
[//end]: # "Autogenerated link references"