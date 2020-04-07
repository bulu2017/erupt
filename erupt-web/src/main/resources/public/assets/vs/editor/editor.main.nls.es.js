/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.14.6(6c8f02b41db9ae5c4d15df767d47755e5c73b9d5)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.es", {
    "vs/base/browser/ui/actionbar/actionbar": ["{0} ({1})"],
    "vs/base/browser/ui/aria/aria": ["{0} (ocurrió de nuevo)", "{0} (occurred {1} times)"],
    "vs/base/browser/ui/findinput/findInput": ["entrada"],
    "vs/base/browser/ui/findinput/findInputCheckboxes": ["Coincidir mayúsculas y minúsculas", "Solo palabras completas", "Usar expresión regular"],
    "vs/base/browser/ui/inputbox/inputBox": ["Error: {0}", "Advertencia: {0}", "Información: {0}"],
    "vs/base/browser/ui/list/listWidget": ["{0}. Use the navigation keys to navigate."],
    "vs/base/browser/ui/menu/menu": ["{0} ({1})"],
    "vs/base/common/keybindingLabels": ["Ctrl", "Mayús", "Alt", "Windows", "Ctrl", "Mayús", "Alt", "Super", "Control", "Mayús", "Alt", "Comando", "Control", "Mayús", "Alt", "Windows", "Control", "Mayús", "Alt", "Super"],
    "vs/base/common/severity": ["Error", "Advertencia", "Información"],
    "vs/base/parts/quickopen/browser/quickOpenModel": ["{0}, selector", "selector"],
    "vs/base/parts/quickopen/browser/quickOpenWidget": ["Selector rápido. Escriba para restringir los resultados.", "Selector rápido", "{0} Results"],
    "vs/editor/browser/controller/coreCommands": ["&&Select All", "&&Undo", "&&Redo"],
    "vs/editor/browser/widget/codeEditorWidget": ["El número de cursores se ha limitado a {0}."],
    "vs/editor/browser/widget/diffEditorWidget": ["Los archivos no se pueden comparar porque uno de ellos es demasiado grande."],
    "vs/editor/browser/widget/diffReview": ["Cerrar", "sin líneas", "1 línea", "{0} líneas", "Diferencia {0} de {1}: original {2}, {3}, modificado {4}, {5}", "vacío", "original {0}, modificado {1}: {2}", "+ modificado {0}: {1}", "- original {0}: {1}", "Ir a la siguiente diferencia", "Ir a la diferencia anterior"],
    "vs/editor/common/config/commonEditorConfig": ["Editor", "Controla la familia de fuentes.", "Controla el grosor de la fuente.", "Controla el tamaño de fuente en píxeles.", "Controla la altura de línea. Utilice 0 para calcular el valor de lineHeight a partir de fontSize.", "Controla el espacio entre letras en pixels.", "Los números de línea no se muestran.", "Los números de línea se muestran como un número absoluto.", "Los números de línea se muestran como distancia en líneas a la posición del cursor.", "Los números de línea se muestran cada 10 líneas.", "Controla la visualización de los números de línea.", "Representar reglas verticales después de un cierto número de caracteres monoespacio. Usar multiples valores para multiples reglas. No se dibuja ninguna regla si la matriz esta vacía.", "Caracteres que se usarán como separadores de palabras al realizar operaciones o navegaciones relacionadas con palabras.", "El número de espacios a los que equivale una tabulación. Este valor se invalida según el contenido del archivo cuando `editor.detectIndentation` está activado.", 'Se esperaba "number". Tenga en cuenta que el ajuste "editor.detectIndentation" ha reemplazado al valor "auto".', 'Insertar espacios al presionar TAB. Este valor se invalida en función del contenido del archivo cuando "editor.detectIndentation" está activado.', 'Se esperaba "boolean". Tenga en cuenta que el ajuste "editor.detectIndentation" ha reemplazado al valor "auto".', "Al abrir un archivo, se detectarán `editor.tabSize` y `editor.insertSpaces` en función del contenido del archivo.", "Controla si las selecciones tienen esquinas redondeadas", "Controla si el editor se seguirá desplazando después de la última línea", "Controla el número de caracteres adicionales a partir del cual el editor se desplazará horizontalmente", "Controla si el editor se desplaza con una animación", "Controla si se muestra el minimapa", "Controla en qué lado se muestra el minimapa.", "Controla si el control deslizante del minimapa es ocultado automáticamente.", "Presentar los caracteres reales en una línea (por oposición a bloques de color)", "Limitar el ancho del minimapa para presentar como mucho un número de columnas determinado", "Controls whether the hover is shown.", "Time delay in milliseconds after which to the hover is shown.", "Controls whether the hover should remain visible when mouse is moved over it.", "Controla si se inicializa la cadena de búsqueda en Buscar widget en la selección del editor", "Controla si el indicador Buscar en selección se activa cuando se seleccionan varios caracteres o líneas de texto en el editor", "Controla si el widget de búsqueda debería leer o modificar el portapapeles de busqueda compartido en macOS", "Las líneas no se ajustarán nunca.", "Las líneas se ajustarán en el ancho de la ventanilla.", 'Las líneas se ajustarán en "editor.wordWrapColumn".', 'Las líneas se ajustarán al valor que sea inferior: el tamaño de la ventanilla o el valor de "editor.wordWrapColumn".', 'Controla cómo se deben ajustar las líneas. Pueden ser:\n - "off" (deshabilitar ajuste),\n - "on" (ajuste de ventanilla),\n - "wordWrapColumn" (ajustar en "editor.wordWrapColumn") o\n - "bounded" (ajustar en la parte mínima de la ventanilla y "editor.wordWrapColumn").', "Controls the wrapping column of the editor when `editor.wordWrap` is 'wordWrapColumn' or 'bounded'.", "No indentation. Wrapped lines begin at column 1.", "Wrapped lines get the same indentation as the parent.", "Wrapped lines get +1 indentation toward the parent.", "Wrapped lines get +2 indentation toward the parent.", "Controla el sangrado de las líneas ajustadas. Puede ser uno de 'none', ' same ', ' indent' o ' deepIndent '.", "Se utilizará un multiplicador en los eventos de desplazamiento de la rueda del mouse `deltaX` y `deltaY`", 'Se asigna a "Control" en Windows y Linux y a "Comando" en macOS.', 'Se asigna a "Alt" en Windows y Linux y a "Opción" en macOS.', 'El modificador que se usará para agregar varios cursores con el mouse. "ctrlCmd" se asigna a "Control" en Windows y Linux y a "Comando" en macOS. Los gestos del mouse "Ir a la definición" y "Abrir vínculo" se adaptarán de modo que no entren en conflicto con el modificador multicurso', "Combinar varios cursores cuando se solapan.", "Habilita sugerencias rápidas en las cadenas.", "Habilita sugerencias rápidas en los comentarios.", "Habilita sugerencias rápidas fuera de las cadenas y los comentarios.", "Controla si las sugerencias deben mostrarse automáticamente mientras se escribe", "Controla el retardo en ms tras el cual aparecerán sugerencias rápidas", "Habilita el desplegable que muestra documentación de los parámetros e información de los tipos mientras escribe", "Controla si el editor debe cerrar automáticamente los corchetes después de abrirlos", "Controla si el editor debe dar formato automáticamente a la línea después de escribirla", "Controla si el editor debe formatear automáticamente el contenido pegado. Debe haber disponible un formateador capaz de aplicar formato a un intervalo dentro de un documento.", "Controla si el editor debería ajustar automáticamente la sangría cuando los usuarios escriben, pegan o mueven líneas. Las reglas de sangría del idioma deben estar disponibles", "Controla si las sugerencias deben aparecer de forma automática al escribir caracteres desencadenadores", "Only accept a suggestion with `Enter` when it makes a textual change.", 'Controla si las sugerencias deben aceptarse en "Entrar" (además de "TAB"). Ayuda a evitar la ambigüedad entre insertar nuevas líneas o aceptar sugerencias. El valor "smart" significa que solo se acepta una sugerencia con Entrar cuando se realiza un cambio textual.', 'Controla si se deben aceptar sugerencias en los caracteres de confirmación. Por ejemplo, en Javascript, el punto y coma (";") puede ser un carácter de confirmación que acepta una sugerencia y escribe ese carácter.', "Mostrar sugerencias de fragmentos de código por encima de otras sugerencias.", "Mostrar sugerencias de fragmentos de código por debajo de otras sugerencias.", "Mostrar sugerencias de fragmentos de código con otras sugerencias.", "No mostrar sugerencias de fragmentos de código.", "Controla si se muestran los fragmentos de código con otras sugerencias y cómo se ordenan.", "Controla si al copiar sin selección se copia la línea actual.", "Habilita sugerencias basadas en palabras.", "Siempre seleccione la primera sugerencia.", "Seleccione sugerencias recientes a menos que escriba una nueva opción, por ejemplo ' Console. | -> Console. log ' porque ' log ' se ha completado recientemente.", "Seleccione sugerencias basadas en prefijos anteriores que han completado esas sugerencias, por ejemplo, ' Co-> Console ' y ' con-> const '.", "Controla cómo se preseleccionan las sugerencias cuando se muestra la lista,", "Tamaño de fuente para el widget de sugerencias", "Alto de línea para el widget de sugerencias", "Controls whether filtering and sorting suggestions accounts for small typos.", "Control whether an active snippet prevents quick suggestions.", "Controla si el editor debería destacar coincidencias similares a la selección", "Controla si el editor debe resaltar los símbolos semánticos.", "Controla el número de decoraciones que pueden aparecer en la misma posición en la regla de visión general", "Controla si debe dibujarse un borde alrededor de la regla de información general.", "Controla el estilo de animación del cursor.", "Ampliar la fuente del editor cuando se use la rueda del mouse mientras se presiona Ctrl", 'Controla el estilo del cursor. Los valores aceptados son "block", "block-outline", "line", "line-thin", "underline" y "underline-thin"', "Controla el ancho del cursor cuando editor.cursorStyle se establece a 'line'", "Habilita las ligaduras tipográficas.", "Controla si el cursor debe ocultarse en la regla de visión general.", "Render whitespace characters except for single spaces between words.", 'Controla cómo debe representar el editor los espacios en blanco. Las posibilidades son "none", "boundary" y "all". La opción "boundary" no representa los espacios individuales entre palabras.', "Controla si el editor debe representar caracteres de control", "Controla si el editor debe representar guías de sangría.", "Controls whether the editor should highlight the active indent guide.", "Highlights both the gutter and the current line.", 'Controla cómo el editor debe presentar el resaltado de línea. Las posibilidades son "ninguno", "margen", "línea" y "todo".', "Controla si el editor muestra CodeLens", "Controla si el editor tiene habilitado el plegado de código.", "Controla la forma en que se calculan las gamas plegables. Las selecciones ' auto' utilizan una estrategia de plegado específica del idioma, si está disponible. 'Sangría' obliga a utilizar la estrategia de plegado con sangría.", "Controla cuándo los controles de plegado del margen son ocultados automáticamente.", "Resaltar corchetes coincidentes cuando se seleccione uno de ellos.", "Controla si el editor debe representar el margen de glifo vertical. El margen de glifo se usa, principalmente, para depuración.", "La inserción y eliminación del espacio en blanco sigue a las tabulaciones.", "Quitar espacio en blanco final autoinsertado", "Mantiene abierto el editor interactivo incluso al hacer doble clic en su contenido o presionar Escape.", "Controla si el editor debe permitir mover selecciones mediante arrastrar y colocar.", "El editor usará API de plataforma para detectar cuándo está conectado un lector de pantalla.", "El editor se optimizará de forma permanente para su uso con un editor de pantalla.", "El editor nunca se optimizará para su uso con un lector de pantalla.", "Controla si el editor se debe ejecutar en un modo optimizado para lectores de pantalla.", "Controls fading out of unused code.", "Controla si el editor debe detectar enlaces y hacerlos cliqueables", "Controla si el editor debe representar el Selector de colores y los elementos Decorator de color en línea.", "Permite que el foco de acción del código", "¿organizar importaciones en guardar?", "Tipos de acción de código que se ejecutarán en guardar.", "Tiempo de espera para ejecutar acciones de código en guardar.", "Controla si el portapapeles principal de Linux debe admitirse.", "Controla si el editor de diferencias muestra las diferencias en paralelo o alineadas.", "Controla si el editor de diferencias muestra los cambios de espacio inicial o espacio final como diferencias.", "Manejo especial para archivos grandes para desactivar ciertas funciones de memoria intensiva.", "Controla si el editor de diff muestra indicadores +/- para cambios agregados/quitados"],
    "vs/editor/common/config/editorOptions": ["No se puede acceder al editor en este momento. Presione Alt+F1 para ver opciones.", "Contenido del editor"],
    "vs/editor/common/controller/cursor": ["Excepción inesperada al ejecutar el comando."],
    "vs/editor/common/modes/modesRegistry": ["Texto sin formato"],
    "vs/editor/common/services/modelServiceImpl": ["[{0}]\n{1}", "[{0}] {1}"],
    "vs/editor/common/view/editorColorRegistry": ["Color de fondo para la línea resaltada en la posición del cursor.", "Color de fondo del borde alrededor de la línea en la posición del cursor.", "Color de fondo de los rangos resaltados, como por ejemplo las características de abrir rápidamente y encontrar. El color no debe ser opaco para no ocultar las decoraciones subyacentes.", "Color de fondo del borde alrededor de los intervalos resaltados.", "Color del cursor del editor.", "Color de fondo del cursor de edición. Permite personalizar el color del caracter solapado por el bloque del cursor.", "Color de los caracteres de espacio en blanco del editor.", "Color de las guías de sangría del editor.", "Color de las guías de sangría activas del editor.", "Color de números de línea del editor.", "Color del número de línea activa en el editor", "ID es obsoleto. Usar en lugar 'editorLineNumber.activeForeground'. ", "Color del número de línea activa en el editor", "Color de las reglas del editor", "Color principal de lentes de código en el editor", "Color de fondo tras corchetes coincidentes", "Color de bloques con corchetes coincidentes", "Color del borde de la regla de visión general.", "Color de fondo del margen del editor. Este espacio contiene los márgenes de glifos y los números de línea.", "Color de primer plano de squigglies de error en el editor.", "Color de borde de squigglies de error en el editor.", "Color de primer plano de squigglies de advertencia en el editor.", "Color de borde de squigglies de advertencia en el editor.", "Color de primer plano de los subrayados ondulados informativos en el editor.", "Color del borde de los subrayados ondulados informativos en el editor.", "Color de primer plano de pista squigglies en el editor.", "Color de borde de pista squigglies en el editor.", "Border of unnecessary code in the editor.", "Opacity of unnecessary code in the editor.", "Color de marcador de regla de información general para errores. ", "Color de marcador de regla de información general para advertencias.", "Color de marcador de regla de información general para mensajes informativos. "],
    "vs/editor/contrib/bracketMatching/bracketMatching": ["Resumen color de marcador de regla para corchetes.", "Ir al corchete", "Seleccione esta opción para soporte"],
    "vs/editor/contrib/caretOperations/caretOperations": ["Mover símbolo de inserción a la izquierda", "Mover símbolo de inserción a la derecha"],
    "vs/editor/contrib/caretOperations/transpose": ["Transponer letras"],
    "vs/editor/contrib/clipboard/clipboard": ["Cortar", "Cu&&t", "Copiar", "&&Copy", "Pegar", "&&Paste", "Copiar con resaltado de sintaxis"],
    "vs/editor/contrib/codeAction/codeActionCommands": ["Mostrar correcciones ({0})", "Mostrar correcciones", "Corrección Rápida", "No hay acciones de código disponibles", "No hay acciones de código disponibles", "Refactorizar...", "No hay refactorizaciones disponibles", "Acción de Origen...", "No hay acciones de origen disponibles", "Organizar Importaciones", "No hay acciones de importación disponibles"],
    "vs/editor/contrib/comment/comment": ["Alternar comentario de línea", "&&Toggle Line Comment", "Agregar comentario de línea", "Quitar comentario de línea", "Alternar comentario de bloque", "Toggle &&Block Comment"],
    "vs/editor/contrib/contextmenu/contextmenu": ["Mostrar menú contextual del editor"],
    "vs/editor/contrib/cursorUndo/cursorUndo": ["Soft Undo"],
    "vs/editor/contrib/find/findController": ["Buscar", "&&Find", "Buscar con selección", "Buscar siguiente", "Buscar anterior", "Buscar selección siguiente", "Buscar selección anterior", "Reemplazar", "&&Replace"],
    "vs/editor/contrib/find/findWidget": ["Buscar", "Buscar", "Coincidencia anterior", "Coincidencia siguiente", "Buscar en selección", "Cerrar", "Reemplazar", "Reemplazar", "Reemplazar", "Reemplazar todo", "Alternar modo de reemplazar", "Sólo los primeros {0} resultados son resaltados, pero todas las operaciones de búsqueda trabajan en todo el texto.", "{0} de {1}", "Sin resultados"],
    "vs/editor/contrib/folding/folding": ["Desplegar", "Desplegar de forma recursiva", "Plegar", "Plegar de forma recursiva", "Cerrar todos los comentarios de bloqueo", "Plegar todas las regiones", "Desplegar Todas las Regiones", "Plegar todo", "Desplegar todo", "Nivel de plegamiento {0}"],
    "vs/editor/contrib/fontZoom/fontZoom": ["Acercarse a la tipografía del editor", "Alejarse de la tipografía del editor", "Restablecer alejamiento de la tipografía del editor"],
    "vs/editor/contrib/format/formatActions": ["1 edición de formato en la línea {0}", "{0} ediciones de formato en la línea {1}", "1 edición de formato entre las líneas {0} y {1}", "{0} ediciones de formato entre las líneas {1} y {2}", "No hay formateador para los archivos ' {0} ' instalados.", "Dar formato al documento", "No hay formateador de documentos para los archivos ' {0} ' instalados.", "Dar formato a la selección", "No hay formateador de selección para los archivos ' {0} ' instalados."],
    "vs/editor/contrib/goToDefinition/goToDefinitionCommands": ['No se encontró ninguna definición para "{0}"', "No se encontró ninguna definición", " – {0} definiciones", "Ir a definición", "Abrir definición en el lateral", "Ver la definición", 'No se encontró ninguna implementación para "{0}"', "No se encontró ninguna implementación", "{0} implementaciones", "Ir a implementación", "Inspeccionar implementación", 'No se encontró ninguna definición de tipo para "{0}"', "No se encontró ninguna definición de tipo", " – {0} definiciones de tipo", "Ir a la definición de tipo", "Inspeccionar definición de tipo"],
    "vs/editor/contrib/goToDefinition/goToDefinitionMouse": ["Haga clic para mostrar {0} definiciones."],
    "vs/editor/contrib/gotoError/gotoError": ["Ir al siguiente problema (Error, Advertencia, Información)", "Ir al problema anterior (Error, Advertencia, Información)", "Ir al siguiente problema en Archivos (Error, Advertencia, Información)", "Ir al problema anterior en Archivos (Error, Advertencia, Información)"],
    "vs/editor/contrib/gotoError/gotoErrorWidget": ["({0}/{1})", "Color de los errores del widget de navegación de marcadores del editor.", "Color de las advertencias del widget de navegación de marcadores del editor.", "Color del widget informativo marcador de navegación en el editor.", "Fondo del widget de navegación de marcadores del editor."],
    "vs/editor/contrib/hover/hover": ["Mostrar al mantener el puntero"],
    "vs/editor/contrib/hover/modesContentHover": ["Cargando..."],
    "vs/editor/contrib/inPlaceReplace/inPlaceReplace": ["Reemplazar con el valor anterior", "Reemplazar con el valor siguiente"],
    "vs/editor/contrib/linesOperations/linesOperations": ["Copiar línea arriba", "&&Copy Line Up", "Copiar línea abajo", "Co&&py Line Down", "Mover línea hacia arriba", "Mo&&ve Line Up", "Mover línea hacia abajo", "Move &&Line Down", "Ordenar líneas en orden ascendente", "Ordenar líneas en orden descendente", "Recortar espacio final", "Eliminar línea", "Sangría de línea", "Anular sangría de línea", "Insertar línea arriba", "Insertar línea debajo", "Eliminar todo a la izquierda", "Eliminar todo lo que está a la derecha", "Unir líneas", "Transponer caracteres alrededor del cursor", "Transformar a mayúsculas", "Transformar a minúsculas"],
    "vs/editor/contrib/links/links": ["Cmd + clic para abrir el vínculo", "Ctrl + clic para abrir el vínculo", "Cmd + click para ejecutar el comando", "Ctrl + click para ejecutar el comando", "Opción + clic para seguir el enlace", "Alt + clic para seguir el vínculo", "Opción + click para ejecutar el comando", "Alt + clic para ejecutar el comando", "No se pudo abrir este vínculo porque no tiene un formato correcto: {0}", "No se pudo abrir este vínculo porque falta el destino.", "Abrir vínculo"],
    "vs/editor/contrib/message/messageController": ["No se puede editar en un editor de sólo lectura"],
    "vs/editor/contrib/multicursor/multicursor": ["Agregar cursor arriba", "&&Add Cursor Above", "Agregar cursor debajo", "A&&dd Cursor Below", "Añadir cursores a finales de línea", "Add C&&ursors to Line Ends", "Agregar selección hasta la siguiente coincidencia de búsqueda", "Add &&Next Occurrence", "Agregar selección hasta la anterior coincidencia de búsqueda", "Add P&&revious Occurrence", "Mover última selección hasta la siguiente coincidencia de búsqueda", "Mover última selección hasta la anterior coincidencia de búsqueda", "Seleccionar todas las repeticiones de coincidencia de búsqueda", "Select All &&Occurrences", "Cambiar todas las ocurrencias"],
    "vs/editor/contrib/parameterHints/parameterHints": ["Sugerencias para parámetros Trigger"],
    "vs/editor/contrib/parameterHints/parameterHintsWidget": ["{0}, sugerencia"],
    "vs/editor/contrib/referenceSearch/peekViewWidget": ["Cerrar"],
    "vs/editor/contrib/referenceSearch/referenceSearch": [" – {0} referencias", "Buscar todas las referencias"],
    "vs/editor/contrib/referenceSearch/referencesController": ["Cargando..."],
    "vs/editor/contrib/referenceSearch/referencesModel": ["símbolo en {0} linea {1} en la columna {2}", "1 símbolo en {0}, ruta de acceso completa {1}", "{0} símbolos en {1}, ruta de acceso completa {2}", "No se encontraron resultados", "Encontró 1 símbolo en {0}", "Encontró {0} símbolos en {1}", "Encontró {0} símbolos en {1} archivos"],
    "vs/editor/contrib/referenceSearch/referencesWidget": ["Error al resolver el archivo.", "{0} referencias", "{0} referencia", "vista previa no disponible", "Referencias", "No hay resultados.", "Referencias", "Color de fondo del área de título de la vista de inspección.", "Color del título de la vista de inpección.", "Color de la información del título de la vista de inspección.", "Color de los bordes y la flecha de la vista de inspección.", "Color de fondo de la lista de resultados de vista de inspección.", "Color de primer plano de los nodos de inspección en la lista de resultados.", "Color de primer plano de los archivos de inspección en la lista de resultados.", "Color de fondo de la entrada seleccionada en la lista de resultados de vista de inspección.", "Color de primer plano de la entrada seleccionada en la lista de resultados de vista de inspección.", "Color de fondo del editor de vista de inspección.", "Color de fondo del margen en el editor de vista de inspección.", "Buscar coincidencia con el color de resaltado de la lista de resultados de vista de inspección.", "Buscar coincidencia del color de resultado del editor de vista de inspección.", "Hacer coincidir el borde resaltado en el editor de vista previa."],
    "vs/editor/contrib/rename/rename": ["No hay ningún resultado.", "Nombre cambiado correctamente de '{0}' a '{1}'. Resumen: {2}", "No se pudo cambiar el nombre.", "Cambiar el nombre del símbolo"],
    "vs/editor/contrib/rename/renameInputField": ["Cambie el nombre de la entrada. Escriba el nuevo nombre y presione Entrar para confirmar."],
    "vs/editor/contrib/smartSelect/smartSelect": ["Expandir selección", "&&Expand Selection", "Reducir selección", "&&Shrink Selection"],
    "vs/editor/contrib/snippet/snippetVariables": ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Noviembre", "Dic"],
    "vs/editor/contrib/suggest/suggestController": ["Aceptando '{0}' Insertó el siguente texto : {1}", "Sugerencias para Trigger"],
    "vs/editor/contrib/suggest/suggestWidget": ["Color de fondo del widget sugerido.", "Color de borde del widget sugerido.", "Color de primer plano del widget sugerido.", "Color de fondo de la entrada seleccionada del widget sugerido.", "Color del resaltado coincidido en el widget sugerido.", "Leer más...{0}", "{0}, sugerencia, con detalles", "{0}, sugerencia", "Leer menos...{0}", "Cargando...", "No hay sugerencias.", "{0}, aceptada", "{0}, sugerencia, con detalles", "{0}, sugerencia"],
    "vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode": ["Alternar tecla de tabulación para mover el punto de atención"],
    "vs/editor/contrib/wordHighlighter/wordHighlighter": ["Color de fondo de un símbolo durante el acceso de lectura, como leer una variable. El color no debe ser opaco para no ocultar las decoraciones subyacentes.", "Color de fondo de un símbolo durante el acceso de escritura, como escribir en una variable. El color no debe ser opaco para no ocultar las decoraciones subyacentes.", "Color de fondo de un símbolo durante el acceso de lectura; por ejemplo, cuando se lee una variable.", "Color de fondo de un símbolo durante el acceso de escritura; por ejemplo, cuando se escribe una variable.", "Destaca el color del marcador para los puntos del símbolo. El color no debe ser opaco para no ocultar las decoraciones subyacentes.", "Destaca el color del marcador de acceso de escritura. El color no debe ser opaco para no ocultar las decoraciones subyacentes.", "Ir al siguiente símbolo destacado", "Ir al símbolo destacado anterior"],
    "vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp": ["No selection", "Line {0}, Column {1} ({2} selected)", "Line {0}, Column {1}", "{0} selections ({1} characters selected)", "{0} selections", "Now changing the setting `accessibilitySupport` to 'on'.", "Now opening the Editor Accessibility documentation page.", " in a read-only pane of a diff editor.", " in a pane of a diff editor.", " in a read-only code editor", " in a code editor", "To configure the editor to be optimized for usage with a Screen Reader press Command+E now.", "To configure the editor to be optimized for usage with a Screen Reader press Control+E now.", "The editor is configured to be optimized for usage with a Screen Reader.", "The editor is configured to never be optimized for usage with a Screen Reader, which is not the case at this time.", "Pressing Tab in the current editor will move focus to the next focusable element. Toggle this behavior by pressing {0}.", "Pressing Tab in the current editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.", "Pressing Tab in the current editor will insert the tab character. Toggle this behavior by pressing {0}.", "Pressing Tab in the current editor will insert the tab character. The command {0} is currently not triggerable by a keybinding.", "Press Command+H now to open a browser window with more information related to editor accessibility.", "Press Control+H now to open a browser window with more information related to editor accessibility.", "You can dismiss this tooltip and return to the editor by pressing Escape or Shift+Escape.", "Show Accessibility Help"],
    "vs/editor/standalone/browser/inspectTokens/inspectTokens": ["Developer: Inspect Tokens"],
    "vs/editor/standalone/browser/quickOpen/gotoLine": ["Go to line {0} and character {1}", "Go to line {0}", "Type a line number between 1 and {0} to navigate to", "Type a character between 1 and {0} to navigate to", "Go to line {0}", "Type a line number, followed by an optional colon and a character number to navigate to", "Go to Line..."],
    "vs/editor/standalone/browser/quickOpen/quickCommand": ["{0}, commands", "Type the name of an action you want to execute", "Command Palette"],
    "vs/editor/standalone/browser/quickOpen/quickOutline": ["{0}, symbols", "Type the name of an identifier you wish to navigate to", "Go to Symbol...", "symbols ({0})", "modules ({0})", "classes ({0})", "interfaces ({0})", "methods ({0})", "functions ({0})", "properties ({0})", "variables ({0})", "variables ({0})", "constructors ({0})", "calls ({0})"],
    "vs/editor/standalone/browser/simpleServices": ["Made {0} edits in {1} files"],
    "vs/editor/standalone/browser/standaloneCodeEditor": ["Editor content", "Press Ctrl+F1 for Accessibility Options.", "Press Alt+F1 for Accessibility Options."],
    "vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast": ["Toggle High Contrast Theme"],
    "vs/platform/configuration/common/configurationRegistry": ["La configuración predeterminada se reemplaza", "Establecer los valores de configuración que se reemplazarán para el lenguaje {0}.", "Establecer los valores de configuración que se reemplazarán para un lenguaje.", 'No se puede registrar "{0}". Coincide con el patrón de propiedad \'\\\\[.*\\\\]$\' para describir la configuración del editor específica del lenguaje. Utilice la contribución "configurationDefaults".', 'No se puede registrar "{0}". Esta propiedad ya está registrada.'],
    "vs/platform/keybinding/common/abstractKeybindingService": ["Se presionó ({0}). Esperando la siguiente tecla...", "La combinación de teclas ({0}, {1}) no es ningún comando."],
    "vs/platform/list/browser/listService": ["Área de trabajo", 'Se asigna a "Control" en Windows y Linux y a "Comando" en macOS.', 'Se asigna a "Alt" en Windows y Linux y a "Opción" en macOS.', "El modificador que se usará para agregar un elemento en árboles y listas a una selección múltiple con el mouse (por ejemplo en el explorador, los editores abiertos y la vista SCM). ' ctrlCmd ' se asigna a ' control ' en Windows y Linux y a ' Command ' en macOS. Los gestos de ratón \"abrir a lado\", si se admiten, se adaptarán de tal manera que no estén en conflicto con el modificador multiselección.", "Controla cómo abrir elementos en árboles y listas con el ratón (si está soportado). Establecer en ' singleClick ' para abrir elementos con un solo clic del ratón y ' DoubleClick ' para abrir sólo a través del doble clic del ratón. Para los elementos padres con hijos en los árboles, este ajuste controlará si un solo clic expande el padre o un doble clic. Tenga en cuenta que algunos árboles y listas pueden optar por ignorar esta configuración si no es aplicable", "Controla el esplazamiento horizontal de los árboles en la mesa de trabajo."],
    "vs/platform/markers/common/markers": ["Error", "Advertencia", "Información"],
    "vs/platform/theme/common/colorRegistry": ["Colores usados en el área de trabajo.", "Color de primer plano general. Este color solo se usa si un componente no lo invalida.", "Color de primer plano general para los mensajes de erroe. Este color solo se usa si un componente no lo invalida.", "Color de borde de los elementos con foco. Este color solo se usa si un componente no lo invalida.", "Un borde adicional alrededor de los elementos para separarlos unos de otros y así mejorar el contraste.", "Un borde adicional alrededor de los elementos activos para separarlos unos de otros y así mejorar el contraste.", "Color de primer plano para los vínculos en el texto.", "Color de fondo para los bloques de código en el texto.", "Color de sombra de los widgets  dentro del editor, como buscar/reemplazar", "Fondo de cuadro de entrada.", "Primer plano de cuadro de entrada.", "Borde de cuadro de entrada.", "Color de borde de opciones activadas en campos de entrada.", "Color de fondo de validación de entrada para gravedad de información.", "Color de borde de validación de entrada para gravedad de información.", "Color de fondo de validación de entrada para gravedad de advertencia.", "Color de borde de validación de entrada para gravedad de advertencia.", "Color de fondo de validación de entrada para gravedad de error.", "Color de borde de valdación de entrada para gravedad de error.", "Color de fondo de la lista o el árbol del elemento con el foco cuando la lista o el árbol están activos. Una lista o un árbol tienen el foco del teclado cuando están activos, cuando están inactivos no.", "Color de fondo de la lista o el árbol del elemento con el foco cuando la lista o el árbol están activos. Una lista o un árbol tienen el foco del teclado cuando están activos, cuando están inactivos no.", "Color de fondo de la lista o el árbol del elemento seleccionado cuando la lista o el árbol están activos. Una lista o un árbol tienen el foco del teclado cuando están activos, cuando están inactivos no.", "Color de primer plano de la lista o el árbol del elemento con el foco cuando la lista o el árbol están activos. Una lista o un árbol tienen el foco del teclado cuando están activos, cuando están inactivos no.", "Color de fondo de la lista o el árbol del elemento seleccionado cuando la lista o el árbol están inactivos. Una lista o un árbol tienen el foco del teclado cuando están activos, cuando están inactivos no.", "Color de primer plano de la lista o el árbol del elemento con el foco cuando la lista o el árbol esta inactiva. Una lista o un árbol tiene el foco del teclado cuando está activo, cuando esta inactiva no.", "List/Tree background color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.", "Fondo de la lista o el árbol al mantener el mouse sobre los elementos.", "Color de primer plano de la lista o el árbol al pasar por encima de los elementos con el ratón.", "Fondo de arrastrar y colocar la lista o el árbol al mover los elementos con el mouse.", "Color de primer plano de la lista o el árbol de las coincidencias resaltadas al buscar dentro de la lista o el ábol.", "Selector de color rápido para la agrupación de etiquetas.", "Selector de color rápido para la agrupación de bordes.", "Color de fondo de la insignia. Las insignias son pequeñas etiquetas de información, por ejemplo los resultados de un número de resultados.", "Color de fondo de la insignia. Las insignias son pequeñas etiquetas de información, por ejemplo los resultados de un número de resultados.", "Sombra de la barra de desplazamiento indica que la vista se ha despazado.", "Color de fondo de control deslizante de barra de desplazamiento.", "Color de fondo de barra de desplazamiento cursor cuando se pasar sobre el control.", "Color de fondo de la barra de desplazamiento al hacer clic.", "Color de fondo para la barra de progreso que se puede mostrar para las operaciones de larga duración.", "Color de fondo del editor.", "Color de primer plano predeterminado del editor.", "Color de fondo del editor de widgets como buscar/reemplazar", "Color de borde de los widgets del editor. El color solo se usa si el widget elige tener un borde y no invalida el color.", "Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.", "Color de la selección del editor.", "Color del texto seleccionado para alto contraste.", "Color de la selección en un editor inactivo. El color no debe ser opaco para no ocultar las decoraciones subyacentes.", "Color para regiones con el mismo contenido que la selección. El color no debe ser opaco para no ocultar las decoraciones subyacentes.", "Color de borde de las regiones con el mismo contenido que la selección.", "Color de la coincidencia de búsqueda actual.", "Color de las otras coincidencias de búsqueda. El color no debe ser opaco para no ocultar las decoraciones subyacentes.", "Color de la gama que limita la búsqueda. El color no debe ser opaco para no ocultar las decoraciones subyacentes.", "Color de borde de la coincidencia de búsqueda actual.", "Color de borde de otra búsqueda que coincide.", "Color de borde de la gama que limita la búsqueda. El color no debe ser opaco para no ocultar las decoraciones subyacentes.", "Resalte debajo de la palabra para la cual se muestra un Hover. El color no debe ser opaco para no ocultar las decoraciones subyacentes.", "Color de fondo al mantener el puntero en el editor.", "Color del borde al mantener el puntero en el editor.", "Color de los vínculos activos.", "Color de fondo del texto que se insertó. El color no debe ser opaco para no ocultar las decoraciones subyacentes.", "Color de fondo del texto que se eliminó. El color no debe ser opaco para no ocultar las decoraciones subyacentes.", "Color de contorno para el texto insertado.", "Color de contorno para el texto quitado.", "Border color between the two text editors.", "Destaca el color del marcador de regla para las coincidencias de búsqueda. El color no debe ser opaco para no ocultar las decoraciones subyacentes.", "Destaca el color del marcador de regla para los puntos de selección . El color no debe ser opaco para no ocultar las decoraciones subyacentes."]
});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.es.js.map