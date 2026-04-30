    NebrijaSocial

Clon funcional de Twitter hecho con Next.js y la API de la práctica.

    Instalación y arranque
    
para empezar he instalado el next para nuestro proyecto mediante un npx 
npx create-next-app@latest WebPr3 
añadiendo su version con trypescript y react para poder trabajar como en clase

mediante este comando: npm install axios descargaremos axios y sus librearias para poder hacer las llamadas correspondientes

npm run dev

    Navegación

La app tiene cuatro páginas principales. 

El layout tiene un header fijo en todas las páginas con tres botones: uno para volver a la home, uno para ir a tu propio perfil y uno para cerrar sesión.

La página de login y registro es la única pública. Si intentas acceder a cualquier otra ruta sin token, el middleware de Next.js te redirige automáticamente al login. Una vez logueado, si intentas volver al login te redirige a la home.

Desde la home puedes ver todos los posts paginados de diez en diez, escribir un post nuevo, dar like o retweet a cualquier post, o hacer click en el contenido para ir al detalle del post. Si haces click en el nombre del autor te lleva a su perfil.

La página de detalle muestra el post completo con sus likes, retweets y comentarios, y tiene un formulario para comentar.

La página de perfil muestra el username, la bio, los seguidores y seguidos, un botón para seguir o dejar de seguir, y todos sus posts.

    Problemas que fui encontrando

El primero y más tonto fue el del login. Tardé bastante en darme cuenta de que estaba guardando la cookie con el nombre Authorization pero el middleware la buscaba como token. Con ese "bug" el middleware nunca encontraba el token y siempre redirigía al login aunque te hubieras logueado correctamente.

El registro también daba error 401 al principio porque el header x-nombre tenía un valor distinto al del username con el que me había registrado en la API. Una vez que lo unifiqué a "albertoprieto" funcionó.

Con la página de mi perfil el problema era que el header es un componente que vive en el layout, y al intentar llamar a la API desde ahí para obtener el id del usuario no funcionaba porque document.cookie no está disponible en el servidor. La solución fue guardar el userId directamente en una cookie al hacer login o registro, y leerlo desde ahí en el header sin necesidad de llamar a ningún endpoint.

Con los botones de like y retweet el problema era que al hacer click también se disparaba el evento del div padre que llevaba al detalle del post. Se solucionó con stopPropagation en los handlers de los botones.

Con el botón del nombre del autor pasó algo parecido, hacía stopPropagation pero igualmente acababa yendo a la página del post. Se arregló separando el click del nombre del click del contenido en divs distintos, en vez de poner todo dentro del mismo div jeje (fue un fallo bastante tonto).

    CSS

Para el diseño me inspiré en la estética de los monitores CRT de los años 90, las terminales de comandos antiguas y los primeros navegadores de internet. Busqué referencias en videos de YouTube sobre diseño retro y páginas con estética de ciber, y cogí ideas de varios ejemplos que fui encontrando. El efecto de scanlines lo hice con un elemento CSS encima de toda la página. Los colores van en verde fosforito sobre negro que es el clásico de las pantallas de ordenador de esa época. La verdad que me ha quedado una estetica quizas demasiada "oscura" pero preferia eso a algo super moderno y sobrestumilado.

//este seria mi readme hasta ahora :> vere si voy añadiendo algo mas que me haya dejado
