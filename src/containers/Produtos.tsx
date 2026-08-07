import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetItensQuery } from '../services/api'

import * as S from './styles'

type Props = {
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
}

const Produtos = ({ favoritos, favoritar }: Props) => {
  const { data: produtos, isLoading } = useGetItensQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  if (isLoading) {
    return <p>Carregando Produtos...</p>
  }

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
          favoritar={favoritar}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
