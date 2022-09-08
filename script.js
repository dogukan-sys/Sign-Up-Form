let dontSubmit = false
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    if (dontSubmit) {
        e.preventDefault()
    }
})

form.addEventListener('input', (e) => {
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

    // check if empty for all fields
    inputs = [firstname, lastname, email, usernumber, pwdOne, pwdTwo]
    inputs.forEach(element => {
        if (element.value.trim() === ''){
            setError(element, 'Cannot be empty')
        } 
    })

    // check validity
    if (!isname(firstnameValue) && firstnameValue !== '') {
        setError(firstname, 'Only use letters from A-Z')
    }   else if (isname(firstnameValue) && firstnameValue !== ''){
        setSuccess(firstname)
    }

    if (!isname(lastnameValue) && lastnameValue !== '') {
        setError(lastnameValue, 'Only use letters from A-Z')
    } else if (isname(lastnameValue) && lastnameValue !== '') {
        setSuccess(lastname)
    }

    if (!isemail(emailValue) && emailValue !== ''){
        setError(email, 'Use a valid email adress')
    } else if (isemail(emailValue) && emailValue !== '') {
        setSuccess(email)
    }

    if (!isphone(usernumberValue) && usernumberValue !== '') {
        setError(usernumber, 'Use a valid phone number')
    } else if (isphone(usernumberValue) && usernumberValue !== '') {
        setSuccess(usernumber)
    }

    if(!ispwd(pwdOneValue) && pwdOneValue !== '') {
        setError(pwdOne, 'Password must contain:\n1 number (0-9)\n1 uppercase letter\n1 lowercase letter\n1 special character')
    } else if (ispwd(pwdOneValue) && pwdOneValue !== '') {
        setSuccess(pwdOne)
    }

    if (pwdOneValue !== pwdTwoValue && pwdTwoValue !== '') {
        setError(pwdTwo, 'Passwords must match')
    } else if (pwdOneValue === pwdTwoValue && pwdTwoValue !== '') {
        setSuccess(pwdTwo)
    }
    // check if everything is corret for preventDefault
    inputs.forEach(element => {
        const formElement = element.parentElement
        if (formElement.className === 'form-element error') {
            dontSubmit = true
            return
        }
        dontSubmit = false
    });

}

// validity functions
function isname(name) {
    re = /[A-Za-z]+/gi
    return name.match(re)
}

function ispwd(pwd) {
    const re = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm
    return pwd.match(re)
}

function isphone(phone) {
    const re = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g
    return phone.match(re)
}

function isemail(email) {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    return email.match(re)
}

function setError(input, message) {
    const formElement = input.parentElement
    const small = formElement.querySelector('small')
    
    small.innerText = message
    formElement.className = 'form-element error'
}
function setSuccess(input) {
    const formElement = input.parentElement
    const small = formElement.querySelector('small')

    small.innerText = ''
    formElement.className = 'form-element success'
}