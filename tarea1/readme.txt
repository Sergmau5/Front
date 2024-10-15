Templates: 

1 HTML - home.html ---------------------------------------

Este código HTML crea una página web de bienvenida para una veterinaria, proporcionando información sobre sus servicios y acceso a otras secciones del sitio.

CSS: Incluye un archivo de estilos externo (stylehome.css) que contiene los estilos personalizados de la página.
Google Fonts: Carga la fuente Poppins desde Google Fonts, lo que añade un estilo uniforme y atractivo al texto.
Cuerpo del Documento (<body>):

Encabezado (<header>):
Navegación (<nav>): Incluye tres enlaces como botones que dirigen a otras páginas HTML:
Registro: Redirige a una página de registro.
Consulta: Dirige a una página donde el usuario puede realizar consultas.
Citas: Permite acceder a la sección de citas de la veterinaria.
Contenido Principal (<main>):
Imagen Principal: Incluye una imagen (dogge.webp) que actúa como imagen destacada en la página de bienvenida.
Descripción: Presenta un párrafo de bienvenida que explica el objetivo de la veterinaria, orientado a propietarios de mascotas. Detalla el propósito de la página como un espacio para encontrar productos y consejos para el cuidado de mascotas.
Sección de Servicios (<section class="services">):
Servicios Destacados: Esta sección muestra tres servicios específicos, cada uno dentro de un div .service-box que incluye:
Imagen: Una imagen representativa del servicio.
Título: Un título que describe el servicio.
Descripción: Un breve párrafo que explica en qué consiste el servicio.
Servicios Disponibles:
Bañar a tu mascota: Describe el servicio de baño profesional.
Vacunación de la mascota: Describe el servicio de vacunación para mantener saludable a la mascota.
Guardería para mascota: Explica el servicio de guardería para cuidar a las mascotas mientras los dueños están ocupados.



2 HTML - registro.html --------------------------------

Este código HTML genera una página de registro para usuarios y sus mascotas, organizada en secciones de entrada de datos. 

CSS: Importa un archivo de estilos externo (styleregistro.css) que define el aspecto visual de la página.
Google Fonts: Carga la fuente Poppins para una tipografía uniforme.
Script de JavaScript: Carga un archivo registro.js, que posiblemente contiene la función register_user() para manejar la acción del botón "Registrar".
Cuerpo del Documento (<body>):

Contenedor Principal (<div class="main-container">):

Encabezado de Bienvenida: Título destacado y mensaje de introducción para motivar al usuario a registrarse.
Contenedor del Formulario (<div class="form-container">):

Sección 1 - "Tus datos" (<div class="column">):
Entradas de Usuario:
Nombre: Campo de texto para el nombre del usuario, con un ícono de perfil.
Nro. de documento: Campo numérico para el documento de identificación, con un ícono de ID.
Teléfono de contacto: Campo numérico para el número de teléfono, con un ícono de teléfono.
Contraseña: Campo de contraseña, con un ícono numérico para seguridad.

Sección 2 - "Datos de tu mascota" (<div class="column">):
Entradas para la Mascota:
Nombre: Campo de texto para el nombre de la mascota, con un ícono de gato.
Tipo de Mascota: Selector desplegable con opciones predefinidas (Perro, Gato, Ave, Otro), con un ícono de mascota.
Edad: Campo numérico para la edad de la mascota.
Contenedor de Botones (<div class="button-container">):

Botón de Volver: Un enlace que redirige a la página de inicio (home.html).
Botón de Registrar: Un botón que llama a la función register_user() cuando se hace clic, permitiendo posiblemente el envío o la validación de los datos ingresados.



3 HTML - consulta.html --------------------------

Este código HTML crea una página de consulta de citas médicas para clientes registrados de una veterinaria.

CSS: Enlaza a un archivo externo de estilos (styleconsulta.css) para personalizar la apariencia de la página.
Google Fonts: Carga la fuente Poppins para un estilo visual uniforme.
Script de JavaScript: Enlaza un archivo de JavaScript (consulta.js) que posiblemente contiene la función redireccion() para manejar la consulta.
Cuerpo del Documento (<body>):

Contenedor Principal (<div class="main-container">):

Encabezado de Bienvenida: Muestra un título y subtítulo invitando a los clientes a consultar sus citas médicas.
Formulario de Consulta (<div class="form-container">):

Ingreso de Documento (<div class="column">)**:
Título: Texto que solicita el número de documento del usuario.
Entrada para Documento: Campo numérico donde el usuario puede ingresar su número de documento.
Razón de la Consulta: Un área de texto donde el usuario puede escribir la razón de su consulta.
Botón de Consultar: Llama a la función redireccion() al hacer clic, que probablemente redirige al usuario a la página de resultados de consulta o procesa la solicitud.
Botones de Navegación (<div class="button-container">):

Botón de Volver: Un enlace para regresar a la página principal (home.html).
Botón de Registro: Un enlace que lleva a la página de registro (registro.html) para usuarios nuevos que deseen registrarse.



4 HTML - citas.html --------------------------

Este código HTML crea una página que muestra un listado de citas para una veterinaria.

CSS: Enlaza un archivo de estilo externo (stylecitas.css) que define el diseño visual de la página.
Google Fonts: Importa la fuente Poppins para un estilo visual coherente.
Cuerpo del Documento (<body>):

Contenedor Principal (<div class="main-container">):
Título de la Página: Muestra un encabezado con el título "Listado de Citas" para indicar el propósito de la página.
Tabla de Listado de Citas (<table>):
La tabla contiene:
Encabezados de Columna (<th>): Cada columna tiene un encabezado que indica el tipo de datos: Nombre y Apellido, Cédula, Teléfono, Email, y Fecha y Hora de la cita.
Filas de Datos (<tr>): Cada fila representa una cita con detalles del cliente y la fecha y hora de la cita. Ejemplo: Juan Pérez tiene una cita el 15 de octubre de 2024 a las 10:00 AM.
Botón de Navegación (<div class="button-container">):
Enlace de Volver: Un enlace que lleva a la página principal (home.html) para regresar a la pantalla de inicio.
Este diseño de página permite visualizar en forma tabular la información de citas, facilitando la lectura rápida y ordenada de cada dato de contacto y cita.
