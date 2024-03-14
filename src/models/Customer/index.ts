import Cookies from 'js-cookie'

class Customer {
  key = 'app.customer_key'

  get value() {
    const key = this.key
    const current = Cookies.get(key) ?? ''

    return current
  }

  set(value: string) {
    const key = this.key
    Cookies.set(key, value)
  }

  remove() {
    Cookies.remove(this.key)
  }
}

export default new Customer()
