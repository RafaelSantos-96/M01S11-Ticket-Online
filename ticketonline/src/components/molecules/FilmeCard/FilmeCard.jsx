import { Link } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import './FilmeCard.css'

const FilmeCard = ({ filme }) => {
  return (
    <div className="filme-card">
      <img
        src={filme.cartaz}
        alt={`Cartaz do filme ${filme.nome}`}
        className="filme-card__poster"
      />

      <div className="filme-card__info">
        <h3 className="filme-card__title">{filme.nome}</h3>
        <p className="filme-card__details">
          {filme.genero} • {filme.idade_indicada}+ anos
        </p>

        <Link to={`/filmes/${filme.id}`}>
          <Button variant="primary" size="small">
            Ver mais informações
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default FilmeCard
