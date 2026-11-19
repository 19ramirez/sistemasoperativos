# 🖥️ SO Visual

Página web didáctica e interactiva sobre **sistemas operativos**, basada en los [Apuntes de Sistemas Operativos de la ULL](https://ull-esit-sistemas-operativos.github.io/ssoo-apuntes/).

- **Tema destacado (⭐):** Servicios del sistema operativo → `servicios.html`
- **Temas de consulta:** Organización, Procesos, Memoria y Almacenamiento

## Tecnología elegida

**HTML + CSS + JavaScript sin librerías ni herramientas de construcción.**

- GitHub Pages sirve archivos estáticos: no hace falta compilar nada.
- Funciona con doble clic, sin instalar Node ni dependencias.
- Es fácil de editar: cada tema es un archivo `.html`.
- Las únicas cosas externas son las fuentes de Google Fonts. Sin internet se usan las fuentes del sistema.

## Estructura

```
sistemas-operativos-web/
├── index.html            Portada con tarjetas de los temas
├── servicios.html        ⭐ Tema destacado
├── organizacion.html     Tema de consulta
├── procesos.html         Tema de consulta
├── memoria.html          Tema de consulta
├── almacenamiento.html   Tema de consulta
├── css/style.css         Estilos compartidos (tema oscuro)
├── js/main.js            Tarjetas expandibles, chips y animaciones
├── js/servicios.js       Servicios, código y diagrama animado
└── README.md
```

## 1. Ver la página en tu ordenador

**Opción A: doble clic**

1. Abre la carpeta del proyecto.
2. Haz doble clic en `index.html`. Se abre en tu navegador.

**Opción B: Live Server en VS Code**

1. Abre la carpeta en VS Code: **Archivo → Abrir carpeta**.
2. Abre la pestaña de extensiones (`Ctrl+Shift+X`), busca **Live Server** (autor: Ritwick Dey) y pulsa **Instalar**.
3. Haz clic derecho sobre `index.html` → **Open with Live Server**.
4. Se abre `http://127.0.0.1:5500` y se recarga sola al guardar cambios.

## 2. Subir el proyecto a GitHub desde VS Code

Necesitas una cuenta en [github.com](https://github.com) y tener [Git](https://git-scm.com/downloads) instalado.

1. Abre la carpeta del proyecto en VS Code.
2. Abre **Control de código fuente** (`Ctrl+Shift+G`) y pulsa **Inicializar repositorio**.
3. Escribe un mensaje, por ejemplo `Primera versión`, y pulsa **Confirmar** (Commit). Si VS Code pregunta si quieres preparar todos los cambios, pulsa **Sí**.
4. Pulsa **Publicar rama** (Publish Branch).
5. Inicia sesión en GitHub cuando te lo pida y elige **Publicar en repositorio público**. Ponle un nombre, por ejemplo `sistemas-operativos-web`.

Con la terminal sería:

```bash
git init
git add .
git commit -m "Primera versión"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/sistemas-operativos-web.git
git push -u origin main
```

Para subir cambios después: en Control de código fuente, escribe un mensaje, pulsa **Confirmar** y luego **Sincronizar cambios**.

## 3. Publicar con GitHub Pages

1. En GitHub, abre tu repositorio.
2. Ve a **Settings → Pages**.
3. En **Build and deployment → Source** elige **Deploy from a branch**.
4. En **Branch** elige `main` y la carpeta `/ (root)`. Pulsa **Save**.
5. Espera 1–2 minutos y recarga. Aparece la dirección:

```
https://TU_USUARIO.github.io/sistemas-operativos-web/
```

Si ves un error 404, espera un poco más y comprueba que `index.html` está en la raíz del repositorio.

## 4. Guion para exponer en 4–5 minutos

Tema protagonista: **⭐ Servicios del sistema operativo**. Abre `servicios.html` antes de empezar y deja la portada en otra pestaña.

| Tiempo | Clic | Qué decir |
|---|---|---|
| 0:00–0:30 | Portada (`index.html`). Señala la tarjeta dorada y haz clic. | «Hay cuatro bloques de consulta y un tema destacado: los servicios del SO.» |
| 0:30–1:00 | Sin clics. Sube al título. | «Un programa no habla con el hardware: pide servicios al SO. Veremos cuáles son y qué camino recorre una petición.» |
| 1:00–1:35 | Ejemplo **Leer un archivo**. Clic en **▶ Reproducir**. | Narra los 8 pasos (dura unos 20 s): programa, librería, `syscall`, núcleo, hardware y vuelta. «La CPU pasa a modo núcleo y después regresa a modo usuario.» |
| 1:35–2:05 | Clic en **Reiniciar**, elige **Crear un proceso · fork()** y pulsa **Paso →** tres o cuatro veces. | «El mismo recorrido sirve para otros servicios: aquí el núcleo crea un proceso nuevo.» |
| 2:05–2:35 | Baja a la sección 2. Clic en los chips **Llamada al sistema**, **Librería estándar** y **API del sistema**. | «El programador usa la librería o la API; por debajo siempre hay una llamada al sistema.» |
| 2:35–3:05 | Sección 3. Abre la tarjeta **Operaciones de E/S**. | «Los programas no tocan el hardware. En UNIX el puerto serie se abre y se lee como un archivo.» Señala el código. |
| 3:05–3:35 | Cierra esa y abre **Detección de errores**. | «Si abro un archivo que no existe, el SO devuelve un error (`ENOENT`). Si accedo a memoria ilegal, envía una señal.» |
| 3:35–4:05 | Abre **Protección y seguridad**. | «El SO controla quién accede a cada recurso: `chmod` y `access`.» |
| 4:05–4:30 | Vuelve a la portada con el logo **SO Visual**. | «Los otros cuatro bloques están como consulta: procesos, memoria, almacenamiento y organización.» |
| 4:30–5:00 | Margen o preguntas. | Resumen: 8 servicios, una puerta común (la llamada al sistema) y protección mediante el modo dual. |

Consejos:

- Prueba el recorrido una vez antes: la animación avanza sola cada 2,4 s.
- Si vas justo de tiempo, quita la tarjeta de **Protección y seguridad**.
- Con `Ctrl` + rueda del ratón puedes ampliar la página para que se lea desde el fondo del aula.

## Fuentes y créditos

Contenido basado en los apuntes de Jesús Torres (Universidad de La Laguna), licencia [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es). Los ejemplos de código son ilustrativos, escritos en C para Linux/POSIX.
