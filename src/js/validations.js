document.getElementById('discountPercentage').addEventListener('input', function() {
    const discountInput = this.value;
    const discountValue = parseFloat(discountInput);
    const errorMessageElement = document.getElementById('discountPercentageError');
    const discountLimit = parseFloat(localStorage.getItem('discountLimit')) || 100;

    if (discountValue < 0 || discountValue > discountLimit || isNaN(discountValue)) {
        errorMessageElement.textContent = `Porcentaje inválido (0-${discountLimit}).`;
        document.getElementById("calculate").disabled = true;
        error = true;
    } else {
        errorMessageElement.textContent = '';
        document.getElementById("calculate").disabled = false;
        error = false;
    }
});

document.getElementById('calculate').addEventListener('click', () => {
    const originalPriceInput = parseFloat(document.getElementById('originalPrice').value);
    const discountPercentageInput = parseFloat(document.getElementById('discountPercentage').value);

    if(isNaN(originalPriceInput) || originalPriceInput <= 0) {
        alertValidate('Error', 'Por favor, ingresa un precio válido.', 'error');
        return;
    }

    if(isNaN(discountPercentageInput) || discountPercentageInput < 0 || discountPercentageInput > (parseFloat(localStorage.getItem('discountLimit')) || 100)) {
        alertValidate('Error', `Por favor, ingresa un porcentaje de descuento válido (0-${parseFloat(localStorage.getItem('discountLimit')) || 100}).`, 'error');
        return;
    }

    const resultElement = document.getElementById('result');
    if (error) {
        alertValidate('Error', 'Por favor, corrige los errores antes de calcular.', 'error');
    } else {
        const discountedPrice = calculateDiscountedPrice(originalPriceInput, discountPercentageInput);
        resultElement.textContent = `Precio con descuento: $${discountedPrice}`;
    }
});

document.getElementById('clear').addEventListener('click', () => {
    clearFields();
});

document.getElementById('config').addEventListener('click', () => {
    modalConfig();
});