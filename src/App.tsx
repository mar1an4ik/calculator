import './App.css';
import React, {useState} from "react"
export const calculate = (symbol:string, x:string, y:string = "0") => {

    let a = parseFloat(x);
    let b = parseFloat(y);
    switch (symbol) {
        case "+": {
            return a + b;
            break;
        }
        case "-": {
            return a - b;
            break;
        }
        case "*": {
            return a * b;
            break;
        }

        case "/": {
            return a / b;
            break;
        }

        case "%": {
            return a % b;
            break;
        }
        default : {
            alert("No such operator")
        }

    }

} // Simple operators switch like "+","-","/","*","%"
function App() {

    const buttonsBlack = [".", "0", "3", "2", "1", "6", "5", "4", "9", "8", "7", "m-", "mr", "mc"].reverse();
    const buttonsWhite = ["%", "+/-", "AC"].reverse()
    const buttonsOrange = ["=", "+", "-", "*", "m+", "/"].reverse()
    const refLabelResult = React.createRef<HTMLDivElement>(); //ref for result/expression
    const refLabelSaved = React.createRef<HTMLDivElement>(); //ref for "m-" and "m+"
    let elementsOnScreen:Array<string> = []; // Our expression
    let getLastElement = () => {
        return elementsOnScreen[elementsOnScreen.length - 1]
    }  // get last element from expression
    let initializeNewSymbol = (target:any) => {
        if (isNaN(target.value) && getLastElement() == undefined) return;  // First element -- operator CHECK
        if ((isNaN(target.value) && getLastElement() && ((getLastElement().slice(-1) != ")")))) {
            if ((operatorRepeat(target.value) == 1)) return;
        } // If symbol==operator -- Double operators CHECK
        if (target.value == ".") {
            if (secondDotCheck()) return;

        }  // If symbol == "." -- two dots CHECK (cant be 0..421)

        if ((!isNaN(parseFloat(target.value)) || (target.value == '.')) // CHECK if we have "2" and "3",then change "2" on "23"
            && (!isNaN(parseFloat(getLastElement())))) {

            let newNum = getLastElement() + target.value;
            elementsOnScreen.splice(elementsOnScreen.length - 1, 1, newNum)

        } else elementsOnScreen.push(target.innerHTML)  // else if we have  "+" and "3",just create new element "3"
        refLabelResult.current.innerHTML = (elementsOnScreen.join('')); // update label with new Symbols
    } //Checking different conditions and creating array "elementsOnScreen"

    const operatorRepeat = (symbol:string) => {

        if ((isNaN(Number(getLastElement())) && isNaN(Number(symbol))) || (getLastElement().slice(-1) == ".")) {

            alert("You should enter the number")

            return 1
        }

    } // checking repeating operators like cant be "3*/"
    const secondDotCheck = () => {
        if (!getLastElement() && getLastElement() != "0") {
            alert("NaN")
            return 1;
        }
        if (getLastElement() && getLastElement().includes(".")) {
            alert("Too many dots or dot is NaN")
            return 1
        }

    } // checking repeating operators "." like cant be "3.."
    const prepareExpression = (expr:Array<string>) => {
        for (let i = 0; i < expr.length; i++) {
            if (expr[i].includes("(") || expr[i].includes(")")) {

                expr[i] = expr[i].replace('(', '');
                expr[i] = expr[i].replace(')', '');

            }
        }
    } // deleting "(" and ")"
    const firstPrioritetsCalculate = (expr:Array<string>) => {
        for (let i = 0; i <= expr.length - 2; i++) {
            if (expr[i] == "*" || expr[i] == "/" || expr[i] == "%") {

                let result = calculate(expr[i], expr[i - 1], expr[i + 1])
                expr.splice(i - 1, 3, String(result));
                i--;
            }
        }
    } // Calculating "*","/","%"
    const secondPrioritetsCalculate = (expr:Array<string>) => {
        for (let i = 0; i <= expr.length; i++) {
            if (expr[i] == "+" || expr[i] == "-") {

                let result = calculate(expr[i], expr[i - 1], expr[i + 1])
                expr.splice(i - 1, 3, String(result));
                i--;
            }
        }
    }//Calculating "+","-"

    const runCalculation = (expression:Array<string>) => {
        prepareExpression(expression);
        firstPrioritetsCalculate(expression)
        secondPrioritetsCalculate(expression)
        return Number(expression)
    }  // Calculate full expression (=)
    const runAC = () => {
        refLabelResult.current.innerHTML = "0";
        elementsOnScreen.length = 0;
    }
    const runMR = () => {
        refLabelResult.current.innerHTML = refLabelSaved.current.innerHTML;
        elementsOnScreen.length = 1;
        elementsOnScreen[0] = (refLabelSaved.current.innerHTML)}

    const runMC = () => {
        refLabelSaved.current.innerHTML = String(0);

    }
    const runPlusMinus = () => {
        elementsOnScreen = runReverse(elementsOnScreen);
        refLabelResult.current.innerHTML = (elementsOnScreen.join(''));

    }
    const runMPlus = (arrays:Array<string>) => {
        if (arrays.length == 0) {
            refLabelSaved.current.innerHTML = String(Number(refLabelSaved.current.innerHTML) + Number(refLabelResult.current.innerHTML));
            return;
        }
        let result = runCalculation(arrays);
        refLabelSaved.current.innerHTML = String(Number(refLabelSaved.current.innerHTML) + result);
        arrays.length = 0;
        return arrays;
    }
    const runMMinus = (arrays:Array<string>) => {
        if (arrays.length == 0) {
            refLabelSaved.current.innerHTML = String(Number(refLabelSaved.current.innerHTML) - Number(refLabelResult.current.innerHTML));
            return;
        }
        let result = runCalculation(arrays);
        refLabelSaved.current.innerHTML = String(Number(refLabelSaved.current.innerHTML) - result);
        arrays.length = 0;
        return arrays;
    }
    const runReverse = (arrays:Array<string>) => {
        prepareExpression(arrays)
        let lastIndex;
        if (isNaN(Number(arrays[arrays.length - 1])) && isNaN(Number(arrays[arrays.length - 2]))) {
            alert("Your cant do it")
            return arrays
        }
            else if(isNaN(Number(arrays[arrays.length - 2]))) lastIndex=arrays.length-1
            else lastIndex = arrays.length - 2;

        arrays[lastIndex] = "(" + String(-arrays[lastIndex]) + ")";
        return arrays
    }


    let buttonClick = (element:any) => {
        if ( !refLabelResult.current.innerHTML) throw new Error("Not found")
        if (element.target.value == "=") {
            refLabelResult.current.innerHTML = String(runCalculation(elementsOnScreen));
            elementsOnScreen.length = 0;
            return;
        }
        if (element.target.value == "m+") {
            runMPlus(elementsOnScreen);
            return;
        }
        if (element.target.value == "m-") {
            runMMinus(elementsOnScreen);
            return;
        }
        if (element.target.value == "AC") {
            runAC()
            return;
        }
        if (element.target.value == "mc") {
            runMC();
            return;
        }
        if (element.target.value == "mr") {
           runMR();
            return;
        }
        if (element.target.value == "+/-") {
            runPlusMinus();
            return;
        }

        initializeNewSymbol(element.target);


    }


//Creating <button><button> with onclick=buttonClick from Array of buttons
    const designedButtonsBlack = buttonsBlack.map((u) => {
        if (u == "0") return <button id={"zero"} value={u} onClick={buttonClick}>{u}</button>
        else return <button className={"blackButtons"} value={u} onClick={buttonClick}>{u}</button>
    }) //0 has special id because it has Double Width
    const designedButtonsWhite = buttonsWhite.map((u) => {
        return (<button value={u} className={"whiteButtons"} onClick={buttonClick}>{u}</button>)
    })
    const designedButtonsOrange = buttonsOrange.map((u) => {
        return (<button value={u} className={"yellowButtons"} onClick={buttonClick}>{u}</button>)
    });


    return (
        <div className="App">
            <div className={"calculator"}>


                <div className={"labelBig"}  ref={refLabelResult}>0</div>
                //Label for result
                <div className={"labelSmall"}  ref={refLabelSaved}>0</div>//Label for "m+" and "m-"
                <div className={"columns"}>

                    <div className={"firstColumn"}>
                        <div className={"firstColumnSmallFirst"}>
                            {designedButtonsWhite}
                        </div>
                        <div className={"firstColumnSmallSecond"}>
                            {designedButtonsBlack}
                        </div>
                    </div>
                    <div className={"secondColumn"}>
                        {designedButtonsOrange}
                    </div>
                </div>
            </div>
<div >Created for Test Task by  <span className={"marian"}> &copy;<i>marianelement@gmail.com</i></span></div>
        </div>
    );
}

export default App;
