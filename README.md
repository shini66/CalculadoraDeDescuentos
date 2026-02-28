# Documentación de instalación

Este documento explica cómo preparar y ejecutar el proyecto en un entorno local (Windows).

## Requisitos previos
- Node.js (recomendado >= 14) y `npm` instalados.
- Git (opcional, para clonar el repositorio).

## Pasos de instalación

1. Clonar el repositorio (si aplica):

```bash
git clone <REPO_URL>
cd proyect
```

2. Instalar dependencias:

```bash
npm install
```

3. (Opcional) Si necesitas reinstalar la CLI de Tailwind como dependencia de desarrollo:

```bash
npm install -D @tailwindcss/cli
```

## Scripts disponibles
El proyecto incluye los siguientes scripts en `package.json`:

- `npm run dev` — Ejecuta Tailwind en modo observación y compila `src/css/app.css` a `dist/style.css`:

```bash
npm run dev
# tailwindcss -i ./src/css/app.css -o ./dist/style.css --config tailwind.config.js --watch
```

- `npm run build` — Genera una versión minificada para producción:

```bash
npm run build
# tailwindcss -i ./src/css/app.css -o ./dist/style.css --config tailwind.config.js --minify
```

## Estructura de salida
- Los estilos generados se escriben en `dist/style.css`.
- Abre `src/index.html` o `index.html` (según tu flujo) para ver la aplicación en el navegador. Puedes usar una extensión como Live Server para servir los archivos estáticos.

## Notas para Windows / PowerShell
- Ejecuta los comandos anteriores en PowerShell o en la terminal que prefieras.
- Si `npm run dev` falla, verifica:
  - Versión de Node/npm con `node -v` y `npm -v`.
  - Que `src/css/app.css` existe en la ruta indicada.
  - Que `tailwind.config.js` esté presente en la raíz del proyecto.

## Dependencias relevantes
- `tailwindcss` y `@tailwindcss/cli` — Para compilar estilos.
- `postcss`, `autoprefixer` — Procesamiento de CSS.
- `sweetalert2` — Librería instalada para alertas (si se usa en el proyecto).

## Ejemplo rápido (comandos copiables)

```powershell
cd D:\Documentos\000Develop\proyect
npm install
npm run dev
```

## Problemas comunes
- Si hay errores relacionados con permisos en Windows, ejecuta la terminal como Administrador o ajusta la configuración de la carpeta.
- Si Tailwind no genera CSS, inspecciona las rutas de entrada/salida (`-i` y `-o`) en `package.json`.

---
Si quieres, puedo añadir estas instrucciones al `README.md` o traducirlas a otro formato (por ejemplo, español detallado o versión resumida para deployment). Dime qué prefieres.
