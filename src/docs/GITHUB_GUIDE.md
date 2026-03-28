# Guía de Mantenimiento y Control de Versiones (GitHub)

Esta guía detalla los pasos realizados para la transformación del proyecto y cómo realizar actualizaciones futuras de forma segura.

## 1. Resumen de Cambios Recientes
Hemos evolucionado el portafolio hacia un estándar de **"Consultoría de Élite"**:
- **Rediseño "Quiet Luxury"**: Implementación de una paleta Obsidian/Gold en la sección de Estudio.
- **Storytelling en Español**: Transformación de servicios técnicos en propuestas de valor narrativas.
- **Directorio Bespoke (/links)**: Creación de una landing page independiente para redes y servicios.
- **Localización Chilena**: Ajuste de términos corporativos (e.g., "Inversión Estimada (Neto)").

---

## 2. Cómo actualizar el proyecto en GitHub (Paso a Paso)

Si realizas cambios en el código y quieres que se guarden en la nube, sigue estos 3 pasos fundamentales en tu terminal:

### Paso 1: Preparar los archivos (Stage)
Escribe este comando para decirle a Git que quieres incluir todos los cambios realizados:
```bash
git add .
```
*(El punto `.` significa "todos los archivos modificados y nuevos").*

### Paso 2: Crear el registro (Commit)
Este paso crea un "punto de guardado" con una descripción de lo que hiciste. Sé detallado para que en el futuro sepas por qué cambiaste algo:
```bash
git commit -m "feat: descripción corta de la mejora" -m "- detalle de lo que cambió"
```

### Paso 3: Subir a Internet (Push)
Envía tus cambios locales al servidor de GitHub:
```bash
git push origin master
```
*(Nota: Tu rama principal es `master`).*

---

## 3. Estructura de Archivos Clave

Para que sepas dónde tocar en el futuro:

- **Servicios del Estudio**: `src/constants/studioData.tsx` (Aquí cambias los textos de cada servicio).
- **Directorio de Enlaces (/links)**: `src/constants/directoryData.ts` (Aquí añades o quitas tus redes sociales y certificados).
- **Estilos Globales**: `src/app/globals.css` (Aquí están las variables de color `--color-studio` oro).
- **Componentes de Lujo**: `src/components/studio/` (Tarjetas, Modales y Paneles).

---

## 4. Consejos de Oro
1.  **Prueba antes de subir**: Siempre ejecuta `npm run dev` para ver que todo se vea bien.
2.  **Commits pequeños**: Es mejor subir cambios pequeños frecuentemente que uno gigante después de un mes.
3.  **Mensajes claros**: Usa prefijos como `feat:` (nueva funcionalidad), `fix:` (error corregido) o `style:` (cambios estéticos).

---
*Compromiso con la excelencia técnica y estética.*
**Alex Silva Portfolio // 2026**
