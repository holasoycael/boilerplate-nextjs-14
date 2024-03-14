export interface IUser {
  uid: string
  name: string
  email: string
  gravatar: [string, string]
  customers: string[]
  phoneNumber: string
  isAdmin?: boolean
  updatedAt: string
  createdAt: string
}
