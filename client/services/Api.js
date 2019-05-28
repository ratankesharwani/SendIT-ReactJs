import axios from 'axios/index';

// Backend API URL
export const API_HOST = 'https://send-it-ke-v2.herokuapp.com/api/v2';

// eslint-disable-next-line import/prefer-default-export
export const api = {
  user: {
    signup: data => axios.post(`${API_HOST}/auth/signup/`, data),
    login: data => axios.post(`${API_HOST}/auth/login/`, data),
  },
  dashboard: {
    loadAllParcelsAdmin: () => axios.get(`${API_HOST}/parcels/`),
    editPresent: data => axios.put(`${API_HOST}/parcels/${data.parcelId}/presentLocation`, data),
    deleteParcelAdmin: parcelId => axios.delete(`${API_HOST}/user/`, parcelId),
  },
  profile: {
    loadAllUserParcels: userId => axios.get(`${API_HOST}/users/${userId}/parcels/`),
    deleteParcel: parcelId => axios.delete(`${API_HOST}/parcels/${parcelId}`),
  },
};
