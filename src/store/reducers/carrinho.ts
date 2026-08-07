import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload
      const produtoJaExiste = state.itens.some((p) => p.id === item.id)

      if (!produtoJaExiste) {
        state.itens.push(item)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
