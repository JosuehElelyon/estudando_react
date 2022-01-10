<!-- Logotipo -->
<div align="center">
  <img src="./Assets/ignite.png">
</div>

<!-- Title -->
<h1 align="center"> RocketSeat 🔥 Ignite ReactJS </h1>

<!-- Subtitle -->
<h2 align="center"> Módulo 1 - Configuração de ambiente, e entendendo conceitos de React e Typescript </h2>


<!-- Sobre o Projeto -->
## 🚀 Sobre o Projeto
Configuração de ambiente, e entendendo conceitos de React (Webpack, Babel) e Typescript.


Neste documento vamos aprender a criar um projeto ReactJS do 0, sem a necessidade de utilizar o **`create-react-app`.**

# Criando estrutura do projeto

- [ ]  Crie a pasta do seu projeto
- [ ]  No terminal, vá até a pasta do seu projeto usando `cd <Nome da pasta>`

Dentro da pasta do projeto execute o passo a passo abaixo:

- [ ]  `yarn init -y` ou `npm init -y`
- [ ]  `yarn add react` ou `npm install react —save`
- [ ]  `yarn add react-dom` ou `npm install react-dom —save`
- [ ]  Crie uma pasta chamada **src** e outra chamada **public** na raiz do projeto.
- [ ]  Crie um arquivo chamado **index.html** dentro da pasta public.
- [ ]  Dentro do **index.html** crie a estrutura html usando o **emmet** do **VSCode** ou utilize a estrutura abaixo:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nome do projeto</title> <!-- Nome que fica na aba do navegador -->
    </head>
    <body>

    </body>
    </html>
    ```


## Configurando o Babel

> O Babel é um compilador javascript! Ele converte o código javascript para uma maneira que os browsers conseguem entender.
> 
Para iniciar a configuração, no terminal, execute os seguintes comandos:

- [ ]  `yarn add @babel/core -D`  ou `npm install —save-dev @babel/core`
- [ ]  `yarn add @babel/cli -D` ou `npm install —save-dev @babel/cli`
- [ ]  `yarn add @babel/preset-env -D` ou `npm install —save-dev @babel/preset-env`
- [ ]  `yarn add @babel/preset-react -D` ou `npm install —save-dev @babel/preset-react`
- [ ]  Na raíz do projeto, crie um arquivo chamado **babel.config.js.**

### Até o momento, seu arquivo **package.json** deve está mais ou menos dessa forma:

```json
{
  "name": "Nome da pasta do projeto",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@babel/cli": "^7.13.10",
    "@babel/core": "^7.13.13",
    "@babel/preset-env": "^7.13.12",
    "@babel/preset-react": "^7.13.13"
  }
}
```

> OBS: As versões das dependências podem estar diferentes quando você for fazer este processo
> 
### Dentro do arquivo **babel.config.js** insira o seguinte código:

```jsx
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ]
};
```

> OPCIONAL: Caso deseje não utilizar a importação do react nos arquivos do projeto deixe o arquivo babel.config.js dessa maneira:
> 
```jsx
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic'
    }],
  ]
};
```

**@babel/preset-env:**  Utilizado como um "leitor" da plataforma, por exemplo: 

O nosso código React vai rodar em um navegador, ele vai identificar quais funcionalidades existem no nosso código que o browser ainda não entende e vai converter só o que o browser precisa entender. Ou seja, acaba evitando conversões desnecessárias baseado no local que o código está sendo executado.

**@babel/preset-react:** Utilizado para adicionar as novas funcionalidades do React nessa conversão, por exemplo:

Nós já sabemos que o Babel serve para converter o nosso código para um JS que vai ser entendido pelos diferentes tipos de browser existentes. Mas nós precisamos desta linha de comando e dependência, para que o Babel possa entender o nosso código React antes de fazer essa conversão.

## Configurando Webpack

> O webpack estipula uma série de configurações chamados Loaders que vão ensinar para a aplicação como tratar arquivos .jpg, .png, .sass, .hbs, dentre outros.
> 
Para iniciar a configuração, no terminal, execute os seguintes comandos:

- [ ]  `yarn add webpack -D`  ou `npm install —save-dev webpack`
- [ ]  `yarn add webpack-cli -D` ou `npm install —save-dev webpack-cli`
- [ ]  `yarn add html-webpack-plugin -D` ou `npm install —save-dev html-webpack-plugin`
- [ ]  `yarn add clean-webpack-plugin -D` ou `npm install —save-dev clean-webpack-plugin`
- [ ]  `yarn add webpack-dev-server -D` ou `npm install —save-dev webpack-dev-server`
- [ ]  `yarn add babel-loader -D` ou `npm install —save-dev babel-loader`
- [ ]  `yarn add style-loader -D` ou `npm install —save-dev style-loader`
- [ ]  `yarn add css-loader -D` ou `npm install —save-dev css-loader`
- [ ]  `yarn add file-loader -D` ou `npm install —save-dev file-loader`
- [ ]  Na raiz do projeto crie um arquivo chamado **webpack.config.js.**

> OPCIONAL: Caso queira utilizar Sass no seu projeto, instale as dependências abaixo:
> 
- [ ]  `yarn add node-sass -D` ou `npm install —safe-dev node-sass`
- [ ]  `yarn add sass-loader -D` ou `npm install —safe-dev sass-loader`
### Dentro do arquivo webpack.config.js insira o seguinte código:

```jsx
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// Variável para verificar o ambiente em que a aplicação está rodando ↓
const isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  // Diz qual o arquivo inicial da aplicação ↓
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  // Diz qual arquivo que vai ser gerado com webpack ↓
  output: {
    // Pasta onde o arquivo será gerado ↓
    path: path.resolve(__dirname, 'build'),
    // Nome do arquivo que será gerado ↓
    filename: 'bundle[fullhash].js',
  },
  resolve: {
    // Informa que o webpack pode ler esses 2 tipos de arquivo ↓
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
		port: 3000, // Coloque aqui a porta que desejar
  },
  plugins: [
		// injeta dinâmicamente a tag script no arquivo html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      inject: 'body',
    }),
    new CleanWebpackPlugin(),
  ]
  /**
   * Informa como a aplicação vai se comportar diante da 
   * importação de cada tipo de arquivo ↓
   */
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
			/**
		   * Caso você queira utilizar Sass no seu projeto
		   * substitua o objeto acima pelo objeto abaixo: ↓
		   */
			{
				// Caso queira usar a extenção .sass, basta substituir abaixo
        test: /\.scss$/, 
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
					'sass-loader'
        ]
      },
      {
				test: /.*\.(gif|png|jpe?g)$/i,
				use: {
					loader: 'file-loader',
				}
			}
    ]
  }
}
```

### Instale a dependência abaixo e adicione a propriedade scripts no arquivo package.json

- [ ]  `yarn add cross-env -D` ou `npm install —save-dev cross-env`

```json
{
  "name": "01-github-explorer",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "webpack serve",
    "build": "cross-env NODE_ENV=production webpack"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@babel/cli": "^7.13.10",
    "@babel/core": "^7.13.13",
    "@babel/preset-env": "^7.13.12",
    "@babel/preset-react": "^7.13.13",
    "babel-loader": "^8.2.2",
    "cross-env": "^7.0.3",
    "css-loader": "^5.2.0",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.3.1",
    "style-loader": "^2.0.0",
    "webpack": "^5.28.0",
    "webpack-cli": "^4.6.0",
    "webpack-dev-server": "^3.11.2"
  }
}
```

## Configurando o React

Ainda dentro da pasta do seu projeto, siga o passo a passo abaixo:

- [ ]  Crie um arquivo **index.jsx** dentro da pasta **src**
- [ ]  Crie um arquivo **App.jsx** dentro da pasta **src**.

Dentro do arquivo **index.html** que está na pasta **public**, insira o seguite código: 

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nome do projeto</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

Dentro do arquivo **App.jsx** que está na pasta **src**, insira o seguite código: 

```jsx
import React from 'react';
export function App() {
  return (
    <h1>Hello World</h1>
  );
}
```

Dentro do arquivo **index.jsx** que está na pasta **src**, insira o seguinte código: 

```jsx
import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
render(
  <App />,
  document.getElementById('root')
);
```

# Inserindo typescript no projeto

Siga o passo a passo abaixo para configurar o typescript na sua aplicação

- [ ]  `yarn add typescript -D` ou `npm install —save-dev typescript`
- [ ]  `yarn tsc —init` ou `yarn typescript —init`
- [ ]  `yarn add @babel/preset-typescript -D` ou `npm install —save-dev @babel/preset-typescript`

Após esse processo, será gerado um arquivo **tsconfig.json**

### Dentro do arquivo **tsconfig.json** insira as seguintes configurações:

```json
{
  "compilerOptions": {
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "jsx": "react-jsx",
    "noEmit": true,
    "strict": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

### Dentro do arquivo **babel.config.js** insira o seguinte código:

```jsx
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', {
      runtime: 'automatic'
    }],
  ]
};
```

### Dentro do arquivo **webpack.config.json** insira o seguinte código:

```jsx
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// Variável para verificar o ambiente em que a aplicação está rodando ↓
const isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  // Diz qual o arquivo inicial da aplicação ↓
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  // Diz qual arquivo que vai ser gerado com webpack ↓
  output: {
    // Pasta onde o arquivo será gerado ↓
    path: path.resolve(__dirname, 'dist'),
    // Nome do arquivo que será gerado ↓
    filename: 'bundle.js'
  },
  resolve: {
    // Informa que o webpack pode ler esses 4 tipos de arquivo ↓
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  /**
   * Informa como a aplicação vai se comportar diante da 
   * importação de cada tipo de arquivo ↓
   */
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean),
          }
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  }
}
```

- [ ]  `yarn add @types/react-dom -D` ou `npm install —save-dev @types/react-dom`

