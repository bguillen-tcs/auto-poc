# Intuit Auto POC

## Description

This repository contains the code for the POC for `auto`.  It's essentially a monorepo with two packages, `auto-poc` (Which is components, more on this below) and communication; this POC shows what the implementation for using `auto` to cut a tag, create release and its notes, and publish the code look like.

See more on the tool [here](https://intuit.github.io/auto/index).

## Technical Setup

_Note: Before using `auto`, you must first set it up properly.  The points below build off of their documentation, which you could checkout [here](https://intuit.github.io/auto/docs/welcome/getting-started#configuration)._


* Setup consists of two parts -- initial manual release and secondly, commands
* Initial Manual Release: I had to create an initial tag and use that as the latest release – essentially, cut a manual first release; note that the tag needs v pre-pended to it, so v0.0.1
* Commands
  * npx auto init: This sets up the auto properties within package.json
  * npx auto create-labels: This creates the labels for the PR; you’ll need to create an access token so that the script can create labels for repository
    * It created the default: major, minor, patch, release, internal, documentation, tests, dependencies, performance

## Technical Design

* `./packages`
  * Directory that contains 2 packages -- components and communication to mirror Platform
    * Note on components: It's technically named `auto-poc`, but it is components.  It was originally named that way because it was at the root, but now, it lives in packages, since the repo was updated to be a monorepo.
  * Components: Contains simple components used to try out `auto`.  Notice, that since the components are written using TypeScript, they need to be compiled down before being published, at least for the sake of this POC.
  * Communication: Mock and super simple module with one file that contains some functions.
* `package.json` (mainly `lerna`)
  * As referenced in main point, `lerna` is used to manage the monorepo; essentially it is used to manage installations of packages and dependencies, but also, under the hood it is used for **publishing** the package.
    * It is what the documentation recommends, see more [here](https://intuit.github.io/auto/docs/generated/npm#monorepo-usage).
  * This also contains configuration for `auto` and the `publishConfig` for the packages.
  * `build-components`: Builds the component package before deploying by compiling from TS -> JS (more below).  It is used to test out, doesn't have to be this way.
* `workflow/release.yml`
  * This is the workflow that calls `auto` after building the components package via `npm run build-components`.
    * Remember, it runs the release process by `auto shipit`
      * This again handles the release, its notes, and the publishing of the package.
* `lerna.json`
  * Config file; the main part here is that `independent` is used, which means that the packages are versioned independently.  For more on that, please checkout the docs [here](https://github.com/lerna/lerna#how-it-works).

## Additional Notes

* Checkout the PRs to see the labels attached to them
* Also, checkout the workflow runs in Actions tab