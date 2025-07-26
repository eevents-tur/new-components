// src/services/dataService.js
import data from '../../assets/db.json';

export const DataService = {
  getCities: () => data.cities,

  getCityEvents: (cityName = null) => {
    if (cityName) {
      return data.city_events.filter(event => event.city === cityName);
    }
    return data.city_events;
  },

  getWhatToDo: () => data.what_to_do,

  getLocalCommerce: (category = null) => {
    if (category) {
      return data.local_commerce.filter(place => place.category === category);
    }
    return data.local_commerce;
  },

  getAllData: () => data
};