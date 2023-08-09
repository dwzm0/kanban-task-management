import axios from 'axios'
import { type ITask, type IBoard, type IBoardWithoutId } from '../types/types'
const baseUrl = 'http://localhost:3001/api/dashboards'

const getAll = async () => {
  const resp = await axios.get(baseUrl)
  return resp.data
}

const getSingle = async (id: string) => {
  const resp = await axios.get(`${baseUrl}/${id}`)
  return resp.data
}

const createBoard = async (board: IBoardWithoutId) => {
  const resp = await axios.post(baseUrl, board)
  return resp.data
}

const deleteBoard = async (id: string) => {
  await axios.delete(`${baseUrl}/${id}`)
}

const updateBoard = async (board: IBoard) => {
  const resp = await axios.put(`${baseUrl}/${board._id}`, board)
  return resp.data
}

const updateTask = async (boardId: string, columnId: string, task: ITask) => {
  console.log(task)
  const resp = await axios.put(`${baseUrl}/${boardId}/columns/${columnId}/tasks/${task._id}`,
    task)
  return resp.data
}

const createTask = async (boardId: string, task: ITask) => {
  const resp = await axios.post(`${baseUrl}/${boardId}`,
    task)
  return resp.data
}

const deleteTask = async (boardId: string, columnId: string, taskId: string) => {
  await axios.delete(`${baseUrl}/${boardId}/columns/${columnId}/tasks/${taskId}`)
}

export default {
  getAll,
  getSingle,
  createBoard,
  deleteBoard,
  updateBoard,
  updateTask,
  createTask,
  deleteTask
}
