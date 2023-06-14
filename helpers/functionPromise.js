const functionPromise = (valor1, valor2) => {
  
  const operacion = (valor1, valor2) => {
    return valor1 > valor2 ? valor1 : valor2 
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(operacion(valor1, valor2))
    }, 3000)
  })
}

export default functionPromise