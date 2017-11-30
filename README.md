## Augusta CRM


Augusta CRM es un aplicación especializada para el sector de la lavandería. Aplicación javascript enpaquetada en [electron](https://github.com/electron/electron). El backend es una API REST en express con una base de datos mongodb, [aquí](https://github.com/eibol87/api-augusta) puedes ver el proyecto.

## Feactures

__Clientes__

Gestión de 2 tipos de clientes:

- Empresa: Clientes que tienes datos fiscales y dias de reparto
- Particulares: Clientes que no necesitan factura a nombre de empresa

__Artículos__

- Gestión de tarifas de precios. Una tarifa standard común con posibilidad de personalizarla por cliente.
 
- Buscador de artículos unificado, con una sola busqueda encontrar cualquier producto.

__Acciones__

- Registrar un nuevo articulo
- Finalizar un artículo
- Salir un artículo
- Facturar artículos

__Contabilidd__

- Historial de albaranes
- Página de cobros por cliente


muchas

## Demo
Versión MacOs: [Download](
https://drive.google.com/file/d/1Wm5nKamgWN5vBMi13-1GZTHu0dqJeymH/view?usp=sharing
).

Versión Linux: [Download](
https://drive.google.com/file/d/1Wm5nKamgWN5vBMi13-1GZTHu0dqJeymH/view?usp=sharing
).

Versión Windows: [Download](
https://drive.google.com/file/d/1Wm5nKamgWN5vBMi13-1GZTHu0dqJeymH/view?usp=sharing
).


Quickstart
----------

__Variables de entorno__:

Crear un archivo `.env.development` en la raiz del proyecto.

```sh
REACT_APP_API_SERVER=http://localhost:3000/
```

Crear un archivo `.env.production` en la raiz del proyecto.

```sh
REACT_APP_API_SERVER=URL_SERVER_PRODUCTION
```

__Iniciar proyecto__:


```sh
npm install
npm start
```



