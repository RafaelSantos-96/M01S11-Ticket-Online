import './FilmesPage.css'
import filmes from '../../../data/filmes'
import FilmeCard from '../../molecules/FilmeCard/FilmeCard'


const FilmesPage = () => {
  return (
    <div className="filmes-page">
      <div className="filmes-page__container">
        <header className="filmes-page__header">
          <h1 className="filmes-page__title">Filmes em Cartaz</h1>
          <p className="filmes-page__subtitle">
            Descubra os melhores filmes disponíveis em nossos cinemas
          </p>
        </header>
        
        <div className="filmes-page__content">
          <div className="filmes-grid">
           {filmes.map((filme) => (
  <FilmeCard key={filme.id} filme={filme} />
))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmesPage
