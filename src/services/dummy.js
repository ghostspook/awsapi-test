//import Vue from 'vue'
import client from './clientEndPoint'

const apiResource = 'dummy'

export default {
  async execute(method, resource, data) {
    //const accessToken = await Vue.prototype.$auth.getAccessToken()
    return client({
      method,
      url: resource,
      data,
      // headers: {
      //  Authorization: `Bearer ${accessToken}`
      // }
    }).then(req => {
      return req.data
    })
  },
  get() {
    return this.execute('get', apiResource + '/')
  }
}