input=document.getElementById('input');
clear=document.getElementById('clear');
backspace=document.getElementById('backspace');
open_bracket=document.getElementById('open-bracket');
closed_bracket=document.getElementById('closed-bracket');
divide=document.getElementById('divide');
one=document.getElementById('one');
two=document.getElementById('two');
three=document.getElementById('three');
multiply=document.getElementById('multiply');
four=document.getElementById('four');
five=document.getElementById('five');
six=document.getElementById('six');
subtract=document.getElementById('subtract');
seven=document.getElementById('seven');
eight=document.getElementById('eight');
nine=document.getElementById('nine');
add=document.getElementById('add');
zero=document.getElementById('zero');
decimal=document.getElementById('decimal');
equal=document.getElementById('equal');

clear.onclick=function () {
    input.value="";
}

backspace.onclick=function () {
    if (input.value==='Error')
        input.value="";
    let length=input.value.length-1
    input.value=input.value.substring(0,length);
}

open_bracket.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='(';
    else
        input.value=input.value+'(';
}

closed_bracket.onclick=function () {
    if (input.value.toString()==='Error')
        input.value=')';
    else
        input.value=input.value+")";
}

divide.onclick=function (){
    if (input.value.toString()==='Error')
        input.value='/';
    else
        input.value=input.value+"/";
}
one.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='1';
    else
        input.value=input.value+"1";
}

two.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='2';
    else
        input.value=input.value+"2";
}

three.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='3';
    else
        input.value=input.value+"3";
}

multiply.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='*';
    else
        input.value=input.value+"*";
}

four.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='4';
    else
        input.value=input.value+"4";
}

five.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='5';
    else
        input.value=input.value+"5";
}

six.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='6';
    else
        input.value=input.value+"6";
}

subtract.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='-';
    else
        input.value=input.value+"-";
}

seven.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='7';
    else
        input.value=input.value+"7";
}

eight.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='8';
    else
        input.value=input.value+"8";
}

nine.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='9';
    else
        input.value=input.value+"9";
}

add.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='+';
    else
        input.value=input.value+"+";
}

zero.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='0';
    else
        input.value=input.value+"0";
}

decimal.onclick=function () {
    if (input.value.toString()==='Error')
        input.value='.';
    else
        input.value=input.value+".";
}

equal.onclick=function () {
    if (input.value.toString().trim()==='Error')
    {
        input.value='';
    }
    if (input.value.toString().trim()!=='')
    {
        try {
            let answer=(eval(input.value));
            if (answer%1!==0) {
                answer=answer.toFixed(3);
            }
            input.value=answer;
        }
        catch (e) {
            input.value='Error';
        }
    }
}
// smal change
