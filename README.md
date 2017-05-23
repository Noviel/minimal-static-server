# minimal-static-server
Minimal static server with express

## Install

```sh
git clone git@github.com:Noviel/minimal-static-server.git my-app
cd my-app
npm install
```

## Usage

1. Place static content inside `static` folder.
2. `npm start`
3. Open `localhost:9002`

## Customize

Provide `NODE_IP` and `PORT` environmental variables to modify `ip` and `port` of the server.

On linux: `PORT=4200 NODE_IP=0.0.0.0 npm start`  
On Windows: `SET PORT=4200 && SET NODE_IP=0.0.0.0 && npm start`
