import { Link } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__title">
              Bem-vindo ao <span className="hero__highlight">Cine Online</span>
            </h1>
            <p className="hero__description">
              Compre seus ingressos de cinema online de forma rápida e segura. 
              Desfrute dos melhores filmes em cartaz com total comodidade.
            </p>
            <div className="hero__actions">
              <Link to="/filmes">
                <Button variant="primary" size="large">
                  Ver Filmes em Cartaz
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="secondary" size="large">
                  Entre em Contato
                </Button>
              </Link>
            </div>
          </div>
          <div className="hero__image">
            {<img src="/fachada_cinema.jpg" alt="Cinema" className="hero__img" />}
            <div className="">
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features__container">
          <h2 className="features__title">Por que escolher o Ticket Online?</h2>
          <div className="features__grid">
            <div className="feature-card">
              <div className="feature-card__icon">🎬</div>
              <h3 className="feature-card__title">Filmes em Cartaz</h3>
              <p className="feature-card__description">
                Acesso aos últimos lançamentos e filmes mais populares do cinema
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">🎫</div>
              <h3 className="feature-card__title">Compra Online</h3>
              <p className="feature-card__description">
                Compre seus ingressos online sem filas e com total segurança
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">💺</div>
              <h3 className="feature-card__title">Escolha seu Lugar</h3>
              <p className="feature-card__description">
                Selecione os melhores assentos disponíveis na sala de cinema
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage