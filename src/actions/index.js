import constants from '../constants'

export default {

  searchPodcasts: (params) => {
    return {

    }
  },

  podcastsReceived: (podcasts) => {
    return {
      type: constants.PODCASTS_RECEIVED,
      podcasts: podcasts
    }
  }
}