// types and interfaces
import type { IUser } from 'models/User/types'

class Name {
  get(data: IUser) {
    return data.name
  }
}

export default new Name()
