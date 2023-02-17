import axios from "axios"
const universitiesAPI = axios.create({
  baseURL: "http://universities.hipolabs.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function universitiesapi_get_search_list(payload) {
  return universitiesAPI.get(`/search`, { params: { name: payload.name } })
}
export const apiService = { universitiesapi_get_search_list }
