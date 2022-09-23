import Styles from "../styles/Calc.module.css"
import { useState } from "react"
 

const Calc = () => {

    const [val1, setVal1] = useState(0)
    const [val2, setVal2] = useState(0)
    const [num, setNum] = useState(null)
    const [operator, setOperator] = useState("")
    // console.log(operator)

    const [submit, setSubmit] = useState(false)
    
    const calculate = () => {

        setSubmit(true)

        if(operator === '+'){
            setNum(parseInt(val1) +  parseInt(val2))
        }
       else if(operator === '-'){
            setNum(parseInt(val1) -  parseInt(val2))
       }
       else if(operator === '/'){
            setNum(parseInt(val1) /  parseInt(val2))
       }
       else if(operator === '*'){
            setNum(parseInt(val1) *  parseInt(val2))
       }
       else if(operator === '%'){
            setNum(parseInt(val1) %  parseInt(val2))
       }
       else{
           setNum(0)
       };
    }
    

    

    
   
    console.log(num)
    
    
    return <>

        <div className = {Styles.wrapper}>
        
            <h1>Calculator App</h1>

            <form>

                <div className = {Styles.inputWrapper}>
                    <label>Enter a number:</label>
                    <input type = "number"  onChange = {(e) => setVal1(e.target.value)}/>
                </div>

                <div className = {Styles.inputWrapper}>
                    <label>Enter an operator:</label>
                    <input type = "text" onChange = {(e) => setOperator(e.target.value)}/>
                </div>

                <div className = {Styles.inputWrapper}>
                    <label>Enter another number:</label>
                    <input type = "number"  onChange = {(e) => setVal2(e.target.value)}/>
                </div>

                <p className={`${Styles.result} ${submit && Styles.show}`}> Your result is {num}</p>
                


            </form>
                <button onClick = {(e) => calculate()}>Submit</button>

        </div>

    </>
}

export default Calc