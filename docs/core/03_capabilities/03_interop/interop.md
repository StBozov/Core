## Overview

The [Interop API](../../../reference/core/latest/interop/index.html) enables applications to:

- **offer functionality** to other applications by **registering** Interop methods;
- **discover applications which offer methods**;
- **invoke** (call) registered Interop methods;
- **stream and subscribe to real-time data** using the Interop Streaming API;

We call applications which offer methods and streams *Interop servers*, and applications which consume them - *Interop clients*, and collectively - **Interop instances**.

*For detailed information on the Interop API (methods, streams, discovery and more), see the [**Interop**](../../../glue42-concepts/data-sharing-between-apps/interop/javascript/index.html) documentation.*

In the next sections, you can see examples of using the Interop API. You can open the embedded examples directly in [CodeSandbox](https://codesandbox.io) to see the code and experiment with it.

## Registering and Invoking Methods

1 - Show register and invoke
	- Idea: Display basic interop between two applications
	- Apps: 
		- A: Has a button "Invoke", when clicked invokes method "G42Core.Basic" with no args. When the invokation returns a result, displays the content on the page.
		- B: OnLoad registers a method with hardcoded name "G42Core.Basic". When invoked, displays the timestamp of the invokation and returns the string "Hello from the other app".

<!-- example 1 -->

## Targeting

2 - Show invoke targeting: best, instance or all
	- Idea: Showcase specific instance targeting when an interop method has multiple servers.
	- Apps: 
		- A: Same as A in (1) (except now it has four buttons: `Default Invoke`, `Invoke All`, `Invoke ${appNameB}` and `Invoke ${appNameC}`)
		- B: Same as B in (1) (except the return string is: `Hello from ${appNameB}`)
		- C: Same as B in (1) (except the return string is: `Hello from ${appNameC}`)

<!-- example 2 -->

## Discovery

### Methods

3 - Show method discovery by name
	- Idea: Illustrate how to find a method by name and then invoke it
	- Apps: 
		- A: Has an input field and a button "Invoke". The user can type a method name in the input field and on button click the app will find the method with the provided name and will invoke it. If no method - will display an error message. the app will invoke the method with target 'all' and will display all returned values in the invokation result object.
		- B: OnLoad registers a method with hardcoded name "one". Also has an input field and a button. The user can type in the input name of a method and on button click the app will register the method (will display a success message when ready). When a method was invoked will display the timestamp of the invokation and will return a string `Hello from ${methodName} in ${appName}`.
		- C: Same as B, but the hardcoded method is "two".

<!-- example 3 -->



4 - Show method discovery by subscribing to methodAdded event
	- Idea: Showcase how to get notified about a method
	- Apps: 
		- A: Same as A in (3), but now the app will subscribe to the `methodAdded` event and on event will display the name of the registered method.
		- B: Same as B in (3) without the hardcoded method.
		- C: Same as C in (3) without the hardcoded method.

<!-- example 4 -->

### Servers

5 - Show server discovery by method name
	- Idea: Shows how to discover all the servers who have registered a method by given method name
	- Apps: 
		- A: Similar to A in (3), except on button click the app will find which servers register a method with the provided name and display them on the page. Will not invoke.
		- B: Same as B in (3)
		- C: Same as C in (3)

<!-- example 5 -->

## Streaming

### Publishing and Subscribing

6 - Show publishing and subscribing
	- Idea: Illustrate basic stream registration, publishing and subscription
	- Apps: 
		- A: Has a button "subscribe" - on click subscribes to "G42Core.Stream.Basic" and prints to the page the data received.
		- B: on load creates a stream "G42Core.Stream.Basic". Has a button "Start Publishing" - toggles on/off data pushing. When "on" every 3 seconds will push to the stream "{time: timeStamp, message: 'Hello from publisher', count: ++Counter}".

<!-- example 6 -->

### Events

7 - Show stream notifications - subscriber added, subscriber removed, stream closed
	- Idea: Showcases the various stream events used to notify when a subscriber was added/removed and a stream was closed
	- Apps: 
		- A: Extends A from (7). Has a button "unsubscribe", which unsubscribes from the stream. Listens for onClosed and prints to the page when the stream was closed.
		- B: Extends B from (7). Has a button "close"/"create" - creates or closes the "G42Core.Stream.Basic" stream. Prints to the page when a new subscriber was added and/or removed.


<!-- example 7 -->

### Managing Subscriptions

8 - Show accepting, rejecting, accepting on branch and pushing to branch/all
	- Idea: Illustrates some options within createStream for managing subscription requests and subscriber grouping
	- Apps: 
		- A: Has a button "Subscribe" - subscribes to stream "G42Core.Stream.Basic". Prints subscription success or error. Prints the data received.
		- B: Has a button "Subscribe" - subscribes to stream "G42Core.Stream.Basic". Prints subscription success or error. Prints the data received.
		- C: on load creates stream "G42Core.Stream.Basic". 
			When a new subscription request is received -> prints info + "Accept" + "Accept Private" + "Reject". 
			When "Accept" - accepts on the default branch, when "Accept Private" accepts on branch "private". When reject, reject with message "Rejected from server".
			When accepted replaces the buttons with text "Accepted on Default/Private".
			Has two buttons: "Push" and "Push Private". On click of each will push "{time: timeStamp, message: 'Hello from publisher', count: ++Counter}" on either the default or private branches

<!-- example 8 -->