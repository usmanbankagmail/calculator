var userInputBoxElement = document.getElementById('userInputBox');

function buttonPressed(buttonPressedValue){
    var inputtedValue = userInputBoxElement.value;
    if(buttonPressedValue === '='){
        var result = eval(inputtedValue);
        userInputBoxElement.value = userInputBoxElement.value + " = " + result;
        return ;
    }
     if(buttonPressedValue === 'd'){
        userInputBoxElement.value = userInputBoxElement.value.slice(0,inputtedValue.length-1 )
        return;
    }
     if(buttonPressedValue === 'c'){
        userInputBoxElement.value = ''
        return;
    }
    if(buttonPressedValue === 'x2'){
        userInputBoxElement.value = Math.pow(inputtedValue, 2)
        return;
    }
    userInputBoxElement.value += buttonPressedValue;

}