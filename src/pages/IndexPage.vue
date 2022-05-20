<template>
  <q-page class="poppins">
    <div class="background-text poppins-bolder q-pl-xl">{{ itemActive.skuName }}</div>
    <div class="body">
      <div class="row justify-center">
        <div class="col-12 col-md-6 flex flex-center desktop-hide">
          <div class="round-bg flex flex-center">
            <q-img
              class="up"
              :src="itemActive.imageUrl"
              style="height: 50%; transform: rotate(90deg)"
            />
          </div>
        </div>
        <div class="col-11 col-md-5 flex flex-center">
          <div class="column q-col-gutter-y-xl">
            <div class="col-12 col-md-4 text-h2 poppins-bolder up">
              {{ itemActive.name }}
            </div>
            <div class="col-2 text-h5 text-black poppins-bolder">R$ {{ moneyFormat(itemActive.price) }}</div>
            <div class="col-2 q-gutter-md up">
              <q-btn-group outline>
                <q-btn outline color="black" label="+" @click="qtdItem++" />
                <q-btn outline color="black" :label="qtdItem" readonly/>
                <q-btn outline color="black" label="-" @click="(qtdItem > 1) ? qtdItem-- : ''"/>
              </q-btn-group>
              <q-btn unelevated color="green" label="Adicionar ao carrinho" @click="addtoCart()" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 flex flex-center mobile-hide">
          <div class="round-bg flex flex-center">
            <q-img
              class="up"
              alt="Quasar logo"
              :src="itemActive.imageUrl"
              style="height: 50%; transform: rotate(90deg)"
            />
          </div>
        </div>
        <div class="col-11 poppins-bolder text-h5 q-mt-xl">Outras opções para você</div>
        <div class="col-11 q-mt-xl">
          <div class="row q-col-gutter-md justify-center">
            <div class="col-12 col-md-3" v-for="item in candyList" v-bind:key="item.id">
              <q-card flat class="bg-grey-3 text-center" >
                <q-card-section class="flex flex-center">
                  <q-img
                    :src="item.imageUrl"
                    style="height: 150px"
                  />
                </q-card-section>

                <q-card-section style="height: 150px;">
                  <div class="text-h6">{{ item.name }}</div>
                  <div class="text-subtitle2">Valor: R$ {{ moneyFormat(item.price) }}</div>
                </q-card-section>

                <q-card-section>
                  <q-btn outline color="black" label="Visualizar" @click="itemActive = item, qtdItem = 1" />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { Notify } from 'quasar'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    // variaveis
    const itemActive = ref([])
    const qtdItem = ref(1)
    const $store = useStore()
    const candyList = $store.state.candy.belowTen[0].itemMetadata.items
    const cart = $store.state.shoppingCart.cart

    // Definindo produto inicial
    onMounted(() => {
      itemActive.value = candyList[0]
    })

    // Adicionando ao carrinho
    const addtoCart = () => {
      const lastIndex = cart.reduce(function (prev, current) {
        return (prev.index > current.index) ? prev : current
      })
      const newIndex = lastIndex.index + 1

      const newItem = {
        index: newIndex,
        id: itemActive.value.id,
        qtd: qtdItem.value,
        price: itemActive.value.price,
        name: itemActive.value.name,
        skuName: itemActive.value.skuName,
        imageUrl: itemActive.value.imageUrl
      }
      $store.commit('shoppingCart/addCart', newItem)

      Notify.create({
        message: 'Seu doce foi adicionado ao carrinho!',
        type: 'positive',
        timeout: 3000
      })
    }

    // Formatando o layout dos valores
    const moneyFormat = (val) => {
      return val ? val.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : 0
    }

    return {
      // variaveis
      candyList,
      qtdItem,
      itemActive,

      // funções
      addtoCart,
      moneyFormat
    }
  }
})
</script>
