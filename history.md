# React Course

## Initial Setup

Eject Webpack

    npm run eject

Read the [Readme](create-react-app-readme.md) and follow the instructions up to 
(not including) adding Bootstrap.
    
Remove the call to `registerServiceWorker()` from [`src/index.js`](src/index.js).    
    

Install Foundation

    yarn add react-foundation 

Install Connect-API-mock

    yarn connect-api-mocker
    

## Testing with Jest

Install Enzyme and configure it according to the [Readme](create-react-app-readme.md#testing-components).

    yarn add enzyme enzyme-adapter-react-16 react-test-renderer
