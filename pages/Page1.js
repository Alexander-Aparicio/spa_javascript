import createElement from "../helpers/createElement.js"
import functionPromise from "../helpers/functionPromise.js"
import jsStyles from "../helpers/jsStyles.js"
import questionAnswers from "../layouts/questionsAnswers.js"

export const Page1 = () => {
  const page = createElement({ element: 'h1', text: 'PAGE 1' })
  let resultado = ''
  // let elementText
  // const opeAsync = async () => {
  //   const nombre = createElement({ element: "h2", text: "Valor máximo" });
  //   const valor = await functionPromise(125, 15);
  //   resultado = valor.toString()
  //   elementText = createElement({
  //     element: "p",
  //     clase: "result",
  //     id: "result",
  //     text: resultado,
  //   });
    // page.appendChild(elementText)
    // page.appendChild(nombre)

  // }
  const container = createElement({ element: "div", clase: "contenerdorSections" })
  jsStyles([".contenerdorSections {border: solid 1px blue; position: relative}"]);
  const pregunta1 = {
    interrogation: "¿Año de la indenpendencia del Perú?",
    answers: [
      { answer: "A) 1424" },
      { answer: "B) 1916" },
      { answer: "C) 1821" }
    ],
  };

  const pregunta2 = {
    interrogation: "¿Año del descubriento de América?",
    answers: [
      { answer: "A) 1492" },
      { answer: "B) 1620" },
      { answer: "C) 1521" },
    ],
  };
  
  const pregunta3 = {
    interrogation: "Nombre del libertador del Perú",
    answers: [
      { answer: "A) Cristobal Colón" },
      { answer: "B) San Martin de Porres" },
      { answer: "C) San Martin" },
      { answer: "D) Simón Bolivar"}
    ],
  };
 
  const db = new Map();
  db.set(1, pregunta1)
  db.set(2, pregunta2)
  db.set(3, pregunta3)

  console.log(db)

  const fragment = document.createDocumentFragment()

  // for (let pregunta of db.values()) {
  //   fragment.appendChild(questionAnswers(pregunta));  
  // }
  // const Pregunta1 = questionAnswers(data);

  container.appendChild(fragment)
  page.appendChild(container)
  // opeAsync()
  
  return page 
}