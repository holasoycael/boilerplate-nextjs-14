import mask from 'make-mask'

// types and interfaces
import type { IUser } from 'models/User/types'

class PhoneNumber {
  get(data: IUser) {
    return mask(data.phoneNumber, '(00) 0000-00009')
  }
}

export default new PhoneNumber()
