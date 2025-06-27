# iSponsor - Plataforma de Apadrinamiento Social

## Descripción del Proyecto

iSponsor es una plataforma web/móvil de bienestar social que facilita el apadrinamiento de niños y adultos mayores, proporcionando un seguimiento mensual de donaciones para generar un impacto positivo en su calidad de vida.

## Estado Actual

🚧 **Prototipo Navegable** - Este repositorio contiene un prototipo funcional que permite navegar por todas las historias de usuario sin funcionalidad real de backend.

## Funcionalidades Implementadas (Prototipo)

### Actor: Donador ✅

#### Tema 1: Apadrinamiento
- **HU01** - Filtrar Apadrinados por edad y género
- **HU02** - Proceso completo de apadrinamiento 
- **HU03** - Confirmación y perfil del apadrinado

#### Tema 2: Seguridad y Perfil  
- **HU04** - Registro e inicio de sesión seguro
- **HU05** - Edición de perfil y preferencias de notificación
- **HU06** - Pausar o cancelar apadrinamiento

#### Tema 3: Vínculo con el Apadrinado
- **HU07** - Enviar mensajes al apadrinado
- **HU08** - Recibir contenido del apadrinado

#### Tema 4: Donaciones y Pagos
- **HU09** - Registro de método de pago
- **HU10** - Elección de monto mensual  
- **HU11** - Comprobantes digitales

#### Tema 5: Seguimiento y Reportes
- **HU12** - Informes mensuales de uso de donaciones
- **HU13** - Historial de aportes y actividades

### Otros Actores (Pendientes)
- Casa Hogar 🔄
- Apadrinado 🔄  
- Administrador 🔄

## Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Diseño**: Responsive design, Mobile-first
- **Arquitectura**: SPA (Single Page Application)
- **Estilos**: CSS Grid, Flexbox, CSS Variables

## Estructura del Proyecto

```
/iSponsor2
├── index.html          # Página principal
├── styles.css          # Estilos globales
├── script.js           # Lógica de navegación y simulación
└── README.md           # Este archivo
```

## Cómo Ejecutar el Proyecto

1. **Clonar el repositorio**:
   ```bash
   git clone [url-del-repo]
   cd iSponsor2
   ```

2. **Abrir en navegador**:
   - Opción 1: Doble clic en `index.html`
   - Opción 2: Servidor local (recomendado):
     ```bash
     # Con Python
     python -m http.server 8000
     
     # Con Node.js
     npx serve .
     
     # Con PHP
     php -S localhost:8000
     ```

3. **Navegar**:
   - Abrir `http://localhost:8000` en el navegador
   - Seleccionar "Donador" como tipo de usuario
   - Usar cualquier email/contraseña para "iniciar sesión"

## Funcionalidades del Prototipo

### ✅ Implementado
- Navegación completa entre todas las pantallas
- Filtrado de apadrinados por edad y género
- Proceso de apadrinamiento completo
- Sistema de mensajería simulado
- Gestión de perfil de usuario
- Historial de donaciones
- Informes mensuales
- Validaciones básicas de formularios
- Diseño responsive (web y móvil)

### 🔧 Simulado (sin backend real)
- Autenticación de usuarios
- Procesamiento de pagos
- Envío de correos electrónicos
- Base de datos de apadrinados
- Validación de contenido de mensajes
- Generación de PDFs
- Notificaciones push

## Criterios de Aceptación Cubiertos

Todos los criterios de aceptación de las historias de usuario del actor Donador están implementados a nivel de interfaz:

- ✅ Filtros por edad (0-12, 13-17, 18-65, 65+) y género
- ✅ Mensaje "No se encontraron resultados" cuando aplica
- ✅ Validación de contraseña segura (8+ chars, mayús, minus, número, símbolo)
- ✅ Proceso de apadrinamiento con selección de método de pago
- ✅ Confirmación visual y "por correo" del apadrinamiento
- ✅ Sistema de mensajes con límite de 1000 caracteres
- ✅ Historial de mensajes y contenido del apadrinado
- ✅ Gestión de montos de donación (predefinidos y personalizado)
- ✅ Informes mensuales con desglose de uso
- ✅ Historial exportable de donaciones
- ✅ Opciones para pausar/cancelar apadrinamiento

## Próximos Pasos

1. **Completar otros actores**: Casa Hogar, Apadrinado, Administrador
2. **Backend implementation**: API REST, base de datos, autenticación real
3. **Integración de pagos**: Stripe, PayPal, pasarelas locales
4. **Sistema de notificaciones**: Email, SMS, push notifications
5. **App móvil nativa**: React Native / Flutter
6. **Testing**: Unit tests, integration tests, E2E tests
7. **Deployment**: Docker, CI/CD, hosting

## Notas Técnicas

- **Sin dependencias externas**: El prototipo funciona con tecnologías web nativas
- **Datos simulados**: Toda la información está hardcodeada en `script.js`
- **Estado en memoria**: Los cambios se pierden al recargar la página
- **Responsive**: Optimizado para desktop, tablet y móvil
- **Accesibilidad**: Cumple estándares básicos de accesibilidad web

## Contacto

Para preguntas sobre este prototipo o el desarrollo futuro de la plataforma, contacta al equipo de desarrollo.