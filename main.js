let inputWidth = document.querySelector(".wid");
let inputHeight = document.querySelector(".height");
let inputColor = document.querySelector(".col");
let inputRadius = document.querySelector(".input__rad");
let btnCreate = document.querySelector(".abob");
let inputContainer = document.querySelector(".seconly");
let btnUp = document.querySelector(".abob1");
let btnDown = document.querySelector(".abob2");
let btnLeft = document.querySelector(".abob3");
let btnRight = document.querySelector(".abob4");
let btnClear = document.querySelector(".abob5");

let newDiv;
let mTop = 0;
let mLeft = 0;
let iwValue;
let ihValue;
let icValue;
let isRadius;
let isDiv = false;


const createDiv = () =>{
    if(!isDiv) {
         iwValue = inputWidth.value
         ihValue = inputHeight.value
         icValue = inputColor.value
         isRadius = inputRadius.checked
        console.log(1)
         if (iwValue >= 50 && ihValue >= 50 && iwValue <=500 && ihValue <= 500){
             newDiv = document.createElement('div')
             newDiv.style.width = iwValue + 'px'
             newDiv.style.height = ihValue + 'px'
             newDiv.style.backgroundColor = icValue
            console.log(2);
             if (isRadius) {
                 newDiv.style.borderRadius = iwValue/2 + 'px'
                 console.log(3);
             }

             inputContainer.prepend(newDiv)
             inputHeight.setAttribute('readonly', 1)
             inputWidth.setAttribute('readonly', 1)
             isDiv = true

         }

    }
}

const clearDiv = () =>{
    inputContainer.firstChild.remove()
    isDiv = false
    inputHeight.removeAttribute('readonly', 1)
     inputWidth.removeAttribute('readonly', 1)
}

btnCreate.addEventListener('click', createDiv)
btnClear.addEventListener('click', clearDiv)


const blockUp = ( ) =>{
    if(mTop-10 >= 0){
        mTop -= 10
        newDiv.style.marginTop = mTop + 'px'

    }
}

const blockDown = ( ) =>{
    if(500 -  (mTop*1 + ihValue*1 + 10) >=0){
        mTop += 10
        newDiv.style.marginTop = mTop + 'px'

    }
}

const blockLeft = ( ) =>{
    if(mLeft-10 >= 0){
        mLeft -= 10
        newDiv.style.marginLeft = mLeft + 'px'

    }
}

const blockRight = ( ) =>{
    if(500 -  (mLeft*1 + iwValue*1 + 10) >=0){
        mLeft += 10
        newDiv.style.marginLeft = mLeft + 'px'

    }
}

btnUp.addEventListener('click', blockUp)
btnDown.addEventListener('click', blockDown)
btnLeft.addEventListener('click', blockLeft)
btnRight.addEventListener('click', blockRight)
