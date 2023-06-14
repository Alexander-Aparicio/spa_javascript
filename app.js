import { Header } from "./components/Header.js"
import createElement from "./helpers/createElement.js"

const app = () => {
  console.log('estoy en app')
  const $app = document.getElementById('app')
  $app.appendChild(Header())
  const main = createElement({ element: 'main', id: 'main', clase: 'main' })
  $app.appendChild(main)
}

export default app