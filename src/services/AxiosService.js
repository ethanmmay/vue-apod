import axios from 'axios'

export const apodAPI = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 10000
})
