import { formatDistanceToNow } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'

// models
import User from 'models/User'

// types and interfaces
import { IUser } from 'models/User/types'

class __ {
  timestamp(data: IUser) {
    const toDate = new Date(data.updatedAt ?? data.createdAt)
    return formatDistanceToNow(toDate, { addSuffix: true, locale: pt })
  }

  isDiff(values: IUser) {
    return (data: IUser) => {
      const __uid = User.uid.get(data)
      const uid = User.uid.get(values)
      const __name = User.name.get(data)
      const name = User.name.get(values)
      const __email = User.email.get(data)
      const email = User.email.get(values)
      const __isAdmin = User.isAdmin.get(data)
      const isAdmin = User.isAdmin.get(values)

      const checkIsAvailable = [
        __uid !== uid,
        __name !== name,
        __email !== email,
        __isAdmin !== isAdmin
      ]

      const isAvailable = checkIsAvailable.includes(true)

      return isAvailable
    }
  }

  clone(data: IUser): IUser {
    return { ...data }
  }

  isAvailable(values: IUser) {
    return (data: IUser) => {
      return this.isDiff(values)(data)
    }
  }

  body(values: IUser) {
    return {
      isAdmin: values.isAdmin
    }
  }
}

export default new __()
