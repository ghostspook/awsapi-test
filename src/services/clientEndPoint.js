import axios from 'axios'

const client = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  json: true
})

export default client;