import Logo from '../../atoms/Logo/Logo'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <Logo size="small" />
            <p className="footer__description">
              Sua plataforma online para compra de tickets de cinema
            </p>
          </div>
          
          <div className="footer__section">
            <h3 className="footer__title">Links Rápidos</h3>
            <ul className="footer__links">
              <li><a href="/" className="footer__link">Início</a></li>
              <li><a href="/filmes" className="footer__link">Filmes</a></li>
              <li><a href="/contato" className="footer__link">Contato</a></li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h3 className="footer__title">Contato</h3>
            <p className="footer__text">contato@cineonline.com</p>
            <p className="footer__text">(11) 4002-8922</p>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Cine Online. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer