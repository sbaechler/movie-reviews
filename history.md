# React Course

## Hello World

Install create-react-app if you didn't already

    yarn global add create-react-app

Create a new App-Project

    create-react-app movie-reviews
    cd movie-reviews
    yarn start

Now open the folder in your favourite IDE or editor and open App.js in the src/

Change "App-title" to Hello World

Changes should immediately be visible in the browser.

Now eject Webpack

    yarn run eject

Notice the changes that took place after ejecting the app.

Remove the call to `registerServiceWorker()` from [`src/index.js`](src/index.js).

Now let us prepare the workplace for developing the app.
Change the file structure of your /src according to the following.
Some of the folders are staying empty for the moment but we're going to use them soon.

    src/
      __fixtures__/
      assets/
        images/
          logo.svg
      components/
        App/
          App.js
          App.test.js
      config/
      state/
        movies/
        user/
      styles/
        App.css
        index.css


Do the refactoring needed to make the app work again.

Read the [Readme](create-react-app-readme.md) and follow the instructions up to
(not including) adding Bootstrap.

## First Component

Create the MovieList component.

Download the `movies/GET.json` mock data from [Github](https://github.com/sbaechler/movie-mock-data/blob/master/data/movies/GET.json)
and copy it into the `__fixtures__` folder.

Create the MovieListItem component.

Install Foundation

    yarn add foundation-sites

Download the foundation settings file from
[Zurb](https://foundation.zurb.com/sites/docs/sass.html#compiling-manually).

Remove the existing css files and create a new index.scss and \_app.scss file.
Add the following to the index.scss file:

@import './settings'; // ToDo @Simon where is this file from?
@import 'foundation';

@include foundation-everything;

@import './app';

Install the sass loader

    yarn add sass-loader node-sass

Open the webpack.config.dev and remove the configuration for pcss.
Update it with the following configuration:

    {
      test: /\.scss$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            sourceMap: true,
          },
        },
        {
          loader: require.resolve('sass-loader'),
          options: {
            includePaths: ['node_modules/foundation-sites/scss'],
            sourceMap: true,
          },
        },
      ],
    },

Update the import in index.js and restart Webpack.

We can use the new [xy-Grid of Foundation](https://foundation.zurb.com/sites/docs/xy-grid.html).
Add the `grid-container` class to the `App` component and
the class `grid-x grid-margin-x grid-margin-y small-up-2 medium-up-4` to the
movie grid. The item needs the class `cell`.

## Excercise 1

### 1.1 Add the Redux state

Install redux

yarn add redux react-redux

Create the root reducer - a combination of the usersReducer and the movieReducer.

Create the user reducer with its initial state where the username is already filled in.

Create the user selector that exports the full user state.

Export the reducer and the selector in index.js.

Create the movies reducer with an empty initial state.

Create the movies selector that exports a list of movies in the order of displayList.

Add the imports to the root-reducer.

Create the store in state/index.js

Add the Provider to the index.js file in the ReactDOM.render() argument.

Create the `MOVIE_DATA_RECEIVED` action and export all actions in movies/index.

Create a new component `MovieListContainer` that renders a `<MovieList>`.
Connect the `MovieListContainer` to the store and pass in the `movies` list (using a selector)
and the `movieDataReceived` action as props.

Import the movieData fixture and trigger the movieDataReceived
event in `componentDidMount`.

Test in the browser. Check the Redux inspector tab. Add the `__REDUX_DEVTOOLS_EXTENSION__`
line as stated in the Redux docs that are linked from the inspector.

Update the movies-reducer so it can handle the `MOVIE_DATA_RECEIVED` action.
Convert the array into an object using Array.reduce(). Create the displayList
using Array.map().

Check the Redux inspector and the React inspector if everyting is working correctly.
