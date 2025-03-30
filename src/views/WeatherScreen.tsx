import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import useWeatherViewModel from '../viewmodels/WeatherViewModel';
import { useTheme } from '@react-navigation/native';

const WeatherScreen = () => {
  const [city, setCity] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const { weather, loading, error, searchWeather } = useWeatherViewModel();
  const { colors } = useTheme();

  const onRefresh = async () => {
    setRefreshing(true);
    searchWeather(city);
    setRefreshing(false);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <TextInput
        style={[styles.input, { color: colors.text, borderColor: colors.border }]}
        placeholder="Enter city name"
        placeholderTextColor={colors.text}
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={() => searchWeather(city)} />
      {loading && <ActivityIndicator size="large" color={colors.primary} />}
      {error && <Text style={[styles.error, { color: colors.notification }]}>{error}</Text>}
      {weather && (
        <View style={styles.weatherContainer}>
          <Text style={{ color: colors.text }}>Temp: {weather.temperature}°C</Text>
          <Text style={{ color: colors.text }}>Humidity: {weather.humidity}%</Text>
          <Text style={{ color: colors.text }}>Wind Speed: {weather.windSpeed} km/h</Text>
          <Text style={{ color: colors.text }}>Condition: {weather.condition}</Text>
        </View>
      )}
    </ScrollView>
  );
};

//Styling Part
const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  error: { fontSize: 14 },
  weatherContainer: { marginTop: 20 }
});

export default WeatherScreen;