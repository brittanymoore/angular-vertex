This is a seed project I created for Angular 2 & TypeScript. It's not very smart right now, but 
the goal is to establish a minimal skeleton that can be used for more complicated projects. I'm new
to Angular 2, so this is really just a sandbox.

There are currently three build modes - two of these are production, one that implements AOT and one that does not. I'm
curious how the two approaches will compare as this structure scales.

Future goals: backendless (mocked) development and unit testing integration

To run project:
    npm install - install dependencies
    npm run start - start webpack server

Once server is up, navigate to localhost:3000

There are three ways to run the project:

1) DEVELOPMENT mode: npm run start

2) PRODUCTION mode: npm run start:prod

3) PRODUCTION mode (AOT compile): npm run start:prod:aot

