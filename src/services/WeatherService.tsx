import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_KEY, BASE_URL } from '@env';

export const fetchWeather = async (city: string) => {
  try {
    const response = await fetch(`${BASE_URL}${city}?key=${API_KEY}&unitGroup=metric`);

    if (!response.ok) {
      throw new Error('No Weather Data Found.');
    }

    const data = await response.json();

    //Check if an error or missing data from API
    if (!data || !data.currentConditions) {
      throw new Error('City not found. Please enter a valid city name.');
    }

    const weather = {
      temperature: data.currentConditions.temp,
      humidity: data.currentConditions.humidity,
      windSpeed: data.currentConditions.windspeed,
      condition: data.currentConditions.conditions,
    };

    // Saving last valid weather data to AsyncStorage
    await AsyncStorage.setItem('lastWeather', JSON.stringify(weather));

    return weather;
  } catch (error) {
    console.error('Error fetching weather:', error.message);

    // Return last weather data if available
    const cachedData = await AsyncStorage.getItem('lastWeather');
    if (cachedData) {
      return { ...JSON.parse(cachedData), error: error.message };
    }

    return { error: error.message };
  }
};
