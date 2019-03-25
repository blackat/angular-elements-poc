# Creation

ng new poc-elements

## Add Angular Elements API

ng add @angular/elements

This will add

- "@angular/elements": "^7.2.7", angular elements library
- "document-register-element": "^1.7.2" the document register polyfill

## Change app.mdoule.ts 

- add entryComponents property because we pass something dynamically
- ask the angular element api to create the component

### Comment the tag

Comment the tag to prevent people using the component directly

### Error HTML

- compilation target es2015
- install another polyfill, for instance:
  1. `@webcomponents/webcomponentsjs`
  2. `@webcomponents/custom-elements`

### Jargon

- angular elements is an API
- customElements API is a native browser API
- compile an angular component into an angular element

## Create Standalone Library

- remove `AppComponent` from NgModule: we are just interested in the Greeter component;
- remove `boostrap`;
- add `ngDoBootstrap()` to say the module bootstrap itself;
- remove all the files related to `app.component.*`

### Custom Build Process

- angular-cli has already configured the `build` process, it will produce the `dist` folder;
- we would like to concatenate all the file from the dist and have a single file that contains the definition of our custom component;
- run the batch command to build;
- run `npx live-server` demo
  - [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
  - [node](https://www.npmjs.com/package/node) to very easily try out node commands using different node versions, without having to use a version manager
- `--output-hashing` to attach and has to prevent browser cache issue

### ngx-build-plaus

An [extension of the Angular CLI](https://github.com/manfredsteyer/ngx-build-plus), one of its features is to create a single bundle for Angular Elements.

`ng add ngx-build-plus`

In the `angular.json` adds `"builder": "ngx-build-plus:build",` so the package can take the controll overthe build process.

Now we don't need anymore the concatenation because the new builder will do it.

Then add to the batch file `--single-bundle=true`, instead if you have multiple angular elements built in separate files you may not want to compile everything into a single bundle, but rather keep Angular core, RxJS etc externally. `ngx-build-plus` has an option to do that.

Pack into a single bundle, _remember_ to copy also `zone.js` if you use the component in a non-angular application.

## Input and Output

- inputs are managed by the `@Input` decorator

## React Test

`npx create-react-app poc-elements-react`

