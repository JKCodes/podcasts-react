import constants from '../constants'

export default {

  podcastSelected: (podcast) => {
    return {
      type: constants.PODCAST_SELECTED,
      podcast: podcast
    }
  },

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