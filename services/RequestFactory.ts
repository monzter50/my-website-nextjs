const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000'

const requestParams = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    'User-Agent': '*'
  }
}

const RequestFactory = {
  get: async (url: string) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...requestParams
    })
    return await response.json()
  },

  post: async (url: string, body: any) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...requestParams,
      method: 'POST',
      body: JSON.stringify(body)
    })
    return await response.json()
  },

  put: async (url: string, body: any) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...requestParams,
      method: 'PUT',
      body: JSON.stringify(body)
    })
    return await response.json()
  },

  delete: async (url: string) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...requestParams,
      method: 'DELETE'
    })
    return await response.json()
  }
}

export default RequestFactory
