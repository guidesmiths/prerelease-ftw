# prerelease-ftw
Generates a version with prerelease suffix based on the current package version and command line parameters.
[![Build Status](https://img.shields.io/travis/guidesmiths/prerelease-ftw/master.svg)](https://travis-ci.org/guidesmiths/prerelease-ftw)

## TL;DR
### Install
```
npm i --save-dev prerelease-ftw
```
### Add the following script to package.json
```json
{
  "scripts": {
    "prerelease": "prerelease"
  }
}
```
### Run
```
npm --silent version $(npm run prerelease -- build 20)
```
# prerelease-ftw
