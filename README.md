## The Truffle Suite Website

This is a Harp.js project. All content lives under the `_harp` subdirectory. Do not change **anything** in the
project root directory, as it will be overwritten by the compile step. 

## Development

Make sure you have run `npm install` in the `_harp` subdirectory to install all dependencies.

To run a local dev server, under the `_harp` subdirectory, run:

0. `npm run dev`


To compile the site, under the `_harp` subdirectory, run:

0. `npm run compile`

Running the compile step will refresh the compiled content in the project root directory. At this point you can commit
changes and push up to Github Pages and the site will live update.

## Contributing

**Please do not submit PRs with the compilation step run.** This generates un-necessarily large PRs which makes
assessing the changes difficult. Someone from the Truffle team will perform the compile & push step once
your PR has been accepted.
