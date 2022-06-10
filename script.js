let prevNumber=""
let calculationOperator=""
let currentNumber=""
let result="0"
const calculatorPrev=document.querySelector(".calculator-prev")
const calculatorOperator=document.querySelector(".calculator-operator")
const calculatorScreen=document.querySelector(".calculator-screen")
const calculatorResult=document.querySelector(".calculator-result")

const calculate=()=>{
	switch(calculationOperator){
		case "+":
			result=parseFloat(prevNumber)+parseFloat(currentNumber)
			break
		case "-":
			result=parseFloat(prevNumber)-parseFloat(currentNumber)
			break
		case "*":
			result=parseFloat(prevNumber)*parseFloat(currentNumber)
			break
		case "/":
			result=parseFloat(prevNumber)/parseFloat(currentNumber)
			break
		case "%":
			result=parseFloat(prevNumber)*parseFloat(currentNumber)/100
			break
		default:
			break
	}
	calculatorResult.value=result
}

let result_temp=result

const inputNumber=(number)=>{
	if(currentNumber===""){
		currentNumber=number
	}else{
		currentNumber+=number
	}
}

const inputOperator=(operator)=>{
	if(calculationOperator===""){
		prevNumber=currentNumber
		calculatorPrev.value=prevNumber
	}
	else if(result!==0){
		prevNumber=result
		calculatorPrev.value=prevNumber	
	}
	calculationOperator=operator
	currentNumber=""
	calculatorOperator.value=operator
	calculatorScreen.value=currentNumber
}

const updateScreen=(number)=>{
	calculatorScreen.value=number
}

const clearAll=()=>{
	prevNumber=""
	calculationOperator=""
	currentNumber=""
	result="0"
	calculatorOperator.value=calculationOperator
	calculatorPrev.value=prevNumber
	calculatorResult.value=result
	calculatorScreen.value=currentNumber
}

const inputDecimal=(dot)=>{
	if(currentNumber.includes(".")){
		return
	}
		currentNumber+=dot
}

const numbers=document.querySelectorAll(".number")

numbers.forEach((number)=>{
	number.addEventListener("click",(event)=>{
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})


const operators=document.querySelectorAll(".operator")

operators.forEach((operator)=>{
	operator.addEventListener("click",(event)=>{
		inputOperator(event.target.value)
	})
})

const equalSign=document.querySelector(".equal-sign")

equalSign.addEventListener("click",()=>{
	calculate()
	updateScreen(currentNumber)
})

const clearBtn=document.querySelector(".all-clear")

clearBtn.addEventListener("click",()=>{
	clearAll()
	updateScreen(currentNumber)
})

const decimal=document.querySelector(".decimal")

decimal.addEventListener("click",(event)=>{
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

