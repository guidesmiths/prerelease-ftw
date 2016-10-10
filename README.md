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
npm --silent run prerelease -- build 20
```
### Output
```
3.2.0-build.20

### Bonus Points
npm version $(npm --silent run prerelease -- build 20)