import { useParams, Link } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import filmes from '../../../data/filmes'
import './FilmeDetalhePage.css'

const FilmeDetalhePage = () => {
  const { id } = useParams()
  const filme = filmes.find((f) => f.id === id)

  if (!filme) {
    return (
      <div className="filme-detalhe-page">
        <p>Filme não encontrado.</p>
        <Link to="/filmes">
          <Button variant="secondary" size="small">
            ← Voltar para Filmes
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="filme-detalhe-page">
      <div className="filme-detalhe__container">
        <div className="filme-detalhe__back">
          <Link to="/filmes">
            <Button variant="secondary" size="small">
              ← Voltar para Filmes
            </Button>
          </Link>
        </div>

        <div className="filme-detalhe__content">
          <div className="filme-detalhe__poster">
            <img
              src={filme.cartaz}
              alt={`Cartaz do filme ${filme.nome}`}
              className="filme-detalhe__img"
            />
          </div>

          <div className="filme-detalhe__info">
            <h1 className="filme-detalhe__title">{filme.nome}</h1>

            <div className="filme-detalhe__meta">
              <span className="meta-item">{filme.genero}</span>
              <span className="meta-separator">•</span>
              <span className="meta-item">{filme.idade_indicada} anos</span>
            </div>

            <div className="filme-detalhe__description">
              <h3>Sinopse</h3>
              <p>{filme.sinopse}</p>
            </div>

            <div className="filme-detalhe__actions">
              <Button variant="primary" size="large">
                Comprar Ingresso
              </Button>
              <Button variant="secondary" size="large">
                Ver Trailer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmeDetalhePage
