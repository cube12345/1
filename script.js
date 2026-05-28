// Default time zones
const DEFAULT_TIMEZONES = [
    'America/New_York',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Australia/Sydney',
    'Asia/Dubai'
];

// Store active timezones
let activeTimezones = [...DEFAULT_TIMEZONES];

// Valid timezones list (common ones)
const VALID_TIMEZONES = new Set([
    'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
    'America/Anchorage', 'Pacific/Honolulu', 'America/Toronto', 'America/Mexico_City',
    'America/Sao_Paulo', 'America/Buenos_Aires', 'Europe/London', 'Europe/Paris',
    'Europe/Berlin', 'Europe/Madrid', 'Europe/Rome', 'Europe/Amsterdam',
    'Europe/Moscow', 'Asia/Istanbul', 'Asia/Dubai', 'Asia/Kolkata',
    'Asia/Bangkok', 'Asia/Singapore', 'Asia/Hong_Kong', 'Asia/Shanghai',
    'Asia/Tokyo', 'Asia/Seoul', 'Australia/Sydney', 'Australia/Melbourne',
    'Australia/Brisbane', 'Australia/Perth', 'Pacific/Auckland', 'Pacific/Fiji',
    'UTC', 'GMT', 'Africa/Cairo', 'Africa/Johannesburg', 'Africa/Lagos'
]);

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('addBtn');
    const resetBtn = document.getElementById('resetBtn');
    const timezoneInput = document.getElementById('timezoneInput');

    addBtn.addEventListener('click', addTimezone);
    resetBtn.addEventListener('click', resetToDefault);
    timezoneInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTimezone();
    });

    // Initial render
    renderClocks();
    
    // Update clocks every second
    setInterval(renderClocks, 1000);
});

/**
 * Add a new timezone to the list
 */
function addTimezone() {
    const input = document.getElementById('timezoneInput');
    const timezone = input.value.trim();

    if (!timezone) {
        showMessage('Please enter a timezone', 'error');
        return;
    }

    if (!VALID_TIMEZONES.has(timezone)) {
        showMessage(`Invalid timezone: "${timezone}". Please check the name.`, 'error');
        return;
    }

    if (activeTimezones.includes(timezone)) {
        showMessage(`Timezone "${timezone}" is already added.`, 'error');
        return;
    }

    activeTimezones.push(timezone);
    input.value = '';
    showMessage(`Added ${timezone}!`, 'success');
    renderClocks();
}

/**
 * Reset to default timezones
 */
function resetToDefault() {
    activeTimezones = [...DEFAULT_TIMEZONES];
    renderClocks();
    showMessage('Reset to default timezones', 'success');
}

/**
 * Remove a timezone from the list
 */
function removeTimezone(timezone) {
    activeTimezones = activeTimezones.filter(tz => tz !== timezone);
    renderClocks();
}

/**
 * Render all clock displays
 */
function renderClocks() {
    const container = document.getElementById('clocksContainer');

    if (activeTimezones.length === 0) {
        container.innerHTML = '<div class="empty-state">No timezones added. Add one to get started!</div>';
        return;
    }

    container.innerHTML = activeTimezones.map(timezone => {
        const now = new Date();
        const timeString = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).format(now);

        const dateString = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(now);

        const offset = getTimezoneOffset(timezone);

        return `
            <div class="clock">
                <div class="clock-timezone">${timezone}</div>
                <div class="clock-time">${timeString}</div>
                <div class="clock-date">${dateString}</div>
                <div class="clock-offset">UTC ${offset}</div>
                <button class="remove-btn" onclick="removeTimezone('${timezone}')">Remove</button>
            </div>
        `;
    }).join('');
}

/**
 * Calculate timezone offset from UTC
 */
function getTimezoneOffset(timezone) {
    const utcDate = new Date();
    const tzDate = new Date(utcDate.toLocaleString('en-US', { timeZone: timezone }));
    const offset = (tzDate.getTime() - utcDate.getTime()) / (1000 * 60 * 60);
    
    const sign = offset >= 0 ? '+' : '';
    const hours = Math.floor(Math.abs(offset));
    const minutes = Math.round((Math.abs(offset) - hours) * 60);
    
    return `${sign}${hours}:${minutes.toString().padStart(2, '0')}`;
}

/**
 * Show temporary message
 */
function showMessage(text, type) {
    const container = document.getElementById('clocksContainer');
    const message = document.createElement('div');
    message.className = type;
    message.textContent = text;
    message.style.position = 'fixed';
    message.style.top = '20px';
    message.style.left = '50%';
    message.style.transform = 'translateX(-50%)';
    message.style.zIndex = '1000';
    message.style.maxWidth = '90%';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

/**
 * Example timezones with descriptions
 */
const TIMEZONE_EXAMPLES = {
    'America/New_York': 'Eastern Time (US)',
    'America/Chicago': 'Central Time (US)',
    'America/Denver': 'Mountain Time (US)',
    'America/Los_Angeles': 'Pacific Time (US)',
    'Europe/London': 'London (GMT)',
    'Europe/Paris': 'Paris (CET)',
    'Europe/Berlin': 'Berlin (CET)',
    'Asia/Tokyo': 'Tokyo (JST)',
    'Asia/Dubai': 'Dubai (GST)',
    'Asia/Kolkata': 'India (IST)',
    'Asia/Shanghai': 'Shanghai (CST)',
    'Australia/Sydney': 'Sydney (AEDT/AEST)',
    'Australia/Melbourne': 'Melbourne (AEDT/AEST)',
    'Pacific/Auckland': 'Auckland (NZDT/NZST)',
    'UTC': 'Coordinated Universal Time'
};

console.log('Digital Clock initialized. Try adding timezones like:');
console.log(Object.entries(TIMEZONE_EXAMPLES).slice(0, 5).map(([tz, desc]) => `${tz} - ${desc}`).join('\n'));
