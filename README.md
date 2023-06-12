# Vue 3 + Vite

Esta plantilla te ayudará a comenzar a desarrollar con Vue 3 y Vite. La plantilla utiliza los SFC (Componentes de Archivo Único) con `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) puedes consultar la documentación sobre script setup para obtener más información..

## Pasos para correr el proyecto

#### instalar los paquetes

```bash
npm install
```

#### Iniciar el proyecto

```bash
npm run dev
```

#### Salida del proyecto

```url
 http://localhost:8080
```

## Configuración recomendada del IDE

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Características

- Vue 3 con Vite
- Consumo de una API (https://200.105.154.18:5901/api/Alumnos) en HelloWorld.vue
- Consumo de una API (https://200.105.154.18:5901/api/Alumnos/{codigo}) en VerDatos.vue
- Actualización de datos utilizando el método PUT (https://200.105.154.18:5901/api/Alumnos/{id})

## Consumo de Microservicios

Esta plantilla demuestra el consumo de microservicios para obtener y actualizar datos. Muestra cómo Vue 3 y Vite pueden interactuar con una API externa, permitiéndote obtener datos y actualizarlos utilizando diferentes métodos HTTP.
