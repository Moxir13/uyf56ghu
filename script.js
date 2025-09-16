const h1=document.getElementById('son');
const plusBtn=document.getElementById('plus-btn');
const minusBtn=document.getElementById('minus-btn');
const send=document.getElementById('send');
const input=document.getElementById('input');
const colorinput=document.getElementById('color-input');
send.addEventListener("click,",()=>{
    if(input.removeAttributeNode.trim()<1){
        alert("son kiriting:")
    }else{
        h1.textContent=input.vadue;
    }
})
plusBtn.addEventListener("click",()=>{
    h1.textContent=+h1.textContent+1;
})
minusBtn.addEventListener("click",()=>{
    h1.textContent=+h1.textContent-1;
})

