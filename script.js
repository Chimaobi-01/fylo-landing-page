const email0 = document.getElementById('email0')
const form0 = document.getElementById('form0')
const error0 = document.getElementById('error0')
const email1 = document.getElementById('email1')
const form1 = document.getElementById('form1')
const error1 = document.getElementById('error1')

const isValidEmail = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;;\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email.toLowerCase()))
}



form0.addEventListener('submit', e => {
    e.preventDefault()
    const emailValue = email0.value.trim()
    if (!isValidEmail(emailValue)) {
        error0.classList.remove('hidden')
        email0.style.borderColor = '#f87171'
        form0.style.gap = '.8rem'
    } else {
        error0.classList.add('hidden')
        email0.style.borderColor = 'gray'
        form0.style.gap = '1rem'
    }
})


form1.addEventListener('submit', e => {
    e.preventDefault()

    const emailValue = email1.value.trim()
    if (!isValidEmail(emailValue)) {
        error1.classList.remove('hidden')
        email1.style.borderColor = '#f87171'

    } else {
        error1.classList.add('hidden')
        email1.style.borderColor = 'gray'
    }
})

