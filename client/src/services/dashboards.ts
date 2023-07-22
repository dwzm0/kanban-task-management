import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/dashboards'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getAll = async () => {
  const resp = await axios.get(baseUrl)
  return resp.data
}

export default { getAll }
