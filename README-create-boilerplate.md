1. In terminal:

mkdir my-project
cd my-project
git init
git remote add origin .....
npm init
npm i -D webpack webpack-cli webpack-dev-server
npm i -D html-webpack-plugin
npm i -D copy-webpack-plugin
npm i -D css-loader style-loader mini-css-extract-plugin
npm i -D sass sass-loader
npm i -D babel-loader @babel/core @babel/preset-env core-js regenerator-runtime



2. Manually:
Copy from this folder the following files:
    - .gitignore
    - webpack.config.js
    - webpack.config.production.js





3. In package.json update "scripts", copying from "package.json" of this folder:
    - dev:server
    - dev:server-open
    - build


4.1 OPTIONAL: Only if using React
    4.1.1 Install babel preset for converting JSX to JS
        npm i -D @babel/presets-react
    4.1.2 Tell webpack to use it, uncommenting the line 64
        // Convert JSX to normal JS
        // "@babel/preset-react"

4.1 OPTIONAL: Only if using Pug 
    4.1.1 Install pug loader for webpack
        npm i -D @webdiscus/pug-loader
    4.1.2 Tell webpack to use it, uncommenting the lines 70-73
        // {
        //   test: /\.pug$/,
        //   loader: '@webdiscus/pug-loader',
        // },

4.1 OPTIONAL: Only if using Typescript
    4.1.1 Install typescript and typescript loader for webpack
        npm install --D typescript ts-loader
    4.1.2 Copy to your directory the 'tsconfig.json'
    4.1.3 Tell webpack to use it, uncommenting the lines 50-53
        // {
        //   test: /\.tsx?$/,
        //   use: 'ts-loader',
        //   exclude: /node_modules/,
        // },


5. In terminal:
git add .
git commit -m "Init"
git push -u origin master

6. Start developmnet by:
npm run dev:server-open

7. When ready to build static files:
npm run build