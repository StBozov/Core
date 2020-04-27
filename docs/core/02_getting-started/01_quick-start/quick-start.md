## Guide

This guide will show you how to easily create, setup and run a simple **Glue42 Core** project.

1. Install the [**Glue42 CLI**](../../core-concepts/cli/index.html) globally with `npm`:

```javascript
npm install --global @glue42/cli-core
```

2. Create a root project directory with basic `index.html` and `index.js` files in it and reference the `index.js` file in the `index.html` file with a `<script>` tag.

Your project directory should look like something this:

```cmd
/myApp
    /index.html
    /index.js
```

Your `index.html` should contain this:

```html
<script src="index.js"></script>
```

3. Open a terminal inside the root directory and initiate **Glue42 Core**:

```javascript
gluec init
```

This will install the project dependencies and setup the necessary configuration files. 

4. In the `index.html` file, reference the latest [**Glue42 Web**](../../../reference/core/latest/glue42%20web/index.html) library module from `UNPKG`:

```html
<script src="https://unpkg.com/@glue42/web@latest/dist/web.umd.js"></script>
<script src="./index.js"></script>
```

5. Go to `./index.js` and declare a simple initialization function like so:

```javascript
const init = async () => {
    const glue = await window.GlueWeb();
    console.log(`Glue42 initialized successfully! Glue42 version: ${glue.version}`);
};

init().catch(console.error);
```

6. Configure the CLI to serve your application. Open the `glue.config.dev.json` file, located in the root project directory, and modify its `server.apps` property to look like this:

```json
{
    "glueAssets": ...,
    "server": {
        "settings": ...,
        "apps": [
            {
                "route": "/",
                "file": {
                    "path": "./"
                }
            }
        ],
        "sharedAssets": []
    }
}
```

7. Launch your app:

From the opened terminal in the root project directory, run:

```javascript
gluec serve
```

Now your app will be served at `http://localhost:4242` and if you open its console, you will see the printed message for successful initialization of Glue42.

## Next Steps

Congratulations, you now have your very first **Glue42 Core** app! 

For more information on setting up the [**Glue42 Environment**](../../core-concepts/environment/overview/index.html), see:
- [**Single Application**](../../core-concepts/environment/setup/index.html#single_application) setup section. 
- [**Multiple Application**](../../core-concepts/environment/setup/index.html#multiple_application) setup section.
- [**Manual**](../../core-concepts/environment/setup/index.html#manual) setup section.

For a more detailed instructions on how to set up your app, see the [JavaScript](../../core-concepts/glue42-client/javascript/index.html) and [**React**](../../core-concepts/glue42-client/react/index.html) guides.

For more information on the **Glue42 Web** library, see the [**Reference**](../../../reference/core/latest/glue42%20web/index.html) section.