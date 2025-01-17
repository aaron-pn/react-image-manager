# 📌 Resumen del Proyecto

Este proyecto es una aplicación diseñada para proporcionar un espacio donde los usuarios puedan iniciar sesión, administrar imágenes localmente y navegar a través de distintas vistas. La principal motivación detrás de esta aplicación es ofrecer una solución ligera y moderna para almacenar y gestionar imágenes sin necesidad de utilizar un servidor externo.

## 🎯 Problemas que resuelve

- Simplifica el acceso al contenido mediante un flujo de autenticación integrado.
- Permite a los usuarios mantener sus imágenes almacenadas localmente en su navegador.
- Proporciona una interfaz clara y sencilla para explorar las imágenes guardadas y realizar tareas comunes como agregar o eliminar contenido.

## 🚀 Tecnologías utilizadas

- **React (18.3.1):** Base de la interfaz de usuario.
- **TypeScript:** Garantiza un desarrollo más seguro y predecible.
- **React Hook Form y Yup:** Gestión de formularios y validación de datos.
- **Redux Toolkit y Redux Persist:** Manejo y persistencia del estado global.
- **Radix UI:** Componentes accesibles y estilizados, incluyendo:
  - AlertDialog
  - Dialog
  - Label
  - Toast
  - Tooltip
  - Separator
  - Slot
- **Lucide React:** Iconos ligeros y modernos.
- **Tailwind CSS:** Personalización rápida y estilos consistentes.
- **React Router Dom:** Navegación interna.
- **Shadcn:** Colección de componentes UI preconfigurados para una experiencia de desarrollo acelerada.
- **uuid:** Generación de identificadores únicos.
- **react-cookie:** Manejo sencillo de cookies.

---

## Como instalar y ejecutar el proyecto

1. Clona el repositorio en tu computadora.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias: `npm install`.
4. Ejecuta el siguiente comando para iniciar el servidor de desarrollo: `npm run dev`.
5. Abre tu navegador y navega a `http://localhost:3000` para ver el proyecto en acción.

## Puedes ver el proyecto en acción en este enlace: https://images-gallery-omega.vercel.app/login

# 💡 Posibles Mejoras

Este proyecto puede beneficiarse de las siguientes mejoras en su estructura y funcionalidad:

1. **Separar Componentes Reutilizables:**  
   Identificar los elementos de la interfaz que se utilizan en múltiples lugares (por ejemplo, botones, campos de entrada o mensajes de alerta) y trasladarlos a componentes dedicados. Esto mejorará la mantenibilidad y reducirá la duplicación de código.

2. **Organización de la Carpeta de Componentes:**  
   Dividir los componentes en directorios según su tipo (por ejemplo, "comunes", "custom", "navegación") para facilitar la búsqueda y el mantenimiento de archivos. Un ejemplo podría ser:

3. **Documentación Interna del Código:**  
   Agregar comentarios en los componentes más complejos, explicando su propósito, las props que aceptan y las dependencias externas que necesitan. Esto ayudará a futuros desarrolladores a entender rápidamente la lógica detrás de cada componente.

4. **Mejora de la Validación de Formulario:**  
   Revisar las validaciones actuales y, si es posible, agregar mensajes de error más claros o ayudas contextuales para el usuario. También considerar el uso de validaciones asíncronas para datos que requieran consultas externas.

5. **Optimización del Estado Global:**  
   Evaluar si algunos estados globales pueden ser manejados localmente o a través de contextos específicos. Reducir el alcance del estado global cuando sea posible mejora la claridad y reduce la carga mental al trabajar en nuevas funcionalidades.

6. **Pruebas Adicionales:**  
   Implementar pruebas unitarias para componentes clave y funciones importantes. Esto asegurará que el comportamiento esperado se mantenga intacto a medida que se realicen futuras modificaciones.

7. **Mejoras en el Estilo y Accesibilidad:**  
   Incorporar prácticas adicionales para garantizar que la aplicación sea completamente accesible (por ejemplo, manejar correctamente el foco, usar roles ARIA donde sea necesario) y revisar los estilos CSS para mantener un diseño consistente y claro.

8. **Incorporación de un Archivo `.env`:**  
   Añadir un archivo `.env` para almacenar las URLs de las APIs, claves secretas y otras configuraciones sensibles. Esto simplificará la gestión de entornos (desarrollo, prueba y producción) y mejorará la seguridad al evitar incluir credenciales directamente en el código fuente.

---
