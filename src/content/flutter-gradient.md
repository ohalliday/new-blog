---
layout: post
title: Using Gradients in Flutter
image: img/gradients/gradientcover.png
author: Owen
date: 2019-06-01T07:03:47.149Z
tags: 
  - Flutter
  - Mobile Development
---

In this post we'll be covering how to use gradients within Flutter. Gradients can make an application look beautiful, and they're simpler than ever to use in Flutter.

>If you aren't familiar with Flutter, then you can check out my Introduction to Flutter post [here](https://owenhalliday.co.uk/introduction-to-flutter/).

## Project Setup

Okay, let's get to using some gradients! Start off by creating a new Flutter project:

```bash
# Create a new Flutter project
$ flutter create gradients && cd gradients

# Open project in VS Code
$ code .

```

Now, let's use this code to start off our application:

```dart
import 'package:flutter/material.dart';

void main() => runApp(HomePage());

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Gradients',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Flutter Gradients'),
        ),
        body: Container(
          child: Center(
            child: Text('Gradients are cool!',
              style: TextStyle(
                fontSize: 35,
                color: Colors.white,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
```

As you can see, we've got a `Container`, with a `Center` and `Text` widget, along with a little styling. We've also got an `AppBar` with a `title`.

## Assigning a BoxDecoration

To use gradients within Flutter, we need to access the `decoration` property inside of our `Container` widget, and then assign a `BoxDecoration`. Lets do that:

```dart
body: Container(
  decoration: BoxDecoration(
  ),
  child: Center(
    child: Text('Gradients are cool!',
      style: TextStyle(
        fontSize: 35
      ),
    ),
  ),
),
```

Good. From now, we can actually start creating our gradient. In Flutter, there are three types of gradients, a **linear gradient**, a **radial gradient** and a **sweep gradient**. In this post, we'll be exploring all three.

## Creating a LinearGradient

First of all, let's implement a linear gradient into our application:

```dart
body: Container(
  decoration: BoxDecoration(
    gradient: LinearGradient(
      colors: [Colors.green, Colors.blue])
  ),
  child: Center(
    child: Text('Gradients are cool!',
      style: TextStyle(
        fontSize: 35,
        color: Colors.white,
      ),
    ),
  ),
),
```

Inside of our `BoxDecoration`, we've added a `gradient` property, which gives us the ability to use the `LinearGradient` widget. Inside of our `LinearGradient` widget we've added the property of `colors`, which we've made blue and green. Let's have a look at what that gives us:

![Application](img/gradients/gradients1.png)

Great! We now have a linear gradient that goes from green to blue. Our app is already starting to look more beautiful. Let's begin to explore some properties that we can assign to our `LinearGradient` in order to change its appearance.

Firstly, we can change where the gradient stops and starts by adding the `begin` and `end` properties. Let's see if we can make our gradient go from the top left, to the bottom right of the screen.

```dart
body: Container(
  decoration: BoxDecoration(
    gradient: LinearGradient(
      begin: Alignment.topLeft,
      end: Alignment.bottomRight,
      colors: [Colors.green, Colors.blue])
  ),
  child: Center(
    child: Text('Gradients are cool!',
      style: TextStyle(
        fontSize: 35,
        color: Colors.white,
      ),
    ),
  ),
),
```

As you can see, we've added the properties of `begin` and `end` with values of `Alignment.topLeft` and `Alignment.bottomRight`. This should change how the gradient is aligned. Let's have a look at our application now:

![Application](img/gradients/gradients2.png)

Much better. Now we have a gradient that is properly aligned, and looks great.

We can also determine the fractions along the gradient by using the `stops` property. To do that we need to assign a list of values from 0.0 to 1.0. Let's try that out:

```dart
body: Container(
  decoration: BoxDecoration(
    gradient: LinearGradient(
      begin: Alignment.topLeft,
      end: Alignment.bottomRight,
      stops: [0.3, 1],
      colors: [Colors.green, Colors.blue])
  ),
  child: Center(
    child: Text('Gradients are cool!',
      style: TextStyle(
        fontSize: 35,
        color: Colors.white,
      ),
    ),
  ),
),
```

This value that has been assigned to the `stops` property should push the green part of our gradient closer to the bottom right of the screen. Let's have a look at our app:

![Application](img/gradients/gradient3.png)

As you can see, the fraction of our gradient has been pushed further down the bottom right of the screen. If we increase the value of the `stops` property, the fraction would be pushed further down, so on and so forth.

We can also increase the amount of colours in our gradient, so let's do that:

```dart
body: Container(
  decoration: BoxDecoration(
    gradient: LinearGradient(
      begin: Alignment.topLeft,
      end: Alignment.bottomRight,
      stops: [0.1, 0.3, 0.7, 1],
      colors: [Colors.green, Colors.blue, Colors.orange, Colors.pink])
  ),
  child: Center(
    child: Text('Gradients are cool!',
      style: TextStyle(
        fontSize: 35,
        color: Colors.white,
      ),
    ),
  ),
),
```

We've now added 2 colours, orange and pink. We've also added two new values to our `stops` property and changed the point in which the colours in our gradient stop. Let's have a look at what we have now:

![Application](img/gradients/gradient4.png)

Cool huh? Our gradient now has 4 colours, and we can see where each of the them has been divided.

Next up we're going to explore how to use **radial gradients** in Flutter.

## Radial Gradients

Radial Gradients are quite similar to Linear Gradients, in that they take in properties such as `colors` and `stops`, but they also take in some other properties, such as `radius`, `focal` and `tileMode`. Let's implement a radial gradient into our application:

```dart
body: Container(
  decoration: BoxDecoration(
      gradient: RadialGradient(
        colors: [Colors.green, Colors.blue]
      ),
      ),
  child: Center(
    child: Text(
      'Gradients are cool!',
      style: TextStyle(
        fontSize: 35,
        color: Colors.white,
      ),
    ),
  ),
),
```

As you can see, implementing a radial gradient is very simple. Let's have a look at our application:

![Application](img/gradients/gradient5.png)

Great! We can see that our gradient is fully working and is circle shaped, hence the name **radial**. Let's now try and change the appearance of our gradient by assigning some properties.

We'll start by adding some more colours, as well as the `stops` property.
