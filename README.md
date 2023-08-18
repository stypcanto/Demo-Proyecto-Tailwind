## Crear una carpeta

## Dependencias

- `npm init -y`
- `npm install tailwindcss autoprefixer postcss-cli`

### Inicializamos las herramientas instaladas:

<!-- Genera archivo configuracion vacio de nombre tailwind.config.js -->

- `npx tailwindcss init`
<!-- Genera archivo configuracion completo -->
- `npx tailwindcss init tailwind.config.full.js --full`

<!-- Plugin recomendado para VSCode: Tailwind CSS IntelliSense -->

### Creamos archivo de configuracion postcss.config.js

<!-- Instrucciones archivo postcss.config.js: -->

- `touch postcss.config.js`
- `module.exports = { plugins: [require('tailwindcss'), require('autoprefixer')], };`

### Creacion archivo html y origen CSS

- `mkdir css`
- `touch css/tailwind.css`

### Configuracion archivo css/tailwind.css

- `@tailwind base; @tailwind components; @tailwind utilities;`

### Completamos script en package.json

- `"scripts": { "build": "postcss css/tailwind.css -o public/css/styles.css"`
<!-- Para autoregenerar el tailwind.css cuando creamos paquetes -->
- `"dev": "postcss css/tailwind.css -o public/css/styles.css --watch"}`

*******
El código unido debe quedar así:
    "scripts": {
        "build": "postcss css/tailwind.css -o public/css/styles.css",
        "dev": "postcss css/tailwind.css -o public/css/styles.css --watch"
      },

*******

<!-- Ejecutar para compilar -->
- `npm run dev`

### Inicializamos script para crear el css

<!-- genera una directorio css con su styels.css en la carpeta public -->

- `npm run build`

### Crea tu index.html
Agrega la ruta de CSS:     <link rel="stylesheet" href="./css/styles.css">

###Luego de editar el archivo HTML siempre hay que compilar con el comando:
npx tailwindcss-cli -i css/tailwind.css -o public/css/styles.css --watch 

![Captura de pantalla 2023-08-17 a la(s) 22 38 31](https://github.com/stypcanto/Test-Tailwind/assets/80213508/541ef748-1647-4feb-a2a8-736e7f0fe540)



OJO, la compilación debe ser desde la carpeta raíz, no puede ser desde public tampoco desde CSS
