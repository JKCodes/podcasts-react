import superagent from 'superagent'
import bluebird from 'bluebird'

module.exports = {

  get: (endpoint, params) => {
    return new Promise((resolve, reject) => {
      superagent
      .get(endpoint)
      .query(params)
      .set('Accept', 'applicatin/json')
      .end((error, response) =>{
        if (error) {
          reject(error)
          return
        }

        resolve(response.body)
      })
    })
  }
}