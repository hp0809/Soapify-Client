import config from '../config'

const OilService = {
    saveOilInfo(res) {
        window.localStorage.setItem(config.OIL_INFO, JSON.stringify(res))
      },
      getOilInfo() {
          return window.localStorage.getItem(config.OIL_INFO)
      }
}

export default OilService