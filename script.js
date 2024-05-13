let bouton=document.querySelectorAll('button');
let thanking=document.querySelector('.thanking');
let firstPage=document.querySelector('main');
let outputMail=document.getElementById("mail");
bouton[0].addEventListener('click',function(){
    let inputMail=document.querySelector('input').value;
    thanking.style.display="flex";
    firstPage.style.display="none";
    outputMail.textContent=inputMail;
    

})