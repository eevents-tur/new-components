import { api } from '../api'

export const useGetData = () => {
  const getCities = async () => {
    try {
      const response = await api.get('/cities')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getCityEvents = async () => {
    try {
      const response = await api.get('/city_events')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getWhatToDo = async () => {
    try {
      const response = await api.get('/what_to_do')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getLocalCommerce = async () => {
    try {
      const response = await api.get('/local_commerce')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }
  const getSearchResult = async (query) => {
    try {
      const response = await api.get(`search?query=${query}`)
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }
  
  return {
    getCities,
    getCityEvents,
    getWhatToDo,
    getLocalCommerce,
  }
}
