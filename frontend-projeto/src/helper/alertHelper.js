
const alert = (title = 'Error!', text = 'Aconteceu algum erro inesperado!', icon = 'error', confirmButtonText = 'Tentar novamente') => {
    const Swal = require('sweetalert2')
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmButtonText
    })
}

export default alert