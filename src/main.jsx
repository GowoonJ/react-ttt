import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Game, Header } from './components'
// import Game from './components/game'
// import Header from './components/header'
import './index.scss'

const root = document.getElementById('root')
createRoot(root).render(
  <StrictMode>
    <Header />
    <Game clss="tictactoe game" />
  </StrictMode>
)
