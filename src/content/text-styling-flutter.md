---
layout: post
title: "A Guide to Text Styling in Flutter"
author: Owen
tags: ["Flutter"]
image: img/demo4.jpg
date: "2019-05-28T15:11:55.000Z"
draft: false
---

Text is a massive part of any mobile application, so making sure it looks great and is easy to read is essential. In this guide I'm going to be covering methods in which text can be styled in Flutter. This includes using custom fonts, sizing, fontWeight, global theming and more. 

>If you aren't familiar with Flutter, then you can check out my Introduction to Flutter post [here](https://owenhalliday.co.uk/introduction-to-flutter/).

# Project Setup

Okay, let's get started! Create a new Flutter project:

```bash
# Create a new Flutter project
$ flutter create text_styling && cd text_styling

# Open project in VS Code
$ code . 
```
Now, let's create a new `MaterialApp` inside of `main.dart` so we can start playing around.

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Text Styling in Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Text Styling in Flutter'),
        ),
        body: Center(
          child: Text('This is some text!'),
        ),
      ),
    );
  }
}
```
We should be seeing something like this:

![text-styling](img/text-styling/textstyling1.png)

As we can see, we've got an `AppBar` with a title, and a `Text` widget which is centered in the middle of the screen.   Now let's move onto styling our `Text` widget.

# Text Properties
Inside of our application, we're going to be supplying our `Text` widget with a `TextStyle`. This allows us to assign a number of properties, including `fontSize`, `fontWeight` and `color`. First things first, let's give our text some colour, make it a little bigger and make the font bold.

```dart
body: Center(
    child: Text('This is some text!', 
    style: TextStyle(
      fontSize: 60.0,
      fontWeight: FontWeight.bold,
      color: Colors.blue
      ))
   ),
```



