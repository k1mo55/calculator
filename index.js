
const add = (x,y)=>{
    return x+y 
}
const subtract = (x,y)=>{
    return x-y 
}
const multiply = (x,y)=>{
    return x*y 
}
const divide = (x,y)=>{
   if(y==0)
    return "nan"
   else
    return x/y 
}

const operate =(x,y,op)=>{
    if(op=='+')
        return add(x,y);
    else if(op=='-')
        return subtract(x,y);
    else if(op=='*')
        return multiply(x,y);
    else if(op=='/')
        return divide(x,y);       
}
const buttons = document.querySelectorAll('button');
let displayValue = '0';
let num1 = null;
let num2 = null;
let sign1 = null;
let sign2 = null;
let result = null;

function display() {
    const screen = document.getElementById('screen');
    screen.innerText = displayValue;  
    }

buttons.forEach(function(i){
    i.addEventListener('click',function(){
        if(i.classList.contains('num'))
        {
            inputnum(i.value);
            display();
        }
        else if(i.classList.contains('sign')) {
                inputsign(i.value);
                display();
        }
        else if(i.classList.contains('equal')) {
                equal();
                display();
        } 
        else if(i.classList.contains('c')) {
                clear();
                display();
        } 
        else if(i.classList.contains('dot')) {
                dot(i.value);
                 display();
        }
        

    })

})


function inputnum (num){
    if(sign1==null){
        if(displayValue==='0' || displayValue===0){
            displayValue=num;
        }
        else if(displayValue==num1) {
            displayValue=num;
        }
        else {
            displayValue+=num;
        }
    }
    else{
        if(displayValue===num1)
            {
                displayValue=num;
            }
            else {
                displayValue+=num;
            }
    }
}

function inputsign(sign){
     if (sign1!=null && sign2===null)
    {
        
        sign2=sign;
        num2=displayValue;
        result=operate(parseFloat(num1), parseFloat(num2),sign1);
        displayValue=result;
        num1=displayValue;
        result=null;
       
    }
    else if (sign1!=null && sign2!=null)
        {
                num2=displayValue;
                result=operate(parseFloat(num1), parseFloat(num2), sign2);
                sign2=sign;
                displayValue=result;
                num1=displayValue;
                result=null;
        }
     else{
            sign1=sign;
            num1=displayValue;
        }

}

function dot (dot){
            //  if(sign1==null && !displayValue.includes(dot))
            // {
            //     displayValue+=dot;
            //     console.log("2");
            // }
            // else if(displayValue==0||displayValue=="0")
            // {
            //     displayValue+=dot;
            //     console.log("3");
            // }
            // else if (displayValue.includes(dot))
            // {
            //     displayValue=displayValue;
            //     console.log("npp");
            // }
     if(!displayValue.includes(dot)){
        displayValue+=dot;

    }
    else {
        displayValue=displayValue;
    }
}

function equal(){
    if(sign1===null){
        displayValue=displayValue;
    }
    else if(sign2 != null) {
        num2 = displayValue;
        result = operate(parseFloat(num1), parseFloat(num2), sign2);
        displayValue=result;
        result =0;
    }
    else {
        num2=displayValue;
        result = operate(parseFloat(num1), parseFloat(num2), sign1);
       
            displayValue=result;
            num1 = displayValue;
            num2 = null;
            sign1 = null;
            sign2 = null;
            result = null;
        }
    }

function clear (){
    displayValue='0';
    num1 = null;
    num2 = null;
    sign1 = null;
    sign2 = null;
    result = null;
}

        
