## Overview

Using the [Window Management API](../../../reference/core/latest/windows/index.html), your application can easily open and manipulate browser windows. This allows you to transform your traditional single-window web app into a multi-window native-like PWA application. The Window Management API enables applications to:

- **open multiple windows**;
- **manipulate the position and size** of opened windows;
- **pass context data upon opening new windows**;
- **listen for and handle events** related to opening and closing windows;
- **automatically save and restore** the positions and contexts of your application windows;

*For detailed information on the Window Management API, see the [**Window Management**](../../../glue42-concepts/windows/window-management/javascript/index.html) documentation.*

In the next sections, you can see examples of using the Interop API. You can open the embedded examples directly in [CodeSandbox](https://codesandbox.io) to see the code and experiment with it.

## Opening Windows

10 - Show window open with passing context and/or size
	- Idea: Showcase simple window open with basic configuration - context, size and position
	- Apps: 
		- A: Has a button to open a new window and options to type in name (required), context, size and position for the new window.
		- (the new window): When opened displays it's URL and context, if provided

<!-- example 10 -->

## Window Discovery

11 - Show discovering windows by iterating list
	- Idea: Showcase windows discovery by name.
	- Apps:
		- A: Extends A from (10). Has an input field and seach button. The user can type in window name and on search click, will print on page the ID of the found window and provided context, if any
		- (the new window): Same as (10)

<!-- example 11 -->

## Window Events

12 - Show window add/remove notifications by events subscription
	- Idea: Give example of window add and remove events.
	- Apps:
		- A: Extends A from (11). on load subscribes to window added/removed events and prints to the page every time a window was opened/closed.
		- (the new window): Same as (10)

<!-- example 12 -->

## Window Operations

13 - Show control of an open window: size, bounds, context
	- Idea: Illustrate manipulation of already opened window.
	- Apps: 
		- A: Extends A from (11). Instead of printing info about the found window, will provide controls to set a new size, position or context for that window.
		- (the new window): Extends (10), now subscribes for context changes and prints the new data.

<!-- example 13 -->