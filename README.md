# 🌍 Digital Clock - Multiple Time Zones

A beautiful, responsive web application that displays the current time across multiple time zones with real-time updates.

## Features

✨ **Key Features:**
- 🕐 Real-time digital clock with updates every second
- 🌐 Support for multiple time zones worldwide
- 📅 Displays full date with day of the week
- ⏰ Shows UTC offset for each timezone
- ➕ Add custom timezones dynamically
- 🗑️ Remove timezones individually
- 🔄 Reset to default timezones
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern gradient UI with smooth animations
- ✅ Input validation for timezone names

## Default Time Zones

The application comes with 6 default time zones:
- 🗽 America/New_York (Eastern Time)
- 🇬🇧 Europe/London (GMT)
- 🇫🇷 Europe/Paris (CET)
- 🇯🇵 Asia/Tokyo (JST)
- 🇦🇺 Australia/Sydney (AEDT/AEST)
- 🇦🇪 Asia/Dubai (GST)

## Supported Time Zones

The application supports 35+ major time zones including:

### Americas
- America/New_York
- America/Chicago
- America/Denver
- America/Los_Angeles
- America/Anchorage
- Pacific/Honolulu
- America/Toronto
- America/Mexico_City
- America/Sao_Paulo
- America/Buenos_Aires

### Europe
- Europe/London
- Europe/Paris
- Europe/Berlin
- Europe/Madrid
- Europe/Rome
- Europe/Amsterdam
- Europe/Moscow

### Asia
- Asia/Istanbul
- Asia/Dubai
- Asia/Kolkata
- Asia/Bangkok
- Asia/Singapore
- Asia/Hong_Kong
- Asia/Shanghai
- Asia/Tokyo
- Asia/Seoul

### Australia/Pacific
- Australia/Sydney
- Australia/Melbourne
- Australia/Brisbane
- Australia/Perth
- Pacific/Auckland
- Pacific/Fiji

### Africa
- Africa/Cairo
- Africa/Johannesburg
- Africa/Lagos

### Other
- UTC
- GMT

## How to Use

1. **Open the Application**: Save the files and open `index.html` in your web browser.

2. **View Default Clocks**: The application loads with 6 default time zones automatically displayed.

3. **Add a Time Zone**:
   - Type a valid timezone name in the input field (e.g., `America/New_York`)
   - Click the "Add Timezone" button or press Enter
   - The clock will appear in the grid

4. **Remove a Time Zone**:
   - Click the "Remove" button on any clock card

5. **Reset to Defaults**:
   - Click the "Reset to Default" button to return to the original 6 time zones

## File Structure

```
.
├── index.html       # HTML structure
├── styles.css       # Styling and animations
├── script.js        # JavaScript functionality
└── README.md        # Documentation
```

## Technical Details

### Technologies Used
- **HTML5**: Semantic structure
- **CSS3**: Grid layout, gradients, animations, media queries
- **JavaScript**: DOM manipulation, Intl API for locale-specific formatting

### Browser Compatibility
- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

### Key JavaScript Functions

- `addTimezone()`: Validates and adds a new timezone
- `removeTimezone(timezone)`: Removes a timezone from display
- `resetToDefault()`: Returns to default timezone set
- `renderClocks()`: Updates all clock displays
- `getTimezoneOffset(timezone)`: Calculates UTC offset
- `showMessage(text, type)`: Displays temporary notifications

## API Used

The application uses the JavaScript **Intl API** (built-in, no external API calls needed):
- `Intl.DateTimeFormat`: For locale-specific date/time formatting
- `Date.toLocaleString()`: For timezone conversion

## Example Usage

```javascript
// The app automatically handles timezone conversions
const now = new Date();
const tokyoTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Tokyo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
}).format(now);
```

## Responsive Design

The application is fully responsive:
- **Desktop**: Multi-column grid layout
- **Tablet**: 2-column grid
- **Mobile**: Single column layout

## Future Enhancements

Potential features for future versions:
- 🌙 Dark mode toggle
- 💾 Save favorite timezones to localStorage
- 🔔 Alarm functionality for specific timezones
- 📊 Time zone comparison tool
- 🌐 Timezone search with autocomplete
- 📱 Progressive Web App (PWA) support
- 🎨 Customizable themes/colors

## Installation & Deployment

### Local Setup
1. Clone or download the repository
2. Open `index.html` in your browser
3. No build process or dependencies required!

### Deploy to GitHub Pages
1. Push files to GitHub repository
2. Go to Settings → Pages
3. Select main branch as source
4. Access via `https://username.github.io/repo-name`

### Deploy to Netlify
1. Drag and drop the folder to Netlify
2. Get a live URL instantly

## Tips & Tricks

- **Common Timezone Names**: Use underscores in timezone names (e.g., `New_York` not `New York`)
- **UTC Offset**: The offset shown indicates the difference from UTC (e.g., `+5:30` for India)
- **Daylight Saving Time**: The app automatically accounts for DST changes
- **Real-time Updates**: Clocks update automatically every second

## Troubleshooting

**Issue**: Timezone not found error
- **Solution**: Check the timezone name spelling and format (e.g., use `America/Los_Angeles` not `America/Los Angeles`)

**Issue**: Time not updating
- **Solution**: Refresh the browser page; the update interval is 1 second

**Issue**: Wrong time displayed
- **Solution**: Check your system clock is set correctly; the app uses your device's time

## License

This project is open source and available for personal and commercial use.

## Author

Created as an open-source project for learning and demonstration purposes.

---

**Enjoy tracking time across the world!** 🌍⏰

For more information or to report issues, feel free to contribute or create an issue in the repository.
