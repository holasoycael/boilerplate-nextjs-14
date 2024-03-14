// childrens
import uid from './uid'
import name from './name'
import email from './email'
import phoneNumber from './phoneNumber'
import isAdmin from './isAdmin'
import updatedAt from './updatedAt'
import createdAt from './createdAt'
import __ from './__'
import __USER__ from './__USER__'

class User {
  uid = uid
  name = name
  email = email
  phoneNumber = phoneNumber
  isAdmin = isAdmin
  updatedAt = updatedAt
  createdAt = createdAt

  __ = __
  __USER__ = __USER__
}

export default new User()
