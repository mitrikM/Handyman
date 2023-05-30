import axios from 'axios'

const API_BASE_URL = 'http://localhost:9000'

export const api = axios.create({
  withCredentials:true,
  baseURL: API_BASE_URL,
  headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
})
