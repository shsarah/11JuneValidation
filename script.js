let button=document.getElementById("bnt");


function login(){
    let email="admin@gmail.com";
    let pass="12345";
    let emailVal=document.getElementById("mail_input");
    let passVal=document.getElementById("psw_inpt");
    let result=document.getElementById("result");
    if(email===emailVal.value&&pass===passVal.value){
        result.innerHTML=`<p style="color:green; font-weight:bold">Succesful!</p>`
    }
    else{
        result.innerHTML=`<p style="color:red; font-weight:bold">Failure!</p>`
    }
}