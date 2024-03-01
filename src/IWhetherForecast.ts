export interface IWhetherForecast {
  location: Location;
  date: string;
  morning_forecast: string;
  afternoon_forecast: string;
  night_forecast: string;
  summary_forecast: string;
  summary_when: string;
  min_temp: number;
  max_temp: number;
}
interface Location {
  location_id: string;
  location_name: string;
}
