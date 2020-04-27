## Shared Contexts

A **Shared Context** is a named object (holding a `map` of `key`/`value` pairs) that stores cross application data. The context object can hold any cross-application data on your domain. Any application can update a context or subscribe for context update notifications (by using the name of the context). Apps can also react to context changes (by subscribing for context updates) or update the context at runtime.

The [Shared Contexts API](../../../reference/core/latest/shared%20contexts/index.html) offers a simple and effective solution for sharing data between the applications on the same domain. For instance, you have an application showing a list of clients (served at `/clients`) and an application showing a list of stocks (served at `/stocks`). You need your "Stocks" app to show all stocks by default, but if the "Clients" app is also opened (in a different window) and the user selects a client, then you want the "Stocks" app to only show stocks owned by the selected client. You can easily achieve this in a few simple steps by using the [Shared Contexts API](../../../reference/core/latest/shared%20contexts/index.html) API:

- instruct the "Clients" app to publish updates to a context object holding the `id` of the currently selected client;
- instruct the "Stocks" app to subscribe for updates of that same context object and specify how the "Stocks" app should handle the received data in order to update its current state;

*For detailed information on the Shared Contexts API, see the [**Shared Contexts**](../../../glue42-concepts/data-sharing-between-apps/shared-contexts/javascript/index.html) documentation.*