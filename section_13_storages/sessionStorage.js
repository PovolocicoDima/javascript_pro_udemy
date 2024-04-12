const form = document.querySelector('#checkoutForm')

form.addEventListener('input', (e) => {
    const { name, value } = e.target
    const formData = JSON.parse(sessionStorage.getItem('formData')) ?? {}
    formData[name] = value

    sessionStorage.setItem('formData', JSON.stringify(formData))
})

const populateForm = () => {
    const formData = JSON.parse(sessionStorage.getItem('formData')) ?? {}
    for (let field in formData) {
        formData[field].value = formData[field]
    }
}

populateForm()
