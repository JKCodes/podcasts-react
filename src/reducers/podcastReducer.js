import constants from '../constants'

var initialState = {

}

export default (staet = initialState, action) => {

  switch (action.type) {
    let updated = Object.assign({}, state)

    case constants.PODCASTS_RECEIVED:
      return updated

    default:
      return state
  }


}