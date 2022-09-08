
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})
const firstname = document.getElementById('first-name')
const lastname = document.getElementById('last-name')
const email = document.getElementById('email')
const usernumber = document.getElementById('user-number')
const pwdOne = document.getElementById('pwd')
const pwdTwo = document.getElementById('conpwd')

function checkInputs() {
    const firstnameValue = firstname.value.trim()
    const lastnameValue = lastname.value.trim()
    const emailValue = email.value.trim()
    const usernumberValue = usernumber.value.trim()
    const pwdOneValue = pwdOne.value.trim()
    const pwdTwoValue = pwdTwo.value.trim()


    // check if empty
    inputs = [firstname, lastname, email, usernumber, pwdOne, pwdTwo]
    inputs.forEach(element => {
        if (element.value.trim() === ''){
            setError(element, 'Cannot be empty')
            console.error(`${element.id} is empty`)
        }
    });

    if (!isemail(emailValue) && emailValue !== ''){
        setError(email, 'Use a valid email adress')

    } else {
        return
    }

}

function isemail(email) {
    if(email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)){
        return true
    } else return false
}

function setError(input, message) {
    const formElement = input.parentElement;
    const small = formElement.querySelector('small')
    
    small.innerText = message
    formElement.className = 'form-element error'
}