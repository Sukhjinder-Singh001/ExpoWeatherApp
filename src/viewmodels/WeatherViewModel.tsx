import { useState, useCallback } from 'react';
import { fetchWeather } from '../services/WeatherService';
import { WeatherModel } from '../models/WeatherModel';

const useWeatherViewModel = () => {
  const [weather, setWeather] = useState<WeatherModel | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchWeather = useCallback(
    debounce(async (city: string) => {
      if (!city.trim()) {
        setError('Please enter a valid city name.');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const data = await fetchWeather(city);

        if (data?.error) {
          setError(data.error);
          setWeather(null);
        } else {
          setWeather(data);
        }
      } catch (err) {
        setError('Failed to fetch weather.');
      }

      setLoading(false);
    }, 500),
    []
  );

  return { weather, loading, error, searchWeather };
};

// Function to prevents unnecessary API calls
const debounce = (func: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

export default useWeatherViewModel;
