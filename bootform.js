//FETCHING ELEMENTS
const button=document.getElementById('button')
// console.log("kkkkkkkkk");
const userName=document.getElementById('userName')
const password=document.getElementById('password')
const email=document.getElementById('email')
const phone=document.getElementById('phone')

const gender=document.getElementById('gender')
const gender1=document.getElementById('gender1')

const sub1=document.getElementById('sub1')
const sub2=document.getElementById('sub2')
const sub3=document.getElementById('sub3')

// ADDING EVENT & Calling function()
button.addEventListener('click',(e)=>{
    e.preventDefault();  //to prevent form display effects
    checkInputs();

});


function checkInputs(){
    //FETCH VALUES
    const userNameValue=userName.value;
    const passwordValue=password.value
    const emailValue=email.value
    const phoneValue=phone.value
    const genderValue=gender.checked
    const genderValue1=gender1.checked

    const subValue1 = sub1.checked
    const subValue2 = sub2.checked
    const subValue3 = sub3.checked

    localStorage.setItem("user",userNameValue);
    localStorage.setItem("password",passwordValue)
    localStorage.setItem("email",emailValue)
    localStorage.setItem("phone",phoneValue) 
    localStorage.setItem("gender",genderValue)
    localStorage.setItem("gender1",genderValue1)


    //if condition : show error
    //else cond : add error class & add  success class

    let name=/^[A-Za-z]+$/
    if (userNameValue===''){
        showError(userName, 'User name can not b blank');
    }else if (!name.test(userNameValue)){
        showError(userName,'enter valid name')
    }
     else {
        showSuccess(userName);
    }

    let pswrd=/^[A-Za-z][\w \@#$%&*_]{7}$/

    if (passwordValue===''){
        showError(password, 'Password can not b blank');
    } else if(!pswrd.test(passwordValue)){
        showError(password,'invalid password')
    }
    else {
        
        showSuccess(password);
    }

    // regular expression
    let  reg=/^([\w\.-]+)@([\w\-_]+).([a-z]){2,3}((.[a-z]{2})?)$/

    if (emailValue===''){
        showError(email, 'email can not b blank');
    } else if(!reg.test(emailValue)){
        showError(email,'enter valid email')
    }
    else{
        showSuccess(email);
    }

    let phn=/^[6-9]\d{9}$/  //regEx==phn    phn.test(phoneVal)=valid

    if (phoneValue===''){
        showError(phone, 'phone number can not b blank');
    } else if (!phn.test(phoneValue)) {
        showError(phone,'invalid number')
    }
    else {
        showSuccess(phone);
    }

    if (genderValue===false && genderValue1===false ){
        const errorMsg=document.getElementById('genderError')
        errorMsg.innerText='please select'
        errorMsg.style.color='red'
        errorMsg.style.fontSize='13px'
        errorMsg.style.display='block'
    } else{
        const errorMsg=document.getElementById('genderError')
        errorMsg.style.display='none'
    }

    if(subValue1||subValue2||subValue3){
        const errorMsg=document.getElementById('suberror')
        errorMsg.style.display='none'
    }else{
        const errorMsg=document.getElementById('suberror')
        errorMsg.innerText='please select'
        errorMsg.style.color='red'
        errorMsg.style.fontSize='13px'
        errorMsg.style.display='block'
    }
 
}


function showError(element,message){
    const mainDiv=element.parentElement;
    const errorMsg=mainDiv.querySelector('span');
    errorMsg.style.color="red"

    //show error
    errorMsg.innerText=message;

    //add error class
    mainDiv.classList='form error';
}

function showSuccess(element){
    const mainDiv=element.parentElement;
    
    //add success class
    mainDiv.className='form success'
}