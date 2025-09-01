# Apuntes de Clases: Angular

Este repositorio contiene apuntes de las clases de Angular, organizados por fechas.  
La idea es mantener un registro progresivo de lo aprendido, similar a un diario de estudio.

---

## Clase Angular - 01/09/2025

### React vs Angular
- No hay muchas diferencias entre frameworks como React y Angular en cuanto a propósito, pero sí en filosofía.
- **React**: ofrece libertad, flexibilidad y menor estructura.
- **Angular**: provee un marco más rígido y estructurado, sacrificando algo de libertad.

---

### Versiones y Cambios Importantes
- Angular tiene versiones muy específicas, pero **a partir de la v17 aparecen los cambios clave**.
- **Angular v17**:
  - Cambios en *change detection* sin **zone.js**.
  - Optimización de *bundles* → más livianos.
  - Mejor rendimiento que React.
  - Depuración más sencilla.
  - Introducción de un **scheduler dedicado**.
- **Angular v16**:
  - Introducción de **Signals**.

---

### Conceptos Clave
- **Bundle**: paquete generado al compilar.
- **Zone.js**: librería usada históricamente en el ciclo de detección de cambios.
- **Scheduler**: maneja la ejecución de tareas de cambio en Angular v17.
- **Signals**: introducidos en v16, relacionados con el nuevo modelo reactivo.

---

### Angular CLI y Proyecto
- Instalación y uso del CLI para crear proyectos.
- Estudio de la estructura del proyecto.
- Archivo `angular.json`:
  - Contiene la configuración del proyecto actual.
  - Es modificado a través del Angular CLI.

---

### Data Binding y Flujo de Datos
- **One Way Data Binding**: flujo unidireccional de datos entre componente y plantilla.
- **Two Way Data Binding**: sincronización entre componente y plantilla en ambas direcciones.
- **Binding de valores**:
  - `value="{{message}}"` → interpolación (string literal).
  - `[value]="message"` → enlace dinámico al valor de la variable.
- **ngModel**: facilita el *two way data binding*.

---

### Directivas en Angular
- Permiten añadir funcionalidad extra a los elementos del DOM.
- Tipos:
  - **De atributos**.
  - **Condicionales**.
  - **Estructurales**.
- Ejemplos:
  - Renderizado de listas con directivas (sin necesidad de `map` ni funciones de orden superior).
  - Uso de `*ngIf`, `else`, ciclos `*ngFor`, etc.
