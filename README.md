 Formulario de Registro con Validaciones y Tests Cypress

Este proyecto implementa un formulario de registro de usuario con validaciones completas tanto del lado del cliente como mediante pruebas automatizadas con Cypress. El sistema incluye validación de campos, seguridad de contraseñas, y una página de confirmación para mostrar la información del usuario registrado.



## Características

### Formulario de Registro
- *Campos obligatorios*:
  - Nombre completo
  - Correo electrónico (con validación de formato)
  - Contraseña (con requisitos de seguridad)
  - Confirmación de contraseña
  - Aceptación de términos y condiciones
- *Campos opcionales*:
  - Fecha de nacimiento
- *Validaciones en tiempo real*:
  - Errores específicos para cada tipo de validación
  -…
Proyecto: Formulario de Registro con Validaciones y Tests Cypress

Este proyecto ofrece un formulario de registro con validaciones robustas tanto en el frontend como a través de pruebas automatizadas con Cypress. Además, incluye una página de confirmación para mostrar los datos registrados, garantizando una experiencia segura y fluida para el usuario.

📌 Características Principales

📝 Formulario de Registro

✅ Campos obligatorios:

Nombre completo

Correo electrónico (validación de formato)

Contraseña (cumple requisitos de seguridad)

Confirmación de contraseña

Aceptación de términos y condiciones

🆓 Campo opcional:

Fecha de nacimiento

🔍 Validaciones en tiempo real:

Mensajes de error específicos

Activación/desactivación automática del botón de envío

Comprobación de coincidencia de contraseñas

🎉 Página de Confirmación

Mensaje de bienvenida personalizado

Resumen de los datos registrados (sin mostrar la contraseña)

Opciones para volver a la página de inicio o continuar al área de usuario

🔍 Tests Automatizados con Cypress

Comprobación de la carga del formulario

Validación de campos obligatorios

Pruebas de formato del correo electrónico

Verificación de seguridad de la contraseña

Prueba completa del flujo de registro

Manejo de caracteres especiales

Validación contra ataques de inyección de scripts

📂 Estructura del Proyecto

📂 Proyecto
├── registro.html       # Formulario de registro
├── confirmacion.html   # Página de confirmación
├── inicio.html         # Página de inicio
├── estilo.css          # Estilos CSS
├── script.js           # Lógica de validación en JS
├── cypress/            # Directorio de pruebas Cypress
│   └── e2e/            # Tests end-to-end
│       └── form.cy.js  # Pruebas del formulario
└── cypress.config.js   # Configuración de Cypress

🔧 Validaciones Implementadas

Campos obligatorios: No pueden estar vacíos.

Correo electrónico: Debe seguir un formato válido mediante regex.

Contraseña: Mínimo 8 caracteres, incluyendo una mayúscula, una minúscula y un número.

Confirmación de contraseña: Debe coincidir con la original.

Términos y condiciones: Su aceptación es obligatoria para completar el registro.

📢 Mensajes de error:

Se generan dinámicamente según la validación.

Se muestran inmediatamente tras la interacción del usuario con el campo.

🚀 Instalación y Ejecución

1️⃣ Clonar el repositorio:

git clone <URL-del-repositorio>
cd <nombre-del-directorio>

2️⃣ Instalar dependencias:

npm install

3️⃣ Ejecutar servidor local:

# Si tienes http-server instalado:
npx http-server -p 3000

# Alternativas:
# - Python: python -m http.server 3000
# - PHP: php -S localhost:3000
# - Node.js: con Express o similar

4️⃣ Ejecutar pruebas de Cypress:

# Abrir interfaz visual de Cypress
npx cypress open

# Ejecutar en modo headless
npx cypress run

📊 Criterios de Evaluación

📌 1. Funcionalidad (40%)

Correcta implementación del formulario

Validaciones efectivas

Navegación fluida entre páginas

📌 2. Pruebas Automatizadas (40%)

Cobertura completa de validaciones

Organización clara y efectiva de los tests

Uso adecuado de selectores y aserciones

📌 3. Diseño y Experiencia de Usuario (10%)

Interfaz intuitiva y atractiva

Mensajes de error comprensibles

Experiencia de usuario fluida

📌 4. Código y Documentación (10%)

Código bien estructurado

Comentarios explicativos

Instrucciones claras de instalación y uso