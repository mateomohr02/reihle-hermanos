const validate = (data) => {
    let errors = {}

    if (!data.contact || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(data.contact)) {
        errors.contact = 'Por favor ingrese un email de contacto válido'
    }

    if (!data.message) {
        errors.message = 'Por favor ingrese un mensaje con su consulta'
    }

    return errors; 
}

export default validate