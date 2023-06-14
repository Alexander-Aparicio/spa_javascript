import createElement from "./createElement.js"

const jsStyles = (styles=[]) => {
  
  const style = createElement({ element: 'style' })
  document.head.appendChild(style)

  styles.forEach((el) => {
    style.sheet.cssRules[style.sheet.insertRule(el)]
  })

}

export default jsStyles