import { create } from "zustand";

interface ConditionData {
  text: string;
  icon: string;
  code: number;
}

interface AirQualityData {
  co: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  "us-epa-index": number;
  "gb-defra-index": number;
}

interface CurrentData {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: ConditionData;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  air_quality: AirQualityData;
}

interface CurrentStoreState {
  currentWeather: CurrentData[] | any;
  searchQuery: any;

  setCurrentWeather: (currentWeather: CurrentData[]) => void;
  setSearchQuery: (query: any) => void;
}

export const useCurrentWeather = create<CurrentStoreState>((set) => ({
  currentWeather: [],
  searchQuery: "",
  setCurrentWeather: (currentWeather) => set({ currentWeather }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

interface astroData {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
  is_moon_up: number;
  is_sun_up: number;
}
interface astroDataStore {
  astroData: astroData[] | any;
  setAstroData: (astroData: astroData[]) => void;
}

export const useAstrodata = create<astroDataStore>((set) => ({
  astroData: [],
  setAstroData: (astroData) => set({ astroData }),
}));
