# Notas

- Para usar SASS en react necesitas instalar node-sass
- En este Proyecto importamos los estilos scss en el index.js

## Enlaces

- [tutorial sass en react](https://www.youtube.com/watch?v=-nEOaWG0Jzk)
- [tutorial mas explicado con @use @forward](https://www.youtube.com/watch?v=9tmfuGsu99o)
- [tutorial file system sass (min-3)](https://www.youtube.com/watch?v=Upa_2O1BKSU)
- [Tutorial para SCSS en react, utilizado aqui](https://www.youtube.com/watch?v=-nEOaWG0Jzk&list=PLm_p5bVniKC7gj-jcHvxj28MSNynFEW2c&index=5)

## Dependencias

- npm install node-sass
- npm install react-redux
- npm install @reduxjs/toolkit react-redux

## Fallas

- react-rotuer-dom v5 no funciona con el modo stricto de react 18
- Redux tiene conflicto con react 18 para bajar la version de react usa

      ``` npm
      npm install react@17.0.0 react-dom@17.0.0
      ```

- redux tiene problemas con react 18, solución temporal
- [stackoverflow](https://stackoverflow.com/questions/70765276/react-18-doesnt-support-redux-toolkit-or-other-libraries-yet)
