const button = document.getElementById("subm")

button.addEventListener("click", (e) => {
    e.preventDefault()
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value

    let gender = document.getElementById("gender").checked;
    let gender1 = document.getElementById("gender1").checked;

    let valisuse = validuserName(username)
    let validspass = validatePassword(password)

    // let validGen = validGender(gender)
    // let validGen1 = validGender(gender1)

    let gen=validateAge(gender,gender1)

if(gender==false & gender1==false){
    let genderError=document.getElementById("genderError")
    genderError.innerText="" 
    return true
}else{
    genderError.innerText="please select gender" 
    genderError.style.color="red"
    
return true
} 
})


function validuserName(username) {
    let nameError = document.getElementById("nameerr")
    let namereg = /^[A-Za-z]+$/
    if (namereg.test(username)) {
        nameError.innerText = ""
        return true
    } else {
        nameError.innerText = "invalid user name"
        nameError.style.color = 'red' 
        return false
    }
}

function validatePassword(password) {
    let passwordError = document.getElementById("passerr")
    if (password) {
        passwordError.innerText = ""
        return true
    } else {
        passwordError.innerText = "invalid password"
        passwordError.style.color = "red"
        return true
    }
}

// function validGender(gender,gender1){
//     let genderError=document.getElementById("genderError")
//     if(gender){
//         genderError.innerText=""
//         console.log( gender);
//         return true
//     }
//     else{
//         genderError.innerText="please select gender"
//         genderError.style.color="red"
//         console.log( gender);
//         return false
//     }
// }

 