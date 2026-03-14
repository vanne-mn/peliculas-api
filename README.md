# Explicación del Proyecto

## Sistema de Gestión de Películas

El presente proyecto consiste en el desarrollo de una aplicación web para la gestión de información relacionada con películas. La aplicación fue desarrollada utilizando una arquitectura cliente-servidor, donde el backend expone una API REST encargada de gestionar los datos y el frontend permite visualizar y manipular dicha información a través de una interfaz web.

El objetivo principal del sistema es permitir la consulta y administración de diferentes elementos asociados a las películas, como por ejemplo los géneros. Para lograr esto, se implementaron servicios que permiten realizar operaciones CRUD (crear, leer, actualizar y eliminar registros) dentro de la base de datos.

El backend del sistema fue desarrollado utilizando *Node.js* y *Express*, los cuales permiten construir servicios web de manera eficiente y escalable. Estos servicios se encargan de procesar las solicitudes enviadas desde el cliente, interactuar con la base de datos y retornar la información correspondiente en formato JSON.

Para la persistencia de los datos se utilizó una base de datos *MySQL*, donde se almacenan los registros del sistema. El servidor establece la conexión con la base de datos y ejecuta las consultas necesarias para obtener o modificar la información.

Por otra parte, el frontend fue desarrollado utilizando *React*, una biblioteca de JavaScript que permite construir interfaces de usuario dinámicas y reutilizables. A través de componentes, el sistema organiza la visualización de la información y facilita la interacción del usuario con la aplicación.

La comunicación entre el frontend y el backend se realiza mediante solicitudes HTTP utilizando la librería *Axios*, la cual permite consumir los servicios REST expuestos por el servidor. De esta manera, el frontend puede obtener los datos almacenados en la base de datos y mostrarlos en la interfaz gráfica.

Dentro del sistema se implementó un módulo de gestión de géneros, donde se muestra una lista de los géneros disponibles en la base de datos. Esta información se presenta en forma de tabla dentro de la interfaz, permitiendo al usuario visualizar los registros existentes.

En términos de estructura, el proyecto se encuentra dividido en dos partes principales: el backend y el frontend. El backend contiene la lógica del servidor, las rutas de la API y la conexión con la base de datos, mientras que el frontend contiene los componentes de React, los servicios para consumir la API y la interfaz de usuario.

Finalmente, este proyecto permitió aplicar conocimientos relacionados con el desarrollo de aplicaciones web modernas, el uso de APIs REST, la conexión con bases de datos y la construcción de interfaces dinámicas mediante React. Además, permitió comprender la importancia de separar la lógica del servidor y la presentación de la información en el cliente, lo cual facilita el mantenimiento y escalabilidad de las aplicaciones web.
