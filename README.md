To run project:
    npm install - install dependencies
    npm run start - start webpack server

Once server is up, navigate to localhost:3000..

Package JSON overview:

scripts: custom commands that can be run via "npm run"
dependencies: dependencies that get packaged for production
    @angular/...: angular modules
    @angular/compiler: used for webpack compilation
    @angular/platform-browser: used to run webpack server
devDependencies: dependencies that are NOT packaged for production
    angular2-router-loader: used for webpack compilation
    angular2-template-loader: used for webpack compliation
    awesome-typescript-loader: used for webpack compilation
    css-loader:
    raw-loader:
    to-string-loader"
