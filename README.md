# Pre-Release FTW!
[![Build Status](https://img.shields.io/travis/guidesmiths/prerelease-ftw/master.svg)](https://travis-ci.org/guidesmiths/prerelease-ftw)

Generates a version with prerelease suffix based on the current package version and command line parameters. Useful when publishing modules from CI servers.

### Install
```
npm i --save-dev prerelease-ftw
```
### Script
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
```
### CI FTW!
```
npm npm version --no-git-tag-version version $(npm --silent run prerelease -- build ${BUILD_NUMBER})
```
