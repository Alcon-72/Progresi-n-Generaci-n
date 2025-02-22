// Validacion del usuario

document.getElementById('email').addEventListener('input', function() {
    if (!validateEmail(this.value)) {
        this.setCustomValidity('Correo no válido.');
    } else {
        this.setCustomValidity('');
    }
});

document.getElementById('password').addEventListener('input', function() {
    if (!validatePassword(this.value)) {
        this.setCustomValidity('Contraseña debe tener al menos 6 caracteres.');
    } else {
        this.setCustomValidity('');
    }
});

// Modal para la confirmación

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Password:', password);

    if (validateEmail(email) && validatePassword(password)) {
        console.log('Formulario válido');
        document.getElementById('confirmationModal').style.display = 'block';
        console.log('Modal abierto');
    } else {
        alert('Por favor, introduce un correo y una contraseña válidos.');
    }
});

document.getElementById('closeConfirmationModal').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
    console.log('Modal cerrado');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6;
}

document.getElementById('boton').addEventListener('click', function() {
    window.location.href = 'index.html';
});
