# Información sobre las fuentes utilizadas en el proyecto Ambient.ar

Este directorio contiene las fuentes que se utilizan en el diseño de la página web Ambient.ar. A continuación se detallan las fuentes incluidas y su implementación.

## Fuentes Incluidas

1. **Nombre de la Fuente 1**
   - **Estilo:** Regular
   - **Peso:** 400
   - **Uso:** Títulos y texto principal.
   - **Licencia:** [Nombre de la Licencia](enlace-a-la-licencia)

2. **Nombre de la Fuente 2**
   - **Estilo:** Negrita
   - **Peso:** 700
   - **Uso:** Subtítulos y énfasis en el texto.
   - **Licencia:** [Nombre de la Licencia](enlace-a-la-licencia)

## Implementación

Para utilizar estas fuentes en el proyecto, asegúrate de incluirlas en tu archivo CSS de la siguiente manera:

```css
@font-face {
    font-family: 'Nombre de la Fuente 1';
    src: url('../fonts/nombre-de-la-fuente-1.woff2') format('woff2'),
         url('../fonts/nombre-de-la-fuente-1.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Nombre de la Fuente 2';
    src: url('../fonts/nombre-de-la-fuente-2.woff2') format('woff2'),
         url('../fonts/nombre-de-la-fuente-2.woff') format('woff');
    font-weight: 700;
    font-style: normal;
}
```

## Notas

- Asegúrate de respetar las licencias de las fuentes utilizadas.
- Para más detalles sobre la implementación y uso de las fuentes, consulta la documentación de cada fuente o el sitio web del proveedor.