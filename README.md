# Web App Pokemon

## Descripción

Esta aplicación web hecha en Lit js es un Pokedex que muestra la información de Pokemons y sus evoluciones. La finalidad de la realización de esta aplicación, es la de ensamblar componentes (de lógica y visuales) para dar vida a esta aplicación, todo bajo el enfoque de los Web Components nativos (en Vanijla js) como de la librería Lit js.

## Consideraciones

Para empezar debemos de abrir una terminal, abierto la terminal, lo segundo que haremos es verificar si tenemos instalado:

* **nodejs (cualquier version, pero si es de las mas recientes mejor (v16+))**, sino lo tenemos instalado, hay que hacer la instalacion (guiarse de la página oficial de nodejs)

Entonces, recordemos que en este repositorio existen dos carpetas:
* json-server
* pokemon-app

Seguido de esto, habría que clonar el repositorio para hacer lo siguiente.

### json-server

* Lo primero que haremos es instalar la dependencia **json-server**:
```sh
npm install -g json-server
```

* Finalizado la instalación, navegamos a nuestra carpeta json-server:
```sh
cd lit-pokemon/json-server
```

* Una vez adentro de la carpeta de json-server, procedemos a levantar nuestro servidor local con datos en duro:

```sh
json-server -w pokemon.json -p 3002
```

Con esto, tendremos nuestro servidor levantado.

### pokemon-app

Levantado nuestro servidor, lo que sigue es cambiarnos de carpeta para ir a pokemon-app, para esto podemos abrir una nueva terminal o abrir una nueva pestaña de nuestra terminal:

```sh
cd lit-pokemon/pokemon-app
```

* Una vez dentro de nuestra carpeta de la aplicación, toca instalar las dependencias del proyecto para que podamos levantarlo:

```sh
npm i
```

* Finalizado la instalación de dependencias, toca levantar nuestra app para que podamos verlo en nuestro navegador, para eso ejecutamos:

```sh
npm start
```

Y con esto nos va a abrir un navegador en una nueva pestaña la aplicación. Si no se abre de manera automática, podemos abrir nuestro navegador manualmente y pegamos la siguiente url:

```sh
http://localhost:3000
```

Y ya, estaremos viendo nuestro Pokedex.


