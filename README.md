## API Documentation

Api server can be found in `server.js` file. You should not modify this file, only use it.

To run the server do:

> `$ node server.js`

Server will start listening on port `6010`.

The server has 2 endpoints:

`/articles/sports` - returns a list of articles from `sport` category

`/articles/fashion` - returns a list of articles from `fashion` category

To run client:

> `$ npm run dev`

To build client:

> `$ npm run build` - this will build app and put result into dist root directory

### Short description

App which displays list of articles, developed with react and sass as css preprocessor. For test purpose I've added @testing-library/react, I am more into behavioral plus visual rather unit testing. App use context api to store articles and current state of the application.
Files are organised mostly by feature. Although i was thinking about moving styles for components into global folder.

#### What to improve add in feature

-  Some cache mechanism for articles, with cache invalidation from server side. We cant cache article list forever, as long as app runs. This would lead to ou]t of date articles list for sure.
-  Messages system that informs user for eg. that something went wrong - server error, right now error is ignored
-  Service worker for stript/assets cache
-  Critical css
