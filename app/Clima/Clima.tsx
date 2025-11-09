'use client';

import { useEffect, useState } from 'react';

type WeatherData = {
  temperature: number; // °C
  apparent: number; // °C
  humidity: number; // %
  wind: number; // km/h
  code: number; // WMO weather code
  isDay: boolean;
  city: string;
};

const BCN_FALLBACK = {
  lat: 41.3825, // Barcelona centro
  lon: 2.1769,
  city: 'Barcelona',
};

function mapWeatherCode(code: number, isDay: boolean) {
  // Mapeo simple (WMO) → texto + emoji
  // Referencia: https://open-meteo.com/en/docs
  const day = isDay;
  const dict: Record<number, { text: string; emoji: string }> = {
    0: { text: 'Despejado', emoji: day ? '☀️' : '🌙' },
    1: { text: 'Mayormente despejado', emoji: day ? '🌤️' : '🌙' },
    2: { text: 'Parcialmente nublado', emoji: '⛅' },
    3: { text: 'Nublado', emoji: '☁️' },
    45: { text: 'Niebla', emoji: '🌫️' },
    48: { text: 'Niebla con hielo', emoji: '🌫️' },
    51: { text: 'Llovizna ligera', emoji: '🌦️' },
    53: { text: 'Llovizna', emoji: '🌦️' },
    55: { text: 'Llovizna intensa', emoji: '🌧️' },
    61: { text: 'Lluvia débil', emoji: '🌦️' },
    63: { text: 'Lluvia', emoji: '🌧️' },
    65: { text: 'Lluvia fuerte', emoji: '🌧️' },
    66: { text: 'Lluvia helada', emoji: '🌧️' },
    67: { text: 'Lluvia helada fuerte', emoji: '🌧️' },
    71: { text: 'Nieve débil', emoji: '🌨️' },
    73: { text: 'Nieve', emoji: '🌨️' },
    75: { text: 'Nieve fuerte', emoji: '❄️' },
    77: { text: 'Gránulos de nieve', emoji: '❄️' },
    80: { text: 'Chubascos débiles', emoji: '🌦️' },
    81: { text: 'Chubascos', emoji: '🌧️' },
    82: { text: 'Chubascos fuertes', emoji: '⛈️' },
    85: { text: 'Chubascos de nieve', emoji: '🌨️' },
    86: { text: 'Chubascos de nieve fuertes', emoji: '❄️' },
    95: { text: 'Tormenta', emoji: '⛈️' },
    96: { text: 'Tormenta con granizo', emoji: '⛈️' },
    99: { text: 'Tormenta fuerte con granizo', emoji: '⛈️' },
  };
  return dict[code] || { text: 'Tiempo variable', emoji: day ? '🌤️' : '☁️' };
}

export default function Clima() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number, cityHint?: string) => {
      try {
        // Open-Meteo: actual (sin API key), devuelve CORS ok
        const url = new URL('https://api.open-meteo.com/v1/forecast');
        url.searchParams.set('latitude', String(lat));
        url.searchParams.set('longitude', String(lon));
        url.searchParams.set('timezone', 'auto');
        // Variables “current” del nuevo endpoint
        url.searchParams.set(
          'current',
          [
            'temperature_2m',
            'apparent_temperature',
            'relative_humidity_2m',
            'is_day',
            'precipitation',
            'weather_code',
            'wind_speed_10m',
          ].join(',')
        );

        const resp = await fetch(url.toString());
        if (!resp.ok) throw new Error('Respuesta no válida');
        const json = await resp.json();

        const c = json.current || {};
        const data: WeatherData = {
          temperature: c.temperature_2m,
          apparent: c.apparent_temperature,
          humidity: c.relative_humidity_2m,
          wind: c.wind_speed_10m,
          code: c.weather_code,
          isDay: Boolean(c.is_day),
          city: cityHint || BCN_FALLBACK.city,
        };
        setWeather(data);
        setError('');
      } catch (e) {
        setError('No se pudo cargar el clima ahora mismo.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather(BCN_FALLBACK.lat, BCN_FALLBACK.lon, BCN_FALLBACK.city);
  }, []);

  return (
    <>
      {/* Tarjeta clima */}
      <div className="bg-[#e6efe2] rounded-xl p-6 shadow-sm mb-6">
        <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">
          Clima actual {weather?.city ? `· ${weather.city}` : ''}
        </h3>

        {loading && <p className="text-[#1f2937]">Cargando clima…</p>}
        {!loading && error && <p className="text-red-700">{error}</p>}

        {!loading && !error && weather && (
          <div className="flex items-center gap-4">
            <div className="text-4xl" aria-hidden="true">
              {mapWeatherCode(weather.code, weather.isDay).emoji}
            </div>

            <div className="flex flex-col">
              <div className="text-[#1f2937] font-semibold">
                {Math.round(weather.temperature)}°C
                <span className="text-sm text-[#6b7280] ml-2">
                  (sensación {Math.round(weather.apparent)}°C)
                </span>
              </div>

              <div className="text-[#1f2937]">
                {mapWeatherCode(weather.code, weather.isDay).text}
              </div>

              <div className="text-[#6b7280] text-sm">
                Humedad {Math.round(weather.humidity)}% · Viento {Math.round(weather.wind)} km/h
              </div>
            </div>
          </div>
        )}

        <p className="text-xs text-[#6b7280] mt-2">Fuente: Open-Meteo</p>
      </div>
    </>
  );
}
