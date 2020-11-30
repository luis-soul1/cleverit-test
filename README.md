# Clever It Test - React/Nextjs
## Pasos para ejecutar

Este proyecto utiliza YARN como manejador de dependencias, por lo tanto para ejecutarlo se deben utilizar los siguientes scripts:

* __yarn__
> Se utiliza para instalar todas las dependencias necesarias del proyecto

* __yarn dev__
> Para correr el proyecto en ambiente de desarrollo

La razón por la cual decidí utilizar Nextjs es porque es una técnologia que me esta gustando bastante ya que tiene todo preconfigurado, su server side rendering y sus optimizaciones. También lo escogí ya que es uno de los plus del TEST.


----------------

## Folder Structure
La estructura de carpetas del proyecto es la recomendada por Nextjs, explico a continuación:

* __assets__

_Contiene los iconos utilizados en el proyecto._

* __components__

_Contiene todos los componentes del proyecto. Cada componente tiene un index.js junto a su archivo .js y scss. La razón de utilizar un index.js para exportar el componente es porque a futuro si los componentes crecen es mucho más fácil tener un componente padre y todas sus extensiones en una subcarpeta y sus trozos que lo componen. Adicionalmente, las rutas para importar los componentes quedan mucho más limpias. Esta práctica me gusta mucho y por eso decidí aplicarla aunque el proyecto sea pequeño._
* __pages__

_Contiene todas las páginas/vistas del sitio. Debido a que es un proyecto pequeño, solo se utilizó el index.js como única vista._

* __services__

_Contiene un archivo api.js con todos los metodos al endpoint de la API MOCK._

* __styles__

_Contiene todos los estilos globales de la aplicación, como resets y variables._


> El proyecto también posee un .env.development con la ruta de la API proporcionada por Nextjs con sus respectivos endpoints que consumen los de services/api.js
>> Se utilizó igualmente un jsconfig.json para setear un base url que ayuda a tener mas ordenado los paths en los imports

----
## Assets o Images
Se utilizaron solo SVG ya que me pareció inncesario incluir una librería completa de iconos para utilizar solo 2. Preferí buscar como SVG los necesarios e incluirlos en la carpeta assets para posteriormente usarlos.

---
## Styling
A pesar de tener conocimiento con librerias CSS como Bootstrap, Tailwind, Materialize, etc, preferí usar variables CSS y SASS para estilizar la interfaz a mano para evitar peso innecesario en un proyecto pequeño además de que SASS se encuentra como un plus en los requerimientos del TEST.

-----

## Testing
Lamentablemente no me alcanzó el tiempo y tampoco los conocimientos para añadir tests a la aplicación, es una área que me encuentro reforzando actualmente con cursos y que en un futuro deseo aplicar e ir mejorando.

----

## Git Commits
Me disculo de antemano por no realizar una sucesión de commits con el avance del proyecto, se que es una mala práctica y hubiese estado mejor ir avanzado poco a poco con los cambios.

----
Muchas gracias por permitirme realizar el test y formar parte de su proceso de selección. 

Espero que el proyecto sea de su agrado.

Saludos.

