# Idea Proyecto - Presentacion Seguros CBA

Proyecto web estatico listo para deploy en Vercel, con arquitectura modular para escalar funcionalidades sin volver a un unico archivo HTML.

## Estructura

- index.html: estructura visual principal y markup.
- assets/css/main.css: estilos propios (fondo, glassmorphism, animaciones, scrollbar).
- assets/js/main.js: punto de entrada del frontend.
- assets/js/data/component-data.js: datos de los componentes del diagrama interactivo.
- assets/js/modules/tabs.js: logica de tabs del bloque "Propuesta de Valor".
- assets/js/modules/component-explorer.js: logica del panel de detalles por componente.
- assets/js/modules/section-navigation.js: base para navegacion interna por secciones (preparado para extender).

## Despliegue en Vercel

No requiere build step. Vercel puede servirlo como sitio estatico directamente desde la raiz del repositorio.

## Como extender

1. Crear nuevas secciones en index.html con id unico.
2. Agregar triggers con data-go-to-section="id-de-seccion".
3. Agregar modulos nuevos en assets/js/modules y conectarlos desde assets/js/main.js.
4. Si una funcionalidad requiere datos, centralizarlos en assets/js/data.

## Convenciones sugeridas

- Mantener logica fuera de index.html.
- Evitar handlers inline (onclick/onmouseover).
- Reutilizar data attributes para interacciones desacopladas.
- Separar datos, comportamiento y presentacion.
