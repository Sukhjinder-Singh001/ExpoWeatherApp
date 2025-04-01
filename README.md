# React Native Weather App

## 📌 Objective
Develop a React Native mobile application that fetches and displays weather data based on user input. The app is designed to be well-structured, maintainable, and performant, following best practices in state management, API integration, and offline caching.

## 🚀 Features
- 🌍 **Search Functionality**: Users can enter a city name to retrieve weather data.
- ☀️ **Weather Details**: Displays temperature, humidity, wind speed, and general weather conditions.
- 📡 **Offline Caching**: Stores the last searched city's weather data for offline access.
- 🏗 **MVVM Architecture**: Maintains a clear separation between UI, data, and logic layers.
- 🔄 **Optimized API Calls**: Avoids unnecessary re-fetching and handles API errors gracefully.
- 📱 **Performance & Responsiveness**: Ensures smooth performance across different devices.

---

## 🛠 Tech Stack
- **React Native with TypeScript**
- **Fetch API** (for API requests to [VisualCrossing Weather API](https://www.visualcrossing.com/))
- **AsyncStorage** (for offline storage and caching)
- **React Native Navigation** (for screen transitions)
- **React Native's built-in styling** (no external UI libraries)

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Sukhjinder-Singh001/ExpoWeatherApp.git
cd ExpoWeatherApp
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
This project uses API keys for fetching weather data. You need to create a `.env` file in the root directory and add:
```sh
API_KEY=your_api_key_here
BASE_URL=your_base_url_here
```
🚨 **Note:** The `.env` file is not included in the repository for security purposes.

### 4️⃣ Start the App
```sh
expo start
```

You can scan the QR code with Expo Go to test it on a real device.

---

## ⚠️ Error Handling & Optimization
- Handles network failures and invalid city names gracefully.
- Implements offline caching to minimize redundant API calls.
- Uses debouncing to optimize search performance.
- Provides a smooth and responsive UI across different devices.

---

## 🎯 Bonus Features
✅ **Pull-to-Refresh**: Allows users to refresh weather data with a swipe.
✅ **Dark Mode Support**: Automatically switches based on system settings.
✅ **Search Optimization**: Uses debouncing to prevent excessive API calls.
✅ **Expo Deployment**: The app is deployed using Expo for easy testing.

---

