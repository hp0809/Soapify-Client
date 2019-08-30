import config from '../config'

const OilService = {
    saveOilInfo(oils) {
        window.localStorage.setItem(config.OIL_INFO, JSON.stringify(oils))
      },
      getOilInfo() {
          return window.localStorage.getItem(config.OIL_INFO)
      }
}

export default OilService