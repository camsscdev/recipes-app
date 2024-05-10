Prueba Técnica Frontend Developer
Caso de Uso: aplicación de búsqueda de recetas de cocina.
Objetivo: Desarrollar una aplicación que permita a los usuarios visualizar y buscar recetas de
cocina utilizando la API de TheMealDB. La aplicación deberá permitir a los usuarios visualizar
recetas relacionadas a una categoría y/o buscar recetas por nombre, mostrar resultados
relevantes y acceder a detalles sobre los ingredientes y pasos para preparar la receta
seleccionada.
Requerimientos Técnicos:
● JavaScript y Angular:
○ Utilizar Angular para desarrollar los componentes de la interfaz de usuario.
○ Gestionar el estado de la aplicación de manera eficiente.
○ Utilizar componentes de AngularJS de manera efectiva para encapsular la
funcionalidad relacionada con las recetas.
○ Separar la lógica de negocio de la interfaz de usuario tanto como sea posible.
○ Aplicar buenas prácticas de organización del código.
● Consumo de API:
○ Utilizar la API de TheMealDB para obtener información sobre recetas.
○ Manejar errores y situaciones de carga de manera adecuada.
● CSS:
○ Utilizar CSS para estilizar la aplicación de manera efectiva.
Requisitos funcionales:
● Listado de recetas:
○ Implementar en la pantalla principal la opción de listar las recetas
relacionadas a una categoría seleccionada.
○ Por defecto los usuarios podrán ver la lista de recetas de la categoría de
postres “Desert”.
● Búsqueda de Recetas:
○ Implementar un campo de búsqueda que permita a los usuarios buscar
recetas por nombre.
○ Mostrar resultados de búsqueda relevantes a medida que el usuario escribe.
● Detalles de la Receta:
○ Al seleccionar una receta de los resultados de búsqueda o del listado inicial, el
usuario será redireccionado a una página de detalle con información
detallada como la lista de ingredientes y los pasos a seguir para preparar la
receta.
○ En la página de detalle los usuarios deben visualizar el nombre de la receta, la
categoría, el área, los ingredientes, las instrucciones y el video o imagen
disponible.
● Diseño Adaptativo:
○ Garantizar que la aplicación sea completamente funcional en dispositivos
móviles y de escritorio.
● Estilo y UX:
○ Aplicar estilos atractivos y coherentes en toda la aplicación.
○ Garantizar una experiencia de usuario consistente.
Entregables:

- Repositorio público en GitHub con el código fuente de la aplicación.
- Entregar instrucciones claras sobre cómo configurar y ejecutar la aplicación en el
  archivo readme del proyecto.
- Url de la aplicación desplegada en un servidor gratuito (Opcional).
  Consideraciones:
- Se alienta la implementación de detalles adicionales que demuestren habilidades
  creativas y conocimientos avanzados.
- Ten en cuenta que evaluaremos la calidad de tu código, la estructura del proyecto, el
  cumplimiento de los requisitos, entregables y la implementación de buenas prácticas
  de programación.
  Información Adicional:
  URL API: https://www.themealdb.com/api.php
  Endpoints:
- Listado de categorias: www.themealdb.com/api/json/v1/1/categories.php
- Filtrar por categoría: www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
- Buscar por nombre: www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
- Filtrar por primera letra: www.themealdb.com/api/json/v1/1/search.php?f=a
- Ver detalles por ID: www.themealdb.com/api/json/v1/1/lookup.php?i=52772
