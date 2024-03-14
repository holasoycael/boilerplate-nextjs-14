// types and interfaces
import type { IUser } from 'models/User/types'

class Email {
  get(data: IUser) {
    return data.email
  }
}

export default new Email()
