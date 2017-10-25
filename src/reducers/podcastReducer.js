import constants from '../constants'

var initialState = {
  all: null,
  selected: null
}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type) {

    case constants.PODCASTS_RECEIVED:
      updated['all'] = action.podcasts
      return updated

    case constants.PODCAST_SELECTED:
      updated['selected'] = action.podcast
      return updated

    default:
      return state
  }


}