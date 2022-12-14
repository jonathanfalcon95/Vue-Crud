import { apiHttp } from '../axiosApi.js'
import {

  userPath, userSave, userLogin,

} from '../config/apiRoute.js'

export const createUsers = (body) =>
  apiHttp('POST', `${userSave}`, body)

export const editUsers = (userId, body) =>
  apiHttp('PUT', `${userSave}/${userId}`, body)

export const getUsers = () =>
  apiHttp('GET', `/Visit`)

  export const setEntry=(body)=>{
    apiHttp('POST', `/Visit/Entry`, body)
  }
  export const setEtxit=(body)=>{
    apiHttp('POST', `/Exit`, body)
  }
  export const DELETEV=(id)=>{
    apiHttp('DELETE', `/Visit/${id}`)
  }
  export const sentEmail=(body)=>{
    apiHttp('POST', `/Visit/SendEmail?email=${body.email}`, body)
  }
  
export const loginApi = ({ email, password }) => {
  console.log(email)
  console.log(password)
  return apiHttp('GET', `${userLogin}`, null, {
    headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
       Authorization: 'Basic ' + btoa(`${email}:${password}`),
    },
  })
}
