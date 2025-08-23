import { Routes, Route } from 'react-router-dom'
import MainTemplate from './components/templates/MainTemplate/MainTemplate'
import HomePage from './components/pages/HomePage/HomePage'
import FilmesPage from './components/pages/FilmesPage/FilmesPage'
import FilmeDetalhePage from './components/pages/FilmeDetalhePage/FilmeDetalhePage'
import ContatoPage from './components/pages/ContatoPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="filmes" element={<FilmesPage />} />
          <Route path="filmes/:id" element={<FilmeDetalhePage />} />
          <Route path="contato" element={<ContatoPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
