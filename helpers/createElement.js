const Elemento = {
  element: '',
  clase: '',
  id: '',
  text:''
}

const createElement = (objeto = Elemento) => {
  
  const elementoACrear = objeto.element === '' ? 'div' : objeto.element 

  const element = document.createElement(elementoACrear)

  if (objeto.clase !== ('' || undefined)) element.setAttribute('class', objeto.clase)
  
  if (objeto.id !== ('' || undefined)) element.setAttribute('id', objeto.id)
  
  if (objeto.text !== ('' || undefined)) element.textContent = objeto.text 

  return element 
}

export default createElement 