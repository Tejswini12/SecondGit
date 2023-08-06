var Name=document.getElementById('name');
var email=document.getElementById('email');
var subm=document.getElementById('btn');
subm.addEventListener('submit',localFunc);
 function localFunc(e){
    e.preventDefault();
    localStorage.setItem('Name',Name);
    localStorage.setItem('Email',email);
 }
