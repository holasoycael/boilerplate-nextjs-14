import axios from 'axios'

// utils
import env from 'utils/env'

const api = axios.create({
  baseURL: env.BASE_URL
})

export default api
