
var number1 = '', number2 = '0', operator;

function operate(operator, num1, num2){
    
    if (operator === '+') {

        if (number1 != "0" && number2 != "0"){
        num2+=num1;
        document.getElementById("result").textContent = `${num2}`;
        number2 = num2.toString();
        number1='';
    
    }
        else {
            num2+=num1;
            number1='';
            document.getElementById("result").textContent = `${num2}`;
            number2=num2.toString();
        }
    }
    else if(operator === '-'){
        if (number1 != "0" && number2 != "0"){
            num2-=num1;
            document.getElementById("result").textContent = `${num2}`;
            number2 = num2.toString();
            number1='';
        
        }
         else {
            let res = num1-num2;
            number1='';
            document.getElementById("result").textContent = `${res}`;
            number2=res.toString();
        };
    }
    else if (operator === '*') {

        if (number2 != "0"){
        num2*=num1;
        document.getElementById("result").textContent = `${num2}`;
        number2 = num2.toString();
        number1='';
    
    }   
        else {
            num2=num1;
            number1='';
            document.getElementById("result").textContent = `${num2}`;
            number2=num2.toString();
        }
    }
    else if(operator === '/'){
        if (number1 != "0" && number2 != "0"){
            num2/=num1;
            document.getElementById("result").textContent = `${num2}`;
            number2 = num2.toString();
            number1='';
        
        }
         else {
            res = num1;
            number1='';
            document.getElementById("result").textContent = `${res}`;
            number2=res.toString();
        };
    }
}




function startNums() {
    let nodes = document.getElementsByClassName("number");
    for(let i = 0; i < nodes.length; i++){
        nodes[i].addEventListener('click', (e) => {
            if (number1.length < 10){
                if (e.target.id === "one") number1+=1;
                else if (e.target.id === "two") number1+=2;
                else if (e.target.id === "three") number1+=3;
                else if (e.target.id === "four") number1+=4;
                else if (e.target.id === "five") number1+=5;
                else if (e.target.id === "six") number1+=6;
                else if (e.target.id === "seven") number1+=7;
                else if (e.target.id === "eight") number1+=8;
                else if (e.target.id === "nine") number1+=9;
                else if (e.target.id === "zero") {
                    if (number1 == '') return;
                    else number1+=0;}
                    
                document.getElementById("result").textContent = number1;
            }
            
        })
    }

}

function startOps() {
    let nodes = document.getElementsByClassName("operator");
    for(let i = 0; i < nodes.length; i++){
        nodes[i].addEventListener('click', (e) => {
            if(e.target.textContent != '=')
            operator = e.target.textContent;
            if (number1 && number2 != '') operate(operator, parseFloat(number1), parseFloat(number2));
        })
    }
}

function auxOps(){
    let nodes = document.getElementsByClassName("aux");
    for(let i = 0; i < nodes.length; i++){
        nodes[i].addEventListener('click', (e) => {
            if(e.target.textContent === '+/-'){
                if (number1.length <= 10){
                    if (number1[0] != '-' && number1 != '0'){
                        number1 = "-" + number1;
                        document.getElementById("result").textContent = number1;
                    }
                    else if (number1 != '0' && number1[0] == '-'){
                        number1 = number1.slice(1, number1.length);
                        document.getElementById("result").textContent = number1;
                    }
                }
            }
            else if(e.target.textContent === 'AC'){
                number1 = '';
                number2='0';
                document.getElementById("result").textContent = "0.0";
            }
            else {
                number1 = number1.slice(0, number1.length - 1);
                document.getElementById("result").textContent = number1;
            }
        })
    }
}

function floatPoint() {
    let nodes = document.getElementsByClassName("makeFloat");
    for(let i = 0; i < nodes.length; i++){
        nodes[i].addEventListener('click', (e) => {
            if(number1.indexOf('.') != -1 || number1 == '') return;
            number1+='.';
            document.getElementById("result").textContent = number1;
         })
}
}

function initCalc (){
startNums();
startOps();
auxOps();
floatPoint();
}

initCalc();