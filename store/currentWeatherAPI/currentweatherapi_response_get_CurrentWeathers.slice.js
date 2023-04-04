import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const currentweatherapi_get_currentjson_list = createAsyncThunk(
  "currentweatherapi_response_get_CurrentWeathers/currentweatherapi_get_currentjson_list",
  async payload => {
    const response = await apiService.currentweatherapi_get_currentjson_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const currentweatherapi_response_get_CurrentWeathersSlice = createSlice({
  name: "currentweatherapi_response_get_CurrentWeathers",
  initialState,
  reducers: {},
  extraReducers: {
    [currentweatherapi_get_currentjson_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [currentweatherapi_get_currentjson_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [currentweatherapi_get_currentjson_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  currentweatherapi_get_currentjson_list,
  slice: currentweatherapi_response_get_CurrentWeathersSlice
}
