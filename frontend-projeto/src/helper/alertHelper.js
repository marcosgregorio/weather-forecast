
const alert = (title = 'Error!', text = 'Aconteceu algum erro inesperado!', icon = 'error') => {
    const Swal = require('sweetalert2')
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: 'Tentar novamente'
    })
}

export default alert