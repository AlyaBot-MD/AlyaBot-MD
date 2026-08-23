// Base de datos de APIs
const apisDatabase = [
    {
        id: 1,
        name: "OpenWeather API",
        category: "clima",
        icon: "🌤️",
        description: "API de clima y predicciones meteorológicas en tiempo real",
        status: "Activo",
        statusType: "active",
        limit: "1,000 llamadas/día",
        endpoint: "https://api.openweathermap.org/data/2.5/weather",
        documentation: "https://openweathermap.org/api",
        features: "• Clima actual • Pronóstico 5 días • Geocodificación • UV Index",
        requirements: "Clave API gratuita",
        code_example: `fetch('https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=YOUR_API_KEY')\n.then(res => res.json())\n.then(data => console.log(data))`
    },
    {
        id: 2,
        name: "REST Countries API",
        category: "datos",
        icon: "🌍",
        description: "Información detallada de todos los países del mundo",
        status: "Activo",
        statusType: "active",
        limit: "Ilimitado",
        endpoint: "https://restcountries.com/v3.1/all",
        documentation: "https://restcountries.com",
        features: "• Datos de países • Banderas • Monedas • Idiomas • Códigos",
        requirements: "Sin autenticación",
        code_example: `fetch('https://restcountries.com/v3.1/all')\n.then(res => res.json())\n.then(countries => console.log(countries))`
    },
    {
        id: 3,
        name: "JSONPlaceholder API",
        category: "datos",
        icon: "📝",
        description: "API de pruebas con datos ficticios para desarrollo",
        status: "Activo",
        statusType: "active",
        limit: "Ilimitado",
        endpoint: "https://jsonplaceholder.typicode.com",
        documentation: "https://jsonplaceholder.typicode.com",
        features: "• Posts • Usuarios • Comentarios • Fotos • TODOs",
        requirements: "Sin autenticación",
        code_example: `fetch('https://jsonplaceholder.typicode.com/posts/1')\n.then(res => res.json())\n.then(post => console.log(post))`
    },
    {
        id: 4,
        name: "Hugging Face API",
        category: "ai",
        icon: "🤖",
        description: "Acceso a modelos de IA y ML para procesamiento de lenguaje",
        status: "Activo",
        statusType: "active",
        limit: "Varía según modelo",
        endpoint: "https://api-inference.huggingface.co/models",
        documentation: "https://huggingface.co/docs/api-inference",
        features: "• NLP • Computer Vision • Traducción • Clasificación • Generación",
        requirements: "Token API gratuito",
        code_example: `const API_TOKEN = 'YOUR_TOKEN';\nconst response = await fetch('https://api-inference.huggingface.co/models/gpt2', {\n  headers: { Authorization: 'Bearer ' + API_TOKEN }\n});`
    },
    {
        id: 5,
        name: "Random User API",
        category: "datos",
        icon: "👥",
        description: "Generador de datos de usuarios aleatorios para pruebas",
        status: "Activo",
        statusType: "active",
        limit: "Ilimitado",
        endpoint: "https://randomuser.me/api",
        documentation: "https://randomuser.me/documentation",
        features: "• Usuarios aleatorios • Fotos • Datos personales • Ubicaciones",
        requirements: "Sin autenticación",
        code_example: `fetch('https://randomuser.me/api/?results=10')\n.then(res => res.json())\n.then(data => console.log(data.results))`
    },
    {
        id: 6,
        name: "OpenAI API (Free Trial)",
        category: "ai",
        icon: "✨",
        description: "Acceso a GPT-3.5 y otros modelos de IA avanzada",
        status: "Beta",
        statusType: "beta",
        limit: "$5 crédito inicial",
        endpoint: "https://api.openai.com/v1/chat/completions",
        documentation: "https://platform.openai.com/docs",
        features: "• ChatGPT • Completación de texto • Traducción • Análisis de sentimiento",
        requirements: "Tarjeta de crédito (prueba gratis)",
        code_example: `const response = await fetch('https://api.openai.com/v1/chat/completions', {\n  method: 'POST',\n  headers: { 'Authorization': 'Bearer YOUR_KEY' },\n  body: JSON.stringify({ model: 'gpt-3.5-turbo', messages: [] })\n});`
    },
    {
        id: 7,
        name: "Pexels API",
        category: "media",
        icon: "📸",
        description: "Fotos de alta calidad gratuitas para proyectos",
        status: "Activo",
        statusType: "active",
        limit: "10,000 llamadas/hora",
        endpoint: "https://api.pexels.com/v1/search",
        documentation: "https://www.pexels.com/api",
        features: "• Búsqueda de fotos • Colecciones • Vídeos • Licencia gratuita",
        requirements: "Clave API gratuita",
        code_example: `fetch('https://api.pexels.com/v1/search?query=nature&per_page=15', {\n  headers: { Authorization: 'YOUR_API_KEY' }\n}).then(res => res.json())`
    },
    {
        id: 8,
        name: "CoinGecko API",
        category: "datos",
        icon: "💰",
        description: "Datos de criptomonedas, precios y análisis de mercado",
        status: "Activo",
        statusType: "active",
        limit: "10-50 llamadas/minuto",
        endpoint: "https://api.coingecko.com/api/v3/simple/price",
        documentation: "https://www.coingecko.com/api/documentations/v3",
        features: "• Precios • Mercado • Históricos • Exchanges • Noticias",
        requirements: "Sin autenticación",
        code_example: `fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')\n.then(res => res.json())`
    },
    {
        id: 9,
        name: "Spotify API",
        category: "media",
        icon: "🎵",
        description: "Acceso a datos de música, artistas y recomendaciones",
        status: "Activo",
        statusType: "active",
        limit: "Varía según tier",
        endpoint: "https://api.spotify.com/v1",
        documentation: "https://developer.spotify.com/documentation/web-api",
        features: "• Búsqueda • Playlists • Recomendaciones • Información de artistas",
        requirements: "Cuenta y clave API",
        code_example: `fetch('https://api.spotify.com/v1/search?q=artist:beatles&type=artist', {\n  headers: { Authorization: 'Bearer YOUR_TOKEN' }\n}).then(res => res.json())`
    },
    {
        id: 10,
        name: "NewsAPI",
        category: "datos",
        icon: "📰",
        description: "Noticias en tiempo real de múltiples fuentes",
        status: "Activo",
        statusType: "active",
        limit: "100 llamadas/día (gratuito)",
        endpoint: "https://newsapi.org/v2/everything",
        documentation: "https://newsapi.org/docs",
        features: "• Búsqueda de noticias • Fuentes • Categorías • Idiomas múltiples",
        requirements: "Clave API gratuita",
        code_example: `fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=YOUR_KEY')\n.then(res => res.json())\n.then(data => console.log(data.articles))`
    },
    {
        id: 11,
        name: "Clarifai AI API",
        category: "ai",
        icon: "👁️",
        description: "Visión por computadora y reconocimiento de imágenes",
        status: "Activo",
        statusType: "active",
        limit: "Créditos gratuitos iniciales",
        endpoint: "https://api.clarifai.com/v2/models/image-classifier/outputs",
        documentation: "https://docs.clarifai.com",
        features: "• Clasificación de imágenes • Detección de objetos • Análisis visual",
        requirements: "Clave API",
        code_example: `// Requiere configuración específica\nconst Clarifai = require('clarifai');\nconst client = new Clarifai.Stub({...});`
    },
    {
        id: 12,
        name: "Google Fonts API",
        category: "media",
        icon: "🔤",
        description: "Acceso a miles de fuentes tipográficas de Google",
        status: "Activo",
        statusType: "active",
        limit: "Ilimitado",
        endpoint: "https://www.googleapis.com/webfonts/v1/webfonts",
        documentation: "https://developers.google.com/fonts/docs/getting_started",
        features: "• Catálogo de fuentes • Familias tipográficas • Metadata • Descargas",
        requirements: "Clave API de Google Cloud",
        code_example: `fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=YOUR_KEY')\n.then(res => res.json())\n.then(fonts => console.log(fonts.items))`
    },
    {
        id: 13,
        name: "Giphy API",
        category: "media",
        icon: "🎬",
        description: "Base de datos de GIFs animados y videos cortos",
        status: "Activo",
        statusType: "active",
        limit: "5,000 llamadas/hora",
        endpoint: "https://api.giphy.com/v1/gifs/search",
        documentation: "https://developers.giphy.com/docs",
        features: "• Búsqueda de GIFs • Trending • Trending Stickers • Ratos aleatorios",
        requirements: "Clave API gratuita",
        code_example: `fetch('https://api.giphy.com/v1/gifs/search?q=cat&api_key=YOUR_KEY')\n.then(res => res.json())`
    },
    {
        id: 14,
        name: "OMDB API",
        category: "media",
        icon: "🎥",
        description: "Base de datos de películas y series de TV",
        status: "Activo",
        statusType: "active",
        limit: "1,000 llamadas/día",
        endpoint: "https://www.omdbapi.com",
        documentation: "http://www.omdbapi.com/",
        features: "• Búsqueda de películas • Información detallada • Calificaciones • Pósters",
        requirements: "Clave API",
        code_example: `fetch('https://www.omdbapi.com/?t=Inception&apikey=YOUR_KEY')\n.then(res => res.json())\n.then(movie => console.log(movie))`
    },
    {
        id: 15,
        name: "Unsplash API",
        category: "media",
        icon: "📷",
        description: "Fotos de stock de alta resolución gratuitas",
        status: "Activo",
        statusType: "active",
        limit: "50 llamadas/hora",
        endpoint: "https://api.unsplash.com/search/photos",
        documentation: "https://unsplash.com/developers",
        features: "• Búsqueda de fotos • Colecciones • Usuarios • Descargas de calidad",
        requirements: "Clave API",
        code_example: `fetch('https://api.unsplash.com/search/photos?query=nature&client_id=YOUR_KEY')\n.then(res => res.json())`
    },
    {
        id: 16,
        name: "Exchange Rate API",
        category: "datos",
        icon: "💱",
        description: "Tasas de cambio de divisas actualizadas en tiempo real",
        status: "Activo",
        statusType: "active",
        limit: "1,500 llamadas/mes",
        endpoint: "https://api.exchangerate-api.com/v4/latest",
        documentation: "https://www.exchangerate-api.com/docs",
        features: "• Tasas actuales • Históricos • Conversiones • Múltiples divisas",
        requirements: "Clave API gratuita",
        code_example: `fetch('https://api.exchangerate-api.com/v4/latest/USD')\n.then(res => res.json())\n.then(data => console.log(data.rates))`
    },
    {
        id: 17,
        name: "Discord Bot API",
        category: "otro",
        icon: "🎮",
        description: "API oficial para crear bots de Discord",
        status: "Activo",
        statusType: "active",
        limit: "Sin límite",
        endpoint: "https://discord.com/api/v10",
        documentation: "https://discord.com/developers/docs",
        features: "• Gestión de servidores • Mensajes • Usuarios • Webhooks • Roles",
        requirements: "Token de bot",
        code_example: `const Discord = require('discord.js');\nconst client = new Discord.Client();\nclient.login(process.env.DISCORD_TOKEN);`
    },
    {
        id: 18,
        name: "Telegram Bot API",
        category: "otro",
        icon: "💬",
        description: "API para crear bots inteligentes en Telegram",
        status: "Activo",
        statusType: "active",
        limit: "Sin límite",
        endpoint: "https://api.telegram.org/bot<TOKEN>",
        documentation: "https://core.telegram.org/bots/api",
        features: "• Mensajes • Comandos • Botones • Archivos • Ubicaciones",
        requirements: "Token de bot",
        code_example: `const TelegramBot = require('node-telegram-bot-api');\nconst bot = new TelegramBot(TOKEN, { polling: true });`
    },
    {
        id: 19,
        name: "WhatsApp Cloud API",
        category: "otro",
        icon: "📱",
        description: "API para integrar WhatsApp en aplicaciones",
        status: "Activo",
        statusType: "active",
        limit: "1,000 mensajes/día",
        endpoint: "https://graph.instagram.com/v18.0",
        documentation: "https://developers.facebook.com/docs/whatsapp/cloud-api",
        features: "• Envío de mensajes • Plantillas • Webhooks • Media • Estados",
        requirements: "Cuenta Meta Business",
        code_example: `const axios = require('axios');\naxios.post('https://graph.instagram.com/.../messages', {...});`
    },
    {
        id: 20,
        name: "Twilio API",
        category: "otro",
        icon: "☎️",
        description: "Comunicaciones por SMS, voz y video",
        status: "Activo",
        statusType: "active",
        limit: "Crédito de prueba",
        endpoint: "https://api.twilio.com/2010-04-01",
        documentation: "https://www.twilio.com/docs",
        features: "• SMS • Llamadas • Video • Whatsapp • Email",
        requirements: "Cuenta Twilio",
        code_example: `const twilio = require('twilio');\nconst client = twilio(accountSid, authToken);\nclient.messages.create({...});`
    },
    {
        id: 21,
        name: "Replicate AI",
        category: "ai",
        icon: "🚀",
        description: "Ejecución de modelos de IA sin mantener servidores",
        status: "Activo",
        statusType: "active",
        limit: "Créditos iniciales",
        endpoint: "https://api.replicate.com/v1",
        documentation: "https://replicate.com/docs",
        features: "• Modelos variados • Generación de imágenes • Procesamiento • Sin GPU",
        requirements: "Clave API",
        code_example: `const Replicate = require('replicate');\nconst replicate = new Replicate({...});\nawait replicate.run('...', {...});`
    },
    {
        id: 22,
        name: "Stripe API (Free Test)",
        category: "datos",
        icon: "💳",
        description: "Procesamiento de pagos y gestión de transacciones",
        status: "Activo",
        statusType: "active",
        limit: "Modo test sin límites",
        endpoint: "https://api.stripe.com/v1",
        documentation: "https://stripe.com/docs/api",
        features: "• Pagos • Suscripciones • Facturas • Clientes • Webhooks",
        requirements: "Cuenta Stripe",
        code_example: `const stripe = require('stripe')('sk_test_...');\nconst payment = await stripe.paymentIntents.create({...});`
    },
    {
        id: 23,
        name: "GitHub API",
        category: "datos",
        icon: "🐙",
        description: "Acceso a datos de repositorios, usuarios y eventos",
        status: "Activo",
        statusType: "active",
        limit: "60 llamadas/hora (anónimo)",
        endpoint: "https://api.github.com",
        documentation: "https://docs.github.com/en/rest",
        features: "• Repos • Usuarios • Issues • PRs • Commits • Gists",
        requirements: "Sin autenticación (limitado)",
        code_example: `fetch('https://api.github.com/users/github')\n.then(res => res.json())\n.then(user => console.log(user))`
    },
    {
        id: 24,
        name: "Lorem Picsum API",
        category: "media",
        icon: "🖼️",
        description: "Imágenes de placeholder de alta calidad",
        status: "Activo",
        statusType: "active",
        limit: "Ilimitado",
        endpoint: "https://picsum.photos",
        documentation: "https://picsum.photos/",
        features: "• Imágenes aleatorias • Dimensiones personalizables • Filtros • Caché",
        requirements: "Sin autenticación",
        code_example: `<img src="https://picsum.photos/400/300" alt="Random image">`
    }
];

let currentFilter = 'all';
let currentModal = null;

// Cargar todas las APIs al iniciar
document.addEventListener('DOMContentLoaded', () => {
    renderAPIs(apisDatabase);
    renderStats();
    addFooter();
});

// Renderizar APIs
function renderAPIs(apis) {
    const container = document.getElementById('apisContainer');
    container.innerHTML = '';

    if (apis.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <div class="no-results-text">No se encontraron APIs</div>
                <p>Intenta con otros términos de búsqueda</p>
            </div>
        `;
        return;
    }

    apis.forEach(api => {
        const card = document.createElement('div');
        card.className = 'api-card';
        card.innerHTML = `
            <div class="api-card-header">
                <span class="api-icon">${api.icon}</span>
                <div>
                    <div class="api-title">${api.name}</div>
                    <span class="api-status status-${api.statusType}">${api.status}</span>
                </div>
            </div>
            <span class="api-category">${capitalizeCategory(api.category)}</span>
            <p class="api-description">${api.description}</p>
            <div class="api-features">${api.features}</div>
            <p class="api-limit">📊 Límite: ${api.limit}</p>
            <div class="api-buttons">
                <button class="btn btn-primary" onclick="openModal(${api.id})">👁️ Ver Detalles</button>
                <button class="btn btn-secondary" onclick="copyToClipboard('${api.endpoint}')">📋 Endpoint</button>
                <button class="btn btn-info" onclick="downloadDocumentation(${api.id})">📚 Docs</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Renderizar estadísticas
function renderStats() {
    const stats = document.querySelectorAll('.stats-section');
    if (stats.length === 0) {
        const statsHTML = `
            <div class="stats-section">
                <div class="stat-card">
                    <div class="stat-number">${apisDatabase.length}</div>
                    <div class="stat-label">APIs Disponibles</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">Disponibilidad</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">Gratis</div>
                    <div class="stat-label">Sin Costo</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">✓ Premium</div>
                    <div class="stat-label">Soporte</div>
                </div>
            </div>
        `;
        
        const searchSection = document.querySelector('.search-section');
        searchSection.insertAdjacentHTML('beforebegin', statsHTML);
    }
}

// Abrir modal
function openModal(apiId) {
    const api = apisDatabase.find(a => a.id === apiId);
    if (!api) return;

    currentModal = api;

    document.getElementById('modalTitle').textContent = api.name;
    document.getElementById('modalDescription').textContent = api.description;
    document.getElementById('modalCategory').textContent = capitalizeCategory(api.category);
    document.getElementById('modalLimit').textContent = api.limit;
    document.getElementById('modalStatus').innerHTML = `
        <span class="api-status status-${api.statusType}">${api.status}</span>
    `;
    document.getElementById('modalDocs').href = api.documentation;
    document.getElementById('modalDocs').textContent = 'Ver Documentación →';

    // Reemplazar botones de acciones
    const modalActions = document.querySelector('.modal-actions');
    modalActions.innerHTML = `
        <button class="btn btn-primary" onclick="copyCode()">📋 Copiar Código</button>
        <button class="btn btn-success" onclick="downloadAPI()">⬇️ Descargar JSON</button>
        <button class="btn btn-secondary" onclick="openInNewTab('${api.documentation}')">🔗 Ir a Docs</button>
    `;

    // Agregar ejemplo de código
    const modalInfo = document.querySelector('.modal-info');
    modalInfo.innerHTML += `
        <div style="margin-top: 20px; background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px;">
            <strong style="color: var(--primary-color);">Ejemplo de uso:</strong>
            <pre style="color: #90ee90; overflow-x: auto; margin-top: 10px; font-size: 0.85em;">${escapeHtml(api.code_example)}</pre>
        </div>
    `;

    document.getElementById('detailsModal').style.display = 'block';
}

// Cerrar modal
function closeModal(event) {
    if (event && event.target.id !== 'detailsModal') return;
    document.getElementById('detailsModal').style.display = 'none';
    currentModal = null;
}

// Copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('✓ Copiado al portapapeles');
    }).catch(() => {
        showToast('✗ Error al copiar', 'error');
    });
}

// Copiar código
function copyCode() {
    if (currentModal) {
        copyToClipboard(currentModal.code_example);
        showToast('✓ Código de ejemplo copiado');
    }
}

// Descargar API como JSON
function downloadAPI() {
    if (currentModal) {
        const dataStr = JSON.stringify(currentModal, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${currentModal.name.replace(/\s+/g, '_')}.json`;
        link.click();
        URL.revokeObjectURL(url);
        showToast('✓ API descargada como JSON');
    }
}

// Abrir en nueva pestaña
function openInNewTab(url) {
    window.open(url, '_blank');
}

// Filtrar APIs por búsqueda
function filterAPIs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = apisDatabase.filter(api => {
        const matchesSearch = api.name.toLowerCase().includes(searchTerm) ||
                            api.description.toLowerCase().includes(searchTerm) ||
                            api.features.toLowerCase().includes(searchTerm);
        const matchesCategory = currentFilter === 'all' || api.category === currentFilter;
        return matchesSearch && matchesCategory;
    });
    renderAPIs(filtered);
}

// Filtrar por categoría
function filterByCategory(category) {
    currentFilter = category;
    
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    filterAPIs();
}

// Mostrar notificación
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    if (type === 'error') {
        toast.style.background = 'var(--danger-color)';
    }
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideUp 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Capitalizar categoría
function capitalizeCategory(category) {
    const map = {
        'ai': 'Inteligencia Artificial',
        'clima': 'Clima',
        'datos': 'Datos',
        'media': 'Media',
        'otro': 'Otros'
    };
    return map[category] || category;
}

// Descargar documentación
function downloadDocumentation(apiId) {
    const api = apisDatabase.find(a => a.id === apiId);
    if (api) {
        openInNewTab(api.documentation);
    }
}

// Escapar HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Agregar pie de página
function addFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>🤖 <strong>AlyaBot-MD API Portal</strong> - Portal de APIs Gratuitas</p>
        <p>Creador: <strong>Yoel</strong> | Última actualización: ${new Date().toLocaleDateString('es-ES')}</p>
        <p>
            <a href="https://github.com/AlyaBot-MD" target="_blank">GitHub</a> •
            <a href="https://discord.gg/alyabot" target="_blank">Discord</a> •
            <a href="mailto:support@alyabot.com">Contacto</a>
        </p>
        <p style="margin-top: 20px; opacity: 0.7;">© 2024 AlyaBot-MD. Todos los derechos reservados.</p>
    `;
    document.body.appendChild(footer);
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', (e) => {
    const modal = document.getElementById('detailsModal');
    if (e.target === modal) {
        closeModal(e);
    }
});

// Permitir cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
