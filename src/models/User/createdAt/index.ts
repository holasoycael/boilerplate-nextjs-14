import { format } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'

// types and interfaces
import type { IUser } from 'models/User/types'

class CreatedAt {
  get(data: IUser) {
    return format(new Date(data.createdAt), 'dd/MM/yyyy HH:mm', {
      locale: pt
    })
  }
}

export default new CreatedAt()
