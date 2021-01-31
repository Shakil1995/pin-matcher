console.log("js file ");


function getPin(){
    const random=Math.random()*10000;
    const pin=(random+'').split('.')[0];
    if(pin.length === 4){
        return pin;
    }else{
        // console.log("short pin :",pin);
        return getPin();
    }
}


//disply generate pin
 function generatePin(){
    const pinInput=document.getElementById('generateInputID');
    pinInput.value=getPin();
}


//handler calculator button
const buttonContainer=document.getElementById('digit-container');
buttonContainer.addEventListener('click',function(event){
// console.log(event.target.innerText);
const digit=event.target.innerText;
if(isNaN(digit)){
    //HANDLE BACK & C
    if(digit==='C'){
        const typedInput=document.getElementById('type-pin');
    typedInput.value='';
    }
}else{
    // console.log(digit);
    const typedInput=document.getElementById('type-pin');
    typedInput.value=typedInput.value + digit;
}
})


function verifyPin(){
    const pin=document.getElementById('generateInputID').value;
    const typed=document.getElementById('type-pin').value;
    if(pin===typed){
        //success
        // const correct=document.getElementById('correct-pin');
        // correct.style.display='block';
        // const incorrect=document.getElementById('incorrect-pin');
        // incorrect.style.display='none';

        displayMatchResult('block','none');

        
    }else{
            //wrong
        // const incorrect=document.getElementById('incorrect-pin');
        // incorrect.style.display='block';
        // const correct=document.getElementById('correct-pin');
        // correct.style.display='none';

        displayMatchResult('none','block');
    
    }
    // const correct=document.getElementById('type-pin')."";
}

function displayMatchResult(correctStatus,inCorrectStatus ){

    const correct=document.getElementById('correct-pin');
    correct.style.display=correctStatus;
    const incorrect=document.getElementById('incorrect-pin');
    incorrect.style.display=inCorrectStatus;
}




