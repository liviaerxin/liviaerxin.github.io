https://stackoverflow.com/questions/52429984/docker-compose-build-environment-variable

use case:
because the frontend applications now always  are needed to build into the page app or static page app then run on the client side, if you want to use env variables to customize the app for different usage such as a different server address for dev and prod use, you can only use the env variables in the building stage. for quick spinning up the app, you shouldn't invoke building when every time running