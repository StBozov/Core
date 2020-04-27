## Overview

As we explained in the introduction, on a high level a Glue42 Core project consists of one or more [**Clients**](../../../what-is-glue42-core/core-concepts/glue42-client/index.html) and an [**Environment**](../../../what-is-glue42-core/core-concepts/environment/index.html). In this section we will cover how to set up your dev environment for a single client project. Setting up the environment means creating the correct configuration files and serving them together with the rest of the environment parts. For more details on what exactly are those parts, you can head over to the [**Glue42 Core environment**](../../../what-is-glue42-core/core-concepts/environment/index.html) section.

There are two ways to get yourself set up. The first one is to use our [**CLI**](../../../what-is-glue42-core/core-concepts/cli/index.html) tool, which will get all the required dependencies and scaffold default configuration files for you. The second one is to do everything manually. We recommend sticking with the [**CLI**](../../../what-is-glue42-core/core-concepts/cli/index.html), because it greatly simplifies the setup procedure and lets you focus on building a great app. On the other hand, if you require really fine-grained control over your app development setup, maybe because you use some very custom tools, then you can skip over to the manual section.

## CLI

As a prerequisite you need to have the `@glue42/cli-core` package globally installed on your machine. Alternatively you can include it as a dev dependency for your app. It is up to you, but the following steps will assume that you have it globally installed:

```javascript
npm install --global @glue42/cli-core
```

### Step One

First, you need to get all the [**Glue42 Core environment**](../../../what-is-glue42-core/core-concepts/environment/index.html) files and scaffold the config files. Go to your application's root directory. This could be an existing application or a freshly created one with `ng new` or `npx create-react-app`, for example. Open a terminal and:

```javascript
gluec init
```

This will `npm install --save` the necessary files. If, for some reason, npm is not initialized in your directory, this command will also init it with basic `--yes` settings.

As a result you will have a few more packages included in your `./node_modules` directory and on root level you will find three new files
- `glue.config.dev.json` - this is the config used by the [**CLI**](../../../what-is-glue42-core/core-concepts/cli/index.html), containing default settings.
- `glue.config.json` - this is config used by the [**Glue42 Clients**](../../../what-is-glue42-core/core-concepts/glue42-client/index.html), containing default settings.
- `glue.core.cli.log` - this is the log output of the [**CLI**](../../../what-is-glue42-core/core-concepts/cli/index.html), if you've set the `full` logging setting in `glue.config.dev.json`.

We are not going to go over the specifics of each file, because you can find all you need in the [**Glue42 Core environment**](../../../what-is-glue42-core/core-concepts/environment/index.html) section.

### Step Two

Next, you need to tell the [**CLI**](../../../what-is-glue42-core/core-concepts/cli/index.html) where to find your application and where to serve it. Here you have two options
- You can serve your application using your framework's tools. For example, `ng serve` for Angular or `npm start` for React apps created with Create React App.
- You can just build your application using yor framework's tools. For example, `ng build` for Angular or `npm run build` for React apps created with Create React App.

Now, let's cover each of those scenarios.

#### Served application

If you choose to serve your application, you can take full advantage of your framework's built-in dev capabilities like fully configured dev server, live reloading and so on.

As you know, by default Angular will serve you application at `localhost:4200`, while React will do so at `localhost:3000`. That's all great and you do not need to change any of it. The only thing you need to do is tell the [**Glue42 Core CLI**](../../../what-is-glue42-core/core-concepts/cli/index.html) where to find your apps. To do that go to `glue.config.dev.json` and add a new object in the `apps` array:

```json
{
    // some other stuff
    "apps": [
        {
            "route": "/",
            "localhost": {
                "port": 3000 // this is the react default, for angular default change it to 4200
            }
        }
    ]
    // some other stuff
}
```

This config tells the CLI that you want at `/` (root) the built-in dev server to proxy to `localhost:3000`.

#### Built application

If you don't want to use your framework's serving capabilities, you can just build your app and let the Glue42 Core dev server serve it for you from the file system. This is also helpful, if you are developing something quick and light using Vanilla JS and you don't really have a fully configured development server.

First you need to build your app (`ng build` for Angular, `npm run build` for React) and then edit the `glue.config.dev.json`:

```json
{
    // some other stuff
    "apps": [
        {
            "route": "/",
            "file": {
                "path": "./path/to/built/app"
            }
        }
    ]
    // some other stuff
}
```

This config tells the CLI that you want at `/` (root) the built-in dev server to serve your files from the chosen path.

This option could be beneficial for users with less powerful computers, because the frameworks' files watching, rebuilding and live reloading functionalities can be CPU intensive.

**Note!** Keep in mind that the `path` property should describe the location of your built app directory. For example `./dist/myapp`. Also, this property accepts absolute and relative paths.

### Step Three

Great, so right now you have your files ready, your app is either served or built and you have told the [**CLI**](../../../what-is-glue42-core/core-concepts/cli/index.html) where to find your app. Next you need to start the built-in dev server, by

```javascript
gluec serve
```

This command parses the `glue.config.dev.json` and launches a light-weight dev server at `localhost:4242` (by default). If you navigate to `localhost:4242`, you will see what your app is served there. What's more the Angular and React live reloading functionality is also available (if you chose to serve your app).

At first glace, the end result is pretty much the same as the one from `ng serve` or `npm start`. The difference is that apart from serving your app, we are also serving the [**Glue42 Core environment**](../../../what-is-glue42-core/core-concepts/environment/index.html) and your app is ready to initiate the `@glue42/web` library and use all of the Glue42 Core capabilities.


## Multiple Applications

There are situations where your project is not a single app with multiple modules or components, but instead it is composed of multiple applications. Some created using Vanilla JS, others with React maybe Angular, etc. This is exactly the case where Glue42 Core and it's [**CLI**](../../../what-is-glue42-core/core-concepts/cli/index.html) really expands your dev toolkit.

Setting up a multi-app [**Glue42 Core environment**](../../../what-is-glue42-core/core-concepts/environment/index.html) is easy and almost identical to the single-app environment, discussed in the [**Single Application**](../single-application/index.html) Set Up. That's why we are not going into details, rather we will go over each step and expand on the information from the [**Single Application**](../single-application/index.html) page.

If you are working on a multi-app project, then your file structure looks something like this

```cmd
/ProjectA
    /ApplicationA-SRC
    /ApplicationB-SRC
    /ApplicationC-SRC
    /shared
```

We will continue forward with the assumption that in our case:
- ApplicationA-SRC is the source of a React app
- ApplicationB-SRC is the source of an Angular app
- ApplicationC-SRC is the source of a Vanilla JS app
- shared is a directory which contains assets shared by all three apps, like fonts, icons, etc

## CLI

### Step One

First, go to your project's root, in our case `/ProjectA` and initiate Glue42 Core:

```javascript
gluec init
```

Naturally, we are doing this in the project root, not inside the applications like we did in [**Single Application Set Up**](../single-application/index.html). The output of this command will be identical - we have the dependencies in `./node_modules` and the three scaffolded Glue42 Environment files.

### Step Two

In [**Single Application Set Up**](../single-application/index.html) we went through two basic scenarios - proxying to a served app or serving an app from the file system. All of this is completely valid, but this time, we can define in `glue.config.dev.json` multiple applications. On top of that we can mix them - some might be hosted by our framework of choice, other might just be built. Let's look at a practical example.

We will assume the following arrangement:
- ApplicationA-SRC will be served by React at `localhost:3000`
- ApplicationB-SRC will be served by Angular at `localhost:4200`
- ApplicationC-SRC will be built at `/ApplicationC-SRC/dist`

Our goal is to have the following:
- `localhost:4242` -> ApplicationA
- `localhost:4242/apptwo` -> ApplicationB
- `localhost:4242/appthree` -> ApplicationC

Here is how the `glue.config.dev.json` should look like:
```json
{
    // some other stuff
    "apps": [
        {
            "route": "/",
            "localhost": {
                "port": 3000
            }
        },
        {
            "route": "/apptwo/",
            "localhost": {
                "port": 4200
            }
        },
        {
            "route": "/appthree",
            "file": {
                "path": "./ApplicationC-SRC/dist"
            }
        }
    ]
    // some other stuff
}
```

Like we explained in [**Single Application Set Up**](../single-application/index.html), you are free to choose between serving your app with it's framework's tools or simply building it and letting [**Glue42 Core CLI**](../../../what-is-glue42-core/core-concepts/cli/index.html) serve it from the file system.

Before we continue, we need to tell our Angular app (ApplicationB) that it is no longer served at root. By default React, Angular and basically any other framework will configure their assets, scripts, client-side routing logic, etc as if the app is served at root level. This makes sense from the frameworks' perspective, but in our case, ApplicationB is served from a route `/apptwo/`. This is framework-specific and has nothing to do with Glue42 Core, but we will explain it for Angular and React.

#### React

If you have a standard app created by Create React App, then you need to two things.

First go to the `package.json` and add:

```json
{
    "homepage": "/apptwo/"
}
```

This will instruct React to search of assets at `/apptwo/...`, instead of `/...`.

Second, you need to tell the React Router that the basename is no longer `/`. This looks like this:

```javascript
<BrowserRouter basename="/apptwo/" />
<Link to="/today"/> // renders <a href="/apptwo/today">
```

#### Angular

In Angular your achieve the same by going to the `angular.json` and adding `baseHref` next to our `outputPath` and `index`

```json
{
    "outputPath": "dist/appone",
    "index": "src/index.html",
    "main": "src/main.ts",
    "baseHref": "/apptwo/",
}
```

**Note** that in some cases you might also need to specify `deployUrl` next to `baseHref`.

**Important for all frameworks!** Notice that everywhere we specified the new base with **starting** and **ending** slashes `/apptwo/`. It is important to include both.

**Important for all frameworks!** We used `/apptwo/` as base value, because this is the route value we used in `glue.config.dev.json` in the example above. Keep in mind that the `route` value in `glue.config.dev.json` and base value you configure should be identical.

**Important for all frameworks!** Currently version 1.0.0 of the CLI does **not** support deep levels of app route declaration. Meaning that `"route": "/myapps/apptwo"` is not currently supported. Please stick to only one level of depth: `"route": "/apptwo"`.

After we have configured the applications, we need to either serve or build them. In our example we are serving both the React and Angular apps with their respective built-in tools.

### Step Three

Great, so we have our apps declared in `glue.config.dev.json` and the necessary configurations for baseHref and routing are also done. Let's start the dev server:

```javascript
gluec serve
```

The server fires up at port `4242` and indeed all of our apps are at the expected locations. Furthermore, because we proxied to the Angular and React apps which are served by their respective built-in servers, we have fully working Life Reloading (as configured per app).

**Note** that any client-side routing you might have will still be working as expected.

### Shared Assets

When you are working on a multi-app project, it is natural to have some assets shared by all apps. If you wish the Glue42 Core CLI dev server to also serve those assets, you can easily set this up in the `glue.config.dev.json`. Here is how.

```json
{
    "server": {
        "sharedAssets": [
            {
                "route": "/shared",
                "path": "./shared/"
            }
        ]
    },
}
```

You can use this to define entire directories like we have done, or you can just specify individual files.

## Manual

If you wish to set everything up on your own, because none of the built-in solutions fits you, then we got you covered too. Head over to the manual section of [**Single Application Set Up**](../single-application/index.html). The procedures and steps are identical with the only exception that you have to do them on project level, not on application level.

However, bear in mind that setting up our example case (as defined in the beginning of this section) is harder than it seems, because the major requirement of Glue42 Core is that all Glue42 Clients and Glue42 Environment must be hosted on the same domain and port.

## Manual

## Overview

Maybe you don't like using scaffolding tools or maybe you just have a complex and custom case, and the built-in functionality just doesn't suite you. No problem, now we will go through manually setting your [**Glue42 Core environment**](../../../what-is-glue42-core/core-concepts/environment/index.html).

### Step One

Go to your application's root and install the necessary Glue42 Core dependencies:

```javascript
npm install --save @glue42/gateway-web @glue42/worker-web
```

### Step Two

Now you have to create the `glue.config.json` and define all the properties you need. You can get a detailed information on the available properties in the [**Glue42 Core environment**](../../../what-is-glue42-core/core-concepts/environment/index.html) section.

**Note** that this file is optional, so if you won't use it just skip this step and Glue42 Core will continue with defaults.

### Step Three

Now you need to serve your application and the Glue42 Core Environment.

By default:
- Glue42 Clients will look for `/glue/glue.config.json` to get user-level configs.
- Glue42 Clients will look for `/glue/worker.js`
- The worker will look for `/glue/gateway.js` and `/glue/glue.config.json`

You should serve:
- the gateway from `./node_modules/@glue42/gateway-web/web/gateway-web.js`
- the worker from `./node_modules/@glue42/worker-web/dist/worker.js`

If you don't want to use a `glue.config.json`, then you need to specify that when initializing a [**Glue42 Client**](../../../what-is-glue42-core/core-concepts/glue42-client/index.html).

If you would like to serve the Glue42 Core environment from a different route, for example from `/my/other/assets/`, then you need to:
- serve all environment assets at the same level (so that they are siblings)
- configure the [**Glue42 Clients**](../../../what-is-glue42-core/core-concepts/glue42-client/index.html) to look for a config or a worker at the right route.

Example with a `glue.config.json`:

```cmd
routes
    /my/other/assets/worker.js
    /my/other/assets/gateway.js
    /my/other/assets/glue.config.json
```

```javascript
// Glue42 Client
// Glue42Web config
const config = {
    extends: "/my/other/assets/glue.config.json"
};
```

Example without a `glue.config.json`:

```cmd
routes
    /my/other/assets/worker.js
    /my/other/assets/gateway.js
```

```javascript
// Glue42 Client
// Glue42Web config
const config = {
    worker: "/my/other/assets/worker.js"
};
```

We touched on all major steps needed to manually set up your environment, but also keep in mind that you can partially use the [**CLI**](../../../what-is-glue42-core/core-concepts/cli/index.html). You can use

```javascript
gluec init
```

Just to set up the necessary files for you and then you can serve them using your own dev setup.

## Advanced

## Overview

So far we have covered the default, straight forward initiation. But what if you need a little bit more control? By going over the `glue.config.dev.json` you can change the port of the dev server, the sources of the [**Glue42 Core environment**](../../../what-is-glue42-core/core-concepts/environment/index.html) files, the logging of the [**CLI**](../../../what-is-glue42-core/core-concepts/cli/index.html) and so on. If you are interested, head over to the [**CLI section**](../../../what-is-glue42-core/core-concepts/cli/index.html).

## Extending the Gateway Logging

#### Gateway log appender

You can overwrite the default logging configuration of the gateway from `glue.config.json`. For most cases this is not needed, because the gateway logs internal messages sent back and forth from [**Glue42 Clients**](../glue42-client/index.html). However, if you really need to, you can define:
- log level - accepts: `"trace" | "debug" | "info" | "warn" | "error"`, defaults to: `info`
- appender - a function that receives a **LogInfo** object. By default logs to the shared worker console, but your custom function can send those logs to a remote server, for example. The **LogInfo** object has a structure like this:

```javascript
{
    time: 2017-06-22T15:38:34.230Z,
    file: 'C:\\Users\\dimd00d\\AppData\\Local\\Temp\\form-init8247674603237706851.clj',
    output: 'DEBUG [gateway.local-node.core:55] - Sending message {:domain "global", :type :error, :request_id nil, :peer_id nil, :reason_uri "global.errors.authentication.failure", :reason "Unknown authentication method "} to local peer',
    level: 'debug',
    line: 55,
    stacktrace: null,
    namespace: 'gateway.local-node.core',
    message: 'Sending message {:domain "global", :type :error, :request_id nil, :peer_id nil, :reason_uri "global.errors.authentication.failure", :reason "Unknown authentication method "} to local peer'
}
```
The `output` key contains a processed message for direct output where the rest of the keys hold the details.

Example:

```json
{
    "glue": ...,
    "gateway": {
        "logging": {
            "level": "trace",
            "appender": {
                "location": "./gwLogAppender.js",
                "name": "log"
            }
        }
    }
}
```

```javascript
// ./gwLogAppender.js
self.log = (logInfo) => {
    // your custom log logic here
}
```
#######################################
You can get detailed information on what the gateway is from the [**Glue42 Core environment**](../../../what-is-glue42-core/core-concepts/environment/index.html) section. Here we will explain how you can extend it's logging functionality. Normally this is something you do not need to to, because the gateway logs internal messages to and from [**Clients**](../../../what-is-glue42-core/core-concepts/glue42-client/index.html), but obtaining this information could be useful for creating bug issues in [**our GitHub**](https://github.com/Glue42/core/issues) or just to get a better understanding on what's going on behind the scenes.

First, you need to create an `appender`. This is a simple JS function which takes as a single argument the log info object and does with it whatever you need - log to the console, send to a REST server, etc. To do that, go to your application's root and create:

```javascript
// ./gwLogAppender.js
self.myLog = (logInfo) => {
    // your log logic here
};
```

Next, go to `glue.config.dev.json` to tell the CLI that there is an appender:

```json
{
    // some other stuff
    "glueAssets": {
        "gateway":{
            "gwLogAppender": "./gwLogAppender.js"
        }
    }
    // some other stuff
}
```

Finally go to `glue.config.json` to tell the runtime [**Environment**](../../../what-is-glue42-core/core-concepts/environment/index.html), what there is a custom appender:

```json
{
    // some other stuff
    "gateway":{
        "logging": {
            "appender": {
                "name": "myLog", // notice that this is the name of the JS function in ./gwLogAppender.js,
                "location": "./gwLogAppender.js"
            }
        }
    }
    // some other stuff
}
```

Now, when you `gluec serve`, the appender will be hosted and it will be detected by the runtime [**Environment**](../../../what-is-glue42-core/core-concepts/environment/index.html).
