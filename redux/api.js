import axios from 'axios';

import { baseUrl } from './baseUrl';

export const API = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getRequest = async ({ url, token, params }) => {
  const requestResponse = await API({
    headers: { Authorization: `Bearer ${token}` },
    method: 'GET',
    url,
    params
  })
  return requestResponse
}

export const postRequest = async ({ url, token, data, formData, params }) => {
  const requestResponse = await API({
    headers: { Authorization: `Bearer ${token}` },
    'Content-Type': formData ? 'multipart/form-data' : 'application/json',
    method: 'POST',
    url,
    params,
    data,
    formData
  })
  return requestResponse
}

export const patchRequest = async ({ url, token, params, formData, data }) => {
  const requestResponse = await API({
    headers: { Authorization: `Bearer ${token}` },
    'Content-Type': formData ? 'multipart/form-data' : 'application/json',
    method: 'PATCH',
    url,
    params,
    data,
    formData
  })
  return requestResponse
}

export const deleteRequest = async ({ url, token, data, params }) => {
  const requestResponse = await API({
    headers: { Authorization: `Bearer ${token}` },
    method: 'DELETE',
    url,
    data,
    token,
    params
  })

  return requestResponse
}