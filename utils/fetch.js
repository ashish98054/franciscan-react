import fetch from 'isomorphic-fetch'

export const get = url => {
  return fetch(url, {
    method: 'get'
  })
}

export const getJSON = url => {
  return get(url).then(function (response) {
    if (response.ok) {
      return response.json()
    } else {
      return null
    }
  })
}
