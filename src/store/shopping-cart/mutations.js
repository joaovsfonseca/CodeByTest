import { LocalStorage } from 'quasar'

export function addCart (state, val) {
  state.cart.push(val)
}

export function removeCart (state, val) {
  for (let i = 0; state.cart.length > i; i++) {
    if (state.cart[i].index === val) state.cart.splice(i, 1)
  }
}

export function clearCart (state) {
  LocalStorage.remove('cart')
  state.cart = []
}
