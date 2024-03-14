// types and interfaces
import type { IUser } from 'models/User/types'

class IsAdmin {
  get(data: IUser) {
    return data.isAdmin ?? false
  }
}

export default new IsAdmin()
