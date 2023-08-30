# commitlint config for node projects

This package is used to force the standardisation of commits. 

[commitlint][https://commitlint.js.org/#/]  - a tool that checks and validates commit messages based on predefined rules. It can ensure that commit messages follow a specific format and style, usually using semantic conventions.

[commitzen][https://github.com/commitizen/cz-cli] - to present an interactive interface to guide the developer in choosing the commit type, scope, description and other information.

The commitlint configuration is based on [conventional commits][https://www.conventionalcommits.org/en/v1.0.0/].

Commitzen is configured to use the same configuration as commitlint via the [@commitlint/cz-commitlint][https://www.npmjs.com/package/@commitlint/cz-commitlint] package. This prevents possible configuration problems.

## Installing

1. In your project folder, run:

```
npm install --save-dev @magikbee/commitlint-config-magikbee @commitlint/cli@^17.7.1 @commitlint/config-conventional@^17.7.0 @commitlint/cz-commitlint@^17.7.1 commitizen@^4.3.0 husky@^8.0.3 inquirer@^8.2.6
```

2. Create (or update) a `commitlint.config.js` file in your project folder with the following content:

```js
module.exports = {
  extends: ['@magikbee/commitlint-config-magikbee']
};
```

3. Add commitizen config to package.json file

```json
"config": {
    "commitizen": {
      "path": "@commitlint/cz-commitlint"
    }
  }
```

4. Add script to package.json file to call commit helper

```json
"commit": "git-cz"
```

## Add husky

1. Install

```
npm install --save-dev husky@^8.0.3 
```

2. Activate hooks

```
npx husky install
```

3. Add hook (to run commitlint and check syntax before adding the commit)

```
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

4. Add hook (to use the commit helper when using git commit)

---
**NOTE**

It should not be used in conjunction with the standard version package.

---

```
npx husky add .husky/prepare-commit-msg "exec < /dev/tty && npx cz --hook || true"
```

5. To automatically have Git hooks enabled after install, edit package.json

```json
"scripts": {
    "postinstall": "husky install"
}
```

## Optional - Bump version, generate changelog, create final commit and create a tag 

1. Install [standard version](https://github.com/conventional-changelog/standard-version)

```
npm i --save-dev standard-version
```

2. Add an npm run script to your package.json

```json
{
  "scripts": {
    "release": "standard-version"
  }
}
```

Now you can use npm run release.

For your first release, simply do npm run release -- --first-release.

