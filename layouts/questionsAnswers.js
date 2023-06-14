import createElement from "../helpers/createElement.js"
import jsStyles from "../helpers/jsStyles.js"

const props = {
  interrogation: "",
  answers: []
}

const questionAnswers = (props) => {
  
  const container = createElement({ element: "section", clase:"section" })
  jsStyles([".section {position:absolute}"])
  const question = createElement({
    element: "h2",
    clase: "question",
    text: props.interrogation,
  });
  container.appendChild(question);
  const fragment = document.createDocumentFragment();
  props.answers.forEach((el) => {
    const answers = createElement({
      element: "p",
      clase: "answer",
      text: el.answer,
    });
    fragment.appendChild(answers);
  });

  container.appendChild(fragment);

  return container;
}

export default questionAnswers