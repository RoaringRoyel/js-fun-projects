# 🌦️ Weather App

A simple, responsive weather application that lets users search for any city and instantly view its current temperature, humidity, and wind speed — powered by the OpenWeatherMap API.

## 📋 Features

- 🔍 Search weather by city name
- 🌡️ Displays current temperature (°C)
- 💧 Displays humidity percentage
- 💨 Displays wind speed
- 🎨 Dynamic weather icons based on conditions (Clear, Clouds, Rain, Drizzle, Mist)
- ⚠️ Error handling for invalid city names
- 📱 Responsive card-based UI

## 📸 Screenshots

> Screenshots are stored in the `ss` folder.

| | |
|---|---|
| ![Screenshot 1](ss/1.png) | ![Screenshot 2](ss/2.png) |
| ![Screenshot 3](ss/3.png) | ![Screenshot 4](ss/4.png) |

## 🛠️ Tech Stack

- **HTML5** — structure
- **CSS3** — styling and layout
- **JavaScript (Vanilla)** — logic and API integration
- **OpenWeatherMap API** — weather data source

## 📁 Project Structure

```
weather-app/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── clear.png
│   ├── clouds.png
│   ├── rain.png
│   ├── drizzle.png
│   ├── mist.png
│   ├── humidity.png
│   ├── wind.png
│   └── search-icon.png
├── ss/
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   └── 4.png
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- An API key from [OpenWeatherMap](https://openweathermap.org/api) (free tier available)

### Installation

1. Clone or download this repository.
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. Open `script.js` and replace the `apikey` value with your own OpenWeatherMap API key.
   ```js
   const apikey = "YOUR_API_KEY_HERE";
   ```
3. Open `index.html` in your browser (or use a local server / Live Server extension).

> ⚠️ **Note:** For security, avoid committing your real API key to a public repository. Consider using environment variables or a `.gitignore`'d config file for production use.

## 🧑‍💻 Usage

1. Type a city name into the search box.
2. Click the search button (or press Enter, if enabled).
3. View the current temperature, weather icon, humidity, and wind speed.
4. If the city name is invalid, an error message will be displayed instead.

## 🔗 API Reference

This project uses the [OpenWeatherMap Current Weather Data API](https://openweathermap.org/current):

```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

## 📄 License

This project is open source and available for personal or educational use. Feel free to modify and build on it.

## 🙌 Acknowledgements

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)