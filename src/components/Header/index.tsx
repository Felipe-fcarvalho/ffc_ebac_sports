import { useAppSelector } from '../../store/hooks'

import * as S from './styles'
import { Produto } from '../../App'
import { paraReal } from '../Produto'
import cesta from '../../assets/cesta.png'

type Props = {
  favoritos: Produto[]
}

const Header = ({ favoritos }: Props) => {
  const itens = useAppSelector((state) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
