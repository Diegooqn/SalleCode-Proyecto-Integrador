const contenidoCurso = {
    js: {
        1: {
            titulo: "Introducción a JavaScript y Configuración:",
            descripcion: "<strong>Historia y uso de JavaScript :<strong> Explicación de cómo JavaScript ha evolucionado desde ser un simple lenguaje de scripting para el navegador hasta convertirse en uno de los lenguajes de programación más utilizados en el desarrollo web, tanto del lado del cliente como del servidor. <br><br> <strong>Configuración del entorno de desarrollo : <strong>Instrucciones para instalar editores de código como VS Code y la configuración básica para escribir y ejecutar código JavaScript en el navegador, utilizando la consola de desarrolladores."
        },
        2: {
            titulo: "Lección 1: Fundamentos de JavaScript",
            descripcion: "<strong>Variables, tipos de datos y operadores: <strong> Introducción a cómo declarar variables con var, let, y const. Explicación de los tipos de datos básicos como números, cadenas y booleanos, junto con operadores matemáticos, de comparación y lógicos. <br><br> <strong>Estructuras de control:<strong>condicionales y bucles : Explicación de las estructuras de control if, else, switch, junto con los bucles for, while, y do...whilepara controlar el flujo y repetición en el código."
        },
        3: {
            titulo: "Lección 2: Funciones y Alcance",
            descripcion: "<strong>Declaración y expresión de funciones:<strong> Diferencia entre declarar una función de forma tradicional y como una expresión anónima o nombrada. Introducción a los parámetros, argumentos y valores de retorno.  <br><br> <strong>Funciones de flecha y alcance:<strong>Explicación de las funciones flecha introducidas en ES6 y cómo simplifican la sintaxis. Se aborda también el concepto de (alcance) (alcance de variables) y cómo funciona en diferentes tipos de funciones."
        },
        4: {
            titulo: "Lección 3: Estructuras de Datos",
            descripcion: "<strong>Arrays y sus métodos:<strong> Explicación de los arrays como estructuras de datos, sus métodos comunes ( push, pop, map, filter) y cómo iterar sobre ellos.  <br><br> <strong>Objetos y manipulación:<strong>Introducción a los objetos como colecciones de pares clave-valor, cómo acceder y modificar sus propiedades, y la importancia de los objetos en la manipulación de datos complejos."
        },
        5: {
            titulo: "Lección 4: DOM y Eventos",
            descripcion: "<strong>Manipulación del DOM <strong> Qué es el Document Object Model (DOM)  y cómo se puede manipular el contenido de una página web mediante JavaScript. Uso de métodos como getElementById, querySelectorpara seleccionar y cambiar elementos HTML.<br><br> <strong>Manejo de eventos : <strong> Explicación de cómo interactuar con el usuario mediante eventos como click, mouseover, keydown. Uso de addEventListenerpara gestionar eventos y hacer páginas web interactivas."
        },
        6: {
            titulo: "Lección 5: Asincronía en JavaScript",
            descripcion: "<strong>Callbacks y Promises : <strong> Introducción a la programación asíncrona en JavaScript, comenzando con los callbacks y cómo gestionar múltiples operaciones asíncronas. Luego se introduce el concepto de Promesas, que simplifica la gestión de tareas asíncronas. <br><br> <strong>Async/Await :<strong> Explicación de cómo asyncy awaitpermiten escribir código asíncrono de manera más clara y estructurada, haciendo que el código parezca sincrónico."
        },
        7: {
            titulo: "Lección 6: ES6+ y Programación Orientada a Objetos",
            descripcion: "<strong>Características modernas de JavaScript: <strong> Introducción a las mejoras y características introducidas en ES6+, como lety const, desestructuración de arrays y objetos, parámetros por defecto y el operador spread/rest.<br><br> <strong>Clases y herencia:<strong>Introducción a la Programación Orientada a Objetos (POO) en JavaScript con las clases y la herencia. Cómo definir clases, crear instancias y reutilizar código mediante la herencia."
        },
        8: {
            titulo: "Lección 7: Manejo de Errores y Depuración",
            descripcion: "<strong>Try/Catch: <strong> Explicación de cómo gestionar errores en el código mediante los bloques tryy catch, lo que permite manejar excepciones sin interrumpir el flujo del programa.<br><br><strong>Herramientas de desarrollo del navegador:<strong> Uso de las herramientas de desarrollo en los navegadores (como Chrome DevTools) para depurar el código JavaScript, inspeccionar el DOM y analizar el rendimiento de la aplicación."
        },
        9: {
            titulo: "Proyecto Final",
            descripcion: "<strong>Aplicación web interactiva: <strong> Los estudiantes aplicarán los conceptos aprendidos para crear una pequeña aplicación web interactiva. El proyecto puede ser una calculadora, una lista de tareas o un juego simple, que combina el manejo del DOM, eventos y asincronía."
        },
        10: {
            titulo: "Proximos Pasos",
            descripcion: "<strong>Frameworks y bibliotecas:<strong> Introducción a frameworks y bibliotecas populares como React, Vue y Angular para desarrollar aplicaciones web más grandes y dinámicas. <br><br> <strong>Recomendaciones de documentación (MDN Web Docs), libros y plataformas de aprendizaje para que los estudiantes continúen su formación en JavaScript."
        }
    },

    py: {
        1: {
            titulo: "Introducción a Python",
            descripcion: "<strong>Introducción, instalación y configuración:</strong>Introduce Python como un lenguaje de programación versátil y accesible. Se guía a los estudiantes en la instalación de Python y un entorno de desarrollo como PyCharm o VS Code, y se configuran sus primeros proyectos.<br><br><strong>Tipos de datos, variables y operadores:</strong> Se enseñan los tipos de datos fundamentales (números, cadenas, booleanos) y cómo definir variables para almacenar información. También se cubren operadores aritméticos, lógicos y relacionales.<br><br><strong>Estructuras de control: condicionales y bucles:</strong>Explicación de cómo controlar el flujo del programa con estructuras como if, else, y elif, así como el uso de bucles for y while para realizar tareas repetitivas."
        },
        2: {
            titulo: "Lección 1: Funciones y Estructuras de Datos:",
            descripcion: "<strong>Definición y uso de funciones:</strong> Explicación de cómo crear funciones para modular el código, reutilizar lógica y mejorar la legibilidad. Se aborda la definición de funciones con def y la importancia de los parámetros y valores de retorno.<br><br><strong>Listas, tuplas, conjuntos y diccionarios: </strong>Introducción a las principales estructuras de datos en Python, su sintaxis y uso. Las listas y tuplas para colecciones ordenadas, los conjuntos para colecciones sin duplicados, y los diccionarios para pares clave-valor."
        },
        3: {
            titulo: "Lección 2: Manejo de Archivos y Excepciones:",
            descripcion: "<strong>Lectura y escritura de archivos:</strong>Cómo interactuar con archivos en Python, abriendo, leyendo y escribiendo datos. Se cubre el uso de los métodos open(), read(), write() y el manejo adecuado de archivos con el bloque with.<br><br><strong>Manejo de errores y excepciones:</strong> Introducción al manejo de errores con try, except, y finally, para escribir código robusto que gestione errores de manera efectiva sin que el programa se detenga inesperadamente..."
        },
        4: {
            titulo: "Lección 3: Programación Orientada a Objetos (POO)",
            descripcion: "Clases, objetos y herencia básica: Conceptos fundamentales de la POO en Python. Cómo crear clases y objetos, encapsular datos y métodos, y cómo reutilizar código mediante herencia para crear nuevas clases basadas en clases existentes."

        },
        5: {
            titulo: "Lección 4: Módulos y Librerías",
            descripcion: "<strong>Creación y uso de módulos:</strong>Explicación sobre cómo organizar el código en módulos reutilizables, cómo importar y utilizar módulos en otros programas con import y from.<br><br><strong>Introducción a librerías externas (numpy, pandas, matplotlib):</strong>Se presenta el uso básico de librerías populares en Python para trabajar con datos y gráficos. numpy para cálculos numéricos, pandas para manipulación de datos, y matplotlib para visualización gráfica."
        },
        6: {
            titulo: "Lección 5: Proyecto Final",
            descripcion: "<strong>Aplicación práctica de los conceptos aprendidos:</strong>Los estudiantes aplicarán todo lo aprendido en un proyecto práctico. Este puede ser un pequeño programa que integre la manipulación de datos, POO, manejo de archivos y uso de librerías externas."
        },
        7: {
            titulo: "Proximos Pasos",
            descripcion: "<strong>Documentación y plataformas de aprendizaje:</strong> Recomendaciones de recursos para profundizar en Python, como la documentación oficial de Python, y plataformas como Codecademy, freeCodeCamp o edX <br> Áreas de especialización en Python: Una vista de las diversas aplicaciones de Python, como desarrollo web, ciencia de datos, inteligencia artificial, automatización y más, para que los estudiantes puedan explorar diferentes campos."
        },    
    },

    Html: {
        1: {
            titulo: "Fundamentos de HTML",
            descripcion: "<strong>Definición y estructura básica<strong> (!DOCTYPE html), (html), (head,body).   <br><br> <strong>Elementos esenciales: <strong> Introducción (p) paraca (h1) a (h6) Para encabezado (div) y (span) para la estructura de la página."
        },
        2: {
            titulo: "Lección 1: Texto y Enlaces",
            descripcion: "<strong>Formato de texto:<strong> Uso(strong),(em),(br), (blockquote) y (code).  <br><br> <strong>Creación de hipervínculos:<strong> (a) para crear enlaces con el atributo href."
        },
        3: {
            titulo: "Lección 2: Multimedia y Contenido Incrustado",
            descripcion: "<strong>Imágenes y atributos:<strong> Uso de la etiqueta (img) para insertar imágenes en una página, y la importancia de los atributos (src), (alt) y (title) para mejorar la accesibilidad y la experiencia del usuario  <br><br> <strong>Audio, vídeo e iframes:<strong> (audio)(video)(iframe)para incrustar contenido multimedia."
        },
        4: {
            titulo: "Lección 3: Organización y Estructura",
            descripcion: "<strong>Listas y tablas: <strong>Creación(ol)) y(ul)), así como(table),(tr), `(th)y (td) para organizar contenido   (br)(br) <strong>Elementos semánticos:<strong>(header),(footer),(article), (section)."
        },
        5: {
            titulo: "Lección 4: Formularios e Interactividad",
            descripcion: "<strong>Controles de formulario: <strong> Uso de etiquetas (input),(textarea), (select), y (button) Para crear formularios.  <br><br> <strong> Validación básica: <strong> Uso de los atributos  (required),(pattern), (min) y (max)."
        },
        6: {
            titulo: "Lección 5: Accesibilidad y SEO",
            descripcion: "<strong>Prácticas de accesibilidad: <strong> bueno uso del articulo (alt),y los atributos (aria-*), para mejorar la accesibilidad.  <br><br> <strong>Optimización para buscadores: <strong> Uso adecuado de la etiqueta (meta) en el (head)` del documento."
        },
        7: {
            titulo: "Proyecto Final y Recursos",
            descripcion: "<strong>Creación de sitio web simple:<strong> Los estudiantes aplicarán los conceptos aprendidos para desarrollar un sitio web básico.  <br><br> <strong>Próximos pasos y recursos adicionales: <strong> Recursos adicionales como documentación (MDN Web Docs), tutoriales en línea y consejos para seguir aprendiendo sobre HTML, CSS y JavaScript para el desarrollo web completo."
        }
    }
};

// Función para cargar la lección seleccionada
function cargarLeccion(curso, leccionNumero) {
    const leccionContent = document.getElementById("lecciones-contenido");
    
    const cursoLeccion = contenidoCurso[curso];
    
    if (cursoLeccion && cursoLeccion[leccionNumero]) {
        const leccion = cursoLeccion[leccionNumero];
        leccionContent.innerHTML = `
            <h3>${leccion.titulo}</h3>
            <p>${leccion.descripcion}</p>
        `;
        // Guardar la lección actual y el curso en LocalStorage
        localStorage.setItem("currentLeccion", leccionNumero);
        localStorage.setItem("currentCurso", curso);
    } else {
        leccionContent.innerHTML = `<p>Lección no encontrada.</p>`;
    }
}

// Función para cargar la última lección visitada o la lección 1
function cargarUltimaLeccion() {
    const guardarCurso = localStorage.getItem("currentCurso") || 'js';
    const guardarLeccion = localStorage.getItem("currentLeccion");
    const leccionNumero = guardarLeccion ? parseInt(guardarLeccion) : 1;
    cargarLeccion(guardarCurso, leccionNumero);
}

// Ejecutar al cargar la página
window.onload = function() {
    cargarUltimaLeccion();
};
