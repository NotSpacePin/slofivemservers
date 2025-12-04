// FiveM Server Data Fetcher
// Fetches live server data and displays Slovenian servers

// Official FiveM endpoints
const FIVEM_DIRECT_URLS = [
    'https://servers-frontend.fivem.net/api/servers/?limit=500',
    'https://cfx.re/api/servers/list.json',
];

// Reliable CORS proxies that handle JSON properly
const CORS_PROXIES = [
    'https://thingproxy.freeboard.io/fetch/',
    'https://api.codetabs.com/v1/proxy?quest=',
];

// Keywords that indicate Slovenian servers
const SLOVENIAN_KEYWORDS = ['slovenia', 'slovenija', 'slovenski', 'slo', 'si ', 'slovenian', 'hrvat'];

/**
 * Check if a server appears to be Slovenian based on name or description
 */
function isSlovenianServer(server) {
    const name = (server.Data?.server || '').toLowerCase();
    const description = (server.Data?.description || '').toLowerCase();
    const locale = (server.Data?.locale || '').toLowerCase();
    
    const combinedText = `${name} ${description} ${locale}`;
    
    return SLOVENIAN_KEYWORDS.some(keyword => combinedText.includes(keyword));
}

/**
 * Format player count with current/max
 */
function getPlayerCount(server) {
    const players = server.Data?.players || 0;
    const maxPlayers = server.Data?.maxClients || 128;
    return `${players}/${maxPlayers}`;
}

/**
 * Get server description or create one from name
 */
function getServerDescription(server) {
    return server.Data?.description || 'FiveM Role-Playing Server';
}

/**
 * Fetch servers using multiple strategies (direct + CORS proxies)
 */
async function fetchServers() {
    let lastError = null;
    
    // Strategy 1: Try direct endpoints
    for (const endpoint of FIVEM_DIRECT_URLS) {
        try {
            console.log(`[Strategy 1] Trying direct endpoint: ${endpoint}`);
            return await fetchWithTimeout(endpoint, 8000);
        } catch (error) {
            lastError = error;
            console.warn(`✗ Direct endpoint failed: ${error.message}`);
        }
    }
    
    // Strategy 2: Try CORS proxies
    for (const proxy of CORS_PROXIES) {
        for (const url of FIVEM_DIRECT_URLS) {
            try {
                const proxiedUrl = proxy + encodeURIComponent(url);
                console.log(`[Strategy 2] Trying CORS proxy: ${proxy}...`);
                return await fetchWithTimeout(proxiedUrl, 8000);
            } catch (error) {
                lastError = error;
                console.warn(`✗ CORS proxy failed: ${error.message}`);
            }
        }
    }
    
    // All strategies failed
    throw new Error(`CORS blocked all requests. This is normal for local/static hosting. Using demo mode. Details: ${lastError?.message || 'Unknown'}`);
}

/**
 * Fetch with timeout
 */
async function fetchWithTimeout(url, timeoutMs = 8000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    
    try {
        const response = await fetch(url, {
            headers: { 'Accept': 'application/json' },
            signal: controller.signal,
            mode: 'cors'
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const text = await response.text();
        const data = JSON.parse(text);
        
        // Handle multiple response formats
        const servers = Array.isArray(data) ? data : (data.servers || data.data || []);
        
        if (servers.length === 0) {
            throw new Error('No servers in response');
        }
        
        console.log(`✓ Successfully fetched ${servers.length} total servers`);
        
        // Filter for Slovenian servers, fall back to all if none found
        const slovenianServers = servers.filter(isSlovenianServer);
        console.log(`Found ${slovenianServers.length} Slovenian servers`);
        
        return slovenianServers.length > 0 ? slovenianServers : servers.slice(0, 15);
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }

/**
 * Render a single server card
 */
function createServerCard(server) {
    const card = document.createElement('div');
    card.className = 'server-card';
    
    const isOnline = server.Data?.players !== undefined;
    const statusClass = isOnline ? 'online' : 'offline';
    const statusText = isOnline ? 'Online' : 'Offline';
    
    const serverName = server.Data?.server || 'Unknown Server';
    const playerCount = getPlayerCount(server);
    const description = getServerDescription(server);
    
    card.innerHTML = `
        <div class="server-header">
            <h3>${escapeHtml(serverName)}</h3>
            <span class="server-status ${statusClass}">${statusText}</span>
        </div>
        <p class="server-description">${escapeHtml(description)}</p>
        <div class="server-info">
            <span>🎮 Igralci: ${escapeHtml(playerCount)}</span>
        </div>
        <button class="connect-btn" onclick="copyToClipboard('${escapeHtml(server.EndPoint)}')" title="Klikni za kopiranje IP naslova">
            Kopirај IP
        </button>
    `;
    
    return card;
}

/**
 * Get demo/sample Slovenian servers (fallback if API fails)
 */
function getDemoServers() {
    return [
        {
            Data: {
                server: '🇸🇮 Slovenija RolePlay Premium',
                description: 'Največji Slovenian RP server - Igranje kot pravi državljan, realistična simulacija življenja',
                players: 85,
                maxClients: 150,
                locale: 'sl'
            },
            EndPoint: '185.169.252.100:30120'
        },
        {
            Data: {
                server: '🇸🇮 Ljubljana City Server 2.0',
                description: 'Igraj v Ljubljani - Sodoben RP server s kvalitetnimi skriptami in prijazno skupino',
                players: 64,
                maxClients: 128,
                locale: 'sl'
            },
            EndPoint: '185.169.252.101:30120'
        },
        {
            Data: {
                server: '🇸🇮 Slovenski Extreme RP',
                description: 'Adrenalinskega napolnjena doživetja - PvP, Business, Gang Role-Play',
                players: 92,
                maxClients: 150,
                locale: 'sl'
            },
            EndPoint: '185.169.252.102:30120'
        },
        {
            Data: {
                server: '🇸🇮 Nova Slovenija',
                description: 'Čisto nov projekt - Prihodnost Slovenskega RP, pride se nam',
                players: 34,
                maxClients: 100,
                locale: 'sl'
            },
            EndPoint: '185.169.252.103:30120'
        },
        {
            Data: {
                server: '🇸🇮 Slovenian Business Server',
                description: 'Fokus na poslovnem Role-Playu - Lastni podjetja, trgovine, bankomatizacija',
                players: 45,
                maxClients: 128,
                locale: 'sl'
            },
            EndPoint: '185.169.252.104:30120'
        },
        {
            Data: {
                server: '🇸🇮 Mariborski RP',
                description: 'Lokalno namenjen server - Igraj v Mariboru z lokalnim komunti',
                players: 28,
                maxClients: 100,
                locale: 'sl'
            },
            EndPoint: '185.169.252.105:30120'
        }
    ];
}


function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Copy server IP to clipboard
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('IP naslov je bil kopiran v odložišče!');
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Napaka pri kopiranju IP naslova');
    });
}

/**
 * Display loading state
 */
function showLoading() {
    const grid = document.querySelector('.servers-grid');
    if (grid) {
        grid.innerHTML = '<div class="loading"><span class="spinner"></span>Nalagam strežnike...</div>';
    }
}

/**
 * Display error message
 */
function showError(message) {
    const grid = document.querySelector('.servers-grid');
    if (grid) {
        grid.innerHTML = `
            <div class="error">
                <div style="margin-bottom: 0.5rem;">⚠️ Napaka pri nalaganju strežnikov</div>
                <div style="font-size: 0.9rem; opacity: 0.9;">${escapeHtml(message)}</div>
                <div style="font-size: 0.85rem; margin-top: 0.5rem; opacity: 0.7;">
                    Odpri konzolo (F12) za več informacij
                </div>
            </div>
        `;
    }
}

/**
 * Display "no servers found" message
 */
function showNoServers() {
    const grid = document.querySelector('.servers-grid');
    if (grid) {
        grid.innerHTML = '<div class="no-data">Trenutno ni dostopnih slovenskih strežnikov</div>';
    }
}

/**
 * Load and display servers
 */
async function loadServers() {
    const grid = document.querySelector('.servers-grid');
    
    if (!grid) {
        console.log('Server grid not found on this page');
        return;
    }
    
    showLoading();
    
    try {
        let servers = await fetchServers();
        
        if (servers.length === 0) {
            showNoServers();
            return;
        }
        
        renderServers(servers);
    } catch (error) {
        console.error('Failed to fetch live servers:', error.message);
        
        // Fallback: Show demo servers
        console.log('Showing demo servers as fallback');
        const demoServers = getDemoServers();
        
        grid.innerHTML = '<div style="grid-column: 1 / -1; padding: 1rem; background: #2c2414; border-left: 4px solid #ffa500; border-radius: 8px; margin-bottom: 1rem; color: #ffb84d;"><strong>ℹ️ Demo mode:</strong> Prikazujem primere strežnikov. Pravi podatki o strežnikih bodo na voljo kmalu.</div>';
        
        renderServers(demoServers);
    }
}

/**
 * Render servers to the grid
 */
function renderServers(servers) {
    const grid = document.querySelector('.servers-grid');
    if (!grid) return;
    
    // Sort servers by player count (descending)
    servers.sort((a, b) => {
        const playersA = a.Data?.players || 0;
        const playersB = b.Data?.players || 0;
        return playersB - playersA;
    });
    
    // Clear grid and add server cards
    grid.innerHTML = '';
    servers.forEach(server => {
        const card = createServerCard(server);
        grid.appendChild(card);
    });
    
    console.log('Servers rendered successfully');
}

/**
 * Refresh servers every 60 seconds
 */
function startAutoRefresh() {
    // Initial load
    loadServers();
    
    // Refresh every 60 seconds
    setInterval(loadServers, 60000);
}

// Load servers when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startAutoRefresh);
} else {
    startAutoRefresh();
}
