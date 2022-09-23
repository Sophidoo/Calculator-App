import Styles from '../styles/Moderncalc.module.css'
import { useState} from "react"

const Moderncalc = () => {

    const[num1, setNum1] = useState('')
    const[num, setNum] = useState('')
    const[operator, setOperator] = useState('')
    const[button, setButton] = useState(false)
    // const[result, setResult] = useState(0)

    let set = (value) => {
        // console.log(value)
        if(button){
            setNum(value)
            setButton(false)
            return
        }
        setNum(num + value)

    }

    let operation = (value) => {
        setButton(true)

        // if(button === true)
        setOperator(value)
        setNum1(num)
    }

    let calculate = () => {
        if(operator === '+'){
            setNum(parseInt(num1) +  parseInt(num))
        }
       else if(operator === '-'){
            setNum(parseInt(num1) -  parseInt(num))
       }
       else if(operator === '/'){
            setNum(parseInt(num1) /  parseInt(num))
       }
       else if(operator === 'x'){
            setNum(parseInt(num1) *  parseInt(num))
       }
       else if(operator === 'md'){
            setNum(parseInt(num1) %  parseInt(num))
       }
       else{
           setNum(0)
       };
       setOperator(null)
    }

    let clear = () => {
        setNum('')
    }
    return<>
        <section>
            <h1>Calculator App</h1>
            <div className={Styles.wrapper}>
                <p className={Styles.result}>{num}</p>

                <div className={Styles.buttonWrapper}>
                    <div className = {Styles.firstRow}>
                        <input type="button" value="c" onClick = {() => clear()}/>
                        <input type="button" value="" onClick = {(e) => operation(e.target.value)}/>
                        <input type="button" value="" />
                        <input type="button" value="+" className={operator === '+' ? Styles.active : Styles.normal } onClick = {(e) => operation(e.target.value)}/>
                    </div>
                    <div className = {Styles.firstRow}>
                        <input type="button" value="1" onClick = {(e) => set(e.target.value)}/>
                        <input type="button" value="2" onClick = {(e) => set(e.target.value)}/>
                        <input type="button" value="3" onClick = {(e) => set(e.target.value)}/>
                        <input type="button" value="-" className={operator === '-' ? Styles.active : Styles.normal } onClick = {(e) => operation(e.target.value)}/>
                    </div>
                    <div className = {Styles.firstRow}>
                        <input type="button" value="4" onClick = {(e) => set(e.target.value)}/>
                        <input type="button" value="5" onClick = {(e) => set(e.target.value)}/>
                        <input type="button" value="6" onClick = {(e) => set(e.target.value)}/>
                        <input type="button" value="/" onClick = {(e) => operation(e.target.value)} className={operator === '/' ? Styles.active : Styles.normal }/>
                    </div>
                    <div className = {Styles.firstRow}>
                        <input type="button" value="7" onClick = {(e) => set(e.target.value)}/>
                        <input type="button" value="8" onClick = {(e) => set(e.target.value)}/>
                        <input type="button" value="9" onClick = {(e) => set(e.target.value)}/>
                        <input type="button" value="x" onClick = {(e) => operation(e.target.value)} className={operator === 'x' ? Styles.active : Styles.normal }/>
                    </div>
                    <div className = {Styles.firstRow}>
                        <input type="button" value="." onClick = {(e) => set(e.target.value)}/>
                        <input type="button" value="0" onClick = {(e) => set(e.target.value)}/>
                        <input type="button" value="md" onClick = {(e) => operation(e.target.value)} />
                        <input type="button" value="=" onClick = {() => calculate()} className = {Styles.equal}/>
                    </div>
                </div>

            </div>
        </section>


    </>

}



export default Moderncalc