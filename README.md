Sakura v2
====

[![Build Status](https://dev.azure.com/moezhx/sakura2/_apis/build/status/mashirozx.sakura2?branchName=master)](https://dev.azure.com/moezhx/sakura2/_build/latest?definitionId=1&branchName=master)

[Demo](http://dev.2heng.xin/)

__This is a developing repo, do not install in production environment!__

 ### Install
Clone/download/upload into `./wp-content/themes/`, then active theme in WordPress dashboard.

### Development
__DO NOT MODIFY OR SAVE IN `./dist/`__, all your changes in this folder will be replaced after `npm run build`. Develop by changing files in `./src/`.


### Compile
```bash
npm i -g webpack-cli
npm install
# Dynamic comiple (--watch file changes)
npm run dev
# Build
npm run build
```

__Commands only tested on Linux__, but should also work in other platforms.

### Contribution
Won't merge any pull requests during `beta` stage.

[Private Notebook](./NOTES.md)
