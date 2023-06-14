import { Page1 } from "../pages/Page1.js";
import { Page2 } from "../pages/Page2.js";
import { Page3 } from "../pages/Page3.js";

const rutas = () => {
  
  const ruta = window.location.hash 
  const main = document.getElementById('main')
  if (main.firstChild) main.removeChild(main.firstChild)
  
  switch (ruta) {
    case '':
      main.appendChild(Page1())
      break;
    case '#/page-1':
      main.appendChild(Page1())
      break;
    case '#/page-2':
      main.appendChild(Page2())
      break;
    case '#/page-3':
      main.appendChild(Page3())
      break;
    default:
      break;
  }

}

export default rutas