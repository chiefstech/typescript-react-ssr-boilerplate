# Stack

### This boilerplate use the following tech stack:

- TypeScript, as the main language used
- Webpack, to bundle our source files
- Storybook, for component development
- React, to build our UI
- Redux, to manage the state of the app
- Express, as a simple server to render initial page
- Material UI, as a component library
- JSS, to style our components

# Installation

### With Yarn

```
$> yarn install
$> yarn build
$> yarn start
```

### With NPM

```
$> npm install
$> npm run build
$> npm run start
```

# Usage

Access the app at `localhost:5000`

### Typescript vscode settings

Ensure you have prettier installed globally `npm i -g prettier`

Install the following vscode prettier extension https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Add the following to your vscode settings to help out with IDE support for typescript

```
{
  "editor.formatOnSave": true,
  "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.configPath": ".prettierc.json",
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true
}
```

## Module alias

1. module-alias npm dependency and package.json \_moduleAliases defined
1. define `jsconfig.json` for vscode IDE intellisense and import resolution
1. define webpack resolve aliases
1. define tsconfig path aliases
1. define jest config aliases
1. define storybook webpack config aliases

## TODO

- [ ] add jest.js and tests
- [ ] add storybooks and stories
- [ ] add lint staged
- [x] add tsc check to precommit
- [ ] add cypress and tests
