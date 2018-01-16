# React Course

## Initial Setup

Eject Webpack

    npm run eject

Read the [Readme](create-react-app-readme.md) and follow the instructions up to 
(not including) adding Bootstrap.
    
Remove the call to `registerServiceWorker()` from [`src/index.js`](src/index.js).    
    

## First Component

Create the MovieList component.

Download the `movies/GET.json` mock data from [Github](https://github.com/sbaechler/movie-mock-data/blob/master/data/movies/GET.json)
and copy it into the `__fixtures__` folder.

Create the MovieListItem component.

Install Foundation

    yarn add foundation-sites 
    
Download the foundation settings file from 
[Zurb](https://foundation.zurb.com/sites/docs/sass.html#compiling-manually).    

Remove the existing css files and create a new index.scss and _app.scss file.
Add the following to the index.scss file:
    
    @import './settings';
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



## Testing with Jest

Install Enzyme and configure it according to the [Readme](create-react-app-readme.md#testing-components).

    yarn add enzyme enzyme-adapter-react-16 react-test-renderer
