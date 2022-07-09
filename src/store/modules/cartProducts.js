import { productService } from '@services'

export default {
  namespaced: true,
  clearable: true,
  state () {
    return {
      buffer: [],
    }
  },
  getters: {
    buffer: ( state ) => state.buffer
  },
  mutations: {
    setProducts ( state, products ) {
      state.buffer = products
    },
    clearModule ( state ) {
      state.buffer = []
    }
  },
  actions: {
    async loadProducts ( { commit, dispatch }, cartItems ) {
      const idsToFetch = await dispatch( 'getUniqueIds', cartItems )
      const requests = []

      for ( const id of idsToFetch ) {
        requests.push(
          productService.getProductById( null, id )
        )
      }

      const results = await Promise.allSettled( requests )
      const products = results.map( ( result ) => result.value.parsedBody )

      commit( 'setProducts', products )
    },
    getUniqueIds ( context, cartItems ) {
      const ids = cartItems.map( ( cartItem ) => cartItem.product )
      return [ ...new Set( ids ) ]
    },
  },
}
