# LostSchool: Aplicación móvil para el registro, organización y consulta de objetos encontrados dentro de la institución educativa.

## Problema
Dentro de las instituciones educativas es común que los estudiantes pierdan objetos personales como cuadernos, mochilas, cartucheras, botellas de agua, prendas de vestir y otros materiales escolares. En muchas ocasiones, estos objetos son encontrados por otros estudiantes o docentes, pero no existe un medio digital organizado que permita informar sobre ellos y facilitar su identificación.

Actualmente, la información sobre los objetos encontrados puede comunicarse verbalmente o mediante avisos informales, lo que dificulta que todos los estudiantes conozcan qué objetos han sido encontrados y dónde pueden ubicarlos. Además, cuando no se cuenta con una descripción clara, resulta más complicado reconocer si un objeto pertenece a una persona.

Este problema puede ocasionar pérdida de tiempo, preocupación y dificultades para recuperar las pertenencias. Por esta razón, se plantea desarrollar una herramienta digital que permita organizar la información de los objetos encontrados y facilitar su consulta dentro del entorno escolar.

## Solución
LostSchool será una aplicación móvil diseñada para registrar, organizar y consultar objetos encontrados dentro de la institución educativa. Su propósito principal será ofrecer un espacio digital donde los estudiantes puedan conocer qué objetos han sido encontrados y revisar sus características para identificar sus pertenencias.

La aplicación permitirá ingresar información como el nombre del objeto, su categoría, una descripción y el lugar donde fue encontrado. Posteriormente, los registros aparecerán en una lista organizada desde la cual se podrá seleccionar cada objeto para consultar sus detalles.

Además, contará con almacenamiento local para conservar la información registrada incluso después de cerrar y volver a abrir la aplicación. De esta manera, LostSchool ofrecerá una alternativa sencilla y accesible para mejorar la comunicación sobre los objetos encontrados y facilitar su recuperación.

## Objetivos
- 1. Registrar 10 objetos de prueba y comprobar que los 10 se guarden correctamente.
- 2. Mostrar los 10 objetos registrados en la pantalla principal, sin omitir ninguno.
- 3. Presentar correctamente los 4 campos de información de cada objeto: nombre, categoría, descripción y lugar.
- 4. Clasificar los objetos utilizando exactamente 5 categorías disponibles.
- 5. Cerrar y abrir la aplicación para comprobar que se conservan los 10 registros.
- 6. Intentar guardar 4 registros incompletos, uno por cada campo obligatorio, y comprobar que ninguno se guarde.
- 7. Mostrar un mensaje de confirmación en el 100 % de los registros guardados correctamente.
- 8. Acceder al formulario de registro desde la pantalla principal mediante un botón visible.
- 9. Comprobar que cada nuevo registro aparezca en la lista principal sin necesidad de reiniciar la aplicación.
- 10. Seleccionar los 10 objetos registrados y comprobar que cada uno muestre sus datos completos.

## Habilidades
- 1. Programación de aplicaciones móviles con React Native y Expo.
- 2. Manejo del lenguaje TypeScript.
- 3. Diseño de interfaces gráficas sencillas y funcionales.
- 4. Creación y organización de componentes reutilizables.
- 5. Gestión y organización de datos.
- 6. Implementación de almacenamiento local.
- 7. Desarrollo y validación de formularios.
- 8. Resolución de errores durante la programación.
- 9. Trabajo en equipo y organización de tareas.
- 10. Realización de pruebas para comprobar el funcionamiento de una aplicación.

## Alcance inicial
La primera versión de LostSchool se centrará en las funciones esenciales para demostrar el funcionamiento de la aplicación sin incorporar características demasiado complejas.

Funciones principales:

Pantalla principal: mostrará el nombre de la aplicación y el acceso a los objetos registrados.

Registro de objetos: incluirá un formulario para ingresar el nombre, categoría, descripción y lugar donde fue encontrado cada objeto.

Clasificación: permitirá organizar los registros mediante cinco categorías: útiles escolares, prendas de vestir, accesorios, dispositivos y otros.

Lista de objetos: mostrará los objetos registrados con su información principal para facilitar su identificación.

Detalle del objeto: permitirá seleccionar un registro y consultar toda su información.

Almacenamiento local: conservará los datos registrados en el dispositivo para que sigan disponibles al volver a abrir la aplicación.

Validación de información: comprobará que los campos obligatorios estén completos antes de guardar un registro.

Mensajes de confirmación: informará al usuario cuando un objeto se haya registrado correctamente o cuando sea necesario completar algún dato.

## Restricciones
- La aplicación estará destinada principalmente al registro y consulta de objetos encontrados dentro de la institución educativa.
- La primera versión se desarrollará para dispositivos móviles.
- No incluirá creación de cuentas ni inicio de sesión.
- No permitirá enviar mensajes privados entre estudiantes.
- No contará con notificaciones automáticas sobre nuevos objetos registrados.
- No utilizará almacenamiento en la nube ni una base de datos externa.
- Los registros se conservarán mediante almacenamiento local en el dispositivo.
- No garantizará la recuperación de los objetos, ya que dependerá de su identificación y entrega dentro de la institución.
- No incluirá funciones de seguimiento o ubicación en tiempo real.
- El desarrollo se limitará a las funciones principales necesarias para demostrar el funcionamiento del proyecto.
