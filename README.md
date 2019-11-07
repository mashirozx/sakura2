Sakura v2
====

[![Build Status](https://dev.azure.com/moezhx/sakura2/_apis/build/status/mashirozx.sakura2?branchName=master)](https://dev.azure.com/moezhx/sakura2/_build/latest?definitionId=1&branchName=master)

[Demo](https://mashirozx.github.io/sakura2/dist/)

 ### Install
Git Clone/download/upload into `./wp-content/themes/`, then active theme in WordPress dashboard.

### Development
__DO NOT MODIFY OR SAVE IN `./dist/`__, all your changes under this folder will be replaced after `npm run build`. Develop by changes files in `./src/`.

```bash
npm i -g webpack-cli
npm install
# Run dev server
npm start
# Build
npm run build
```

__Commands must run under Linux!__ Dev server on <http://localhost:8080/>, also host on your public IP, check firewall!

### Contribut
Won't merge any pull requests during `beta` stage.

[Private Notebook](./NOTES.md)