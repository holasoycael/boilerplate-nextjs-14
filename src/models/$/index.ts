import { isMobile } from 'is-mobile'

class $ {
  isMobile() {
    return isMobile({ tablet: true, featureDetect: true })
  }
}

export default new $()
