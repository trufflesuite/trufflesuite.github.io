## Truffle Suite website - http://truffleframework.com

This is a [Metalsmith](http://www.metalsmith.io/) project. All content lives under the `_site` subdirectory. Please do not change anything in the project root directory, as it will be overwritten by the compile step.

Much of the static build process is coded by hand, to reflect the previous build system, Harp.js. All of this is coded in a middleware-like structure in `_site/metalsmith.js`.

## Development

Make sure you have run `npm install` in the `_site` subdirectory to install all dependencies.

To run a local dev server, under the `_site` subdirectory, run:

```
npm run dev
```

To compile the site, under the `_site` subdirectory, run:

```
npm run compile
```

Running the compile step will refresh the compiled content in the project root directory. This step needs to be completed before changes will be shown on the live site.

## Contributing

We welcome all contributions, typo-corrections, and general feedback.

**We ask that you submit PRs containing only changes only within the `_site` subdirectory.** This means to edit the Markdown files only, not the built HTML. Someone from the Truffle team, when accepting the PR, will run the compilation step and update the HTML. Thank you!
