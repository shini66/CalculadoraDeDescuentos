
let error = false;

function alertValidate($title, $text, $icon) {
    Swal.fire({
        title: $title,
        text: $text,
        icon: $icon
    });
}

function modalConfig(){
    Swal.fire({
        title: "Limite de descuento",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cerrar",
        reverseButtons: true,
        buttonsStyling: false,
        customClass: {
            cancelButton: 'px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-white active:scale-95 transition ease-in-out rounded inline-flex items-center justify-center mx-2',
            confirmButton: 'px-4 py-2 bg-green-200 text-green-700 hover:bg-green-400 hover:text-white active:scale-95 transition ease-in-out rounded inline-flex items-center justify-center mx-2'
        },
        inputValidator: (value) => {
            if (!value) return 'Debe de ingresar un valor.';
            if (value < 0 || value > 100) {
                return 'Por favor, ingresa un porcentaje válido (0-100).';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const discountLimit = result.value;
            localStorage.setItem('discountLimit', discountLimit);
        }
    });
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice.toFixed(2);
}

function clearFields() {
    document.getElementById('originalPrice').value = '';
    document.getElementById('originalPriceError').textContent = '';
    document.getElementById('discountPercentage').value = '';
    document.getElementById('discountPercentageError').textContent = '';
    document.getElementById('result').textContent = '';
    document.getElementById("calculate").disabled = false;
    error = false;
}