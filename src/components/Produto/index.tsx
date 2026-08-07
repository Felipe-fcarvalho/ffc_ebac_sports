import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'

type Props = {
  produto: ProdutoType
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, favoritar, estaNosFavoritos }: Props) => {
  const dispatch = useAppDispatch()
  const itens = useAppSelector((state) => state.carrinho.itens)

  const AdicionarAoCarrinho = () => {
    const produtoJaExiste = itens.some((item) => item.id === produto.id)

    if (produtoJaExiste) {
      alert('Item já adicionado ao carrinho')
      return
    }

    dispatch(adicionar(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={AdicionarAoCarrinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
