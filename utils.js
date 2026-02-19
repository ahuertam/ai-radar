const AI_RANKINGS_KEY = 'ai_radar_rankings';
const LAST_UPDATE_KEY = 'ai_radar_last_update';

const defaultRankings = {
    chat: [
        { name: "ChatGPT", provider: "OpenAI", metric: "usuarios", value: "300M+", score: 1402 },
        { name: "Meta AI", provider: "Meta", metric: "usuarios", value: "250M+", score: 1350 },
        { name: "Gemini", provider: "Google", metric: "usuarios", value: "200M+", score: 1389 },
        { name: "Copilot", provider: "Microsoft", metric: "usuarios", value: "180M+", score: 1375 },
        { name: "Claude", provider: "Anthropic", metric: "usuarios", value: "120M+", score: 1398 },
        { name: "Perplexity", provider: "Perplexity AI", metric: "usuarios", value: "80M+", score: 1360 },
        { name: "Grok", provider: "xAI", metric: "usuarios", value: "60M+", score: 1375 },
        { name: "DeepSeek", provider: "DeepSeek", metric: "usuarios", value: "50M+", score: 1361 }
    ],
    power: [
        { name: "GPT-5.2 Pro", provider: "OpenAI", metric: "benchmark", value: "#1", score: 1402 },
        { name: "Claude Opus 4.6", provider: "Anthropic", metric: "benchmark", value: "#2", score: 1398 },
        { name: "Gemini 3 Pro", provider: "Google", metric: "benchmark", value: "#3", score: 1389 },
        { name: "Grok 4 Heavy", provider: "xAI", metric: "benchmark", value: "#4", score: 1375 },
        { name: "DeepSeek V3.2", provider: "DeepSeek", metric: "benchmark", value: "#5", score: 1361 },
        { name: "Claude Opus 4.5", provider: "Anthropic", metric: "benchmark", value: "#6", score: 1370 },
        { name: "Qwen 3.5", provider: "Alibaba", metric: "benchmark", value: "#7", score: 1342 },
        { name: "GPT-5.2", provider: "OpenAI", metric: "benchmark", value: "#8", score: 1380 }
    ],
    coding: [
        { name: "Claude Code", provider: "Anthropic", metric: "SWE-Bench", value: "72.5%", score: 80 },
        { name: "GPT-5.2 Codex", provider: "OpenAI", metric: "SWE-Bench", value: "70%", score: 78 },
        { name: "Cursor", provider: "Anthropic/OpenAI", metric: "usuarios", value: "2M+", score: 75 },
        { name: "GitHub Copilot", provider: "Microsoft", metric: "usuarios", value: "2M+", score: 73 },
        { name: "DeepSeek Coder", provider: "DeepSeek", metric: "SWE-Bench", value: "77.8%", score: 77 },
        { name: "Gemini CLI", provider: "Google", metric: "usuarios", value: "500K+", score: 70 },
        { name: "Qwen Coder", provider: "Alibaba", metric: "SWE-Bench", value: "62%", score: 65 },
        { name: "Aider", provider: "Open Source", metric: "usuarios", value: "100K+", score: 68 }
    ],
    image: [
        { name: "Midjourney v7", provider: "Midjourney", metric: "calidad", value: "#1", score: 95 },
        { name: "Flux 2", provider: "Black Forest Labs", metric: "calidad", value: "#2", score: 92 },
        { name: "DALL-E 3.5", provider: "OpenAI", metric: "calidad", value: "#3", score: 90 },
        { name: "Stable Diffusion 3.5", provider: "Stability AI", metric: "calidad", value: "#4", score: 88 },
        { name: "Ideogram 3.0", provider: "Ideogram", metric: "calidad", value: "#5", score: 87 },
        { name: "Adobe Firefly 3", provider: "Adobe", metric: "calidad", value: "#6", score: 85 },
        { name: "Imagen 3", provider: "Google", metric: "calidad", value: "#7", score: 88 },
        { name: "Recraft", provider: "Recraft AI", metric: "calidad", value: "#8", score: 82 }
    ],
    video: [
        { name: "Seedance 2.0", provider: "Seedance", metric: "calidad", value: "#1", score: 95 },
        { name: "Kling 3.0", provider: "Kuaishou", metric: "calidad", value: "#2", score: 93 },
        { name: "Sora 2", provider: "OpenAI", metric: "calidad", value: "#3", score: 92 },
        { name: "Veo 3.1", provider: "Google", metric: "calidad", value: "#4", score: 91 },
        { name: "Runway Gen-4", provider: "Runway", metric: "calidad", value: "#5", score: 89 },
        { name: "Luma Dream Machine", provider: "Luma AI", metric: "calidad", value: "#6", score: 86 },
        { name: "Pika 2.0", provider: "Pika Labs", metric: "calidad", value: "#7", score: 84 },
        { name: "Wan 2.1", provider: "Wan AI", metric: "calidad", value: "#8", score: 80 }
    ],
    audio: [
        { name: "Suno", provider: "Suno AI", metric: "calidad", value: "#1", score: 95 },
        { name: "Wave Music", provider: "Wave AI", metric: "calidad", value: "#2", score: 93 },
        { name: "AI Song", provider: "AI Song", metric: "calidad", value: "#3", score: 90 },
        { name: "Udio", provider: "Udio AI", metric: "calidad", value: "#4", score: 88 },
        { name: "Eleven Music", provider: "ElevenLabs", metric: "calidad", value: "#5", score: 92 },
        { name: "Stable Audio", provider: "Stability AI", metric: "calidad", value: "#6", score: 85 },
        { name: "Minimax Music", provider: "Minimax", metric: "calidad", value: "#7", score: 82 },
        { name: "Sonauto", provider: "Sonauto", metric: "calidad", value: "#8", score: 80 }
    ]
};

export function getStoredRankings() {
    const stored = localStorage.getItem(AI_RANKINGS_KEY);
    return stored ? JSON.parse(stored) : null;
}

export function saveRankings(rankings) {
    localStorage.setItem(AI_RANKINGS_KEY, JSON.stringify(rankings));
    localStorage.setItem(LAST_UPDATE_KEY, new Date().toISOString());
}

export function getLastUpdate() {
    return localStorage.getItem(LAST_UPDATE_KEY);
}

export function checkForChanges(currentRankings) {
    const stored = getStoredRankings();
    
    if (!stored) {
        saveRankings(currentRankings);
        return { hasChanges: true, changes: [], isFirstLoad: true };
    }
    
    const changes = [];
    
    for (const category in currentRankings) {
        if (!stored[category]) continue;
        
        const currentModels = currentRankings[category];
        const storedModels = stored[category];
        
        const currentNames = currentModels.map(m => m.name);
        const storedNames = storedModels.map(m => m.name);
        
        for (let i = 0; i < currentModels.length; i++) {
            const current = currentModels[i];
            const storedIdx = storedNames.indexOf(current.name);
            
            if (storedIdx === -1) {
                changes.push({
                    category,
                    type: 'new',
                    model: current.name,
                    position: i + 1
                });
            } else if (storedIdx !== i) {
                changes.push({
                    category,
                    type: 'rank_change',
                    model: current.name,
                    oldPosition: storedIdx + 1,
                    newPosition: i + 1
                });
            }
            
            if (stored[category][i] && stored[category][i].score !== current.score) {
                changes.push({
                    category,
                    type: 'score_update',
                    model: current.name,
                    oldScore: stored[category][i].score,
                    newScore: current.score
                });
            }
        }
        
        for (let i = 0; i < storedModels.length; i++) {
            if (!currentNames.includes(storedModels[i].name)) {
                changes.push({
                    category,
                    type: 'removed',
                    model: storedModels[i].name,
                    oldPosition: i + 1
                });
            }
        }
    }
    
    if (changes.length > 0) {
        saveRankings(currentRankings);
    }
    
    return {
        hasChanges: changes.length > 0,
        changes,
        isFirstLoad: false
    };
}

export function showUpdateNotification(changes) {
    const notification = document.createElement('div');
    notification.id = 'update-notification';
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #00d4ff, #8b5cf6);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        font-family: 'Inter', sans-serif;
        font-size: 0.9rem;
        z-index: 1000;
        box-shadow: 0 10px 40px rgba(0,0,0,0.4);
        animation: slideIn 0.3s ease;
    `;
    
    const changeCount = changes.length;
    notification.innerHTML = `
        <strong>🔄 Rankings actualizados</strong><br>
        ${changeCount} cambio${changeCount > 1 ? 's' : ''} detectado${changeCount > 1 ? 's' : ''}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

export function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export { defaultRankings };
