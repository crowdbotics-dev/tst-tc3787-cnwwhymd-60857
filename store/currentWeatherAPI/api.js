import axios from "axios"
const currentWeatherAPI = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function currentweatherapi_get_currentjson_list(payload) {
  return currentWeatherAPI.get(`/current.json`)
}
export const apiService = { currentweatherapi_get_currentjson_list }
