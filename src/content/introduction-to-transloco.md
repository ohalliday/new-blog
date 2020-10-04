---
layout: post
title: An Introduction to Transloco
image: img/iphone-410324.jpg
author: Owen
date: 2020-03-31T21:03:47.149Z
tags:
  - Angular
  - Introduction
  - Transloco
  - Internationalisation
  - Languages
  - Translations
---

In this post we'll be looking at how to integrate internationalisation (i18n) with transloco in an Angular application. Internationalisation is a very important part of any industry-level project, and can be a very intimidating feature to implement. By the end of this article, you'll be comfortable using `transloco` to define translations for your content and be able to switch languages easily in runtime, and in your future projects, you'll find it a breeze.

> If you aren't familiar with Angular, watch out for an Introduction to Angular post which will be coming soon!.

## Project Setup

Okay, let's get to using transloco! Start off by creating a new angular project:

```bash
# Create a new Flutter project
$ ng new transloco-app && cd transloco-app

# Open project in VS Code
$ code .

```

Then go to the terminal inside vs code

And run ng serve -o which will open up the app in your browser

Go into app.component.html and delete the entire contents, let’s start a fresh.

Then go back to your other terminal

ng add @ngneat/transloco

May take a while so grab a coffee while you wait!

You will be asked what languages you need, type in en, and es as an example, but you can use whatever languages you like.

Server side rendering, type in n

You should see that some boilerplate files have been created.

First, Transloco creates boilerplate files for the specified languages:

assets/i18n/es.json

assets/i18n/es.json

Bla bla bla mention others that are in transloco’s docs.

Navigate to transloco-root.module.ts

Should see some config options

reRenderOnLangChange: We’re going to be setting this to true so that we can change the language in runtime from a dropdown.

defaultLang: We’re going to be setting this to en.

availableLangs: In this we have our array of languages, in our case we are using en and es (Spanish).

prodMode: Here we can see that we’re setting our environment to production.

Now let’s implement some translations in our app.

There are three methods we can use to translate in our application. The first of those we’re going to look at is the structural directive. In the `app.component.html`, let’s add a simple title.

```

<h1>
  This is a title!
</h1>

```

Now let’s wrap that in an `ng-container` and add our structural directive like so:

```typescript
<ng-container *transloco="let t">
  <h1>
    This is a title!
  </h1>
</ng-container>

```

We can then add our template binding and call the `t` function, which is translating our words behind the scenes. Here’s what that’d look like.

```typescript
<ng-container *transloco="let t">
  <h1>
    {{ t("This is a title!") }}
  </h1>
</ng-container>

```

Let’s see what that looks like. If you open the developer console inside of your browser, you should see that we run into the following error.

Transloco picture

This is because Transloco is expecting a ‘key’ that is located in our locale file and not a phrase. Let’s go ahead and change the contents of our translation function to `title`, like so:

```typescript
  <h1>
    {{ t(“title”) }}
  </h1>
```

After that, let’s venture into our locale files and add the translations.

```json
en.json

{
  "title": “This is a title!”
}

```

```json
es.json

{
  "title": "Este es un título!"
}

```

NOTE: I’ve used Google Translate for the Spanish translations so they may not be 100% accurate.

Now let’s take a look at our application!

Great, so now we can see that our key is translated, and we have our title.

We can also place a different language in our structural directive, like so:

```typescript
<ng-container *transloco="let t; lang: 'es'">
<h1>{{ t('title') }}</h1>
</ng-container>

```

This should get back the Spanish translation for our title, let’s take a look:

— Picture

Now we have implemented a structural directive, let’s explore how to use pipes in Transloco.

In our `app.component.html`, we will be

Cool! You should now have a basic understanding of how to use Transloco with Angular. In the next article we’ll be discussing how to create a dropdown which can be used to change our language in runtime.
