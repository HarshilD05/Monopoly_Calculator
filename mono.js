// Balance
let balance = {
    red : 15000,
    blue : 15000,
    green : 15000,
    yellow : 15000,
    orange : 15000,
    purple : 15000,
    brown : 15000,
    cyan : 15000
};

let amount = 0,val = 0,X=0,i=0,pCount = 0;
let colour='red',dot = false,nav = false;
var cashIn = new Audio('./assets/Cash.mp3');
var cashOut = new Audio('./assets/CashOut.mp3');

let colour_Range = ["red","blue","green","yellow","orange","purple","brown","cyan"];

//Functions 

function reset () {
    balance.red = 15000;
    balance.blue = 15000;
    balance.green = 15000;
    balance.yellow = 15000; 
    balance.orange = 15000;
    balance.purple = 15000;
    balance.brown = 15000;
    balance.cyan = 15000;
}

function err(code) {
    document.getElementById("display").textContent = "Error !";
    switch (code) {
        case 0 : 
        document.getElementById('err').textContent = "You cannot Enter more than 3 decimal places!! ";
        break;

        case 1 : 
        document.getElementById('err').textContent = "Amount cannot be more than 25M. ";
        break;

        case 2 : 
        document.getElementById('err').textContent = " There is no decimal in K values ";
        break;

        case 3 : 
        document.getElementById('err').textContent = " K values cannot be greater than 1000. Use M instead... ";
        break;

        default: ;
    }
    document.getElementById('err').style = "display: block;";
    amount = 0; val=0;
}

function disBal() {
    if ( balance[colour]< 1000 ) {document.getElementById("display").textContent = `${balance[colour]} K`;}
    else { document.getElementById("display").textContent = `${balance[colour] / 1000} M`; }
}

function setRed () {
    colour = 'red';
    document.getElementById('red').style = "border : 5px solid black;" ;
    
    document.getElementById('blue').style = "border : 5px none black;" ;
    document.getElementById('green').style = "border : 5px none black;" ;
    document.getElementById('yellow').style = "border : 5px none black;" ;
    document.getElementById('purple').style = "border : 5px none black;" ;
    document.getElementById('cyan').style = "border : 5px none black;" ;
    document.getElementById('brown').style = "border : 5px none black;" ;
    document.getElementById('orange').style = "border : 5px none black;" ;
    
    document.getElementById('colour').style = "background: red;";

    disBal();
}

function setBlue () {
    colour = 'blue';
    document.getElementById('blue').style = "border : 5px solid black;" ;

    document.getElementById('red').style = "border : 5px none black;" ;
    document.getElementById('green').style = "border : 5px none black;" ;
    document.getElementById('yellow').style = "border : 5px none black;" ;
    document.getElementById('purple').style = "border : 5px none black;" ;
    document.getElementById('cyan').style = "border : 5px none black;" ;
    document.getElementById('brown').style = "border : 5px none black;" ;
    document.getElementById('orange').style = "border : 5px none black;" ;
    
    document.getElementById('colour').style = "background: blue;";

    disBal();
}

function setGreen () {
    colour = 'green';
    document.getElementById('green').style = "border : 5px solid black;" ;

    document.getElementById('red').style = "border : 5px none black;" ;
    document.getElementById('blue').style = "border : 5px none black;" ;
    document.getElementById('yellow').style = "border : 5px none black;" ;
    document.getElementById('purple').style = "border : 5px none black;" ;
    document.getElementById('cyan').style = "border : 5px none black;" ;
    document.getElementById('brown').style = "border : 5px none black;" ;
    document.getElementById('orange').style = "border : 5px none black;" ;
    
    document.getElementById('colour').style = "background: green;";

    disBal();
}

function setYellow () {
    colour = 'yellow';
    document.getElementById('yellow').style = "border : 5px solid black;" ;

    document.getElementById('red').style = "border : 5px none black;" ;
    document.getElementById('blue').style = "border : 5px none black;" ;
    document.getElementById('green').style = "border : 5px none black;" ;
    document.getElementById('purple').style = "border : 5px none black;" ;
    document.getElementById('cyan').style = "border : 5px none black;" ;
    document.getElementById('brown').style = "border : 5px none black;" ;
    document.getElementById('orange').style = "border : 5px none black;" ;
    
    document.getElementById('colour').style = "background: yellow;";

    disBal();
}

function setOrange () {
    colour = 'orange';
    document.getElementById('orange').style = "border : 5px solid black"

    document.getElementById('red').style = "border : 5px none black;" ;
    document.getElementById('blue').style = "border : 5px none black;" ;
    document.getElementById('green').style = "border : 5px none black;" ;
    document.getElementById('yellow').style = "border : 5px none black;" ;
    document.getElementById('purple').style = "border : 5px none black;" ;
    document.getElementById('cyan').style = "border : 5px none black;" ;
    document.getElementById('brown').style = "border : 5px none black;" ;
    
    document.getElementById('colour').style = "background: orange;";

    disBal();
}

function setPurple () {
    colour = 'purple';
    document.getElementById('purple').style = "border : 5px solid black"

    document.getElementById('red').style = "border : 5px none black;" ;
    document.getElementById('blue').style = "border : 5px none black;" ;
    document.getElementById('green').style = "border : 5px none black;" ;
    document.getElementById('yellow').style = "border : 5px none black;" ;
    document.getElementById('orange').style = "border : 5px none black;" ;
    document.getElementById('cyan').style = "border : 5px none black;" ;
    document.getElementById('brown').style = "border : 5px none black;" ;
    
    document.getElementById('colour').style = "background: purple;";

    disBal();
}

function setBrown () {
    colour = 'brown';
    document.getElementById('brown').style = "border : 5px solid black"

    document.getElementById('red').style = "border : 5px none black;" ;
    document.getElementById('blue').style = "border : 5px none black;" ;
    document.getElementById('green').style = "border : 5px none black;" ;
    document.getElementById('yellow').style = "border : 5px none black;" ;
    document.getElementById('purple').style = "border : 5px none black;" ;
    document.getElementById('cyan').style = "border : 5px none black;" ;
    document.getElementById('orange').style = "border : 5px none black;" ;
    
    document.getElementById('colour').style = "background: brown;";

    disBal();
}

function setCyan () {
    colour = 'cyan';
    document.getElementById('cyan').style = "border : 5px solid black"

    document.getElementById('red').style = "border : 5px none black;" ;
    document.getElementById('blue').style = "border : 5px none black;" ;
    document.getElementById('green').style = "border : 5px none black;" ;
    document.getElementById('yellow').style = "border : 5px none black;" ;
    document.getElementById('purple').style = "border : 5px none black;" ;
    document.getElementById('orange').style = "border : 5px none black;" ;
    document.getElementById('brown').style = "border : 5px none black;" ;
    
    document.getElementById('colour').style = "background: cyan;";

    disBal();
}

function addDigit(n) {
    if (dot == false) {
    val = val*10 + n;
    document.getElementById("display").textContent = val;
    }
    else { i++;
        if (i<4) {
            val = val + n/Math.pow(10,i); 
            document.getElementById("display").textContent = val;
        }
        else { err(0); i=0; }
    }
}

function decimal () {
    dot = true;
    document.getElementById("display").textContent = `${val}.` ;
}

function C () {
    val = 0;
    dot = false;
    disBal();
}

function K_M (km) {
    i=0;
    amount = val;
    if (km =='m') {
        if (amount >= 25) err(1);
        else {
        document.getElementById("display").textContent = `${amount} M`;
        amount*=1000; 
        }
    }
    if (km == 'k') {
        if (dot == true) { err(2); } 
        else if (amount >= 1000) { err(3); } 
        else {document.getElementById("display").textContent = `${amount} K`;        }
    }
    val = 0;
}

function payBank () {
    if (amount!=0) {
    balance[colour] -= amount; amount = 0; dot = false;
    cashOut.play();
    disBal();
    }
}

function collect () {
    if (amount == 0) {
        if (X != 0) { balance[colour] += X; X = 0; 
            cashIn.play();
            disBal();
        }
    }
    else {    balance[colour] += amount; amount = 0; dot = false;
        cashIn.play();
        disBal();
    }
    
}

function pay () {
    if (amount != 0) {
    X += amount;
    balance[colour] -= amount;
    amount = 0;
    dot = false;
    cashOut.play();
    }
    disBal();
}

function GO () {
    balance[colour] += 2000;
    cashIn.play();
    disBal();
}

function dropList () { 
    if (!nav) {
        document.getElementById('players').style = " display: block; width: 8cm; height: 93%; z-index: 1;";
        document.getElementById('calc').style = "display : none;";
        nav = true;
    }
    else {
        document.getElementById('players').style = " display: none;"; nav = false;
        document.getElementById('calc').style = "display: block;";
    }
}

// Default 
console.log(`Default 
Red : ${balance.red}
Blue : ${balance.blue}
Green : ${balance.green}
Yellow : ${balance.yellow}`);

// Reading KeyPresses
document.addEventListener("keyup", (event) => {
    document.getElementById("err").style = "display: none;";

    let K = event.key;
    console.log(K);
    if (/[0-9]/.test(K) ) addDigit( parseInt(K) ); 
    if (K == ".") decimal();
    if (/[km]/.test(K) )  K_M(K);
    if (/[rgbyoplw]/.test(K)) {
        switch (K) {
            case 'r' :
                setRed();
                break;

            case 'g' :
                setGreen();
                break;

            case 'b' :
                setBlue();
                break;

            case 'y' :
                setYellow();
                break;

            case 'o' :
                setOrange();
                break;

            case 'p' :
                setPurple();
                break;

            case 'w' :
                setBrown();
                break;

            case 'l' :
                setCyan();
                break;

            default : ;
        }
    }
    if (K == "=" || K=='+') collect();
    if (K == "-") payBank();
    if (K == "Enter") pay();
    if (K == "Backspace" || K=="c") C();

});

// Storing away data before reload
window.addEventListener("beforeunload", () => {
    localStorage.setItem("balance", JSON.stringify(balance) );
} );

// Loading previous balance if present
document.addEventListener("DOMContentLoaded", ()=> {
    balanceStr = localStorage.getItem("balance");
    
    // if found in localStorage then parse the stored json
    if (balanceStr != null) {
        balance = JSON.parse(balanceStr);
    }
    // else leave as is.

});
