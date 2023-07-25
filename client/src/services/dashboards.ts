/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/dashboards'

const getAll = async () => {
  const resp = await axios.get(baseUrl)
  return resp.data
}

const getSingle = async (id: string) => {
  const resp = await axios.get(`baseUrl/${id}`)
  return resp.data
}

export default { getAll, getSingle }
