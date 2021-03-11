# primenumber

Este repositorio fue creado para responder al desafío técnico impuesto por la compañía para la posición de Full Stack Developer. 

El Desafio consiste en:
Realizar un algoritmo que imprima los números primos entre 2 y  un número dado, de forma descendente.
Por ejemplo dado el número 7 se debería imprimir   7,5,3,2
Por ejemplo dado el número 15 se debería imprimir  13,11,7,5,3,2
Esto debe venir en un proyecto NodeJS.
 
Criterios de evaluación:
- Proyecto en node (mandatorio)
- Buenas prácticas de desarrollo (mandatorio)
- pruebas unitarias (mandatorio)
- Validación de datos de entrada (opcional)
- Utilización de módulos npm (opcional)
- Dockerizacion del proyecto (opcional)

    • Subir a github y enviar la URL del repositorio para revisar el código
    • Si decides usar docker, URL de la imagen pública en Docker Hub

# branch basic
Esta rama contiene el proyecto resolviendo lo mínimo de lo solicitado.
Para ejecutar el proyecto, por ejemplo evaluando el número 11, debería ser así: node src/index.js 11

# branch withStructure
Esta rama contiene el proyecto antarior pero con estructura tal que cada capa se encargue de hacer su propio trabajo.
Para ejecutar el proyecto, por ejemplo evaluando el número 11, debería ser así: node src/index.js 11

# branch withUnitTest
Esta rama contiene el proyecto antarior pero añadiendo Unit Test con Mocha y Chai.
Para ejecutar las pruebas: npm run test
