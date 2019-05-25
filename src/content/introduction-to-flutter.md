---
layout: post
title: An Introduction to Flutter
image: img/iphone-410324.jpg
author: Owen
date: 2019-05-14T07:03:47.149Z
tags: 
  - Flutter
  - Introduction
  - Mobile Development
---

Let me guess, you love developing mobile applications, but hate the fact that you need to have multiple code bases for a single application. Also, when you make a change for one platform, it doesn't synchronise with the other and you end up running into errors.

You've tried using cross-platform frameworks such as React Native, Ionic and NativeScript, but you always have to compromise. That's where Flutter comes in.

# What is Flutter?
---
Flutter is an new and evolving cross-platform mobile development framework made by Google. It allows you to create beautiful, cross-platform mobile applications with native performance, all from one codebase.

Its support for **hot reloading** allows a developer to quickly experiment and add features with split-second reloading times. This can speed up the development progress of applications substantially, setting Flutter apart from similar frameworks.

You can learn more about hot reloading [here](https://flutter.dev/docs/development/tools/hot-reload).

Flutter takes advantage of many different techniques in order to achieve high performance and productivity. These include:

- Compiling to native code
- Using widgets and only rendering them when necessary

## What kind of things can I build with Flutter?

---

Flutter is optimised to create 2D mobile apps that run on both Android and iOS. However, recent news shows that Flutter is expanding to the [web](https://medium.com/flutter-io/hummingbird-building-flutter-for-the-web-e687c2a023a8), desktop and embedded environments. In your apps, you can implement geolocation, camera, network, 3rd-party SDKs and more. 

## What IDE can I use with Flutter?
---
Flutter supports plugins for IntelliJ, VS Code and Android Studio. It's really down to preference, but I love using VS Code, just because it's lightweight and gives me the ability to edit, build and debug with ease. 
## What language is used to write Flutter Code?
---
Dart is the programming language that is used when coding Flutter applications. Dart was first shown back in October 2011, over 7 years ago. Dart follows object-oriented programming concepts like loops, classes, functions, methods, operators and some exceptions like throw and catch. 

I would highly recommend looking at the [Dart documentation](https://dart.dev/guides) if you aren't familiar with object-oriented programming concepts.

# Installing Flutter
---
Okay, so now that we understand more about Flutter and we're comfortable with using Dart, let's get to creating our first project!

You will need to start by [installing Flutter](https://flutter.dev/docs/get-started/install) on your device. Flutter has full support for macOS, Linux and Windows. I would highly recommend using [Visual Studio Code](https://code.visualstudio.com/) as your IDE, as well as the [Dart Code extension](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter), however Android Studio and IntelliJ are great alternatives.

Once you have installed Flutter and your IDE is set up with plugins, we can now create a new Flutter project. We can do this in many ways, but I'm going to use the terminal:

``` bash
# Creating a new flutter application 
$ flutter create demo
# Changing directory 
$ cd demo
# Opening file in VS Code
$ code .
```
If you're having problems such as: 

> code . is not recognised as an external or internal command, operable program or batch file

then you will need to add the following to your PATH (depending on OS):

`c:\Program Files\Microsoft VS Code\bin`

Now we've opened Visual Studio Code, we need to navigate to `main.dart.`.

Looking at all this code that you may not recognise can be a little daunting at first. We have things like `setState`, `StateFulWidget`, `_incrementCounter` and more. To give ourselves more of an understanding of how it all works, let's delete all of our code and start a fresh. 

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());
```
Firstly, we're importing the Material library. This is what allows us to create a Material application. [Material](https://material.io/) is a set of visual design standards made by Google for both mobile and web environments.

After that, the `main()` method uses arrow notation (`=>`). Arrow notation is used for one-line functions or methods. This will allow us to create a widget called `MyApp`, or whatever name you may like. Now, let's move onto the class:

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Text("Hello World!", textDirection: TextDirection.ltr);
  }
```
We can see that the app extends `StatelessWidget` which in turn makes the app itself a widget. In Flutter, we'll be using widgets all the time, even for alignment, padding and more.

Now if you've used React or any other render-based library, you will be somewhat familiar with the `build` method in Flutter. The `build` method allows us to render the elements of our UI as a widget tree, which will then display "Hello World!" on our screen.
