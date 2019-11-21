Sakura v2
====

[![Demo](https://shader.2heng.xin/badge/Demo-dev.2heng.xin-critical?logo=envato)](https://dev.2heng.xin) [![Build Status](https://dev.azure.com/moezhx/sakura2/_apis/build/status/mashirozx.sakura2?branchName=master)](https://dev.azure.com/moezhx/sakura2/_build/latest?definitionId=1&branchName=master) [![webpack](https://shader.2heng.xin/badge/webpack-4.41.2-9cf?logo=webpack)](https://webpack.js.org/) [![wordpress](https://shader.2heng.xin/badge/WordPress-5.3-blue?logo=wordpress)](https://wordpress.org) [![typescript](https://shader.2heng.xin/badge/TypeScript-3.6.4-294E80?logo=typescript)](https://www.typescriptlang.org/) [![php](https://shader.2heng.xin/badge/PHP-7.2-8892BF?logo=php)](https://www.php.net/)

__This is a developing repo, do not install in production environment!__

 ### Install
Clone/download/upload into `./wp-content/themes/`, then active theme in WordPress dashboard.

### Compile
```bash
npm i -g webpack-cli
npm install
# Dynamic comiple (--watch file changes)
npm run dev
# Build
npm run build
```

__Commands only tested on Linux__, but should also work on other platforms.

### Develop
__DO NOT MODIFY OR SAVE IN `./dist/`__, all your changes in this folder will be replaced after `npm run build`. Develop by changing files in `./src/`.

```
.
├── dist               // Compiled files (*DO NOT SAVE HERE*)
│   ├── css            // Stylesheets (compiled)
│   ├── js             // JavaScript (compiled)
│   ├── images         // Images (compiled)
│   ├── *.php          // PHP files (compiled)
│   ├── manifest.json  // Webpack manifest resources list
│   └── style.css      // Wordpress theme info
├── src                // Source code (develop inside this folder)
│   ├── scss           // CSS source code (SASS)
│   ├── ts             // JavaScript source code (TypeScript)
│   ├── images         // Images resources
│   ├── php            // PHP source code
│   └── package.less   // Wordpress theme info (header of style.css)
├── package.json       // npm configuration
├── tsconfig.json      // TypeScript configuration
└── webpack.config.js  // Webpack configuration
```

### Contribute
Pull requests welcomed. Comments and commit tags in English, please.

Git commit guidelines: [the Angular guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)

Code comment guidelines: [the TypeScript guidelines](https://github.com/unional/typescript-guidelines/blob/master/pages/default/draft/comments.md)

### Author
Mashiro <https://2heng.xin>

### License
MIT
