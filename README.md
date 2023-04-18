![Integration](https://github.com/Chi-HsienChang/jbrowse-plugin-linkout/workflows/Integration/badge.svg?branch=main)

# jbrowse-plugin-linkout

> The plugin that automatically adds link outs to the national center for biotechnology information
(NCBI) feature page if a feature has NCBI ids on JBrowse.

## Usage

#### Using in JBrowse 2 Web

Add to the "plugins" of your JBrowse Web config:

```json
{
  "plugins": [
    {
      "name": "Linkout",
      "url": "https://unpkg.com/jbrowse-plugin-linkout/dist/jbrowse-plugin-linkout.umd.production.min.js"
    }
  ]
}
```

#### Using in JBrowse 2 Desktop

1. Add to the "plugins" of your JBrowse Web config:

```json
{
  "plugins": [
    {
      "name": "Linkout",
      "url": "https://unpkg.com/jbrowse-plugin-linkout/dist/jbrowse-plugin-linkout.umd.production.min.js"
    }
  ]
}
```

2. Add to the "formatDetails" of your JBrowse Web config in "tracks":

```json
"tracks": [
    {
      "formatDetails": {
        "feature": "jexl: {dbxref:linkout({type_name_1: url_1}, feature)}",
        "subfeatures": "jexl: {dbxref:linkout({type_name_2: url_2, type_name_3: url_3}, feature)}"
      }
    }
  ]
```


**Note:** The current version of `jbrowse-plugin-template` is only compatible with "JBrowse 2" v2.0 or greater. If you are developing for a version of "JBrowse 2" v1.x, please consider upgrading, or you will have to manually downgrade the package dependencies in this template to ensure compatibility.

### Testing

To test your plugin, there are several commands available:

#### `yarn browse` or `npm run browse`

Launches your local JBrowse 2 build that is used for integration testing, with your
plugin already included in the configuration. Your plugin must also be running
(`yarn start` or `npm run start`).


### Publishing

Once you have developed your plugin, you can publish it to NPM. Remember to
remove `"private": true` from `package.json` before doing so.

If you are using `@jbrowse/react-linear-genome-view`, you can install the plugin
from NPM and use it there. If you are using JBrowse Web, after the plugin is
published to NPM, you can use [unpkg](https://unpkg.com/) to host plugin bundle.
A JBrowse Web config using this plugin would look like this:

```json
{
  "plugins": [
    {
      "name": "Linkout",
      "url": "https://unpkg.com/jbrowse-plugin-linkout/dist/jbrowse-plugin-linkout.umd.production.min.js"
    }
  ]
}
```

You can also use a specific version in unpkg, such as
`https://unpkg.com/jbrowse-plugin-linkout/dist/jbrowse-plugin-linkout.umd.production.min.js`

### TypeScript vs. JavaScript

This template is set up in such a way that you can use both TypeScript and
JavaScript for development. If using only JavaScript, you can change
`src/index.ts` to `src/index.js`. If using only TypeScript, you can remove
`"allowJs": true` from `tsconfig.json` and `"@babel/preset-react"` from
`.babelrc` (and from "devDependencies" in `package.json`).
