import axios from "axios";

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SPOUTGRAM_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRequest = async ({ url, token, params }) => {
  const requestResponse = await API({
    headers: { Authorization: `Bearer ${token}` },
    method: "GET",
    url,
    params,
  });
  return requestResponse;
};

// POST REQUEST
export const postRequest = async ({ url, token, data, formData, params }) => {
  const requestResponse = await API({
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    method: "POST",
    url,
    params,
    data,
    formData,
  });
  return requestResponse;
};

//patch
export const patchRequest = async ({ url, token, params, formData, data }) => {
  const requestResponse = await API({
    headers: { Authorization: `Bearer ${token}` },
    "Content-Type": formData ? "multipart/form-data" : "application/json",
    method: "PATCH",
    url,
    params,
    data,
    formData,
  });
  return requestResponse;
};

export const deleteRequest = async ({ url, token, data, params }) => {
  const requestResponse = await API({
    headers: { Authorization: `Bearer ${token}` },
    method: "DELETE",
    url,
    data,
    token,
    params,
  });

  return requestResponse;
};

//put request
export const putRequest = async ({ url, token, data, formData, params }) => {
  const requestResponse = await API({
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    url,
    params,
    data,
    formData,
  });
  return requestResponse;
};
