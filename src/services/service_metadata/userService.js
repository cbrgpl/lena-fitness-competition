import { API_URL } from 'consts'

const userApiModule = [
  {
    method: 'GET',
    url: API_URL + '/user/me/',
    secure: true,
    roles: [],
    handler: 'getUser',
    headers: {
      Accept: 'application/json',
    },
  },
  {
    method: 'POST',
    url: API_URL + '/user/me/edit/',
    secure: true,
    roles: [],
    handler: 'updateUser',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    schema: {
      type: 'object',
      required: [ 'firstName', 'lastName', 'street', 'city', 'country', 'instagramUrl', 'height', 'bustImplants' ],
      properties: {
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        street: {
          type: 'string'
        },
        city: {
          type: 'string'
        },
        country: {
          type: 'string'
        },
        instagramUrl: {
          type: 'string'
        },
        height: {
          type: 'string'
        },
      }
    }
  }
]

export default userApiModule
