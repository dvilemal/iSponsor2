// Estado global de la aplicación
let currentUser = null;
let currentUserType = 'donador';
let apadrinamientos = [
    {
        id: 1,
        apadrinadoId: 1,
        apadrinado: {
            id: 1,
            nombre: "María González",
            edad: 8,
            genero: "femenino",
            ubicacion: "Ciudad de México",
            descripcion: "Le gusta dibujar y jugar fútbol",
            necesidades: "Educación básica y alimentación",
            foto: "M"
        },
        monto: 500,
        metodoPago: "tarjeta",
        fechaInicio: "2024-10-15",
        estado: "activo"
    },
    {
        id: 2,
        apadrinadoId: 2,
        apadrinado: {
            id: 2,
            nombre: "Carlos Rodríguez",
            edad: 15,
            genero: "masculino",
            ubicacion: "Guadalajara",
            descripcion: "Estudiante de secundaria, le gustan las matemáticas",
            necesidades: "Material escolar y transporte",
            foto: "C"
        },
        monto: 300,
        metodoPago: "paypal",
        fechaInicio: "2024-11-01",
        estado: "activo"
    },
    {
        id: 3,
        apadrinadoId: 3,
        apadrinado: {
            id: 3,
            nombre: "Ana López",
            edad: 72,
            genero: "femenino",
            ubicacion: "Monterrey",
            descripcion: "Abuela cariñosa que necesita medicamentos",
            necesidades: "Medicamentos y cuidado médico",
            foto: "A"
        },
        monto: 750,
        metodoPago: "transferencia",
        fechaInicio: "2024-09-20",
        estado: "activo"
    }
];
let mensajes = [];
let currentPage = 'home';

// Datos simulados
const simulatedData = {
    apadrinados: [
        {
            id: 1,
            nombre: "María González",
            edad: 8,
            genero: "femenino",
            ubicacion: "Ciudad de México",
            descripcion: "Le gusta dibujar y jugar fútbol",
            necesidades: "Educación básica y alimentación",
            foto: "M"
        },
        {
            id: 2,
            nombre: "Carlos Rodríguez",
            edad: 15,
            genero: "masculino",
            ubicacion: "Guadalajara",
            descripcion: "Estudiante de secundaria, le gustan las matemáticas",
            necesidades: "Material escolar y transporte",
            foto: "C"
        },
        {
            id: 3,
            nombre: "Ana López",
            edad: 72,
            genero: "femenino",
            ubicacion: "Monterrey",
            descripcion: "Abuela cariñosa que necesita medicamentos",
            necesidades: "Medicamentos y cuidado médico",
            foto: "A"
        },
        {
            id: 4,
            nombre: "José Martínez",
            edad: 10,
            genero: "masculino",
            ubicacion: "Puebla",
            descripcion: "Niño alegre que quiere aprender a leer",
            necesidades: "Libros y material educativo",
            foto: "J"
        },
        {
            id: 5,
            nombre: "Lucía Hernández",
            edad: 67,
            genero: "femenino",
            ubicacion: "Tijuana",
            descripcion: "Le gusta tejer y contar historias",
            necesidades: "Compañía y medicamentos",
            foto: "L"
        }
    ],
    donaciones: [
        {
            id: 1,
            apadrinadoId: 1,
            monto: 500,
            fecha: "2024-12-15",
            estado: "exitosa",
            concepto: "Donación mensual - María González"
        },
        {
            id: 2,
            apadrinadoId: 2,
            monto: 300,
            fecha: "2024-11-15",
            estado: "exitosa",
            concepto: "Donación mensual - Carlos Rodríguez"
        }
    ]
};

// Datos simulados para Casa Hogar
let casaHogarData = {
    perfil: {
        nombre: "Casa Hogar San José",
        email: "admin@casahogar-sanjose.org",
        telefono: "555-0123",
        direccion: "Av. Esperanza 123, Ciudad de México",
        responsable: "Lic. María García"
    },
    apadrinados: [
        {
            id: 1,
            nombre: "María González",
            fechaNacimiento: "2016-03-15",
            genero: "femenino",
            estadoSalud: "Bueno",
            escolaridad: "2do Primaria",
            foto: "M",
            estado: "activo",
            fechaRegistro: "2024-01-15",
            necesidades: "Educación básica y alimentación",
            descripcion: "Le gusta dibujar y jugar fútbol"
        },
        {
            id: 2,
            nombre: "Carlos Rodríguez",
            fechaNacimiento: "2009-08-22",
            genero: "masculino",
            estadoSalud: "Excelente",
            escolaridad: "1ro Secundaria",
            foto: "C",
            estado: "activo",
            fechaRegistro: "2024-02-10",
            necesidades: "Material escolar y transporte",
            descripcion: "Estudiante de secundaria, le gustan las matemáticas"
        },
        {
            id: 3,
            nombre: "Ana López",
            fechaNacimiento: "1952-12-05",
            genero: "femenino",
            estadoSalud: "Requiere medicamentos",
            escolaridad: "Primaria completa",
            foto: "A",
            estado: "activo",
            fechaRegistro: "2024-01-20",
            necesidades: "Medicamentos y cuidado médico",
            descripcion: "Abuela cariñosa que necesita medicamentos"
        }
    ],
    gastos: [
        {
            id: 1,
            apadrinadoId: 1,
            fecha: "2024-12-01",
            monto: 200,
            categoria: "alimentacion",
            descripcion: "Compra de alimentos nutritivos",
            comprobante: "FAC-001"
        },
        {
            id: 2,
            apadrinadoId: 1,
            fecha: "2024-12-05",
            monto: 150,
            categoria: "educacion",
            descripcion: "Útiles escolares y libros",
            comprobante: "FAC-002"
        },
        {
            id: 3,
            apadrinadoId: 2,
            fecha: "2024-12-03",
            monto: 100,
            categoria: "transporte",
            descripcion: "Pasajes escolares",
            comprobante: "FAC-003"
        }
    ],
    contenido: [
        {
            id: 1,
            apadrinadoId: 1,
            tipo: "foto",
            titulo: "En el colegio",
            descripcion: "María en su clase de matemáticas",
            fecha: "2024-12-10",
            estado: "aprobado"
        },
        {
            id: 2,
            apadrinadoId: 2,
            tipo: "carta",
            titulo: "Carta de agradecimiento",
            descripcion: "Carlos agradece el apoyo recibido",
            fecha: "2024-12-08",
            estado: "pendiente"
        }
    ]
};

// Funciones de navegación
function goToPage(page, params = {}) {
    currentPage = page;
    const container = document.querySelector('.container');
    
    switch(page) {
        case 'home':
            showHomePage();
            break;
        case 'login':
            showLoginPage();
            break;
        case 'register':
            showRegisterPage();
            break;
        case 'dashboard':
            showDashboard();
            break;
        case 'buscar-apadrinados':
            showBuscarApadrinados();
            break;
        case 'perfil-apadrinado':
            showPerfilApadrinado(params.id);
            break;
        case 'confirmar-apadrinamiento':
            showConfirmarApadrinamiento(params.apadrinadoId);
            break;
        case 'perfil-usuario':
            showPerfilUsuario();
            break;
        case 'mis-apadrinamientos':
            showMisApadrinamientos();
            break;
        case 'historial-donaciones':
            showHistorialDonaciones();
            break;
        case 'mensajes':
            showMensajes(params.apadrinadoId);
            break;
        case 'informes':
            showInformes();
            break;
        case 'gestionar-apadrinados':
            showGestionarApadrinados();
            break;
        case 'gestionar-donaciones':
            showGestionarDonaciones();
            break;
        case 'comunicacion-donadores':
            showComunicacionDonadores();
            break;
        case 'reportes-casa-hogar':
            showReportesCasaHogar();
            break;
        default:
            showHomePage();
    }
}

function goToLogin() {
    goToPage('login');
}

function goToRegister() {
    goToPage('register');
}

function selectUserType(type) {
    currentUserType = type;
    if (type === 'donador') {
        goToPage('login');
    } else {
        showMessage('En este prototipo solo está disponible el perfil de Donador', 'info');
    }
}

// Páginas principales
function showHomePage() {
    document.querySelector('.container').innerHTML = `
        <header class="header">
            <h1>iSponsor</h1>
            <p>Plataforma de Apadrinamiento Social</p>
        </header>
        
        <div class="main-content">
            <div class="welcome-section charity-highlight">
                <h2>¡Bienvenido a iSponsor!</h2>
                <p>Conectamos corazones generosos con vidas que necesitan esperanza. Únete a nuestra comunidad de amor y transformación social.</p>
                <div class="heart-counter" style="font-size: 1.2rem; margin-top: 15px;">
                    Miles de vidas transformadas
                </div>
            </div>
            
            <div class="auth-buttons">
                <button class="btn btn-donate charity-hover" onclick="goToLogin()">💝 Iniciar Sesión</button>
                <button class="btn btn-success charity-hover" onclick="goToRegister()">🌟 Registrarse</button>
            </div>
            
            <div class="user-types">
                <h3 class="charity-text">Selecciona tu perfil:</h3>
                <div class="type-cards">
                    <div class="type-card charity-hover" data-type="donador" onclick="selectUserType('donador')">
                        <div class="floating-hearts"></div>
                        <h4>💝 Donador</h4>
                        <p>Quiero apadrinar y cambiar vidas</p>
                        <div class="generosity-badge">Generosidad</div>
                    </div>
                    <div class="type-card charity-hover" data-type="casa-hogar" onclick="selectUserType('casa-hogar')">
                        <h4>🏠 Casa Hogar</h4>
                        <p>Represento una institución de cuidado</p>
                        <div class="impact-indicator">Esperanza</div>
                    </div>
                    <div class="type-card charity-hover" data-type="apadrinado" onclick="selectUserType('apadrinado')">
                        <h4>🌟 Apadrinado</h4>
                        <p>Recibo apoyo y crecimiento</p>
                        <div class="hope-progress">
                            <div class="hope-progress-bar" style="width: 75%"></div>
                        </div>
                    </div>
                    <div class="type-card charity-hover" data-type="administrador" onclick="selectUserType('admin')">
                        <h4>⚙️ Administrador</h4>
                        <p>Gestiono la plataforma con compasión</p>
                        <div class="impact-indicator">Liderazgo</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showLoginPage() {
    document.querySelector('.container').innerHTML = `
        <header class="header">
            <h1>iSponsor</h1>
            <p>Iniciar Sesión</p>
        </header>
        
        <div class="main-content">
            <div style="max-width: 400px; margin: 0 auto;">
                <h2 class="text-center mb-20">Iniciar Sesión</h2>
                
                <form onsubmit="handleLogin(event)">
                    <div class="form-group">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" id="email" class="form-control" placeholder="tu@email.com (opcional para demo)">
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" class="form-control" placeholder="Tu contraseña (opcional para demo)">
                    </div>
                    
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                        <br><br>
                        <a href="#" onclick="goToPage('register')" style="color: #667eea;">¿No tienes cuenta? Regístrate</a>
                        <br>
                        <a href="#" onclick="showRecuperarPassword()" style="color: #667eea;">¿Olvidaste tu contraseña?</a>
                        <br><br>
                        <button type="button" class="btn btn-secondary" onclick="goToPage('home')">Volver</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

function showRegisterPage() {
    document.querySelector('.container').innerHTML = `
        <header class="header">
            <h1>iSponsor</h1>
            <p>Crear Cuenta</p>
        </header>
        
        <div class="main-content">
            <div style="max-width: 600px; margin: 0 auto;">
                <h2 class="text-center mb-20">Crear Cuenta de Donador</h2>
                <p class="text-center" style="color: #666; margin-bottom: 30px;">Todos los campos son opcionales para esta demostración</p>
                
                <form onsubmit="handleRegister(event)">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" id="nombre" class="form-control" placeholder="Tu nombre (opcional)">
                        </div>
                        <div class="form-group">
                            <label for="apellido">Apellido</label>
                            <input type="text" id="apellido" class="form-control" placeholder="Tu apellido (opcional)">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" id="email" class="form-control" placeholder="tu@email.com (opcional)">
                    </div>
                    
                    <div class="form-group">
                        <label for="telefono">Teléfono</label>
                        <input type="tel" id="telefono" class="form-control" placeholder="Tu teléfono (opcional)">
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="password">Contraseña</label>
                            <input type="password" id="password" class="form-control" placeholder="Contraseña (opcional para demo)">
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">Confirmar Contraseña</label>
                            <input type="password" id="confirmPassword" class="form-control" placeholder="Confirma tu contraseña (opcional)">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="direccion">Dirección</label>
                        <textarea id="direccion" class="form-control" placeholder="Tu dirección completa (opcional)" rows="3"></textarea>
                    </div>
                    
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary">Crear Cuenta</button>
                        <br><br>
                        <a href="#" onclick="goToPage('login')" style="color: #667eea;">¿Ya tienes cuenta? Inicia sesión</a>
                        <br><br>
                        <button type="button" class="btn btn-secondary" onclick="goToPage('home')">Volver</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

function showDashboard() {
    document.querySelector('.container').innerHTML = `
        ${getNavbar()}
        
        <div class="main-content">
            <div class="welcome-section charity-highlight">
                <h2>¡Bienvenido, ${currentUser?.nombre || 'Donador'}! 🌟</h2>
                <p>Tu generosidad está transformando vidas. Aquí puedes gestionar tus apadrinamientos y ver el increíble impacto de tus donaciones.</p>
                <div class="heart-counter" style="font-size: 1.1rem; margin-top: 15px;">
                    Gracias por hacer la diferencia
                </div>
            </div>
            
            <div class="card-grid">
                <div class="card donation-card charity-hover" onclick="goToPage('buscar-apadrinados')">
                    <h3>🔍 Buscar Apadrinados</h3>
                    <p>Encuentra vidas esperando tu apoyo y generosidad</p>
                    <div class="impact-indicator">Nuevas oportunidades</div>
                    <button class="btn btn-donate charity-hover">Buscar Ahora</button>
                </div>
                
                <div class="card success-card charity-hover" onclick="goToPage('mis-apadrinamientos')">
                    <h3>Mis Apadrinamientos</h3>
                    <p>Gestiona tus conexiones de esperanza</p>
                    <div class="heart-counter">${apadrinamientos.length || 0}</div>
                    <button class="btn btn-success charity-hover" onclick="event.stopPropagation(); goToPage('mis-apadrinamientos')">Ver Mis Apadrinamientos</button>
                </div>
                
                <div class="card info-card charity-hover" onclick="goToPage('historial-donaciones')">
                    <h3>Historial de Donaciones</h3>
                    <p>Revisa el camino de tu generosidad</p>
                    <div class="generosity-badge">Transparencia</div>
                    <button class="btn btn-warning charity-hover" onclick="event.stopPropagation(); goToPage('historial-donaciones')">Ver Historial</button>
                </div>
                
                <div class="card feature-card charity-hover" onclick="goToPage('informes')">
                    <h3>Informes de Impacto</h3>
                    <p>Descubre cómo transformas vidas cada día</p>
                    <div class="impact-indicator">Resultados reales</div>
                    <button class="btn btn-primary charity-hover" onclick="event.stopPropagation(); goToPage('informes')">Ver Informes</button>
                </div>
            </div>
            
            <div class="card charity-highlight mt-20">
                <h3 class="charity-text">Resumen de tu Impacto Social</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
                    <div class="charity-shadow" style="text-align: center; padding: 25px; background: linear-gradient(135deg, rgba(220, 53, 97, 0.1), rgba(220, 53, 97, 0.05)); border-radius: 15px; border: 2px solid rgba(220, 53, 97, 0.2);">
                        <div class="heart-counter" style="font-size: 2.5rem; margin: 0;">3</div>
                        <p style="margin: 5px 0; color: var(--heart-color); font-weight: 600;">Apadrinamientos Activos</p>
                    </div>
                    <div class="charity-shadow" style="text-align: center; padding: 25px; background: linear-gradient(135deg, rgba(39, 174, 96, 0.1), rgba(39, 174, 96, 0.05)); border-radius: 15px; border: 2px solid rgba(39, 174, 96, 0.2);">
                        <div class="impact-indicator" style="font-size: 2rem; background: linear-gradient(135deg, var(--hope-color), var(--success-color)); margin-bottom: 10px;">$1,200</div>
                        <p style="margin: 5px 0; color: var(--hope-color); font-weight: 600;">Total Donado Este Mes</p>
                    </div>
                    <div class="charity-shadow" style="text-align: center; padding: 25px; background: linear-gradient(135deg, rgba(255, 159, 67, 0.1), rgba(255, 159, 67, 0.05)); border-radius: 15px; border: 2px solid rgba(255, 159, 67, 0.2);">
                        <div class="generosity-badge" style="font-size: 2rem; margin-bottom: 10px;">15</div>
                        <p style="margin: 5px 0; color: var(--compassion-color); font-weight: 600;">Mensajes de Esperanza</p>
                    </div>
                    <div class="charity-shadow" style="text-align: center; padding: 25px; background: linear-gradient(135deg, rgba(230, 126, 34, 0.1), rgba(230, 126, 34, 0.05)); border-radius: 15px; border: 2px solid rgba(230, 126, 34, 0.2);">
                        <div class="impact-indicator" style="font-size: 2rem; background: linear-gradient(135deg, var(--generosity-color), var(--primary-color)); margin-bottom: 10px;">5</div>
                        <p style="margin: 5px 0; color: var(--generosity-color); font-weight: 600;">Informes de Progreso</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showBuscarApadrinados() {
    document.querySelector('.container').innerHTML = `
        ${getNavbar()}
        
        <div class="main-content">
            <h2>Buscar Apadrinados</h2>
            <p>Filtra y encuentra a quien quieres ayudar</p>
            
            <div class="filters">
                <h3>Filtros</h3>
                <div class="filter-row">
                    <div class="form-group">
                        <label for="edad-min">Edad Mínima</label>
                        <select id="edad-min" class="form-control">
                            <option value="">Todas las edades</option>
                            <option value="0">0 años</option>
                            <option value="13">13 años</option>
                            <option value="18">18 años</option>
                            <option value="65">65 años</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="edad-max">Edad Máxima</label>
                        <select id="edad-max" class="form-control">
                            <option value="">Todas las edades</option>
                            <option value="12">12 años</option>
                            <option value="17">17 años</option>
                            <option value="64">64 años</option>
                            <option value="100">100+ años</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="genero">Género</label>
                        <select id="genero" class="form-control">
                            <option value="">Todos</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" onclick="aplicarFiltros()">Aplicar Filtros</button>
                        <button class="btn btn-secondary" onclick="limpiarFiltros()">Limpiar</button>
                    </div>
                </div>
            </div>
            
            <div id="resultados-apadrinados">
                ${renderApadrinados(simulatedData.apadrinados)}
            </div>
        </div>
    `;
}

function renderApadrinados(apadrinados) {
    if (apadrinados.length === 0) {
        return '<div class="no-results">No se encontraron resultados con los filtros aplicados</div>';
    }
    
    return `
        <div class="card-grid">
            ${apadrinados.map(apadrinado => `
                <div class="apadrinado-card charity-hover charity-shadow" onclick="goToPage('perfil-apadrinado', {id: ${apadrinado.id}})">
                    <div class="floating-hearts"></div>
                    <div class="apadrinado-image">${apadrinado.foto}</div>
                    <div class="apadrinado-info">
                        <h4 class="charity-text">${apadrinado.nombre}</h4>
                        <p><strong>Edad:</strong> ${apadrinado.edad} años <span class="heart-counter">${apadrinado.edad}</span></p>
                        <p><strong>Género:</strong> ${apadrinado.genero}</p>
                        <p><strong>Ubicación:</strong> ${apadrinado.ubicacion}</p>
                        <p>${apadrinado.descripcion}</p>
                        <div class="impact-indicator">
                            Necesita tu apoyo
                        </div>
                        <button class="btn btn-donate charity-hover charity-pulse" onclick="event.stopPropagation(); goToPage('perfil-apadrinado', {id: ${apadrinado.id}})">
                            <span>Apadrinar Ahora</span>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function aplicarFiltros() {
    const edadMin = document.getElementById('edad-min').value;
    const edadMax = document.getElementById('edad-max').value;
    const genero = document.getElementById('genero').value;
    
    let filtrados = simulatedData.apadrinados.filter(apadrinado => {
        let cumpleFiltros = true;
        
        if (edadMin && apadrinado.edad < parseInt(edadMin)) {
            cumpleFiltros = false;
        }
        if (edadMax && apadrinado.edad > parseInt(edadMax)) {
            cumpleFiltros = false;
        }
        if (genero && apadrinado.genero !== genero) {
            cumpleFiltros = false;
        }
        
        return cumpleFiltros;
    });
    
    document.getElementById('resultados-apadrinados').innerHTML = renderApadrinados(filtrados);
}

function limpiarFiltros() {
    document.getElementById('edad-min').value = '';
    document.getElementById('edad-max').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('resultados-apadrinados').innerHTML = renderApadrinados(simulatedData.apadrinados);
}

function showPerfilApadrinado(id) {
    const apadrinado = simulatedData.apadrinados.find(a => a.id == id);
    if (!apadrinado) {
        showMessage('Apadrinado no encontrado', 'error');
        return;
    }
    
    document.querySelector('.container').innerHTML = `
        ${getNavbar()}
        
        <div class="main-content">
            <div class="card">
                <div style="display: grid; grid-template-columns: 200px 1fr; gap: 30px; align-items: start;">
                    <div class="apadrinado-image" style="height: 200px; border-radius: 15px;">${apadrinado.foto}</div>
                    <div>
                        <h2>${apadrinado.nombre}</h2>
                        <p><strong>Edad:</strong> ${apadrinado.edad} años</p>
                        <p><strong>Género:</strong> ${apadrinado.genero}</p>
                        <p><strong>Ubicación:</strong> ${apadrinado.ubicacion}</p>
                        <p><strong>Descripción:</strong> ${apadrinado.descripcion}</p>
                        <p><strong>Necesidades:</strong> ${apadrinado.necesidades}</p>
                        
                        <div style="margin-top: 30px;">
                            <button class="btn btn-success" onclick="goToPage('confirmar-apadrinamiento', {apadrinadoId: ${apadrinado.id}})">
                                Apadrinar a ${apadrinado.nombre}
                            </button>
                            <button class="btn btn-secondary" onclick="goToPage('buscar-apadrinados')">
                                Volver a Búsqueda
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h3>Historia Personal</h3>
                <p>Aquí se mostraría información adicional sobre la historia personal del apadrinado, sus logros, sueños y cómo las donaciones han impactado positivamente en su vida.</p>
            </div>
            
            <div class="card">
                <h3>Galería de Fotos</h3>
                <div class="gallery">
                    <div class="gallery-item has-content">
                        <div style="width: 100%; height: 150px; background: #f0f0f0; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 2rem;">📸</div>
                        <p style="margin-top: 10px;">En el colegio</p>
                    </div>
                    <div class="gallery-item has-content">
                        <div style="width: 100%; height: 150px; background: #f0f0f0; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 2rem;">📸</div>
                        <p style="margin-top: 10px;">Jugando</p>
                    </div>
                    <div class="gallery-item">
                        <div class="gallery-placeholder">Próximamente más fotos</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showConfirmarApadrinamiento(apadrinadoId) {
    const apadrinado = simulatedData.apadrinados.find(a => a.id == apadrinadoId);
    if (!apadrinado) {
        showMessage('Apadrinado no encontrado', 'error');
        return;
    }
    
    document.querySelector('.container').innerHTML = `
        ${getNavbar()}
        
        <div class="main-content">
            <h2>Confirmar Apadrinamiento</h2>
            <p>Estás a punto de apadrinar a ${apadrinado.nombre}</p>
            
            <div class="card-grid">
                <div class="card">
                    <h3>Información del Apadrinado</h3>
                    <div style="display: flex; align-items: center; gap: 20px;">
                        <div class="apadrinado-image" style="width: 100px; height: 100px; border-radius: 10px;">${apadrinado.foto}</div>
                        <div>
                            <h4>${apadrinado.nombre}</h4>
                            <p><strong>Edad:</strong> ${apadrinado.edad} años</p>
                            <p><strong>Ubicación:</strong> ${apadrinado.ubicacion}</p>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <h3>Configurar Donación</h3>
                    <form onsubmit="procesarApadrinamiento(event, ${apadrinadoId})">
                        <div class="form-group">
                            <label for="monto">Monto Mensual</label>
                            <select id="monto" class="form-control" onchange="toggleMontoPersonalizadoApadrinamiento()" required>
                                <option value="">Selecciona un monto</option>
                                <option value="250">$250 MXN</option>
                                <option value="500">$500 MXN</option>
                                <option value="750">$750 MXN</option>
                                <option value="1000">$1,000 MXN</option>
                                <option value="personalizado">Monto personalizado</option>
                            </select>
                        </div>
                        
                        <div id="monto-personalizado" class="form-group hidden">
                            <label for="monto-custom">Monto Personalizado (MXN)</label>
                            <input type="number" id="monto-custom" class="form-control" min="100" placeholder="Ingresa el monto">
                        </div>
                        
                        <div class="form-group">
                            <label for="metodo-pago">Método de Pago</label>
                            <select id="metodo-pago" class="form-control" onchange="toggleDatosTarjeta()" required>
                                <option value="">Selecciona método de pago</option>
                                <option value="tarjeta">Tarjeta de Crédito/Débito</option>
                                <option value="paypal">PayPal</option>
                                <option value="transferencia">Transferencia Bancaria</option>
                            </select>
                        </div>
                        
                        <div id="datos-tarjeta" class="hidden">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="numero-tarjeta">Número de Tarjeta</label>
                                    <input type="text" id="numero-tarjeta" class="form-control" placeholder="1234 5678 9012 3456">
                                </div>
                                <div class="form-group">
                                    <label for="cvv">CVV</label>
                                    <input type="text" id="cvv" class="form-control" placeholder="123">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="mes">Mes</label>
                                    <select id="mes" class="form-control">
                                        <option value="">MM</option>
                                        ${Array.from({length: 12}, (_, i) => `<option value="${i+1}">${String(i+1).padStart(2, '0')}</option>`).join('')}
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="anio">Año</label>
                                    <select id="anio" class="form-control">
                                        <option value="">AAAA</option>
                                        ${Array.from({length: 10}, (_, i) => `<option value="${2024+i}">${2024+i}</option>`).join('')}
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="nombre-titular">Nombre del Titular</label>
                                <input type="text" id="nombre-titular" class="form-control" placeholder="Nombre como aparece en la tarjeta">
                            </div>
                        </div>
                        
                        <div class="text-center mt-20">
                            <button type="submit" class="btn btn-success">Confirmar Apadrinamiento</button>
                            <button type="button" class="btn btn-secondary" onclick="goToPage('perfil-apadrinado', {id: ${apadrinadoId}})">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    `;
}

function toggleMontoPersonalizadoApadrinamiento() {
    const select = document.getElementById('monto');
    const montoPersonalizado = document.getElementById('monto-personalizado');
    
    if (select && montoPersonalizado) {
        if (select.value === 'personalizado') {
            montoPersonalizado.classList.remove('hidden');
        } else {
            montoPersonalizado.classList.add('hidden');
        }
    }
}

function toggleDatosTarjeta() {
    const select = document.getElementById('metodo-pago');
    const datosTarjeta = document.getElementById('datos-tarjeta');
    
    if (select && datosTarjeta) {
        if (select.value === 'tarjeta') {
            datosTarjeta.classList.remove('hidden');
        } else {
            datosTarjeta.classList.add('hidden');
        }
    }
}

function procesarApadrinamiento(event, apadrinadoId) {
    event.preventDefault();
    
    const apadrinado = simulatedData.apadrinados.find(a => a.id == apadrinadoId);
    const monto = document.getElementById('monto').value;
    const metodoPago = document.getElementById('metodo-pago').value;
    
    // Simular validación de método de pago
    if (metodoPago === 'tarjeta') {
        const numeroTarjeta = document.getElementById('numero-tarjeta').value;
        const cvv = document.getElementById('cvv').value;
        const nombreTitular = document.getElementById('nombre-titular').value;
        
        if (!numeroTarjeta || !cvv || !nombreTitular) {
            showMessage('Por favor completa todos los datos de la tarjeta', 'error');
            return;
        }
    }
    
    // Simular procesamiento
    showMessage('Procesando apadrinamiento...', 'info');
    
    setTimeout(() => {
        // Agregar apadrinamiento a la lista
        apadrinamientos.push({
            id: Date.now(),
            apadrinadoId: apadrinadoId,
            apadrinado: apadrinado,
            monto: monto === 'personalizado' ? document.getElementById('monto-custom').value : monto,
            metodoPago: metodoPago,
            fechaInicio: new Date().toISOString().split('T')[0],
            estado: 'activo'
        });
        
        showConfirmacionApadrinamiento(apadrinado);
    }, 2000);
}

function showConfirmacionApadrinamiento(apadrinado) {
    document.querySelector('.container').innerHTML = `
        ${getNavbar()}
        
        <div class="main-content">
            <div class="card text-center">
                <div style="font-size: 4rem; color: #28a745; margin-bottom: 20px;">✅</div>
                <h2 style="color: #28a745;">¡Apadrinamiento Confirmado!</h2>
                <p style="font-size: 1.2rem; margin: 20px 0;">Has apadrinado exitosamente a <strong>${apadrinado.nombre}</strong></p>
                
                <div class="card" style="margin: 30px 0; background: #f8f9fa;">
                    <h3>Información del Apadrinamiento</h3>
                    <div style="display: flex; align-items: center; gap: 20px; justify-content: center;">
                        <div class="apadrinado-image" style="width: 100px; height: 100px; border-radius: 10px;">${apadrinado.foto}</div>
                        <div style="text-align: left;">
                            <p><strong>Nombre:</strong> ${apadrinado.nombre}</p>
                            <p><strong>Edad:</strong> ${apadrinado.edad} años</p>
                            <p><strong>Ubicación:</strong> ${apadrinado.ubicacion}</p>
                            <p><strong>Fecha de inicio:</strong> ${new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
                
                <div class="message message-success">
                    <strong>Confirmación enviada:</strong> Se ha enviado un correo electrónico con los detalles del apadrinamiento a tu correo registrado.
                </div>
                
                <div style="margin-top: 30px;">
                    <button class="btn btn-primary" onclick="goToPage('mis-apadrinamientos')">Ver Mis Apadrinamientos</button>
                    <button class="btn btn-secondary" onclick="goToPage('dashboard')">Ir al Inicio</button>
                    <button class="btn btn-success" onclick="goToPage('mensajes', {apadrinadoId: ${apadrinado.id}})">Enviar Mensaje</button>
                </div>
            </div>
        </div>
    `;
}

function showMisApadrinamientos() {
    document.querySelector('.container').innerHTML = `
        ${getNavbar()}
        
        <div class="main-content">
            <h2>Mis Apadrinamientos</h2>
            <p>Gestiona todos tus apadrinamientos activos</p>
            
            ${apadrinamientos.length === 0 ? `
                <div class="no-results">
                    <h3>Aún no tienes apadrinamientos</h3>
                    <p>¡Comienza a ayudar hoy mismo!</p>
                    <button class="btn btn-primary" onclick="goToPage('buscar-apadrinados')">Buscar Apadrinados</button>
                </div>
            ` : `
                <div class="card-grid">
                    ${apadrinamientos.map(apadrinamiento => `
                        <div class="card">
                            <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
                                <div class="apadrinado-image" style="width: 80px; height: 80px; border-radius: 10px;">${apadrinamiento.apadrinado.foto}</div>
                                <div>
                                    <h4>${apadrinamiento.apadrinado.nombre}</h4>
                                    <p><strong>Edad:</strong> ${apadrinamiento.apadrinado.edad} años</p>
                                    <span class="status status-${apadrinamiento.estado}">${apadrinamiento.estado}</span>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 20px;">
                                <p><strong>Monto mensual:</strong> $${apadrinamiento.monto} MXN</p>
                                <p><strong>Desde:</strong> ${new Date(apadrinamiento.fechaInicio).toLocaleDateString()}</p>
                            </div>
                            
                            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                <button class="btn btn-primary" onclick="goToPage('mensajes', {apadrinadoId: ${apadrinamiento.apadrinadoId}})">Mensajes</button>
                                <button class="btn btn-secondary" onclick="goToPage('informes')">Ver Informes</button>
                                <button class="btn btn-secondary" onclick="showGestionarApadrinamiento(${apadrinamiento.id})">Gestionar</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `}
        </div>
    `;
}

function showGestionarApadrinamiento(apadrinamientoId) {
    const apadrinamiento = apadrinamientos.find(a => a.id === apadrinamientoId);
    if (!apadrinamiento) {
        showMessage('Apadrinamiento no encontrado', 'error');
        return;
    }
    
    showModal('Gestionar Apadrinamiento', `
        <div style="text-align: center;">
            <h4>${apadrinamiento.apadrinado.nombre}</h4>
            <p>Estado actual: <span class="status status-${apadrinamiento.estado}">${apadrinamiento.estado}</span></p>
            
            <div style="margin: 30px 0;">
                <button class="btn btn-secondary" onclick="pausarApadrinamiento(${apadrinamientoId})" style="margin: 5px;">
                    Pausar Temporalmente
                </button>
                <button class="btn btn-primary" onclick="editarMonto(${apadrinamientoId})" style="margin: 5px;">
                    Cambiar Monto
                </button>
                <button class="btn btn-danger" onclick="cancelarApadrinamiento(${apadrinamientoId})" style="margin: 5px;">
                    Cancelar Definitivamente
                </button>
            </div>
        </div>
    `);
}

function pausarApadrinamiento(apadrinamientoId) {
    hideModal();
    showModal('Pausar Apadrinamiento', `
        <div>
            <p>¿Por cuánto tiempo quieres pausar el apadrinamiento?</p>
            <div style="margin: 20px 0;">
                <button class="btn btn-secondary" onclick="confirmarPausa(${apadrinamientoId}, 1)" style="margin: 5px;">1 mes</button>
                <button class="btn btn-secondary" onclick="confirmarPausa(${apadrinamientoId}, 3)" style="margin: 5px;">3 meses</button>
                <button class="btn btn-secondary" onclick="confirmarPausa(${apadrinamientoId}, 6)" style="margin: 5px;">6 meses</button>
            </div>
        </div>
    `);
}

function confirmarPausa(apadrinamientoId, meses) {
    const apadrinamiento = apadrinamientos.find(a => a.id === apadrinamientoId);
    apadrinamiento.estado = 'pausa';
    hideModal();
    showMessage(`Apadrinamiento pausado por ${meses} mes(es). Se ha enviado confirmación por correo.`, 'success');
    goToPage('mis-apadrinamientos');
}

function cancelarApadrinamiento(apadrinamientoId) {
    hideModal();
    showModal('Cancelar Apadrinamiento', `
        <div class="message message-warning">
            <strong>¡Atención!</strong> Si cancelas este apadrinamiento, perderás acceso a los reportes y actualizaciones del apadrinado.
        </div>
        <p>¿Estás seguro de que quieres cancelar este apadrinamiento?</p>
        <div style="text-align: center; margin-top: 20px;">
            <button class="btn btn-danger" onclick="confirmarCancelacion(${apadrinamientoId})">Sí, Cancelar</button>
            <button class="btn btn-secondary" onclick="hideModal()">No, Mantener</button>
        </div>
    `);
}

function confirmarCancelacion(apadrinamientoId) {
    const index = apadrinamientos.findIndex(a => a.id === apadrinamientoId);
    if (index !== -1) {
        apadrinamientos[index].estado = 'desvinculado';
    }
    hideModal();
    showMessage('Apadrinamiento cancelado. Se ha enviado confirmación por correo.', 'info');
    goToPage('mis-apadrinamientos');
}

function editarMonto(apadrinamientoId) {
    hideModal();
    showModal('Cambiar Monto Mensual', `
        <form onsubmit="confirmarCambioMonto(event, ${apadrinamientoId})">
            <div class="form-group">
                <label for="nuevo-monto">Nuevo Monto Mensual</label>
                <select id="nuevo-monto" class="form-control" onchange="toggleMontoPersonalizado()" required>
                    <option value="">Selecciona un monto</option>
                    <option value="250">$250 MXN</option>
                    <option value="500">$500 MXN</option>
                    <option value="750">$750 MXN</option>
                    <option value="1000">$1,000 MXN</option>
                    <option value="personalizado">Monto personalizado</option>
                </select>
            </div>
            
            <div id="nuevo-monto-personalizado" class="form-group hidden">
                <label for="nuevo-monto-custom">Monto Personalizado (MXN)</label>
                <input type="number" id="nuevo-monto-custom" class="form-control" min="100" placeholder="Ingresa el monto">
            </div>
            
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Guardar Cambio</button>
                <button type="button" class="btn btn-secondary" onclick="hideModal()">Cancelar</button>
            </div>
        </form>
    `);
}

function toggleMontoPersonalizado() {
    const select = document.getElementById('nuevo-monto');
    const montoPersonalizado = document.getElementById('nuevo-monto-personalizado');
    
    if (select && montoPersonalizado) {
        if (select.value === 'personalizado') {
            montoPersonalizado.classList.remove('hidden');
        } else {
            montoPersonalizado.classList.add('hidden');
        }
    }
}

function confirmarCambioMonto(event, apadrinamientoId) {
    event.preventDefault();
    const apadrinamiento = apadrinamientos.find(a => a.id === apadrinamientoId);
    const nuevoMonto = document.getElementById('nuevo-monto').value;
    
    apadrinamiento.monto = nuevoMonto === 'personalizado' ? 
        document.getElementById('nuevo-monto-custom').value : nuevoMonto;
    
    hideModal();
    showMessage('Monto actualizado exitosamente', 'success');
    goToPage('mis-apadrinamientos');
}

function showPerfilUsuario() {
    document.querySelector('.container').innerHTML = `
        ${getNavbar()}
        
        <div class="main-content">
            <h2>Mi Perfil</h2>
            <p>Actualiza tu información personal y preferencias</p>
            
            <div class="card-grid">
                <div class="card">
                    <h3>Información Personal</h3>
                    <form onsubmit="actualizarPerfil(event)">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="nombre">Nombre</label>
                                <input type="text" id="nombre" class="form-control" value="${currentUser?.nombre || ''}" required>
                            </div>
                            <div class="form-group">
                                <label for="apellido">Apellido</label>
                                <input type="text" id="apellido" class="form-control" value="Pérez" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Correo Electrónico</label>
                            <input type="email" id="email" class="form-control" value="${currentUser?.email || ''}" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="telefono">Teléfono</label>
                            <input type="tel" id="telefono" class="form-control" value="${currentUser?.telefono || ''}" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="direccion">Dirección</label>
                            <textarea id="direccion" class="form-control" rows="3">${currentUser?.direccion || ''}</textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                    </form>
                </div>
                
                <div class="card">
                    <h3>Cambiar Contraseña</h3>
                    <form onsubmit="cambiarPassword(event)">
                        <div class="form-group">
                            <label for="password-actual">Contraseña Actual</label>
                            <input type="password" id="password-actual" class="form-control" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="password-nueva">Nueva Contraseña</label>
                            <input type="password" id="password-nueva" class="form-control" required>
                            <small style="color: #666;">Mínimo 8 caracteres, incluyendo mayúscula, minúscula, número y símbolo</small>
                        </div>
                        
                        <div class="form-group">
                            <label for="password-confirmar">Confirmar Nueva Contraseña</label>
                            <input type="password" id="password-confirmar" class="form-control" required>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Cambiar Contraseña</button>
                    </form>
                </div>
                
                <div class="card">
                    <h3>Preferencias de Notificación</h3>
                    <form onsubmit="actualizarNotificaciones(event)">
                        <div style="margin-bottom: 15px;">
                            <label style="display: flex; align-items: center; gap: 10px;">
                                <input type="checkbox" checked> Recibir informes mensuales por correo
                            </label>
                        </div>
                        
                        <div style="margin-bottom: 15px;">
                            <label style="display: flex; align-items: center; gap: 10px;">
                                <input type="checkbox" checked> Notificar cuando hay nuevo contenido del apadrinado
                            </label>
                        </div>
                        
                        <div style="margin-bottom: 15px;">
                            <label style="display: flex; align-items: center; gap: 10px;">
                                <input type="checkbox" checked> Recordatorios de donación mensual
                            </label>
                        </div>
                        
                        <div style="margin-bottom: 15px;">
                            <label style="display: flex; align-items: center; gap: 10px;">
                                <input type="checkbox"> Recibir noticias y actualizaciones de iSponsor
                            </label>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Guardar Preferencias</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function actualizarPerfil(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    
    // Simular actualización
    currentUser.nombre = nombre;
    currentUser.email = email;
    currentUser.telefono = telefono;
    currentUser.direccion = direccion;
    
    showMessage('Cambios guardados exitosamente', 'success');
}

function cambiarPassword(event) {
    event.preventDefault();
    
    const passwordActual = document.getElementById('password-actual').value;
    const passwordNueva = document.getElementById('password-nueva').value;
    const passwordConfirmar = document.getElementById('password-confirmar').value;
    
    if (!validatePassword(passwordNueva)) {
        showMessage('La nueva contraseña debe tener mínimo 8 caracteres, incluyendo mayúscula, minúscula, número y símbolo', 'error');
        return;
    }
    
    if (passwordNueva !== passwordConfirmar) {
        showMessage('Las contraseñas no coinciden', 'error');
        return;
    }
    
    showMessage('Contraseña actualizada exitosamente', 'success');
    
    // Limpiar campos
    document.getElementById('password-actual').value = '';
    document.getElementById('password-nueva').value = '';
    document.getElementById('password-confirmar').value = '';
}

function actualizarNotificaciones(event) {
    event.preventDefault();
    showMessage('Preferencias de notificación guardadas exitosamente', 'success');
}

function showHistorialDonaciones() {
    document.querySelector('.container').innerHTML = `
        ${getNavbar()}
        
        <div class="main-content">
            <h2>Historial de Donaciones</h2>
            <p>Revisa todas tus donaciones realizadas (solo demostración)</p>
            
            <div class="card">
                <h3>Resumen del Período</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
                    <div class="highlight-box" style="text-align: center;">
                        <div class="counter" style="font-size: 2rem;">$2,500</div>
                        <p>Total Donado</p>
                    </div>
                    <div class="highlight-box" style="text-align: center;">
                        <div class="counter" style="font-size: 2rem;">8</div>
                        <p>Donaciones Realizadas</p>
                    </div>
                    <div class="highlight-box" style="text-align: center;">
                        <div class="counter" style="font-size: 2rem;">3</div>
                        <p>Apadrinados Activos</p>
                    </div>
                    <div class="highlight-box" style="text-align: center;">
                        <div class="counter" style="font-size: 2rem;">$312</div>
                        <p>Promedio por Donación</p>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h3>Historial de Transacciones (Datos Simulados)</h3>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Apadrinado</th>
                                <th>Monto</th>
                                <th>Estado</th>
                                <th>Método</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15/12/2024</td>
                                <td>María González</td>
                                <td>$500</td>
                                <td><span class="status status-activo">Exitosa</span></td>
                                <td>Tarjeta</td>
                                <td><button class="btn btn-sm btn-secondary" onclick="showMessage('Recibo simulado descargado', 'success')">Ver Recibo</button></td>
                            </tr>
                            <tr>
                                <td>15/11/2024</td>
                                <td>Carlos Rodríguez</td>
                                <td>$300</td>
                                <td><span class="status status-activo">Exitosa</span></td>
                                <td>PayPal</td>
                                <td><button class="btn btn-sm btn-secondary" onclick="showMessage('Recibo simulado descargado', 'success')">Ver Recibo</button></td>
                            </tr>
                            <tr>
                                <td>20/10/2024</td>
                                <td>Ana López</td>
                                <td>$750</td>
                                <td><span class="status status-activo">Exitosa</span></td>
                                <td>Transferencia</td>
                                <td><button class="btn btn-sm btn-secondary" onclick="showMessage('Recibo simulado descargado', 'success')">Ver Recibo</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function showMensajes(apadrinadoId = null) {
    const apadrinado = apadrinadoId ? simulatedData.apadrinados.find(a => a.id == apadrinadoId) : null;
    
    document.querySelector('.container').innerHTML = `
        ${getNavbar()}
        
        <div class="main-content">
            <h2>Mensajes</h2>
            <p>Sistema de comunicación (solo demostración)${apadrinado ? ` - Conversación con ${apadrinado.nombre}` : ''}</p>
            
            ${!apadrinado ? `
                <div class="card">
                    <h3>Selecciona un Apadrinado para Enviar Mensaje</h3>
                    <div class="apadrinados-list">
                        ${apadrinamientos.map(apadrinamiento => `
                            <div class="apadrinado-item hover-lift" onclick="goToPage('mensajes', {apadrinadoId: ${apadrinamiento.apadrinadoId}})">
                                <div class="apadrinado-image" style="width: 50px; height: 50px;">${apadrinamiento.apadrinado.foto}</div>
                                <div style="flex: 1;">
                                    <h4>${apadrinamiento.apadrinado.nombre}</h4>
                                    <p>Última conversación: Hace 2 días</p>
                                </div>
                                <div class="status-indicator">Activo</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : `
                <div class="card-grid">
                    <div class="card">
                        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                            <div class="apadrinado-image" style="width: 80px; height: 80px;">${apadrinado.foto}</div>
                            <div>
                                <h3>${apadrinado.nombre}</h3>
                                <p>${apadrinado.edad} años - ${apadrinado.ubicacion}</p>
                                <span class="status-badge">Apadrinado</span>
                            </div>
                        </div>
                        
                        <div class="chat-container">
                            <div class="chat-messages">
                                <div class="message-item message-sent">
                                    <div class="message-content">
                                        <p>¡Hola! Me da mucha alegría poder apoyarte. ¿Cómo te va en la escuela?</p>
                                        <small>10/12/2024 10:30</small>
                                    </div>
                                </div>
                                <div class="message-item message-received">
                                    <div class="message-content">
                                        <p>¡Hola! Muchas gracias por tu apoyo. En la escuela me va muy bien.</p>
                                        <small>11/12/2024 16:45</small>
                                    </div>
                                </div>
                                <div class="message-item message-sent">
                                    <div class="message-content">
                                        <p>Me alegra saber que te va bien. ¿Cuál es tu materia favorita?</p>
                                        <small>12/12/2024 09:15</small>
                                    </div>
                                </div>
                                <div class="message-item message-received">
                                    <div class="message-content">
                                        <p>Mi materia favorita es matemáticas. Me gustan los números!</p>
                                        <small>13/12/2024 15:20</small>
                                    </div>
                                    <span class="unread-indicator">Nuevo</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="message-form">
                            <form onsubmit="enviarMensajeDemo(event)">
                                <div class="form-group">
                                    <label for="nuevo-mensaje">Escribe tu mensaje (solo demostración)</label>
                                    <textarea id="nuevo-mensaje" class="form-control" rows="3" placeholder="Escribe un mensaje para ${apadrinado.nombre}..."></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Enviar Mensaje (Demo)</button>
                            </form>
                        </div>
                    </div>
                    
                    <div class="card">
                        <h3>Mensajes Predefinidos</h3>
                        <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
                            <button class="btn btn-secondary" onclick="usarMensajePredefinido('¡Hola! ¿Cómo estás?')">Saludo</button>
                            <button class="btn btn-secondary" onclick="usarMensajePredefinido('¿Cómo van tus estudios?')">Estudios</button>
                            <button class="btn btn-secondary" onclick="usarMensajePredefinido('¡Felicitaciones por tus logros!')">Felicitación</button>
                        </div>
                        
                        <div style="margin-top: 20px;">
                            <h4>Estadísticas de Comunicación</h4>
                            <div class="highlight-box">
                                <p><strong>Mensajes enviados:</strong> 12</p>
                                <p><strong>Mensajes recibidos:</strong> 8</p>
                                <p><strong>Última comunicación:</strong> Ayer</p>
                            </div>
                        </div>
                    </div>
                </div>
            `}
        </div>
    `;
}

function showInformes() {
    document.querySelector('.container').innerHTML = `
        ${getNavbar()}
        
        <div class="main-content">
            <h2>Informes de Impacto</h2>
            <p>Reportes del progreso de tus apadrinados (datos simulados para demostración)</p>
            
            <div class="card">
                <h3>Resumen de Impacto Global</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
                    <div class="highlight-box" style="text-align: center;">
                        <div class="counter" style="font-size: 2.5rem; color: var(--primary-color);">3</div>
                        <p><strong>Apadrinados Activos</strong></p>
                        <small>Vidas transformándose</small>
                    </div>
                    <div class="highlight-box" style="text-align: center;">
                        <div class="counter" style="font-size: 2.5rem; color: var(--success-color);">$2,500</div>
                        <p><strong>Total Invertido</strong></p>
                        <small>En los últimos 6 meses</small>
                    </div>
                    <div class="highlight-box" style="text-align: center;">
                        <div class="counter" style="font-size: 2.5rem; color: var(--secondary-color);">15</div>
                        <p><strong>Mensajes Intercambiados</strong></p>
                        <small>Conexiones creadas</small>
                    </div>
                    <div class="highlight-box" style="text-align: center;">
                        <div class="counter" style="font-size: 2.5rem; color: var(--accent-color);">8</div>
                        <p><strong>Logros Alcanzados</strong></p>
                        <small>Metas cumplidas</small>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h3>Progreso Individual por Apadrinado</h3>
                <div class="progress-list">
                    ${apadrinamientos.map(apadrinamiento => `
                        <div class="progress-item">
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                                <div class="apadrinado-image" style="width: 60px; height: 60px;">${apadrinamiento.apadrinado.foto}</div>
                                <div style="flex: 1;">
                                    <h4>${apadrinamiento.apadrinado.nombre}</h4>
                                    <p>${apadrinamiento.apadrinado.edad} años - ${apadrinamiento.apadrinado.ubicacion}</p>
                                </div>
                                <div class="status-indicator">Progresando</div>
                            </div>
                            
                            <div class="progress-details">
                                <div class="progress-metric">
                                    <label>Asistencia Escolar</label>
                                    <div class="progress-bar-container">
                                        <div class="progress-bar" style="width: 85%"></div>
                                    </div>
                                    <span>85%</span>
                                </div>
                                
                                <div class="progress-metric">
                                    <label>Calificaciones</label>
                                    <div class="progress-bar-container">
                                        <div class="progress-bar" style="width: 78%; background: var(--success-color);"></div>
                                    </div>
                                    <span>78%</span>
                                </div>
                                
                                <div class="progress-metric">
                                    <label>Participación</label>
                                    <div class="progress-bar-container">
                                        <div class="progress-bar" style="width: 92%; background: var(--accent-color);"></div>
                                    </div>
                                    <span>92%</span>
                                </div>
                            </div>
                            
                            <div style="margin-top: 15px;">
                                <button class="btn btn-sm btn-primary" onclick="showMessage('Informe detallado simulado generado', 'success')">Ver Detalle</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Agregar después de la función goToPage (alrededor de la línea 120)

// Funciones para Casa Hogar
function showCasaHogarDashboard() {
    document.querySelector('.container').innerHTML = `
        ${getCasaHogarNavbar()}
        
        <div class="main-content">
            <div class="welcome-section">
                <h2>Panel de Administración - ${casaHogarData.perfil.nombre}</h2>
    };
    
    showMessage('Inicio de sesión exitoso', 'success');
    setTimeout(() => {
        goToPage('dashboard');
    }, 1000);
}

function handleRegister(event) {
    event.preventDefault();
    
    // Acceso directo para prototipo - sin validaciones
    currentUser = {
        nombre: 'Juan Pérez',
        email: 'demo@isponsor.com',
        telefono: '555-1234',
        direccion: 'Calle Principal 123'
    };
    
    showMessage('¡Cuenta creada exitosamente!', 'success');
    setTimeout(() => {
        goToPage('dashboard');
    }, 1000);
}

function validatePassword(password) {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return minLength && hasUpper && hasLower && hasNumber && hasSymbol;
}

function showRecuperarPassword() {
    showModal('Recuperar Contraseña', `
        <form onsubmit="handleRecuperarPassword(event)">
            <div class="form-group">
                <label for="email-recuperar">Correo Electrónico</label>
                <input type="email" id="email-recuperar" class="form-control" placeholder="tu@email.com" required>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Enviar Enlace</button>
            </div>
        </form>
    `);
}

function handleRecuperarPassword(event) {
    event.preventDefault();
    hideModal();
    showMessage('Se ha enviado un enlace de recuperación a tu correo electrónico', 'success');
}

function showMessage(text, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = text;
    
    // Insertar al principio del main-content si existe, sino al principio del container
    const target = document.querySelector('.main-content') || document.querySelector('.container');
    target.insertBefore(messageDiv, target.firstChild);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 5000);
}

function showModal(title, content, size = 'medium') {
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: ${size === 'large' ? '800px' : '500px'};">
            <div class="modal-header">
                <h3 class="modal-title">${title}</h3>
                <button class="close-btn" onclick="hideModal()">×</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });
}

function hideModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
        // Restaurar scroll del body
        document.body.style.overflow = '';
    }
}

function getNavbar() {
    return `
        <nav class="navbar">
            <div class="nav-content">
                <div class="nav-logo" onclick="goToPage('dashboard')">iSponsor</div>
                <ul class="nav-links">
                    <li><a href="#" onclick="goToPage('dashboard')" class="${currentPage === 'dashboard' ? 'active' : ''}">Inicio</a></li>
                    <li><a href="#" onclick="goToPage('buscar-apadrinados')" class="${currentPage === 'buscar-apadrinados' ? 'active' : ''}">Buscar</a></li>
                    <li><a href="#" onclick="goToPage('mis-apadrinamientos')" class="${currentPage === 'mis-apadrinamientos' ? 'active' : ''}">Mis Apadrinamientos</a></li>
                    <li><a href="#" onclick="goToPage('historial-donaciones')" class="${currentPage === 'historial-donaciones' ? 'active' : ''}">Donaciones</a></li>
                    <li><a href="#" onclick="goToPage('perfil-usuario')" class="${currentPage === 'perfil-usuario' ? 'active' : ''}">Perfil</a></li>
                    <li><a href="#" onclick="logout()">Cerrar Sesión</a></li>
                </ul>
            </div>
        </nav>
    `;
}

function logout() {
    currentUser = null;
    apadrinamientos = [];
    showMessage('Sesión cerrada exitosamente', 'success');
    setTimeout(() => {
        goToPage('home');
    }, 1500);
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    goToPage('home');
});
