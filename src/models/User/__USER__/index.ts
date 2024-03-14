import { signOut } from 'next-auth/react'

// models
import Avatar from 'models/Avatar'

// types and interfaces
import type { IUser } from 'typings/User'

class __USER__ {
  private __uid: string
  private __isAdmin: boolean | undefined
  private __displayName: string
  private __email: string
  private __gravatar: [string, string]
  private __customers: string[]

  get uid() {
    return this.__uid
  }

  get isAdmin() {
    return this.__isAdmin ?? false
  }

  get displayName() {
    return this.__displayName
  }

  get firstName() {
    const displayName = this.__displayName
    return displayName.split(' ')[0]
  }

  get email() {
    return this.__email
  }

  get customers() {
    return this.__customers
  }

  async signOut(isRedirect?: boolean) {
    return signOut({ redirect: isRedirect ?? false })
  }

  avatar(size = 28) {
    const displayName = this.displayName ?? 'Null'
    const [textColor, baseColor] = this.__gravatar
    const gravatar = Avatar.generate(displayName, {
      baseColor,
      textColor,
      width: size,
      height: size
    })
    return gravatar
  }

  constructor(data: IUser) {
    this.__uid = data.uid
    this.__email = data.email
    this.__customers = data.customers
    this.__displayName = data.name
    this.__gravatar = data.gravatar
    this.__isAdmin = data.isAdmin
  }
}

export default __USER__
