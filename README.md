# vue-luciad-demo

This sample shows how to integrate LuciadRIA with VUE.
This sample code does not include a copy of LuciadRIA which is commercial software. 
You will need to acquire a copy of LuciadRIA from your local distributor.  For more information on how to acquire a LuciadRIA refer to www.luciad.com

## Build Setup

``` bash
# install dependencies
npm install

#The current package.json points to a luciadria api located at C:\Luciad\LuciadRIA_2018.1\web\luciad
#To modify this use [addap the path to the location of your LuciadRIA API]
npm install C:\Luciad\LuciadRIA_2018.1\web\luciad --save

# serve with hot reload at localhost:8080
npm start
[or]
npm run dev

# build for production with minification
set NODE_OPTIONS=--max-old-space-size=4096
npm run build

# build for production and view the bundle analyzer report
set NODE_OPTIONS=--max-old-space-size=4096
npm run build --report

This sample was created with VUE CLI

