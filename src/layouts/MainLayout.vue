<template>
  <q-layout class="bg-grey-4" view="hhr lpR fff">
    <q-header>
      <q-toolbar class="bg-grey-4 text-black q-pa-md">
        <q-btn
          flat
          dense
          round
          icon="shopping_cart"
          aria-label="Menu"
        />

        <q-toolbar-title class="mobile-hide">
          <b>CodeBy:</b> Loja de doces
        </q-toolbar-title>

         <q-toolbar-title class="desktop-hide">
          <b>CodeBy</b>
        </q-toolbar-title>

        <div class="q-gutter-x-md mobile-hide">
          <q-btn
            disabled
            label="Sobre nós"
            flat
            aria-label="cart"
            no-caps
          />
          <q-btn
            disabled
            label="Minha conta"
            no-caps
            outline
            icon="person"
            aria-label="Menu"
          />
        </div>

         <div class="q-gutter-x-md desktop-hide">
          <q-btn
            label="Carrinho de compras"
            no-caps
            outline
            icon="person"
            aria-label="Menu"
            @click="cartDrawer != cartDrawer"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      side="right"
      v-model="cartDrawer"
      show-if-above
      :width="400"
      :breakpoint="500"
      class="bg-grey-4 q-pa-md"
    >
      <div class="column fit bg-white boder-radius q-pa-md">
        <div class="col-1 text-center text-subtitle1 poppins-bolder">
          Meu carrinho
        </div>
        <div class="col-9">
          <q-scroll-area class="fit">
            <div class="q-pa-md row" v-for="item in cart" v-bind:key="item.id">
              <div class="col-3 q-pa-sm" style="border: 1px solid #aaa; height: 80px">
                 <img style="width: 100%; height:  100%" :src="item.imageUrl" />
              </div>
              <div class="col-9 q-px-md">
                <div class="poppins-bolder">{{ item.name }}</div>
                <div class="text-grey-8">
                  Quantidade: {{ item.qtd }}  Valor: R$ {{ moneyFormat(item.price) }}
                </div>
                <div class="poppins-bolder row justify-between" >
                  <div class="col-6 q-pt-xs"> Total: R$ {{ moneyFormat(item.price * item.qtd) }} </div>
                  <div class="col-3"> <q-btn dense flat color="grey-5" icon="remove_shopping_cart" @click="removeCArt(item.index)" /></div>
                </div>
              </div>
            </div>
          </q-scroll-area>
        </div>
          <div class="col-1 text-subtitle1 flex flex-center row justify-between poppins-bolder">
          <div class="col-4">Total</div>
          <div class="col-4 text-right">R$ {{ moneyFormat(totalCart()) }}</div>
          <div class="col-12 text-center" v-if="totalCart() >= 10">
            <q-chip color="green-1" text-color="green-8">Parabéns, sua compra tem frete grátis!</q-chip>
          </div>
        </div>
        <div class="col-1 q-py-md">
          <q-btn label="Finalizar compra" unelevated color="blue" text-color="white" class="full-width full-height" no-caps />
        </div>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Notify } from 'quasar'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    // Variaveis
    const $store = useStore()
    const leftDrawerOpen = ref(true)
    const cart = $store.state.shoppingCart.cart

    // Calculo do total
    const totalCart = () => {
      let valueTotal = 0
      for (let i = 0; cart.length > i; i++) {
        valueTotal = valueTotal + (cart[i].price * cart[i].qtd)
      }
      return valueTotal
    }

    // remove item do carrinho
    const removeCArt = (id) => {
      $store.commit('shoppingCart/removeCart', id)

      Notify.create({
        message: 'Removido do carrinho',
        type: 'warning',
        timeout: 3000
      })
    }

    // Formatando o layout dos valores
    const moneyFormat = (val) => {
      return val ? val.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : 0
    }

    return {
      // variaveis
      cart,
      leftDrawerOpen,
      cartDrawer: ref(true),

      // funções
      totalCart,
      removeCArt,
      moneyFormat
    }
  }
})
</script>
