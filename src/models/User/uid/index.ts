// types and interfaces
import type { IUser } from 'models/User/types'

class Uid {
  get(data: IUser) {
    return data.uid
  }
}

export default new Uid()
