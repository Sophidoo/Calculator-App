import { useState } from "react"
import Calc from "./Components/calc"
import Styles from "./styles/Calc.module.css"
import Moderncalc from "./Components/moderncalc"

function App(){

  const [calc, setCalc] = useState(null)
  
  return<>

    <div className={Styles.firstbuttons}>
      <button
        onClick={() => setCalc("old-calc")}
      >
        Active old calc
      </button>

      <button
        onClick={() => setCalc("new-calc")}
      >
        Active new calc
      </button>
    </div>

    {
      calc === "old-calc" &&
      <Calc />
    }
    {
      calc === "new-calc" &&
      <Moderncalc/>
    }
  </>

}

export default App