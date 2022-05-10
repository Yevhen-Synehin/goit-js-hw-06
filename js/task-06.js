const validatorRef = document.querySelector('#validation-input');

validatorRef.addEventListener("blur", (event) => {
    const symbolsQuantity = event.currentTarget.value;

    if (symbolsQuantity.length === Number(validatorRef.dataset.length)) {
        validatorRef.classList.remove("invalid");
        validatorRef.classList.add("valid");
    } else {
        validatorRef.classList.remove("valid");
        validatorRef.classList.add("invalid");
    }
})