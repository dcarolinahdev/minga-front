# Minga frontend

This is the frontend for project minga_pink_back, both projects made with **Reactjs**.

Current project is made with **Tailwindcss** and is based on components.


## How started this project?

    npm create vite@latest . -- --template

with this options

    React
    Javascript

Don't forget

    npm install
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

Then delete index.css content and copy/paste (this is the base):

``` javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Settings

Finally modify tailwind.config.js (this is the base)

``` javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: [
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {}
    },
    variants: {},
    plugins: []
}
```

If you need to create a new color or font family, you must write it in:

    tailwind.config.js/theme/extend/colors

Then you need to run:

    npm run build
