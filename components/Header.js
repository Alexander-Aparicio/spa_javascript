import createElement from "../helpers/createElement.js"
import jsStyles from "../helpers/jsStyles.js"

const styles = [
  `.header {
    width:100%;
    background-color:#515151;
    display:flex;
    justify-content:center;
    align-items:center;
  }`,
  `.header-menu {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0 18px;
  }`,
  `.header-menu-link {
    color:white;
    cursor:pointer;
  }`
]

export const Header = () => {
  
  const header = createElement({element:'header', clase:'header'})
  const menu = createElement({ element: 'div', clase: 'header-menu' })
  
  const links = [
    { name: 'Page 1', id: 'page-1' },
    {name:'Page 2', id:'page-2'},
    {name:'Page 3', id:'page-3'}
  ]

  const fragment = document.createDocumentFragment()

  links.forEach((link) => {
    
    const Link = createElement({ element: 'p', clase: 'header-menu-link', text: link.name })

    Link.addEventListener('click', () => {
      window.location.hash = `/${link.id}`
    })

    fragment.appendChild(Link)
    
  })

  menu.appendChild(fragment)
  header.appendChild(menu) 
  jsStyles(styles)
  return header

}