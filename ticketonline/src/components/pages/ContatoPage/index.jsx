import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import Button from '../../atoms/Button/Button'
import './ContatoPage.css'
import 'react-toastify/dist/ReactToastify.css'

const ContatoPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log('Dados do formulário:', data)
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    reset()
  }

  return (
    <div className="contato-page">
      <div className="contato-page__container">
        <div className="contato-page__header">
          <h1 className="contato-page__title">Entre em Contato</h1>
          <p className="contato-page__subtitle">
            Tem dúvidas ou sugestões? Estamos aqui para ajudar!
          </p>
        </div>

        <div className="contato-page__content">
          {/* Informações de Contato */}
          <div className="contato-info">
            <h2 className="contato-info__title">Informações de Contato</h2>

            <div className="contato-item">
              <div className="contato-item__icon">📍</div>
              <div className="contato-item__content">
                <h3>Endereço</h3>
                <p>Rua do Cinema, 123<br />Centro - São Paulo, SP</p>
              </div>
            </div>

            <div className="contato-item">
              <div className="contato-item__icon">📞</div>
              <div className="contato-item__content">
                <h3>Telefone</h3>
                <p>(11) 4002-8922</p>
              </div>
            </div>

            <div className="contato-item">
              <div className="contato-item__icon">✉️</div>
              <div className="contato-item__content">
                <h3>Email</h3>
                <p>contato@cineonline.com</p>
              </div>
            </div>

            <div className="contato-item">
              <div className="contato-item__icon">🕒</div>
              <div className="contato-item__content">
                <h3>Horário de Funcionamento</h3>
                <p>Segunda a Domingo<br />10:00 às 22:00</p>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="contato-form">
            <h2 className="contato-form__title">Envie uma Mensagem</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form__group">
                <label htmlFor="nome" className="form__label">Nome Completo *</label>
                <input
                  type="text"
                  id="nome"
                  className="form__input"
                  {...register('nome', { required: true })}
                />
                {errors.nome && <span className="form__error">Nome é obrigatório.</span>}
              </div>

              <div className="form__group">
                <label htmlFor="email" className="form__label">Email *</label>
                <input
                  type="email"
                  id="email"
                  className="form__input"
                  {...register('email', { required: true })}
                />
                {errors.email && <span className="form__error">Email é obrigatório.</span>}
              </div>

              <div className="form__group">
                <label htmlFor="telefone" className="form__label">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  className="form__input"
                  {...register('telefone')}
                />
              </div>

              <div className="form__group">
                <label htmlFor="mensagem" className="form__label">Mensagem *</label>
                <textarea
                  id="mensagem"
                  rows="5"
                  className="form__textarea"
                  {...register('mensagem', { required: true })}
                ></textarea>
                {errors.mensagem && <span className="form__error">Mensagem é obrigatória.</span>}
              </div>

              <div className="form__group">
                <label className="form__label">
                  <input type="checkbox" {...register('urgencia')} />
                  &nbsp;Mensagem urgente
                </label>
              </div>

              <Button type="submit" variant="primary" size="large">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  )
}

export default ContatoPage
